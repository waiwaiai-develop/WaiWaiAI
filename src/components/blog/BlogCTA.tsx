import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogCTA() {
  return (
    <div className="mt-16 bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl border border-blue-100 p-8 md:p-12 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
        AIの力で、あなたのビジネスも変えませんか？
      </h3>
      <p className="text-slate-600 font-medium mb-8 max-w-xl mx-auto leading-relaxed">
        WaiWai AIでは、業界特化のAI導入コンサルティングから開発まで一気通貫でサポート。まずは無料相談からお気軽にどうぞ。
      </p>
      <Link
        href="/#contact"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold shadow-[0_4px_16px_0_rgba(37,99,235,0.4)] hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 transition-all"
      >
        無料で相談する
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}
