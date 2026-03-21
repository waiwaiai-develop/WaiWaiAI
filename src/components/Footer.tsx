import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative overflow-hidden pt-16 md:pt-20 pb-10 bg-slate-900">
            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-6 group relative w-[160px] h-[48px]">
                            <Image src="/logo-horizontal.png" alt="WaiWai AI" fill className="object-contain object-left group-hover:opacity-80 transition-opacity brightness-0 invert" sizes="160px" />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-md">
                            AIネイティブ開発会社。AIシステム開発から導入コンサルティングまで、ビジネスのDX推進を伴走します。
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-300 mb-4 uppercase tracking-wider text-xs">Contents</h4>
                        <ul className="space-y-2.5" role="list">
                            <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors text-sm">ブログ</Link></li>
                            <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">デジタル商品</Link></li>
                            <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors text-sm">サービス</Link></li>
                            <li><Link href="/cases" className="text-slate-400 hover:text-white transition-colors text-sm">導入事例</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-300 mb-4 uppercase tracking-wider text-xs">Legal</h4>
                        <ul className="space-y-2.5" role="list">
                            <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">プライバシーポリシー</Link></li>
                            <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">利用規約</Link></li>
                            <li><Link href="/commercial-act" className="text-slate-400 hover:text-white transition-colors text-sm">特商法表記</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-800">
                    <p className="text-slate-500 text-xs font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} WaiWai AI Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
