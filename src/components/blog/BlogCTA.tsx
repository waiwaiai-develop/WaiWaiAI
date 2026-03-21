import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogCTA() {
  return (
    <div className="mt-16 bg-stone-950 border border-stone-800 p-8 md:p-12 text-center relative overflow-hidden">
      <div className="grain-overlay" />
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          AIの力で、あなたのビジネスも変えませんか？
        </h3>
        <p className="text-stone-400 font-medium mb-8 max-w-xl mx-auto leading-relaxed">
          WaiWai AIでは、業界特化のAI導入コンサルティングから開発まで一気通貫でサポート。まずは無料相談からお気軽にどうぞ。
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-stone-950 font-bold hover:bg-amber-400 transition-colors"
        >
          無料で相談する
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
