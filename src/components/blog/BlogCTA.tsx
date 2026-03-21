import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogCTA() {
  return (
    <div className="mt-16 bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-12 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
        AIの力で、あなたのビジネスも変えませんか？
      </h3>
      <p className="text-slate-500 font-normal mb-8 max-w-xl mx-auto leading-relaxed">
        WaiWai AIでは、業界特化のAI導入コンサルティングから開発まで一気通貫でサポート。まずは無料相談からお気軽にどうぞ。
      </p>
      <Link
        href="/#contact"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
      >
        無料で相談する
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
