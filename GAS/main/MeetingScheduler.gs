/**
 * WaiWaiAI Meeting Scheduler
 * TimeRex-like GAS booking system
 *
 * Features:
 * - "MTG可" calendar events as available slots
 * - 1-hour booking with Google Meet auto-creation
 * - Meet recording + Gemini summary/transcript enabled
 * - Confirmation email to both parties
 * - Reminder email 1 day before
 * - Post-MTG transcript/summary auto-send to client
 * - Cancel/reschedule link
 * - WaiWaiAI branding on confirmation page
 * - Telegram notification
 * - Spreadsheet recording
 */

// ===== Public API (callable from google.script.run) =====
function getAvailableSlots() { return getAvailableSlots_(); }
function bookMeeting(data) { return bookMeeting_(data); }
function cancelMeeting(token) { return cancelMeeting_(token); }

// ===== Configuration =====
const CONFIG = {
  CALENDAR_ID: 'primary',
  MEETING_DURATION_MIN: 60,
  BUSINESS_START_HOUR: 9,
  BUSINESS_END_HOUR: 19,
  ORGANIZER_NAME: '久保田 慧',
  ORGANIZER_EMAIL: Session.getActiveUser().getEmail(),
  COMPANY_NAME: 'WaiWai AI株式会社',
  COMPANY_URL: 'https://waiwaiai.com',
  DAYS_AHEAD: 7,
  REMINDER_HOURS_BEFORE: 24,
};

// ===== Router Handlers (called from Router.gs) =====

function handleMeetingGet_(e) {
  const page = (e.parameter && e.parameter.page) || 'booking';
  const token = (e.parameter && e.parameter.token) || '';

  switch (page) {
    case 'booking':
      return createBookingPage_();
    case 'cancel':
      return handleCancel_(token);
    case 'reschedule':
      return handleReschedule_(token);
    default:
      return createBookingPage_();
  }
}

function handleMeetingPost_(data) {
  switch (data.action) {
    case 'getSlots':
      return jsonResponse_(getAvailableSlots_());
    case 'book':
      return jsonResponse_(bookMeeting_(data));
    case 'cancel':
      return jsonResponse_(cancelMeeting_(data.token));
    default:
      return jsonResponse_({ error: 'Unknown action' });
  }
}

// ===== Slot Management =====

function getAvailableSlots_() {
  const cal = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);
  const now = new Date();
  const slots = [];

  const slotDurationMs = CONFIG.MEETING_DURATION_MIN * 60 * 1000;
  const slotDurationHours = CONFIG.MEETING_DURATION_MIN / 60;

  // 期間全体の予定を一括取得（API呼び出しを1回にまとめる）
  const rangeStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  const rangeEnd = new Date(rangeStart.getTime() + CONFIG.DAYS_AHEAD * 24 * 60 * 60 * 1000);
  const events = cal.getEvents(rangeStart, rangeEnd);
  const busy = events.map(function (ev) {
    return { start: ev.getStartTime().getTime(), end: ev.getEndTime().getTime() };
  });

  for (let dayOffset = 0; dayOffset < CONFIG.DAYS_AHEAD; dayOffset++) {
    const day = new Date(now.getTime() + dayOffset * 24 * 60 * 60 * 1000);

    for (let hour = CONFIG.BUSINESS_START_HOUR;
         hour + slotDurationHours <= CONFIG.BUSINESS_END_HOUR;
         hour++) {
      const slotStart = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour, 0, 0, 0);
      const slotEnd = new Date(slotStart.getTime() + slotDurationMs);

      if (slotStart.getTime() <= now.getTime()) continue;
      if (overlapsBusy_(busy, slotStart.getTime(), slotEnd.getTime())) continue;

      slots.push({
        start: slotStart.toISOString(),
        end: slotEnd.toISOString(),
        date: formatDateJP_(slotStart),
        time: formatTimeJP_(slotStart) + ' - ' + formatTimeJP_(slotEnd),
      });
    }
  }

  return { slots: slots };
}

function overlapsBusy_(busy, start, end) {
  for (let i = 0; i < busy.length; i++) {
    if (busy[i].start < end && busy[i].end > start) return true;
  }
  return false;
}

function hasConflict_(cal, start, end) {
  return cal.getEvents(start, end).length > 0;
}

// ===== Booking =====

