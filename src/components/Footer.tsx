import Link from 'next/link';

const footerGroups = [
    {
        title: 'サービス',
        links: [
            { href: '/services', label: 'AI導入支援' },
            { href: '/services', label: 'AIシステム開発' },
            { href: '/services', label: '業務自動化' },
        ],
    },
    {
        title: 'ナレッジ',
        links: [
            { href: '/atp', label: 'AI顧問' },
            { href: '/blog', label: 'ブログ' },
        ],
    },
    {
        title: '会社情報',
        links: [
            { href: '/contact', label: 'お問い合わせ' },
            { href: '/company', label: '会社概要' },
            { href: '/privacy', label: 'プライバシーポリシー' },
            { href: '/commercial-act', label: '特商法表記' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-slate-950 text-white">
            <div
                className="absolute inset-0 opacity-45"
                aria-hidden="true"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(37,99,235,0.22) 0%, transparent 42%), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: 'auto, 44px 44px, 44px 44px',
                }}
            />
            <div className="relative z-10 mx-auto max-w-[912px] px-5 py-10 sm:px-6 lg:px-0">
                <div>
                    <Link href="/" className="inline-flex">
                        <img
                            src="/brand/logo-horizontal-dark.png"
                            alt="WaiWai AI"
                            className="h-12 w-auto object-contain sm:h-14"
                        />
                    </Link>
                    <h2 className="mt-4 max-w-xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                        AIを、現場で使える仕組みに。
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                        中小企業のAI導入を、戦略設計から実装・運用まで支援するAIネイティブ開発会社です。
                    </p>
                </div>

                <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
                    {footerGroups.map((group) => (
                        <div key={group.title}>
                            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{group.title}</h4>
                            <ul className="space-y-2.5" role="list">
                                {group.links.map((link) => (
                                    <li key={`${group.title}-${link.label}`}>
                                        <Link href={link.href} className="text-sm leading-5 text-slate-200 transition-colors hover:text-white">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© WaiWai AI, Inc. All Rights Reserved.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link href="/privacy" className="hover:text-slate-200">Privacy</Link>
                        <Link href="/terms" className="hover:text-slate-200">Terms</Link>
                        <Link href="/commercial-act" className="hover:text-slate-200">Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
