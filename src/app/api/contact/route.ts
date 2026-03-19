import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// APIキーがない場合はResendを初期化しない
const resend = process.env.RESEND_API_KEY?.startsWith('re_')
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

/**
 * スプレッドシートにデータを転記（GAS Web App経由）
 * 失敗してもメール送信には影響させない
 */
async function writeToSpreadsheet(data: Record<string, string>) {
    const gasUrl = process.env.GAS_WEBHOOK_URL;
    if (!gasUrl) return;

    try {
        await fetch(gasUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.error('Spreadsheet write error:', error);
    }
}

/**
 * Telegramに通知を送信
 * 失敗してもフォーム送信には影響させない
 */
async function notifyTelegram(data: { company: string; name: string; email: string; phone?: string; category: string; message: string }) {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!botToken || !chatId) return;

    const text = [
        '📩 新しいお問い合わせがありました',
        '',
        `🏢 ${data.company}`,
        `👤 ${data.name} 様`,
        `📧 ${data.email}`,
        data.phone ? `📞 ${data.phone}` : '',
        `📋 ${data.category}`,
        '',
        '💬 内容:',
        data.message,
    ].filter(Boolean).join('\n');

    try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text }),
        });
    } catch (error) {
        console.error('Telegram notify error:', error);
    }
}

export async function POST(req: Request) {
    try {
        const { company, name, email, phone, category, message } =
            await req.json();

        if (!company || !name || !email || !category || !message) {
            return NextResponse.json(
                { error: '必須項目が不足しています' },
                { status: 400 }
            );
        }

        // スプレッドシートへの転記（非同期・失敗しても続行）
        const sheetPromise = writeToSpreadsheet({ company, name, email, phone, category, message });

        const fromAddress = process.env.EMAIL_FROM || 'noreply@example.com';
        const toAddress = process.env.EMAIL_TO || '';

        // Telegram通知（Resendの有無に関わらず送信）
        const telegramNotify = notifyTelegram({ company, name, email, phone, category, message });

        // Resend未設定時はスプレッドシート転記 + Telegram通知のみ実行
        if (!resend) {
            await Promise.all([sheetPromise, telegramNotify]);
            return NextResponse.json({ success: true });
        }

        // 管理者への通知メール
        const adminMailPromise = resend.emails.send({
            from: fromAddress,
            to: toAddress,
            subject: `【お問い合わせ】${company} ${name}様`,
            text: [
                `会社名: ${company}`,
                `担当者名: ${name}`,
                `メール: ${email}`,
                `電話番号: ${phone || '未入力'}`,
                `相談種別: ${category}`,
                '',
                '【お問い合わせ内容】',
                message,
            ].join('\n'),
        });

        // ユーザーへの自動返信メール
        const userMailPromise = resend.emails.send({
            from: fromAddress,
            to: email,
            subject: '【WaiWaiAI】お問い合わせありがとうございます',
            text: [
                `${name} 様`,
                '',
                'お問い合わせいただきありがとうございます。',
                '以下の内容で承りました。',
                '',
                '━━━━━━━━━━━━━━━━━━━━',
                `ご相談種別: ${category}`,
                `お問い合わせ内容:`,
                message,
                '━━━━━━━━━━━━━━━━━━━━',
                '',
                '担当者より通常1〜2営業日以内にご返信いたします。',
                'しばらくお待ちくださいませ。',
                '',
                '─────────────',
                'WaiWaiAI',
            ].join('\n'),
        });

        // メール2通 + スプレッドシート転記 + Telegram通知を並列実行
        await Promise.all([adminMailPromise, userMailPromise, sheetPromise, telegramNotify]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: '送信に失敗しました' },
            { status: 500 }
        );
    }
}