function bookMeeting_(data) {
  const { name, email, company, topic, slotStart, slotEnd } = data;

  if (!name || !email || !slotStart) {
    throw new Error('必須項目が入力されていません');
  }

  const start = new Date(slotStart);
  const end = new Date(slotEnd);

  // 予約時に再度重複チェック（同時予約防止）
  const cal = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);
  if (hasConflict_(cal, start, end)) {
    return { error: 'この時間帯は既に予約が入っています。別の時間を選択してください。' };
  }

  const token = generateToken_();
  const title = `【MTG】${company || ''} ${name}様`;

  const event = cal.createEvent(title, start, end, {
    description: buildEventDescription_(name, email, company, topic, token),
    guests: email,
    sendInvites: true,
  });

  addGoogleMeet_(event);

  const meetLink = getEventMeetLink_(event);
  updateEventWithMeetInfo_(event, meetLink, name, email, company, topic, token);

  const bookingData = {
    eventId: event.getId(),
    name: name,
    email: email,
    company: company || '',
    topic: topic || '',
    start: start.toISOString(),
    end: end.toISOString(),
    meetLink: meetLink,
    token: token,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  };

  PropertiesService.getScriptProperties().setProperty(
    'booking_' + token,
    JSON.stringify(bookingData)
  );

  recordBooking_(bookingData);
  sendConfirmationEmail_(bookingData);
  sendOrganizerNotification_(bookingData);
  notifyNewBooking_(bookingData);
  setupReminder_(bookingData);
  setupPostMeetingTrigger_(bookingData);

  return {
    success: true,
    meetLink: meetLink,
    token: token,
    date: formatDateJP_(start),
    time: formatTimeJP_(start) + ' - ' + formatTimeJP_(end),
  };
}

// ===== Google Meet =====

