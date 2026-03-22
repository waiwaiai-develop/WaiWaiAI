/**
 * Setup & Configuration
 * 初回セットアップ用の関数群
 */

/**
 * 初回セットアップ: Script Propertiesにテレグラム設定を保存
 * GASエディタからこの関数を実行してください
 */
function setupTelegramConfig() {
  const ui = SpreadsheetApp.getUi();

  const botToken = ui.prompt(
    'Telegram設定',
    'Bot Tokenを入力してください:',
    ui.ButtonSet.OK_CANCEL
  );
  if (botToken.getSelectedButton() !== ui.Button.OK) return;

  const chatId = ui.prompt(
    'Telegram設定',
    'Chat IDを入力してください:',
    ui.ButtonSet.OK_CANCEL
  );
  if (chatId.getSelectedButton() !== ui.Button.OK) return;

  const props = PropertiesService.getScriptProperties();
  props.setProperty('TELEGRAM_BOT_TOKEN', botToken.getResponseText().trim());
  props.setProperty('TELEGRAM_CHAT_ID', chatId.getResponseText().trim());

  ui.alert('✅ Telegram設定完了！\n\nBot Token: ' + botToken.getResponseText().trim().substring(0, 10) + '...\nChat ID: ' + chatId.getResponseText().trim());
}

/**
 * テスト: Telegram通知テスト
 */
function testTelegramNotification() {
  sendTelegramNotification_('🧪 テスト通知: WaiWaiAI Meeting Scheduler が正常に動作しています！');
  Logger.log('テスト通知送信完了');
}

/**
 * テスト: 空き枠取得テスト
 */
function testGetSlots() {
  const result = getAvailableSlots_();
  Logger.log('空き枠数: ' + result.slots.length);
  result.slots.forEach(s => {
    Logger.log(s.date + ' ' + s.time);
  });
}

/**
 * スプレッドシートにカスタムメニューを追加
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('📅 Meeting Scheduler')
    .addItem('🔧 Telegram設定', 'setupTelegramConfig')
    .addItem('🧪 Telegram通知テスト', 'testTelegramNotification')
    .addItem('📋 空き枠確認', 'testGetSlots')
    .addSeparator()
    .addItem('🌐 予約ページを開く', 'openBookingPage')
    .addToUi();
}

function openBookingPage() {
  const url = ScriptApp.getService().getUrl();
  const html = HtmlService.createHtmlOutput(
    '<script>window.open("' + url + '");google.script.host.close();</script>'
  );
  SpreadsheetApp.getUi().showModalDialog(html, '予約ページを開いています...');
}
