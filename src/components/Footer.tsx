import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="pt-16 md:pt-24 pb-12 border-t border-white/[0.06] relative overflow-hidden bg-[#0f1115]">
            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    <div className="md:col-span-5 pr-8">
                        <Link href="/" className="inline-block mb-8 group">
                            <img
                                src="/logo-horizontal.png"
                                alt="WaiWai AI"
                                className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity brightness-0 invert"
                            />
                        </Link>
                        <p className="text-[#5a5a6e] text-sm leading-relaxed mb-6 font-medium">
                            AIネイティブ開発会社。最先端の技術で、あなたのビジョンを形に。
                            AIシステム開発から導入コンサルティングまで、確かな実装力でビジネスのDX推進を伴走します。
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="font-semibold text-[#8b8b9e] mb-6 uppercase tracking-wider text-xs">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/services" className="text-[#5a5a6e] hover:text-white transition-colors text-sm">ソリューション</Link></li>
                            <li><Link href="/services#ai-solutions" className="text-[#5a5a6e] hover:text-white transition-colors text-sm">AI開発</Link></li>
                            <li><Link href="/services#system-development" className="text-[#5a5a6e] hover:text-white transition-colors text-sm">システム開発</Link></li>
                            <li><Link href="/services#dx-automation" className="text-[#5a5a6e] hover:text-white transition-colors text-sm">RPA導入</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-semibold text-[#8b8b9e] mb-6 uppercase tracking-wider text-xs">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/cases" className="text-[#5a5a6e] hover:text-white transition-colors text-sm">導入実績</Link></li>
                            <li><Link href="/company" className="text-[#5a5a6e] hover:text-white transition-colors text-sm">会社概要</Link></li>
                            <li><Link href="/#contact" className="text-[#5a5a6e] hover:text-white transition-colors text-sm">お問い合わせ</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-semibold text-[#8b8b9e] mb-6 uppercase tracking-wider text-xs">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/privacy" className="text-[#5a5a6e] hover:text-white transition-colors text-sm">プライバシーポリシー</Link></li>
                            <li><Link href="/terms" className="text-[#5a5a6e] hover:text-white transition-colors text-sm">利用規約</Link></li>
                            <li><Link href="/commercial-act" className="text-[#5a5a6e] hover:text-white transition-colors text-sm">特商法表記</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#5a5a6e] text-sm font-medium">
                        &copy; {new Date().getFullYear()} WaiWai AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
