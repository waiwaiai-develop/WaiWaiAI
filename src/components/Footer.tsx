import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-slate-200 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10 text-slate-600">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    <div className="md:col-span-5 pr-8">
                        <Link to="/" className="flex items-center gap-3 mb-8 text-slate-900 group w-max">
                            <div className="bg-slate-50 p-2 rounded-xl border border-slate-200 group-hover:bg-slate-100 transition-colors backdrop-blur-sm">
                                <img src={logo} alt="WaiWai AI Logo" className="w-8 h-8 object-contain" />
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                                WaiWai AI
                            </span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                            本質的な課題解決を導くテクノロジーパートナー。AIの導入コンサルティングから、堅牢なシステム開発、業務プロセスの可視化と自動化まで、企業のDX推進を強力に支援します。
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Services</h4>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-slate-500 hover:text-sky-600 transition-colors block">ソリューション</Link></li>
                            <li><Link to="/services#ai-solutions" className="text-slate-500 hover:text-sky-600 transition-colors block">AI開発</Link></li>
                            <li><Link to="/services#system-development" className="text-slate-500 hover:text-sky-600 transition-colors block">システム開発</Link></li>
                            <li><Link to="/services#dx-automation" className="text-slate-500 hover:text-sky-600 transition-colors block">RPA導入</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
                        <ul className="space-y-3">
                            <li><Link to="/cases" className="text-slate-500 hover:text-sky-600 transition-colors block">導入実績</Link></li>
                            <li><Link to="/company" className="text-slate-500 hover:text-sky-600 transition-colors block">会社概要</Link></li>
                            <li><Link to="/#contact" className="text-slate-500 hover:text-sky-600 transition-colors block">お問い合わせ</Link></li>
                            <li><Link to="/#news" className="text-slate-500 hover:text-sky-600 transition-colors text-sm font-medium">お知らせ・ブログ</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link to="/privacy" className="text-slate-500 hover:text-sky-600 transition-colors text-sm font-medium">プライバシーポリシー</Link></li>
                            <li><Link to="/terms" className="text-slate-500 hover:text-sky-600 transition-colors text-sm font-medium">利用規約</Link></li>
                            <li><Link to="/commercial-act" className="text-slate-500 hover:text-sky-600 transition-colors text-sm font-medium">特商法表記</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 text-sm font-bold tracking-wide">
                        © {new Date().getFullYear()} WaiWai AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
