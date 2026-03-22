/**
 * HTML Page Templates
 */

function getBookingPageHtml_(prefill) {
  const prefillJson = prefill ? JSON.stringify(prefill) : 'null';

  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ご予約 - ${CONFIG.COMPANY_NAME}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans JP', sans-serif;
      background: #f8fafc;
      color: #1e293b;
      line-height: 1.6;
    }
    .container {
      max-width: 640px;
      margin: 0 auto;
      padding: 24px 16px;
    }
    .header {
      text-align: center;
      margin-bottom: 32px;
    }
    .header h1 {
      font-size: 24px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 4px;
    }
    .header p {
      color: #64748b;
      font-size: 14px;
    }
    .brand {
      display: inline-block;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: white;
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 16px;
    }
    .step-indicator {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-bottom: 24px;
    }
    .step {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 600;
    }
    .step.active {
      background: #6366f1;
      color: white;
    }
    .step.inactive {
      background: #e2e8f0;
      color: #94a3b8;
    }
    .step-line {
      width: 40px;
      height: 2px;
      background: #e2e8f0;
      align-self: center;
    }
    .card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      padding: 24px;
      margin-bottom: 16px;
    }
    .card h2 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 16px;
      color: #334155;
    }
    .slots-grid {
      display: grid;
      gap: 8px;
    }
    .date-group {
      margin-bottom: 16px;
    }
    .date-label {
      font-size: 14px;
      font-weight: 600;
      color: #475569;
      margin-bottom: 8px;
      padding: 4px 0;
      border-bottom: 1px solid #e2e8f0;
    }
    .time-slots {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .slot-btn {
      padding: 8px 16px;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      background: white;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      color: #334155;
      transition: all 0.2s;
    }
    .slot-btn:hover {
      border-color: #6366f1;
      background: #f5f3ff;
    }
    .slot-btn.selected {
      border-color: #6366f1;
      background: #6366f1;
      color: white;
    }
    .form-group {
      margin-bottom: 16px;
    }
    .form-group label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: #475569;
      margin-bottom: 4px;
    }
    .form-group label .required {
      color: #ef4444;
      margin-left: 2px;
    }
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 15px;
      outline: none;
      transition: border-color 0.2s;
    }
    .form-group input:focus,
    .form-group textarea:focus {
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
    }
    .form-group textarea {
      resize: vertical;
      min-height: 80px;
    }
    .submit-btn {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .submit-btn:hover {
      opacity: 0.9;
    }
    .submit-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .loading {
      text-align: center;
      padding: 40px;
      color: #64748b;
    }
    .spinner {
      width: 32px;
      height: 32px;
      border: 3px solid #e2e8f0;
      border-top-color: #6366f1;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 12px;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .no-slots {
      text-align: center;
      padding: 32px;
      color: #94a3b8;
    }
    .error {
      background: #fef2f2;
      color: #dc2626;
      padding: 12px;
      border-radius: 8px;
      font-size: 14px;
      margin-bottom: 16px;
      display: none;
    }
    #step1, #step2 { display: block; }
    #step2 { display: none; }
    .selected-slot-info {
      background: #f5f3ff;
      border: 1px solid #c7d2fe;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 16px;
      font-size: 14px;
    }
    .selected-slot-info strong {
      color: #6366f1;
    }
    .footer {
      text-align: center;
      margin-top: 32px;
      padding: 24px;
      color: #94a3b8;
      font-size: 12px;
    }
    .footer a {
      color: #6366f1;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="brand">${CONFIG.COMPANY_NAME}</div>
      <h1>オンラインMTGのご予約</h1>
      <p>${CONFIG.MEETING_DURATION_MIN}分間のオンラインミーティング</p>
    </div>

    <div class="step-indicator">
      <div class="step active" id="stepIcon1">1</div>
      <div class="step-line"></div>
      <div class="step inactive" id="stepIcon2">2</div>
    </div>

    <div id="loading" class="loading">
      <div class="spinner"></div>
      <p>空き枠を確認中...</p>
    </div>

    <div id="error" class="error"></div>

    <!-- Step 1: Select Time Slot -->
    <div id="step1" style="display:none;">
      <div class="card">
        <h2>📅 日時を選択してください</h2>
        <div id="slotsContainer" class="slots-grid"></div>
      </div>
    </div>

    <!-- Step 2: Enter Details -->
    <div id="step2">
      <div class="card">
        <h2>📝 ご予約情報の入力</h2>
        <div class="selected-slot-info" id="selectedSlotInfo"></div>
        <div class="form-group">
          <label>お名前<span class="required">*</span></label>
          <input type="text" id="name" placeholder="山田 太郎" required>
        </div>
        <div class="form-group">
          <label>メールアドレス<span class="required">*</span></label>
          <input type="email" id="email" placeholder="taro@example.com" required>
        </div>
        <div class="form-group">
          <label>会社名</label>
          <input type="text" id="company" placeholder="株式会社〇〇">
        </div>
        <div class="form-group">
          <label>ご相談内容</label>
          <textarea id="topic" placeholder="お話しされたい内容をお書きください"></textarea>
        </div>
        <button class="submit-btn" id="submitBtn" onclick="submitBooking()">予約を確定する</button>
      </div>
    </div>

    <div class="footer">
      <p>Powered by <a href="${CONFIG.COMPANY_URL}" target="_blank">${CONFIG.COMPANY_NAME}</a></p>
      <p style="margin-top:8px;">AIネイティブ開発・ITコンサルティング・DX推進</p>
    </div>
  </div>

  <script>
    const PREFILL = ${prefillJson};
    let selectedSlot = null;
    const WEB_APP_URL = '${ScriptApp.getService().getUrl()}';

    window.onload = function() {
      if (PREFILL) {
        document.getElementById('name').value = PREFILL.name || '';
        document.getElementById('email').value = PREFILL.email || '';
        document.getElementById('company').value = PREFILL.company || '';
      }
      loadSlots();
    };

    function loadSlots() {
      fetch(WEB_APP_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'getSlots' }),
      })
      .then(r => r.json())
      .then(data => {
        document.getElementById('loading').style.display = 'none';

        if (!data.slots || data.slots.length === 0) {
          document.getElementById('step1').style.display = 'block';
          document.getElementById('slotsContainer').innerHTML =
            '<div class="no-slots"><p>現在ご予約可能な枠がありません</p><p style="margin-top:8px;font-size:13px;">お手数ですが、直接お問い合わせください</p></div>';
          return;
        }

        // Group by date
        const grouped = {};
        data.slots.forEach(s => {
          if (!grouped[s.date]) grouped[s.date] = [];
          grouped[s.date].push(s);
        });

        let html = '';
        for (const date in grouped) {
          html += '<div class="date-group">';
          html += '<div class="date-label">' + date + '</div>';
          html += '<div class="time-slots">';
          grouped[date].forEach(s => {
            html += '<button class="slot-btn" onclick="selectSlot(this, \\'' +
              s.start + '\\', \\'' + s.end + '\\', \\'' + date + '\\', \\'' + s.time + '\\')">' +
              s.time + '</button>';
          });
          html += '</div></div>';
        }

        document.getElementById('slotsContainer').innerHTML = html;
        document.getElementById('step1').style.display = 'block';
      })
      .catch(err => {
        document.getElementById('loading').style.display = 'none';
        showError('空き枠の取得に失敗しました: ' + err.message);
      });
    }

    function selectSlot(btn, start, end, date, time) {
      document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSlot = { start, end, date, time };

      // Move to step 2
      document.getElementById('step1').style.display = 'none';
      document.getElementById('step2').style.display = 'block';
      document.getElementById('stepIcon1').className = 'step active';
      document.getElementById('stepIcon2').className = 'step active';
      document.getElementById('selectedSlotInfo').innerHTML =
        '<strong>📅 ' + date + ' ' + time + '</strong>（' + ${CONFIG.MEETING_DURATION_MIN} + '分間）' +
        '<br><a href="#" onclick="backToStep1();return false;" style="font-size:13px;color:#6366f1;">← 日時を変更する</a>';
    }

    function backToStep1() {
      document.getElementById('step1').style.display = 'block';
      document.getElementById('step2').style.display = 'none';
      document.getElementById('stepIcon2').className = 'step inactive';
      selectedSlot = null;
    }

    function submitBooking() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const company = document.getElementById('company').value.trim();
      const topic = document.getElementById('topic').value.trim();

      if (!name || !email) {
        showError('お名前とメールアドレスは必須です');
        return;
      }
      if (!selectedSlot) {
        showError('日時を選択してください');
        return;
      }

      const btn = document.getElementById('submitBtn');
      btn.disabled = true;
      btn.textContent = '予約を処理中...';

      fetch(WEB_APP_URL, {
        method: 'POST',
        body: JSON.stringify({
          action: 'book',
          name: name,
          email: email,
          company: company,
          topic: topic,
          slotStart: selectedSlot.start,
          slotEnd: selectedSlot.end,
        }),
      })
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          showError(data.error);
          btn.disabled = false;
          btn.textContent = '予約を確定する';
          return;
        }

        // Show success page
        document.querySelector('.container').innerHTML = getSuccessHtml(data, name, company);
      })
      .catch(err => {
        showError('予約に失敗しました: ' + err.message);
        btn.disabled = false;
        btn.textContent = '予約を確定する';
      });
    }

    function getSuccessHtml(data, name, company) {
      return '<div style="text-align:center;padding:40px 0;">' +
        '<div style="font-size:48px;margin-bottom:16px;">🎉</div>' +
        '<h1 style="font-size:24px;margin-bottom:8px;">ご予約ありがとうございます！</h1>' +
        '<p style="color:#64748b;margin-bottom:24px;">' + name + ' 様</p>' +
        '<div class="card" style="text-align:left;">' +
        '<h2>📋 ご予約内容</h2>' +
        '<p style="margin:8px 0;"><strong>📅 日時:</strong> ' + data.date + ' ' + data.time + '</p>' +
        '<p style="margin:8px 0;"><strong>📹 Google Meet:</strong> <a href="' + data.meetLink + '" target="_blank" style="color:#6366f1;">' + data.meetLink + '</a></p>' +
        '<p style="margin:8px 0;font-size:13px;color:#64748b;">※ 確認メールをお送りしました。</p>' +
        '<p style="margin:8px 0;font-size:13px;color:#64748b;">※ MTG前日にリマインドメールをお送りします。</p>' +
        '<p style="margin:8px 0;font-size:13px;color:#64748b;">※ MTG終了後、文字起こし・要約を自動でお送りします。</p>' +
        '</div>' +
        '<div class="card" style="text-align:left;margin-top:16px;">' +
        '<h2>💡 WaiWai AIについて</h2>' +
        '<p style="font-size:14px;color:#475569;margin-bottom:12px;">中小企業向けにAI導入支援・DX推進を行っています。</p>' +
        '<ul style="font-size:14px;color:#475569;padding-left:20px;">' +
        '<li>AI業務診断（単発）</li>' +
        '<li>AI導入研修</li>' +
        '<li>AI活用家庭教師（月額）</li>' +
        '<li>AIトランスフォーメーション・パートナー（月額顧問）</li>' +
        '</ul>' +
        '<p style="margin-top:12px;"><a href="${CONFIG.COMPANY_URL}" target="_blank" style="color:#6366f1;">詳しくはこちら →</a></p>' +
        '</div>' +
        '<div class="footer"><p>Powered by <a href="${CONFIG.COMPANY_URL}" target="_blank">${CONFIG.COMPANY_NAME}</a></p></div>' +
        '</div>';
    }

    function showError(msg) {
      const el = document.getElementById('error');
      el.textContent = msg;
      el.style.display = 'block';
      setTimeout(() => { el.style.display = 'none'; }, 5000);
    }
  </script>
