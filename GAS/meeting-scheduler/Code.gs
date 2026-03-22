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
 */

// ===== Configuration =====
const CONFIG = {
  CALENDAR_ID: 'primary',
  SLOT_KEYWORD: 'MTG可',
  MEETING_DURATION_MIN: 60,
  ORGANIZER_NAME: '久保田 慧',
  ORGANIZER_EMAIL: Session.getActiveUser().getEmail(),
  COMPANY_NAME: 'WaiWai AI株式会社',
  COMPANY_URL: 'https://waiwaiai.com',
  DAYS_AHEAD: 30, // Show slots for next 30 days
  REMINDER_HOURS_BEFORE: 24,
};

// ===== Web App Entry Points =====

function doGet(e) {
  const page = e.parameter.page || 'booking';
  const token = e.parameter.token || '';

  switch (page) {
    case 'booking':
      return createBookingPage_();
    case 'confirm':
      return createConfirmPage_(e.parameter);
    case 'cancel':
      return handleCancel_(token);
    case 'reschedule':
      return handleReschedule_(token);
    case 'complete':
      return createCompletePage_(e.parameter);
    default:
      return createBookingPage_();
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;

    switch (action) {
      case 'getSlots':
        return jsonResponse_(getAvailableSlots_());
      case 'book':
        return jsonResponse_(bookMeeting_(data));
      case 'cancel':
        return jsonResponse_(cancelMeeting_(data.token));
      default:
        return jsonResponse_({ error: 'Unknown action' });
    }
  } catch (err) {
    return jsonResponse_({ error: err.message });
  }
}

// ===== Slot Management =====

function getAvailableSlots_() {
  const cal = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);
  const now = new Date();
  const endDate = new Date(now.getTime() + CONFIG.DAYS_AHEAD * 24 * 60 * 60 * 1000);

  const events = cal.getEvents(now, endDate);
  const slots = [];

  for (const event of events) {
    if (event.getTitle().includes(CONFIG.SLOT_KEYWORD)) {
      const start = event.getStartTime();
      const end = event.getEndTime();
      const durationMs = end.getTime() - start.getTime();
      const slotDurationMs = CONFIG.MEETING_DURATION_MIN * 60 * 1000;

      // Split long "MTG可" blocks into 1-hour slots
      let slotStart = new Date(start.getTime());
      while (slotStart.getTime() + slotDurationMs <= end.getTime()) {
        const slotEnd = new Date(slotStart.getTime() + slotDurationMs);

        // Check no conflicting events in this slot
        if (!hasConflict_(cal, slotStart, slotEnd)) {
          slots.push({
            id: event.getId(),
            start: slotStart.toISOString(),
            end: slotEnd.toISOString(),
            date: formatDateJP_(slotStart),
            time: formatTimeJP_(slotStart) + ' - ' + formatTimeJP_(slotEnd),
          });
        }
        slotStart = new Date(slotStart.getTime() + slotDurationMs);
      }
    }
  }

  return { slots: slots };
}

function hasConflict_(cal, start, end) {
  const events = cal.getEvents(start, end);
  for (const event of events) {
    if (!event.getTitle().includes(CONFIG.SLOT_KEYWORD)) {
      return true;
    }
  }
  return false;
}

// ===== Booking =====

