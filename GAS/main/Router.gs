/**
 * Router - doGet / doPost のルーティング
 *
 * 問い合わせフォーム（contact-to-sheet）と
 * Meeting Schedulerを同一プロジェクトで共存させる
 */

function doGet(e) {
  const page = (e && e.parameter && e.parameter.page) || '';

  // Meeting Scheduler のページ
  if (page === 'booking' || page === 'cancel' || page === 'reschedule' ||
      page === 'confirm' || page === 'complete' || !page) {
    // パラメータがある場合はMeeting Scheduler
    if (e && e.parameter && (e.parameter.page || e.parameter.token)) {
      return handleMeetingGet_(e);
    }
  }

  // デフォルト: Meeting Schedulerの予約ページを表示
  // （問い合わせWebhookはPOSTのみなのでGETはSchedulerに回す）
  return handleMeetingGet_(e || { parameter: {} });
}

function doPost(e) {
  let data = null;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    // JSON parseに失敗した場合のみ問い合わせフォームへ
    return handleContactPost(e);
  }

  // Meeting Scheduler のアクション
  if (data && (data.action === 'getSlots' || data.action === 'book' || data.action === 'cancel')) {
    try {
      return handleMeetingPost_(data);
    } catch (err) {
      Logger.log('handleMeetingPost_ error: ' + err.message + '\n' + err.stack);
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: err.message }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  // それ以外（フォーム由来など）は問い合わせフォーム
  return handleContactPost(e);
}
