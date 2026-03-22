/**
 * WaiWaiAI 問い合わせフォーム → スプレッドシート転記 GAS
 *
 * スプレッドシート: https://docs.google.com/spreadsheets/d/1GUxv5jXTlPVfEy-FnLV30ezNORI4xnl6ccdkW8DDIzs/
 *
 * 【セットアップ手順】
 * 1. Google Apps Script (https://script.google.com) で新しいプロジェクトを作成
 * 2. このコードを貼り付け
 * 3. 「デプロイ」→「新しいデプロイ」→ 種類「ウェブアプリ」を選択
 *    - 実行するユーザー: 自分
 *    - アクセス: 全員
 * 4. デプロイして表示されるURLをコピー
 * 5. Next.jsプロジェクトの .env に GAS_WEBHOOK_URL=<デプロイURL> を追加
 */

const SPREADSHEET_ID = '1GUxv5jXTlPVfEy-FnLV30ezNORI4xnl6ccdkW8DDIzs';
const SHEET_NAME = '問い合わせ一覧';

/**
 * スプレッドシートの初期設定（ヘッダー行を作成）
 * 初回のみ手動で実行してください
 */
function setupSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  const headers = [
    '受付日時',
    '会社名',
    'ご担当者名',
    'メールアドレス',
    '電話番号',
    'ご相談種別',
    'お問い合わせ内容',
    'ステータス'
  ];

  // ヘッダー行を設定
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);

  // ヘッダーの書式設定
  headerRange
    .setBackground('#1e40af')
    .setFontColor('#ffffff')
    .setFontWeight('bold')
    .setHorizontalAlignment('center');

  // 列幅の調整
  sheet.setColumnWidth(1, 160);  // 受付日時
  sheet.setColumnWidth(2, 180);  // 会社名
  sheet.setColumnWidth(3, 120);  // ご担当者名
  sheet.setColumnWidth(4, 220);  // メールアドレス
  sheet.setColumnWidth(5, 140);  // 電話番号
  sheet.setColumnWidth(6, 220);  // ご相談種別
  sheet.setColumnWidth(7, 400);  // お問い合わせ内容
  sheet.setColumnWidth(8, 100);  // ステータス

  // 1行目を固定
  sheet.setFrozenRows(1);

  // フィルター設定
  const dataRange = sheet.getRange(1, 1, 1, headers.length);
  dataRange.createFilter();

  Logger.log('シートのセットアップが完了しました');
}

/**
 * POST リクエストを受け取り、スプレッドシートに書き込む
 */
function handleContactPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // シートがなければ作成
    if (!sheet) {
      setupSheet();
      sheet = ss.getSheetByName(SHEET_NAME);
    }

    // 日本時間で受付日時を生成
    const now = Utilities.formatDate(
      new Date(),
      'Asia/Tokyo',
      'yyyy/MM/dd HH:mm:ss'
    );

    // データ行を追加
    const row = [
      now,
      data.company || '',
      data.name || '',
      data.email || '',
      data.phone || '',
      data.category || '',
      data.message || '',
      '未対応'
    ];

    sheet.appendRow(row);

    // 追加した行の書式設定
    const lastRow = sheet.getLastRow();

    // ステータス列にデータ入力規則を設定
    const statusCell = sheet.getRange(lastRow, 8);
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(['未対応', '対応中', '対応済み', '保留'], true)
      .build();
    statusCell.setDataValidation(rule);

    // 未対応セルの背景色
    statusCell.setBackground('#fef3c7');

    // 成功レスポンス
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error: ' + error.message);

    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * GET リクエスト（動作確認用） - 旧: doGetから呼び出される
 */
function handleContactGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'WaiWaiAI Contact Webhook is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
