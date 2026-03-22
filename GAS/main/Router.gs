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
  try {
    const data = JSON.parse(e.postData.contents);

    // Meeting Scheduler のアクション
    if (data.action === 'getSlots' || data.action === 'book' || data.action === 'cancel') {
      return handleMeetingPost_(data);
    }

    // それ以外は問い合わせフォーム
    return handleContactPost(e);

  } catch (err) {
    // JSON parseに失敗した場合も問い合わせフォームとして処理
    return handleContactPost(e);
  }
}