</body>
</html>`;
}

function getCancelPageHtml_(token) {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>予約キャンセル - ${CONFIG.COMPANY_NAME}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans JP', sans-serif;
      background: #f8fafc;
      color: #1e293b;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 16px;
    }
    .card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      padding: 32px;
      max-width: 400px;
      width: 100%;
      text-align: center;
    }
    h1 { font-size: 20px; margin-bottom: 12px; }
    p { color: #64748b; font-size: 14px; margin-bottom: 20px; }
    .btn-cancel {
      padding: 12px 24px;
      background: #ef4444;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
    }
    .btn-back {
      display: inline-block;
      margin-top: 12px;
      color: #6366f1;
      font-size: 14px;
      text-decoration: none;
    }
    .result { display: none; }
  </style>
</head>
<body>
  <div class="card">
    <div id="confirmView">
      <h1>⚠️ 予約をキャンセルしますか？</h1>
      <p>キャンセルすると、カレンダーの予定も削除されます。</p>
      <button class="btn-cancel" onclick="doCancel()">キャンセルする</button>
      <br>
      <a href="javascript:history.back()" class="btn-back">← 戻る</a>
    </div>
    <div id="resultView" class="result">
      <h1 id="resultTitle"></h1>
      <p id="resultMsg"></p>
    </div>
  </div>
  <script>
    function doCancel() {
      fetch('${ScriptApp.getService().getUrl()}', {
        method: 'POST',
        body: JSON.stringify({ action: 'cancel', token: '${token}' }),
      })
      .then(r => r.json())
      .then(data => {
        document.getElementById('confirmView').style.display = 'none';
        document.getElementById('resultView').style.display = 'block';
        if (data.success) {
          document.getElementById('resultTitle').textContent = '✅ キャンセル完了';
          document.getElementById('resultMsg').textContent = '予約をキャンセルしました。';
        } else {
          document.getElementById('resultTitle').textContent = '❌ エラー';
          document.getElementById('resultMsg').textContent = data.error;
        }
      });
    }
  </script>
</body>
</html>`;
}
