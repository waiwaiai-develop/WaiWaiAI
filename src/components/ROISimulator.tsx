'use client';

import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeJapaneseYen,
  Calculator,
  CheckCircle2,
  Clock,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

type WorkType = {
  id: string;
  label: string;
  rate: number;
  description: string;
};

const WORK_TYPES: WorkType[] = [
  { id: 'data-entry', label: 'データ入力・転記', rate: 0.7, description: '請求書処理、データ移行、フォーム入力など' },
  { id: 'report', label: 'レポート・資料作成', rate: 0.5, description: '報告書、提案書、議事録の作成など' },
  { id: 'support', label: '問い合わせ・顧客対応', rate: 0.4, description: 'メール返信、FAQ、チャット対応など' },
  { id: 'research', label: '情報収集・リサーチ', rate: 0.5, description: '市場調査、競合分析、情報整理など' },
  { id: 'planning', label: '企画・分析', rate: 0.2, description: '戦略立案、データ分析、KPI設計など' },
  { id: 'general', label: 'その他の定型業務', rate: 0.3, description: 'スケジュール管理、メール仕分けなど' },
];

function formatYen(amount: number): string {
  if (amount >= 10000) {
    const man = amount / 10000;
    const rounded = Math.round(man * 10) / 10;
    const display =
      rounded % 1 === 0
        ? rounded.toLocaleString()
        : rounded.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    return `${display}万円`;
  }
  return `${amount.toLocaleString()}円`;
}

type SliderFieldProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
  formatDisplay?: (value: number) => string;
};

function SliderField({
  id,
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
  formatDisplay,
}: SliderFieldProps) {
  const percentage = ((value - min) / (max - min)) * 100;
  const displayValue = formatDisplay ? formatDisplay(value) : `${value.toLocaleString()}${unit}`;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-xs font-bold text-slate-700">
          {label}
        </label>
        <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tabular-nums text-blue-700">
          {displayValue}
        </span>
      </div>

      <div className="relative py-2">
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-blue-700 transition-all duration-150"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          aria-label={label}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={displayValue}
        />
        <div
          className="pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-blue-700 shadow-[0_6px_16px_-8px_rgba(0,45,150,0.8)] transition-all duration-150"
          style={{ left: `calc(${percentage}% - 8px)` }}
        />
      </div>

      <div className="mt-1 flex justify-between text-[11px] font-medium text-slate-400">
        <span>
          {min.toLocaleString()}
          {unit}
        </span>
        <span>
          {max.toLocaleString()}
          {unit}
        </span>
      </div>
    </div>
  );
}

