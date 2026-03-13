import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// APIキーがない場合はResendを初期化しない
const resend = process.env.RESEND_API_KEY?.startsWith('re_') 
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

export async function POST(req: Request) {
    try {
        // Resend未設定時はサービス停止中を返す
        if (!resend) {
            return NextResponse.json(
                { error: '現在お問い合わせフォームは停止中です。直接メールでご連絡ください。' },
                { status: 503 }
            );
        }
        const { company, name, email, phone, category, message } =
            await req.json();

        if (!company || !name || !email || !category || !message) {
            return NextResponse.json(
                { error: '必須項目が不足しています' },
                { status: 400 }
            );
        }

        const fromAddress = process.env.EMAIL_FROM || 'noreply@example.com';
        const toAddress = process.env.EMAIL_TO || '';

        // 管理者への通知メール
        await resend.emails.send({
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
        await resend.emails.send({
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

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: '送信に失敗しました' },
            { status: 500 }
        );
    }
}
