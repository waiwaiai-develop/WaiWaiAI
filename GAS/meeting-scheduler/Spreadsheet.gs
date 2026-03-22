/**
 * Spreadsheet Recording Module
 * 予約データをスプレッドシートに記録
 */

const SHEET_NAME = 'MTG予約一覧';

function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Set headers
    const headers = [
      '予約日時',
      'ステータス',
      'お名前',
      '会社名',
      'メールアドレス',
      'ご相談内容',
      'MTG日時',
      'MTG終了',
      'Google Meet',
      'トークン',
      'リマインド送信',
      '議事録送信',
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#6366f1')
      .setFontColor('white');
    sheet.setFrozenRows(1);

    // Set column widths
    sheet.setColumnWidth(1, 140);  // 予約日時
    sheet.setColumnWidth(2, 80);   // ステータス
    sheet.setColumnWidth(3, 100);  // お名前
    sheet.setColumnWidth(4, 140);  // 会社名
    sheet.setColumnWidth(5, 200);  // メール
    sheet.setColumnWidth(6, 200);  // 相談内容
    sheet.setColumnWidth(7, 140);  // MTG日時
    sheet.setColumnWidth(8, 140);  // MTG終了
    sheet.setColumnWidth(9, 250);  // Meet URL
    sheet.setColumnWidth(10, 130); // トークン
    sheet.setColumnWidth(11, 80);  // リマインド
    sheet.setColumnWidth(12, 80);  // 議事録
  }

  return sheet;
}

function recordBooking_(booking) {
  const sheet = getOrCreateSheet_();

  const row = [
    new Date(),
    '✅ 確定',
    booking.name,
    booking.company || '',
    booking.email,
    booking.topic || '',
    new Date(booking.start),
    new Date(booking.end),
    booking.meetLink,
    booking.token,
    '',
    '',
  ];

  sheet.appendRow(row);
}

function updateBookingStatus_(token, status) {
  const sheet = getOrCreateSheet_();
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][9] === token) { // Column J = token
      sheet.getRange(i + 1, 2).setValue(status); // Column B = status
      return;
    }
  }
}

function updateReminderSent_(token) {
  const sheet = getOrCreateSheet_();
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][9] === token) {
      sheet.getRange(i + 1, 11).setValue('✅ 送信済');
      return;
    }
  }
}

function updateTranscriptSent_(token) {
  const sheet = getOrCreateSheet_();
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][9] === token) {
      sheet.getRange(i + 1, 12).setValue('✅ 送信済');
      return;
    }
  }
}
