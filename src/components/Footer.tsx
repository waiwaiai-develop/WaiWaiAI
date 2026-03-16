import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative overflow-hidden pt-16 md:pt-24 pb-12">
            {/* Glass background */}
            <div className="absolute inset-0 glass-subtle" />

            <div className="container mx-auto px-4 md:px-8 relative z-10 text-slate-600">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    <div className="md:col-span-5 pr-8">
                        <Link href="/" className="inline-block mb-8 group relative w-[180px] h-[56px]">
                            <Image src="/logo-horizontal.png" alt="WaiWai AI" fill className="object-contain object-left group-hover:opacity-80 transition-opacity" sizes="180px" />
                        </Link>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                            AIネイティブ開発会社。最先端の技術で、あなたのビジョンを形に。AIシステム開発から導入コンサルティングまで、確かな実装力でビジネスのDX推進を伴走します。
                        </p>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Menu</h4>
                        <ul className="space-y-3" role="list">
                            <li><Link href="/services" aria-label="ソリューションページへ" className="text-slate-600 hover:text-blue-600 transition-colors block">ソリューション</Link></li>
                            <li><Link href="/cases" aria-label="導入実績ページへ" className="text-slate-600 hover:text-blue-600 transition-colors block">導入実績</Link></li>
                            <li><Link href="/company" aria-label="会社概要ページへ" className="text-slate-600 hover:text-blue-600 transition-colors block">会社概要</Link></li>
                            <li><Link href="/#contact" aria-label="お問い合わせフォームへ" className="text-slate-600 hover:text-blue-600 transition-colors block">お問い合わせ</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Legal</h4>
                        <ul className="space-y-3" role="list">
                            <li><Link href="/privacy" aria-label="プライバシーポリシーページへ" className="text-slate-600 hover:text-blue-600 transition-colors block">プライバシーポリシー</Link></li>
                            <li><Link href="/terms" aria-label="利用規約ページへ" className="text-slate-600 hover:text-blue-600 transition-colors block">利用規約</Link></li>
                            <li><Link href="/commercial-act" aria-label="特定商取引法に基づく表記ページへ" className="text-slate-600 hover:text-blue-600 transition-colors block">特商法表記</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/40 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm font-bold tracking-wide">
                        &copy; {new Date().getFullYear()} WaiWai AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
