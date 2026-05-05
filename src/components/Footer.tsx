import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

const footerGroups = [
    {
        title: 'サービス',
        links: [
            { href: '/services', label: 'AI導入コンサルティング' },
            { href: '/services', label: '業務自動化' },
            { href: '/services', label: 'AIシステム開発' },
            { href: '/atp', label: '運用サポート' },
        ],
    },
    {
        title: 'AI顧問',
        links: [
            { href: '/atp', label: 'AI顧問とは' },
            { href: '/atp#pricing', label: '支援内容' },
            { href: '/atp#pricing', label: '料金プラン' },
        ],
    },
    {
        title: '導入事例',
        links: [
            { href: '/cases', label: 'すべての事例を見る' },
            { href: '/cases', label: '業界別事例' },
        ],
    },
    {
        title: '会社概要',
        links: [
            { href: '/company', label: 'ミッション' },
            { href: '/company', label: 'メンバー' },
            { href: '/commercial-act', label: '採用情報' },
        ],
    },
    {
        title: 'リソース',
        links: [
            { href: '/blog', label: 'ブログ' },
            { href: '/privacy', label: 'お知らせ' },
            { href: '/terms', label: '資料ダウンロード' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-slate-200 bg-white pt-12 pb-8">
            <div className="relative z-10 mx-auto max-w-[912px] px-5 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[230px_1fr_170px]">
                    <div>
                        <Link href="/" className="relative mb-5 inline-block h-[42px] w-[150px] group">
                            <Image src="/logo-horizontal.png" alt="WaiWai AI" fill className="object-contain object-left transition-opacity group-hover:opacity-80" sizes="150px" />
                        </Link>
                        <p className="max-w-xs text-sm leading-7 text-slate-600">
                            技術で、ビジネスの可能性を解放する。AIとテクノロジーの力で、人と組織が本来の力を発揮できる未来をつくります。
                        </p>
                        <p className="mt-5 text-xs text-slate-500">
                            © WaiWai AI, Inc. All Rights Reserved.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-slate-200 md:grid-cols-5 lg:border-l lg:pl-10">
                        {footerGroups.map((group) => (
                            <div key={group.title}>
                                <h4 className="mb-4 text-xs font-bold text-slate-950">{group.title}</h4>
                                <ul className="space-y-3" role="list">
                                    {group.links.map((link) => (
                                        <li key={`${group.title}-${link.label}`}>
                                            <Link href={link.href} className="text-xs leading-5 text-slate-500 transition-colors hover:text-blue-700">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-start lg:justify-end">
                        <Link
                            href="/booking"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-blue-700 px-6 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                        >
                            <Mail className="h-5 w-5" />
                            お問い合わせ
                        </Link>
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 pt-6 text-xs text-slate-500">
                    <Link href="/privacy" className="hover:text-blue-700">プライバシーポリシー</Link>
                    <Link href="/terms" className="hover:text-blue-700">利用規約</Link>
                    <Link href="/commercial-act" className="hover:text-blue-700">特商法表記</Link>
                </div>
            </div>
        </footer>
    );
}