export default function ROISimulator() {
  const [employees, setEmployees] = useState(10);
  const [hoursPerPerson, setHoursPerPerson] = useState(40);
  const [hourlyRate, setHourlyRate] = useState(2500);
  const [selectedWorkType, setSelectedWorkType] = useState<string>('general');

  const currentWorkType = WORK_TYPES.find((workType) => workType.id === selectedWorkType) ?? WORK_TYPES[5];

  const calculate = useCallback(() => {
    const reducedHoursMonthly = hoursPerPerson * employees * currentWorkType.rate;
    const costReductionMonthly = reducedHoursMonthly * hourlyRate;
    const costReductionAnnual = costReductionMonthly * 12;
    return { reducedHoursMonthly, costReductionMonthly, costReductionAnnual };
  }, [employees, hoursPerPerson, hourlyRate, currentWorkType.rate]);

  const { reducedHoursMonthly, costReductionMonthly, costReductionAnnual } = calculate();
  const totalHoursMonthly = employees * hoursPerPerson;
  const remainingHoursMonthly = Math.max(totalHoursMonthly - reducedHoursMonthly, 0);
  const afterBarPercent = totalHoursMonthly > 0 ? Math.max((remainingHoursMonthly / totalHoursMonthly) * 100, 10) : 10;
  const monthlySalaryDisplay = formatYen(hourlyRate * 160);
  const annualMan = Math.round((costReductionAnnual / 10000) * 10) / 10;
  const annualManDisplay =
    annualMan % 1 === 0
      ? annualMan.toLocaleString()
      : annualMan.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-14">
      <div className="mx-auto max-w-[912px] px-5 sm:px-6 lg:px-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-7 text-center"
        >
          <motion.p variants={fadeInUp} className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Cost Simulator
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl"
          >
            AIでどれくらい削減できるか、
            <span className="text-blue-700">かんたん試算。</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-3 text-sm leading-7 text-slate-600">
            対象業務、人数、作業時間を入れるだけで、月間・年間の削減見込みを確認できます。
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-5 grid max-w-2xl gap-2 text-left sm:grid-cols-3"
          >
            {['1. 業務を選ぶ', '2. 作業量を入れる', '3. 削減額を見る'].map((step) => (
              <div key={step} className="rounded-full border border-blue-100 bg-blue-50/60 px-4 py-2 text-center text-xs font-bold text-blue-800">
                {step}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-[0_24px_70px_-42px_rgba(15,23,42,0.55)]"
        >
          <div className="grid gap-0 lg:grid-cols-[340px_1fr]">
            <div className="border-b border-blue-100 bg-gradient-to-b from-white to-blue-50/40 p-5 sm:p-6 lg:border-b-0 lg:border-r">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-700 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.7)] ring-1 ring-blue-100">
                  <Calculator className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-950">試算条件</h3>
                  <p className="text-xs leading-5 text-slate-500">3つだけ動かせば概算できます。</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Zap className="h-4 w-4 text-blue-700" />
                  AIに置き換えたい業務
                </p>
                <div className="grid gap-2">
                  {WORK_TYPES.map((workType) => {
                    const active = selectedWorkType === workType.id;
                    return (
                      <button
                        key={workType.id}
                        type="button"
                        onClick={() => setSelectedWorkType(workType.id)}
                        className={`flex items-center justify-between rounded-lg border px-3 py-2.5 text-left transition ${
                          active
                            ? 'border-blue-700 bg-white text-blue-800 shadow-[0_10px_24px_-20px_rgba(0,45,150,0.8)]'
                            : 'border-blue-100 bg-white/70 text-slate-700 hover:border-blue-300 hover:bg-white'
                        }`}
                      >
                        <span className="text-xs font-bold leading-tight">{workType.label}</span>
                        <span className={`text-[10px] font-bold ${active ? 'text-blue-700' : 'text-slate-400'}`}>
                          {Math.round(workType.rate * 100)}%
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-blue-100 bg-white p-4">
                <SliderField
                  id="roi-employees"
                  label="従業員数"
                  value={employees}
                  min={1}
                  max={100}
                  step={1}
                  unit="名"
                  onChange={setEmployees}
                />
                <SliderField
                  id="roi-hours"
                  label="月間の対象業務時間"
                  value={hoursPerPerson}
                  min={10}
                  max={160}
                  step={5}
                  unit="時間"
                  onChange={setHoursPerPerson}
                />
                <SliderField
                  id="roi-rate"
                  label="平均時給"
                  value={hourlyRate}
                  min={1000}
                  max={5000}
                  step={100}
                  unit="円"
                  onChange={setHourlyRate}
                  formatDisplay={(value) => `${value.toLocaleString()}円`}
                />
                <div className="rounded-lg bg-slate-50 px-3 py-2">
                  <p className="text-[11px] font-bold leading-5 text-slate-500">
                    月給換算:
                    <span className="ml-2 text-blue-700">約{monthlySalaryDisplay}</span>
                    <span className="ml-1 font-medium text-slate-400">（160時間/月で計算）</span>
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[11px] leading-5 text-slate-400">
                ※ 削減率は業務タイプ別の目安値です。実際の効果は業務内容や導入方法により異なります。
              </p>
            </div>

            <div className="relative overflow-hidden bg-white p-5 sm:p-6">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-100/70 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Simulation Result</p>
                    <h3 className="mt-2 text-xl font-bold text-slate-950">Before / After</h3>
                  </div>
                  <span className="hidden rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 sm:inline-flex">
                    {currentWorkType.label}
                  </span>
                </div>

                <div className="mb-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 p-5 text-white shadow-[0_18px_40px_-30px_rgba(0,45,150,0.9)]">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-bold text-blue-100">年間削減額の目安</p>
                      <p className="mt-1 text-5xl font-bold leading-none tabular-nums">
                        {annualManDisplay}
                        <span className="ml-1 text-2xl">万円</span>
                      </p>
                    </div>
                    <p className="text-xs font-bold leading-5 text-blue-100 sm:text-right">
                      月間 {formatYen(Math.round(costReductionMonthly))}
                      <br />
                      削減率 {Math.round(currentWorkType.rate * 100)}% で試算
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_18px_45px_-36px_rgba(15,23,42,0.6)]">
                  <div className="mb-5 flex items-center justify-between text-center">
                    <div className="w-[38%]">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Before</p>
                      <p className="mt-1 text-[11px] font-bold text-slate-400">月間の対象業務時間</p>
                      <p className="mt-2 text-sm font-bold text-slate-700">
                        約 <span className="text-4xl text-slate-950">{Math.round(totalHoursMonthly).toLocaleString()}</span> 時間
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-2xl font-light text-blue-700">
                      →
                    </div>
                    <div className="w-[38%]">
                      <p className="text-xs font-bold uppercase tracking-wide text-blue-700">After</p>
                      <p className="mt-1 text-[11px] font-bold text-blue-400">AI導入後の残り時間</p>
                      <p className="mt-2 text-sm font-bold text-blue-800">
                        約 <span className="text-4xl text-blue-700">{Math.round(remainingHoursMonthly).toLocaleString()}</span> 時間
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-[1fr_1fr] items-end gap-8 border-t border-slate-100 pt-5">
                    <div>
                      <div className="mx-auto flex h-28 w-14 items-end justify-center rounded-t-2xl bg-slate-100">
                        <div className="h-full w-full rounded-t-2xl bg-slate-200" />
                      </div>
                      <p className="mt-3 text-center text-xs font-bold text-slate-500">現在の対象業務</p>
                    </div>
                    <div>
                      <div className="mx-auto flex h-28 w-14 items-end justify-center rounded-t-2xl bg-blue-50">
                        <div
                          className="w-full rounded-t-2xl bg-blue-700 transition-all duration-300"
                          style={{ height: `${afterBarPercent}%` }}
                        />
                      </div>
                      <p className="mt-3 text-center text-xs font-bold text-blue-700">AI導入後の目安</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                    <Clock className="mb-2 h-4 w-4 text-blue-700" />
                    <p className="text-[11px] font-bold text-slate-500">月間削減時間</p>
                    <p className="mt-1 text-xl font-bold text-slate-950">{Math.round(reducedHoursMonthly).toLocaleString()}時間</p>
                  </div>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                    <BadgeJapaneseYen className="mb-2 h-4 w-4 text-blue-700" />
                    <p className="text-[11px] font-bold text-slate-500">月間削減額</p>
                    <p className="mt-1 text-xl font-bold text-slate-950">{formatYen(Math.round(costReductionMonthly))}</p>
                  </div>
                  <div className="rounded-lg border border-blue-700 bg-blue-700 p-4 text-white">
                    <TrendingUp className="mb-2 h-4 w-4 text-blue-100" />
                    <p className="text-[11px] font-bold text-blue-100">年間削減額</p>
                    <p className="mt-1 text-xl font-bold">{formatYen(Math.round(costReductionAnnual))}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-950">この試算結果で相談する</p>
                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        実際にどの業務からAI化すべきか、30分で整理します。
                      </p>
                    </div>
                    <a
                      href="/booking"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-800"
                    >
                      無料相談する
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-slate-500">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  人員削減ではなく、定型作業を減らして現場の余白を作るための試算です。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
