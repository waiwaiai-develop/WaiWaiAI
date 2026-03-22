/**
 * Telegram Notification Module
 * 予約・キャンセル時にTelegramに通知を送信
 */

// Telegram設定はScript Propertiesから取得
// TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID を設定してください

function getTelegramConfig_() {
  const props = PropertiesService.getScriptProperties();
  return {
    botToken: props.getProperty('TELEGRAM_BOT_TOKEN'),
    chatId: props.getProperty('TELEGRAM_CHAT_ID'),
  };
}

function sendTelegramNotification_(message) {
  const config = getTelegramConfig_();
  if (!config.botToken || !config.chatId) {
    Logger.log('Telegram設定が未完了です。Script PropertiesにTELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_IDを設定してください。');
    return;
  }

  const url = 'https://api.telegram.org/bot' + config.botToken + '/sendMessage';

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      chat_id: config.chatId,
      text: message,
      parse_mode: 'HTML',
    }),
    muteHttpExceptions: true,
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const result = JSON.parse(response.getContentText());
    if (!result.ok) {
      Logger.log('Telegram送信エラー: ' + JSON.stringify(result));
    }
  } catch (e) {
    Logger.log('Telegram送信失敗: ' + e.message);
  }
}

// ===== Notification Templates =====

function notifyNewBooking_(booking) {
  const message = [
    '🆕 <b>新規MTG予約</b>',
    '',
    '👤 ' + escapeHtml_(booking.name),
    '🏢 ' + escapeHtml_(booking.company || '未記入'),
    '📧 ' + escapeHtml_(booking.email),
    '📅 ' + formatDateJP_(new Date(booking.start)) + ' ' + formatTimeJP_(new Date(booking.start)) + ' - ' + formatTimeJP_(new Date(booking.end)),
    '💬 ' + escapeHtml_(booking.topic || '未記入'),
    '',
    '📹 <a href="' + booking.meetLink + '">Google Meet</a>',
  ].join('\n');

  sendTelegramNotification_(message);
}

function notifyCancelBooking_(booking) {
  const message = [
    '❌ <b>MTGキャンセル</b>',
    '',
    '👤 ' + escapeHtml_(booking.name),
    '🏢 ' + escapeHtml_(booking.company || '未記入'),
    '📅 ' + formatDateJP_(new Date(booking.start)) + ' ' + formatTimeJP_(new Date(booking.start)),
  ].join('\n');

  sendTelegramNotification_(message);
}

function notifyReminder_(booking) {
  const message = [
    '⏰ <b>明日のMTGリマインド</b>',
    '',
    '👤 ' + escapeHtml_(booking.name),
    '🏢 ' + escapeHtml_(booking.company || '未記入'),
    '📅 ' + formatDateJP_(new Date(booking.start)) + ' ' + formatTimeJP_(new Date(booking.start)) + ' - ' + formatTimeJP_(new Date(booking.end)),
    '💬 ' + escapeHtml_(booking.topic || '未記入'),
    '',
    '📹 <a href="' + booking.meetLink + '">Google Meet</a>',
  ].join('\n');

  sendTelegramNotification_(message);
}

function notifyTranscriptDelivered_(booking) {
  const message = [
    '📄 <b>議事録送付完了</b>',
    '',
    '👤 ' + escapeHtml_(booking.name) + ' 様へ送付しました',
    '📅 ' + formatDateJP_(new Date(booking.start)),
  ].join('\n');

  sendTelegramNotification_(message);
}

function escapeHtml_(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