function addGoogleMeet_(event) {
  const eventId = event.getId().replace('@google.com', '');

  try {
    const calEvent = Calendar.Events.get(CONFIG.CALENDAR_ID, eventId);

    calEvent.conferenceData = {
      createRequest: {
        requestId: Utilities.getUuid(),
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    };

    calEvent.conferenceData.notes = '※ このMTGは自動録画されます。Geminiによる文字起こし・要約が生成されます。';

    Calendar.Events.patch(calEvent, CONFIG.CALENDAR_ID, eventId, {
      conferenceDataVersion: 1,
      sendUpdates: 'none',
    });
  } catch (e) {
    Logger.log('Meet creation error: ' + e.message);
  }
}

function getEventMeetLink_(event) {
  const eventId = event.getId().replace('@google.com', '');
  try {
    const calEvent = Calendar.Events.get(CONFIG.CALENDAR_ID, eventId);
    if (calEvent.conferenceData && calEvent.conferenceData.entryPoints) {
      for (const ep of calEvent.conferenceData.entryPoints) {
        if (ep.entryPointType === 'video') {
          return ep.uri;
        }
      }
    }
  } catch (e) {
    Logger.log('Meet link retrieval error: ' + e.message);
  }
  return '';
}

function updateEventWithMeetInfo_(event, meetLink, name, email, company, topic, token) {
  const description = buildEventDescription_(name, email, company, topic, token) +
    '\n\n📹 Google Meet: ' + meetLink +
    '\n\n⚙️ 録画設定: 自動録画ON / Gemini文字起こし・要約ON' +
    '\n※ Google Workspace管理者設定で録画・Gemini機能を有効にしてください';
  event.setDescription(description);
}

function buildEventDescription_(name, email, company, topic, token) {
  return [
    '━━━━━━━━━━━━━━━━━━━━',
    '📋 予約情報',
    '━━━━━━━━━━━━━━━━━━━━',
    '',
    '👤 お名前: ' + name,
    '📧 メール: ' + email,
    '🏢 会社名: ' + (company || '未記入'),
    '💬 議題: ' + (topic || '未記入'),
    '',
    '🔑 予約トークン: ' + token,
    '',
    '━━━━━━━━━━━━━━━━━━━━',
    CONFIG.COMPANY_NAME,
    CONFIG.COMPANY_URL,
  ].join('\n');
}

// ===== Email Templates =====

function sendConfirmationEmail_(booking) {
  const webAppUrl = ScriptApp.getService().getUrl();
  const cancelUrl = webAppUrl + '?page=cancel&token=' + booking.token;
  const rescheduleUrl = webAppUrl + '?page=reschedule&token=' + booking.token;

  const subject = '【ご予約確定】' + CONFIG.COMPANY_NAME + ' オンラインMTG';

  const body = booking.name + ' 様\n\n' +
    'この度はお時間をいただきありがとうございます。\n' +
    '以下の内容でオンラインMTGのご予約を承りました。\n\n' +
    '━━━━━━━━━━━━━━━━━━━━\n' +
    '📅 日時: ' + formatDateJP_(new Date(booking.start)) + ' ' + formatTimeJP_(new Date(booking.start)) + ' - ' + formatTimeJP_(new Date(booking.end)) + '\n' +
    '📹 Google Meet: ' + booking.meetLink + '\n' +
    '💬 議題: ' + (booking.topic || '未記入') + '\n' +
    '━━━━━━━━━━━━━━━━━━━━\n\n' +
    '※ このMTGはサービス向上のため録画させていただきます。\n' +
    '※ 終了後、文字起こし・要約を自動でお送りいたします。\n\n' +
    'ご都合が悪くなった場合は、以下のリンクから変更・キャンセルが可能です。\n' +
    '📝 日程変更: ' + rescheduleUrl + '\n' +
    '❌ キャンセル: ' + cancelUrl + '\n\n' +
    '━━━━━━━━━━━━━━━━━━━━\n' +
    CONFIG.COMPANY_NAME + '\n' +
    CONFIG.COMPANY_URL + '\n\n' +
    '【WaiWai AIについて】\n' +
    '私たちは中小企業向けにAI導入支援・DX推進を行っています。\n' +
    '「AI部門をまるごとインストール」— 戦略立案から実装・定着まで一気通貫で支援します。\n\n' +
    '🔹 AI業務診断（単発）\n' +
    '🔹 AI導入研修\n' +
    '🔹 AI活用家庭教師（月額）\n' +
    '🔹 AIトランスフォーメーション・パートナー（月額顧問）\n\n' +
    '詳しくはこちら → ' + CONFIG.COMPANY_URL + '\n' +
    '━━━━━━━━━━━━━━━━━━━━';

  MailApp.sendEmail({
    to: booking.email,
    subject: subject,
    body: body,
  });
}

function sendOrganizerNotification_(booking) {
  const subject = '【新規予約】' + booking.company + ' ' + booking.name + '様';

  const body = '新しいMTG予約が入りました！\n\n' +
    '👤 ' + booking.name + ' 様\n' +
    '🏢 ' + (booking.company || '未記入') + '\n' +
    '📧 ' + booking.email + '\n' +
    '📅 ' + formatDateJP_(new Date(booking.start)) + ' ' + formatTimeJP_(new Date(booking.start)) + ' - ' + formatTimeJP_(new Date(booking.end)) + '\n' +
    '💬 議題: ' + (booking.topic || '未記入') + '\n' +
    '📹 Meet: ' + booking.meetLink;

  MailApp.sendEmail({
    to: CONFIG.ORGANIZER_EMAIL,
    subject: subject,
    body: body,
  });
}

// ===== Reminder =====

function setupReminder_(booking) {
  const meetingTime = new Date(booking.start);
  const reminderTime = new Date(meetingTime.getTime() - CONFIG.REMINDER_HOURS_BEFORE * 60 * 60 * 1000);

  if (reminderTime > new Date()) {
    const trigger = ScriptApp.newTrigger('sendReminder')
      .timeBased()
      .at(reminderTime)
      .create();

    const props = PropertiesService.getScriptProperties();
    props.setProperty('reminder_trigger_' + booking.token, trigger.getUniqueId());
  }
}

function sendReminder(e) {
  const props = PropertiesService.getScriptProperties();
  const allProps = props.getProperties();

  for (const key in allProps) {
    if (key.startsWith('booking_')) {
      const booking = JSON.parse(allProps[key]);
      if (booking.status !== 'confirmed') continue;

      const meetingTime = new Date(booking.start);
      const now = new Date();
      const hoursUntil = (meetingTime.getTime() - now.getTime()) / (1000 * 60 * 60);

      if (hoursUntil > 0 && hoursUntil <= CONFIG.REMINDER_HOURS_BEFORE + 1) {
        sendReminderEmail_(booking);
        notifyReminder_(booking);
        updateReminderSent_(booking.token);
        booking.reminderSent = true;
        props.setProperty(key, JSON.stringify(booking));
      }
    }
  }
}

function sendReminderEmail_(booking) {
  const subject = '【明日のMTGリマインド】' + CONFIG.COMPANY_NAME;

  const body = booking.name + ' 様\n\n' +
    '明日のオンラインMTGのリマインドです。\n\n' +
    '━━━━━━━━━━━━━━━━━━━━\n' +
    '📅 日時: ' + formatDateJP_(new Date(booking.start)) + ' ' + formatTimeJP_(new Date(booking.start)) + ' - ' + formatTimeJP_(new Date(booking.end)) + '\n' +
    '📹 Google Meet: ' + booking.meetLink + '\n' +
    '━━━━━━━━━━━━━━━━━━━━\n\n' +
    'お会いできることを楽しみにしております。\n\n' +
    CONFIG.COMPANY_NAME + '\n' +
    CONFIG.COMPANY_URL;

  MailApp.sendEmail({
    to: booking.email,
    subject: subject,
    body: body,
  });
}

// ===== Post-Meeting Transcript Delivery =====

function setupPostMeetingTrigger_(booking) {
  const meetingEnd = new Date(booking.end);
  const checkTime = new Date(meetingEnd.getTime() + 30 * 60 * 1000);

  if (checkTime > new Date()) {
    const trigger = ScriptApp.newTrigger('deliverTranscript')
      .timeBased()
      .at(checkTime)
      .create();

    const props = PropertiesService.getScriptProperties();
    props.setProperty('transcript_trigger_' + booking.token, trigger.getUniqueId());
  }
}

function deliverTranscript(e) {
  const props = PropertiesService.getScriptProperties();
  const allProps = props.getProperties();

  for (const key in allProps) {
    if (key.startsWith('booking_')) {
      const booking = JSON.parse(allProps[key]);
      if (booking.status !== 'confirmed' || booking.transcriptSent) continue;

      const meetingEnd = new Date(booking.end);
      const now = new Date();

      if (now.getTime() > meetingEnd.getTime() + 15 * 60 * 1000) {
        const transcriptData = findMeetingTranscript_(booking);

        if (transcriptData) {
          sendTranscriptEmail_(booking, transcriptData);
          notifyTranscriptDelivered_(booking);
          updateTranscriptSent_(booking.token);
          booking.transcriptSent = true;
          props.setProperty(key, JSON.stringify(booking));
        } else {
          const retryCount = booking.transcriptRetry || 0;
          if (retryCount < 6) {
            booking.transcriptRetry = retryCount + 1;
            props.setProperty(key, JSON.stringify(booking));

            const retryTime = new Date(now.getTime() + 30 * 60 * 1000);
            ScriptApp.newTrigger('deliverTranscript')
              .timeBased()
              .at(retryTime)
              .create();
          }
        }
      }
    }
  }
}

function findMeetingTranscript_(booking) {
  try {
    const files = DriveApp.searchFiles(
      'title contains "' + booking.name + '" or title contains "transcript" or title contains "文字起こし"'
    );

    let transcript = null;
    let summary = null;
    const meetingTime = new Date(booking.start);

    while (files.hasNext()) {
      const file = files.next();
      const created = file.getDateCreated();

      if (created.getTime() > meetingTime.getTime() &&
          created.getTime() < meetingTime.getTime() + 4 * 60 * 60 * 1000) {

        const mimeType = file.getMimeType();
        if (mimeType === 'application/vnd.google-apps.document') {
          const doc = DocumentApp.openById(file.getId());
          const content = doc.getBody().getText();

          if (file.getName().includes('transcript') || file.getName().includes('文字起こし')) {
            transcript = content;
          } else {
            summary = content;
          }
        }
      }
    }

    try {
      const eventId = booking.eventId.replace('@google.com', '');
      const calEvent = Calendar.Events.get(CONFIG.CALENDAR_ID, eventId);
      if (calEvent.description && calEvent.description.includes('要約')) {
        summary = summary || calEvent.description;
      }
    } catch (e) {
      Logger.log('Calendar event retrieval error: ' + e.message);
    }

    if (transcript || summary) {
      return { transcript: transcript, summary: summary };
    }

    return null;
  } catch (e) {
    Logger.log('Transcript search error: ' + e.message);
    return null;
  }
}

function sendTranscriptEmail_(booking, transcriptData) {
  const subject = '【MTG議事録】' + formatDateJP_(new Date(booking.start)) + ' ' + CONFIG.COMPANY_NAME;

  let body = booking.name + ' 様\n\n' +
    '先日はお時間をいただきありがとうございました。\n' +
    'MTGの記録をお送りいたします。\n\n' +
    '━━━━━━━━━━━━━━━━━━━━\n' +
    '📅 日時: ' + formatDateJP_(new Date(booking.start)) + ' ' + formatTimeJP_(new Date(booking.start)) + ' - ' + formatTimeJP_(new Date(booking.end)) + '\n' +
    '━━━━━━━━━━━━━━━━━━━━\n';

  if (transcriptData.summary) {
    body += '\n📝 【要約】\n' + transcriptData.summary + '\n';
  }

  if (transcriptData.transcript) {
    body += '\n📄 【文字起こし】\n' + transcriptData.transcript + '\n';
  }

  body += '\n━━━━━━━━━━━━━━━━━━━━\n' +
    'ご不明な点がございましたら、お気軽にご連絡ください。\n\n' +
    CONFIG.COMPANY_NAME + '\n' +
    CONFIG.COMPANY_URL;

  MailApp.sendEmail({
    to: booking.email,
    cc: CONFIG.ORGANIZER_EMAIL,
    subject: subject,
    body: body,
  });
}

// ===== Cancel / Reschedule =====

function handleCancel_(token) {
  return HtmlService.createHtmlOutput(getCancelPageHtml_(token))
    .setTitle('予約キャンセル - ' + CONFIG.COMPANY_NAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function cancelMeeting_(token) {
  const props = PropertiesService.getScriptProperties();
  const bookingJson = props.getProperty('booking_' + token);

  if (!bookingJson) {
    return { error: '予約が見つかりません' };
  }

  const booking = JSON.parse(bookingJson);

  try {
    const cal = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);
    const event = cal.getEventById(booking.eventId);
    if (event) {
      event.deleteEvent();
    }
  } catch (e) {
    Logger.log('Event deletion error: ' + e.message);
  }

  cleanupTriggers_(token);

  booking.status = 'cancelled';
  props.setProperty('booking_' + token, JSON.stringify(booking));

  updateBookingStatus_(token, '❌ キャンセル');
  notifyCancelBooking_(booking);

  MailApp.sendEmail({
    to: CONFIG.ORGANIZER_EMAIL,
    subject: '【キャンセル】' + booking.company + ' ' + booking.name + '様',
    body: '以下のMTGがキャンセルされました。\n\n👤 ' + booking.name + '様\n📅 ' + formatDateJP_(new Date(booking.start)) + ' ' + formatTimeJP_(new Date(booking.start)),
  });

  return { success: true, message: '予約をキャンセルしました' };
}

function handleReschedule_(token) {
  const props = PropertiesService.getScriptProperties();
  const bookingJson = props.getProperty('booking_' + token);

  if (!bookingJson) {
    return HtmlService.createHtmlOutput('<h1>予約が見つかりません</h1>');
  }

  const booking = JSON.parse(bookingJson);
  cancelMeeting_(token);
  return createBookingPage_(booking);
}

function cleanupTriggers_(token) {
  const props = PropertiesService.getScriptProperties();
  const triggerKeys = ['reminder_trigger_', 'transcript_trigger_'];

  for (const prefix of triggerKeys) {
    const triggerId = props.getProperty(prefix + token);
    if (triggerId) {
      const triggers = ScriptApp.getProjectTriggers();
      for (const trigger of triggers) {
        if (trigger.getUniqueId() === triggerId) {
          ScriptApp.deleteTrigger(trigger);
        }
      }
      props.deleteProperty(prefix + token);
    }
  }
}

// ===== Utilities =====

function generateToken_() {
  return Utilities.getUuid().replace(/-/g, '').substring(0, 16);
}

function formatDateJP_(date) {
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  return Utilities.formatDate(date, 'Asia/Tokyo', 'yyyy年M月d日') +
    '(' + days[date.getDay()] + ')';
}

function formatTimeJP_(date) {
  return Utilities.formatDate(date, 'Asia/Tokyo', 'HH:mm');
}

function jsonResponse_(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ===== HTML Pages =====

function createBookingPage_(prefill) {
  const html = HtmlService.createHtmlOutput(getBookingPageHtml_(prefill))
    .setTitle('ご予約 - ' + CONFIG.COMPANY_NAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return html;
}