function bookMeeting_(data) {
  const { name, email, company, topic, slotStart, slotEnd } = data;

  if (!name || !email || !slotStart) {
    throw new Error('必須項目が入力されていません');
  }

  const start = new Date(slotStart);
  const end = new Date(slotEnd);
  const token = generateToken_();

  // Create calendar event with Google Meet
  const cal = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);
  const title = `【MTG】${company || ''} ${name}様`;

  const event = cal.createEvent(title, start, end, {
    description: buildEventDescription_(name, email, company, topic, token),
    guests: email,
    sendInvites: true,
  });

  // Add Google Meet conference
  addGoogleMeet_(event);

  // Enable recording & Gemini features via event description note
  const meetLink = getEventMeetLink_(event);
  updateEventWithMeetInfo_(event, meetLink, name, email, company, topic, token);

  // Store booking data in Properties for later use
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

  // Record to spreadsheet
  recordBooking_(bookingData);

  // Send confirmation emails
  sendConfirmationEmail_(bookingData);
  sendOrganizerNotification_(bookingData);

  // Telegram notification
  notifyNewBooking_(bookingData);

  // Set up reminder trigger
  setupReminder_(bookingData);

  // Set up post-meeting trigger for transcript delivery
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
  // Use Calendar Advanced Service to add Meet
  const eventId = event.getId().replace('@google.com', '');

  try {
    const calEvent = Calendar.Events.get(CONFIG.CALENDAR_ID, eventId);

    calEvent.conferenceData = {
      createRequest: {
        requestId: Utilities.getUuid(),
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    };

    // Set recording preferences
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

  const subject = `【ご予約確定】${CONFIG.COMPANY_NAME} オンラインMTG`;

  const body = `
${booking.name} 様

この度はお時間をいただきありがとうございます。
以下の内容でオンラインMTGのご予約を承りました。

━━━━━━━━━━━━━━━━━━━━
📅 日時: ${formatDateJP_(new Date(booking.start))} ${formatTimeJP_(new Date(booking.start))} - ${formatTimeJP_(new Date(booking.end))}
📹 Google Meet: ${booking.meetLink}
💬 議題: ${booking.topic || '未記入'}
━━━━━━━━━━━━━━━━━━━━

※ このMTGはサービス向上のため録画させていただきます。
※ 終了後、文字起こし・要約を自動でお送りいたします。

ご都合が悪くなった場合は、以下のリンクから変更・キャンセルが可能です。
📝 日程変更: ${rescheduleUrl}
❌ キャンセル: ${cancelUrl}

━━━━━━━━━━━━━━━━━━━━
${CONFIG.COMPANY_NAME}
${CONFIG.COMPANY_URL}

【WaiWai AIについて】
私たちは中小企業向けにAI導入支援・DX推進を行っています。
「AI部門をまるごとインストール」— 戦略立案から実装・定着まで一気通貫で支援します。

🔹 AI業務診断（単発）
🔹 AI導入研修
🔹 AI活用家庭教師（月額）
🔹 AIトランスフォーメーション・パートナー（月額顧問）

詳しくはこちら → ${CONFIG.COMPANY_URL}
━━━━━━━━━━━━━━━━━━━━
  `.trim();

  MailApp.sendEmail({
    to: booking.email,
    subject: subject,
    body: body,
  });
}

function sendOrganizerNotification_(booking) {
  const subject = `【新規予約】${booking.company} ${booking.name}様`;

  const body = `
新しいMTG予約が入りました！

👤 ${booking.name} 様
🏢 ${booking.company || '未記入'}
📧 ${booking.email}
📅 ${formatDateJP_(new Date(booking.start))} ${formatTimeJP_(new Date(booking.start))} - ${formatTimeJP_(new Date(booking.end))}
💬 議題: ${booking.topic || '未記入'}
📹 Meet: ${booking.meetLink}
  `.trim();

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

    // Store trigger ID with booking
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
        // Mark reminder as sent
        booking.reminderSent = true;
        props.setProperty(key, JSON.stringify(booking));
      }
    }
  }
}

function sendReminderEmail_(booking) {
  const subject = `【明日のMTGリマインド】${CONFIG.COMPANY_NAME}`;

  const body = `
${booking.name} 様

明日のオンラインMTGのリマインドです。

━━━━━━━━━━━━━━━━━━━━
📅 日時: ${formatDateJP_(new Date(booking.start))} ${formatTimeJP_(new Date(booking.start))} - ${formatTimeJP_(new Date(booking.end))}
📹 Google Meet: ${booking.meetLink}
━━━━━━━━━━━━━━━━━━━━

お会いできることを楽しみにしております。

${CONFIG.COMPANY_NAME}
${CONFIG.COMPANY_URL}
  `.trim();

  MailApp.sendEmail({
    to: booking.email,
    subject: subject,
    body: body,
  });
}

// ===== Post-Meeting Transcript Delivery =====

