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
      className="group flex items-center gap-4 my-6 p-5 bg-stone-50 border border-stone-200 hover:border-amber-300 transition-all"
    >
      <div className="w-12 h-12 bg-amber-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        <CreditCard className="w-6 h-6 text-stone-950" />
      </div>
      <div className="flex-1">
        <span className="block font-bold text-stone-900 text-lg">{label}</span>
        <span className="text-amber-600 font-bold">{price}</span>
      </div>
      <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-amber-500 group-hover:rotate-45 transition-all" />
    </a>
  );
}
