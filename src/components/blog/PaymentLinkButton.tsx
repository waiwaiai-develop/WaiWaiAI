import { CreditCard, ArrowUpRight } from 'lucide-react';

interface PaymentLinkButtonProps {
  href: string;
  label: string;
  price: string;
}

export default function PaymentLinkButton({ href, label, price }: PaymentLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 my-6 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        <CreditCard className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <span className="block font-bold text-slate-900 text-lg">{label}</span>
        <span className="text-blue-600 font-bold">{price}</span>
      </div>
      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:rotate-45 transition-all" />
    </a>
  );
}