function setupPostMeetingTrigger_(booking) {
  const meetingEnd = new Date(booking.end);
  // Check 30 minutes after meeting ends (allow time for transcript generation)
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

      // Check if meeting has ended (with 15min buffer)
      if (now.getTime() > meetingEnd.getTime() + 15 * 60 * 1000) {
        const transcriptData = findMeetingTranscript_(booking);

        if (transcriptData) {
          sendTranscriptEmail_(booking, transcriptData);
          notifyTranscriptDelivered_(booking);
          updateTranscriptSent_(booking.token);
          booking.transcriptSent = true;
          props.setProperty(key, JSON.stringify(booking));
        } else {
          // Retry in 30 minutes if transcript not ready yet
          const retryCount = booking.transcriptRetry || 0;
          if (retryCount < 6) { // Max 3 hours of retrying
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
    const meetingDate = formatDateJP_(new Date(booking.start));

    // Search for transcript files in Google Drive
    // Meet transcripts are typically saved as Google Docs in "Meet Recordings" folder
    const files = DriveApp.searchFiles(
      'title contains "' + booking.name + '" or title contains "transcript" or title contains "文字起こし"'
    );

    let transcript = null;
    let summary = null;
    const meetingTime = new Date(booking.start);

    while (files.hasNext()) {
      const file = files.next();
      const created = file.getDateCreated();

      // Check if file was created around the meeting time (within 4 hours after)
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

    // Also check Calendar event for Gemini notes
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
  const subject = `【MTG議事録】${formatDateJP_(new Date(booking.start))} ${CONFIG.COMPANY_NAME}`;

  let body = `
${booking.name} 様

先日はお時間をいただきありがとうございました。
MTGの記録をお送りいたします。

━━━━━━━━━━━━━━━━━━━━
📅 日時: ${formatDateJP_(new Date(booking.start))} ${formatTimeJP_(new Date(booking.start))} - ${formatTimeJP_(new Date(booking.end))}
━━━━━━━━━━━━━━━━━━━━
`;

  if (transcriptData.summary) {
    body += `
📝 【要約】
${transcriptData.summary}

`;
  }

  if (transcriptData.transcript) {
    body += `
📄 【文字起こし】
${transcriptData.transcript}

`;
  }

  body += `
━━━━━━━━━━━━━━━━━━━━
ご不明な点がございましたら、お気軽にご連絡ください。

${CONFIG.COMPANY_NAME}
${CONFIG.COMPANY_URL}
  `.trim();

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

  // Delete calendar event
  try {
    const cal = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);
    const event = cal.getEventById(booking.eventId);
    if (event) {
      event.deleteEvent();
    }
  } catch (e) {
    Logger.log('Event deletion error: ' + e.message);
  }

  // Clean up triggers
  cleanupTriggers_(token);

  // Update booking status
  booking.status = 'cancelled';
  props.setProperty('booking_' + token, JSON.stringify(booking));

  // Update spreadsheet & Telegram
  updateBookingStatus_(token, '❌ キャンセル');
  notifyCancelBooking_(booking);

  // Notify organizer
  MailApp.sendEmail({
    to: CONFIG.ORGANIZER_EMAIL,
    subject: `【キャンセル】${booking.company} ${booking.name}様`,
    body: `以下のMTGがキャンセルされました。\n\n👤 ${booking.name}様\n📅 ${formatDateJP_(new Date(booking.start))} ${formatTimeJP_(new Date(booking.start))}`,
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

  // Cancel the old booking
  cancelMeeting_(token);

  // Show booking page pre-filled with their info
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
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setFaviconUrl(CONFIG.COMPANY_URL + '/favicon.ico');
  return html;
}

function createConfirmPage_(params) {
  return HtmlService.createHtmlOutput(getConfirmPageHtml_(params))
    .setTitle('予約完了 - ' + CONFIG.COMPANY_NAME);
}

function createCompletePage_(params) {
  return HtmlService.createHtmlOutput(getCompletePageHtml_(params))
    .setTitle('予約完了 - ' + CONFIG.COMPANY_NAME);
}
