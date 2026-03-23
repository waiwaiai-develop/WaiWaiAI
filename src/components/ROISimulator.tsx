'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calculator,
    Clock,
    TrendingUp,
    Users,
    ArrowRight,
    BadgeJapaneseYen,
    CheckCircle2,
    Shield,
    Zap,
    Brain,
    Globe,
    X,
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

function formatYen(amount: number): string {
    if (amount >= 10000) {
        const man = amount / 10000;
        const rounded = Math.round(man * 10) / 10;
        const display = rounded % 1 === 0
            ? rounded.toLocaleString()
            : rounded.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
        return `${display}万円`;
    }
    return `${amount.toLocaleString()}円`;
}

// --- Work type definitions with AI reduction coefficients ---

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

// --- Value proposition items ---

const VALUE_ITEMS = [
    {
        icon: <Clock className="w-5 h-5" />,
        title: '「また残業か…」が減る',
        description: '毎日の転記・集計・報告書。AIに任せて定時で帰れる',
    },
    {
        icon: <Shield className="w-5 h-5" />,
        title: '「あ、やっちゃった」が減る',
        description: '入力ミスや確認漏れ。AIが何度でも同じ精度でチェック',
    },
    {
        icon: <Globe className="w-5 h-5" />,
        title: '人を増やさず回せる',
        description: '「人手が足りない」を採用ではなくAIで解決する選択肢',
    },
    {
        icon: <Brain className="w-5 h-5" />,
        title: '辞めても困らない',
        description: '「あの人しか知らない」をなくす。ノウハウがAIに残る',
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: '判断が早くなる',
        description: '売上データも競合情報も、聞けばすぐ出てくる状態に',
    },
];

// --- Sub-components ---

type SliderFieldProps = {
    id: string;
    label: string;
    icon: React.ReactNode;
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
    icon,
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
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <label
                    htmlFor={id}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                >
                    <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                            background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                            border: '1px solid rgba(59,130,246,0.15)',
                        }}
                    >
                        {icon}
                    </span>
                    {label}
                </label>
                <span className="text-base font-bold text-blue-600 tabular-nums">
                    {displayValue}
                </span>
            </div>
            <div className="relative">
                <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: 'rgba(226,232,240,0.8)' }}
                >
                    <div
                        className="h-full rounded-full transition-all duration-150"
                        style={{
                            width: `${percentage}%`,
                            background: 'linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%)',
                        }}
                    />
                </div>
                <input
                    id={id}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    aria-label={label}
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={value}
                    aria-valuetext={displayValue}
                />
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-md transition-all duration-150 pointer-events-none"
                    style={{
                        left: `calc(${percentage}% - 10px)`,
                        background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                        boxShadow: '0 2px 8px rgba(37,99,235,0.35)',
                    }}
                />
            </div>
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>{min.toLocaleString()}{unit}</span>
                <span>{max.toLocaleString()}{unit}</span>
            </div>
        </div>
    );
}

type ResultCardProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
    sub?: string;
    highlight?: boolean;
};

function ResultCard({ icon, label, value, sub, highlight }: ResultCardProps) {
    return (
        <div
            className="rounded-2xl p-4 flex items-start gap-3 transition-all duration-200"
            style={
                highlight
                    ? {
                          background: 'linear-gradient(135deg, rgba(37,99,235,0.07) 0%, rgba(14,165,233,0.05) 100%)',
                          border: '1.5px solid rgba(37,99,235,0.2)',
                      }
                    : {
                          background: 'rgba(248,250,252,0.7)',
                          border: '1px solid rgba(226,232,240,0.7)',
                      }
            }
        >
            <span
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={
                    highlight
                        ? {
                              background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                              boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
                          }
                        : {
                              background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                              border: '1px solid rgba(59,130,246,0.15)',
                          }
                }
            >
                <span className={highlight ? 'text-white' : 'text-blue-600'}>{icon}</span>
            </span>
            <div className="min-w-0">
                <p className="text-xs font-medium text-slate-500 leading-tight">{label}</p>
                <p
                    className={`text-xl font-bold tabular-nums leading-tight mt-0.5 ${
                        highlight ? 'text-blue-700' : 'text-slate-800'
                    }`}
                >
                    {value}
                </p>
                {sub && <p className="text-[11px] text-slate-400 mt-0.5">{sub}</p>}
            </div>
        </div>
    );
}

// --- Simulator content (shared between inline & modal) ---

type SimulatorContentProps = {
    employees: number;
    setEmployees: (v: number) => void;
    hoursPerPerson: number;
    setHoursPerPerson: (v: number) => void;
    hourlyRate: number;
    setHourlyRate: (v: number) => void;
    selectedWorkType: string;
    setSelectedWorkType: (v: string) => void;
    currentWorkType: WorkType;
    reducedHoursMonthly: number;
    costReductionMonthly: number;
    costReductionAnnual: number;
    annualManDisplay: string;
    compact?: boolean;
};

function SimulatorContent({
    employees,
    setEmployees,
    hoursPerPerson,
    setHoursPerPerson,
    hourlyRate,
    setHourlyRate,
    selectedWorkType,
    setSelectedWorkType,
    currentWorkType,
    reducedHoursMonthly,
    costReductionMonthly,
    costReductionAnnual,
    annualManDisplay,
    compact = false,
}: SimulatorContentProps) {
    return (
        <div
            className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                border: '1px solid rgba(255,255,255,0.7)',
            }}
        >
            <div className={`grid grid-cols-1 ${compact ? '' : 'lg:grid-cols-2'} divide-y ${compact ? '' : 'lg:divide-y-0 lg:divide-x'} divide-slate-100/80`}>
                {/* Left: Inputs */}
                <div className={`${compact ? 'p-5 space-y-5' : 'p-7 md:p-9 space-y-8'}`}>
                    <div className="flex items-center gap-2 mb-2">
                        <span
                            className="w-8 h-8 rounded-xl flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                                boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
                            }}
                        >
                            <Calculator className="w-4 h-4 text-white" />
                        </span>
                        <h3 className="font-bold text-slate-800 text-base">
                            御社の情報を入力
                        </h3>
                    </div>

                    {/* Work Type Selector */}
                    <div className={compact ? 'space-y-2' : 'space-y-3'}>
                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <span
                                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                                style={{
                                    background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                                    border: '1px solid rgba(59,130,246,0.15)',
                                }}
                            >
                                <Zap className="w-3.5 h-3.5 text-blue-600" />
                            </span>
                            AIに置き換えたい業務
                        </label>
                        {compact ? (
                            <>
                                <select
                                    value={selectedWorkType}
                                    onChange={(e) => setSelectedWorkType(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-700 appearance-none bg-no-repeat cursor-pointer [-webkit-appearance:none] [&::-ms-expand]:hidden"
                                    style={{
                                        background: 'rgba(248,250,252,0.9)',
                                        border: '1.5px solid rgba(37,99,235,0.2)',
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%232563eb' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                                        backgroundPosition: 'right 12px center',
                                        WebkitAppearance: 'none',
                                        MozAppearance: 'none',
                                        fontSize: '16px',
                                    }}
                                >
                                    {WORK_TYPES.map((wt) => (
                                        <option key={wt.id} value={wt.id}>
                                            {wt.label}（削減目安 {Math.round(wt.rate * 100)}%）
                                        </option>
                                    ))}
                                </select>
                                <p className="text-[10px] text-slate-400 leading-relaxed">
                                    {currentWorkType.description}
                                </p>
                            </>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 gap-2">
                                    {WORK_TYPES.map((wt) => (
                                        <button
                                            key={wt.id}
                                            type="button"
                                            onClick={() => setSelectedWorkType(wt.id)}
                                            className={`text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-150 ${
                                                selectedWorkType === wt.id
                                                    ? 'text-blue-700 shadow-sm'
                                                    : 'text-slate-600 hover:bg-slate-50'
                                            }`}
                                            style={
                                                selectedWorkType === wt.id
                                                    ? {
                                                          background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(14,165,233,0.05))',
                                                          border: '1.5px solid rgba(37,99,235,0.25)',
                                                      }
                                                    : {
                                                          background: 'rgba(248,250,252,0.7)',
                                                          border: '1px solid rgba(226,232,240,0.7)',
                                                      }
                                            }
                                        >
                                            <span className="block leading-tight">{wt.label}</span>
                                            <span className="block text-[10px] text-slate-400 mt-0.5 font-normal">
                                                削減目安 {Math.round(wt.rate * 100)}%
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                <p className="text-[10px] text-slate-400 leading-relaxed">
                                    {currentWorkType.description}
                                </p>
                            </>
                        )}
                    </div>

                    <SliderField
                        id="roi-employees"
                        label="従業員数"
                        icon={<Users className="w-3.5 h-3.5 text-blue-600" />}
                        value={employees}
                        min={1}
                        max={100}
                        step={1}
                        unit="名"
                        onChange={setEmployees}
                    />

                    <SliderField
                        id="roi-hours"
                        label="月間の対象業務時間（1人あたり）"
                        icon={<Clock className="w-3.5 h-3.5 text-blue-600" />}
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
                        icon={<BadgeJapaneseYen className="w-3.5 h-3.5 text-blue-600" />}
                        value={hourlyRate}
                        min={1000}
                        max={5000}
                        step={100}
                        unit="円"
                        onChange={setHourlyRate}
                        formatDisplay={(v) => `${v.toLocaleString()}円`}
                    />

                    <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                        ※ 削減率は業務タイプ別の目安値です。実際の効果は業務内容や導入方法により異なります。
                    </p>
                </div>

                {/* Right: Results */}
                <div className={`${compact ? 'p-5' : 'p-7 md:p-9'} flex flex-col`}>
                    <div className={`flex items-center gap-2 ${compact ? 'mb-4' : 'mb-6'}`}>
                        <span
                            className="w-8 h-8 rounded-xl flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                                boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
                            }}
                        >
                            <TrendingUp className="w-4 h-4 text-white" />
                        </span>
                        <h3 className="font-bold text-slate-800 text-base">
                            削減効果シミュレーション
                        </h3>
                    </div>

                    {/* Selected work type badge */}
                    <div className="mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                        <span className="text-xs text-slate-500">
                            <span className="font-semibold text-blue-600">{currentWorkType.label}</span>
                            （削減率 {Math.round(currentWorkType.rate * 100)}%）
                        </span>
                    </div>

                    <div className="space-y-3 flex-1">
                        <ResultCard
                            icon={<Clock className="w-4 h-4" />}
                            label="月間削減見込み時間"
                            value={`${Math.round(reducedHoursMonthly).toLocaleString()} 時間`}
                            sub={`全社合計（1人あたり約${Math.round(reducedHoursMonthly / employees)}時間）`}
                        />
                        <ResultCard
                            icon={<BadgeJapaneseYen className="w-4 h-4" />}
                            label="月間コスト削減額"
                            value={formatYen(Math.round(costReductionMonthly))}
                        />
                        <ResultCard
                            icon={<TrendingUp className="w-4 h-4" />}
                            label="年間コスト削減額（推定）"
                            value={formatYen(Math.round(costReductionAnnual))}
                            highlight
                        />
                    </div>

                    {/* Highlight Banner */}
                    <motion.div
                        key={`${annualManDisplay}-${selectedWorkType}`}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className={`${compact ? 'mt-4 rounded-xl p-4' : 'mt-5 rounded-2xl p-5'} text-center`}
                        style={{
                            background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                            boxShadow: '0 8px 24px rgba(37,99,235,0.3)',
                        }}
                    >
                        <p className="text-blue-100 text-xs font-medium mb-1">
                            年間約
                        </p>
                        <p className="text-white text-4xl font-bold tabular-nums tracking-tight">
                            {annualManDisplay}
                            <span className="text-2xl ml-1">万円</span>
                        </p>
                        <p className="text-blue-100 text-xs font-medium mt-1">
                            のコスト削減が見込めます
                        </p>
                    </motion.div>

                    {/* CTA */}
                    <a
                        href="/#contact"
                        className="mt-4 w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-blue-700 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
                        style={{
                            background: 'rgba(239,246,255,0.9)',
                            border: '1.5px solid rgba(37,99,235,0.2)',
                        }}
                    >
                        無料相談で詳しく診断する
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
}

// --- Main component ---

export default function ROISimulator() {
    const [employees, setEmployees] = useState(10);
    const [hoursPerPerson, setHoursPerPerson] = useState(40);
    const [hourlyRate, setHourlyRate] = useState(2500);
    const [selectedWorkType, setSelectedWorkType] = useState<string>('general');
    const [showModal, setShowModal] = useState(false);

    const currentWorkType = WORK_TYPES.find((w) => w.id === selectedWorkType) ?? WORK_TYPES[5];

    const calculate = useCallback(() => {
        const reducedHoursMonthly = hoursPerPerson * employees * currentWorkType.rate;
        const costReductionMonthly = reducedHoursMonthly * hourlyRate;
        const costReductionAnnual = costReductionMonthly * 12;
        return { reducedHoursMonthly, costReductionMonthly, costReductionAnnual };
    }, [employees, hoursPerPerson, hourlyRate, currentWorkType.rate]);

    const { reducedHoursMonthly, costReductionMonthly, costReductionAnnual } = calculate();

    const annualManRaw = costReductionAnnual / 10000;
    const annualManRounded = Math.round(annualManRaw * 10) / 10;
    const annualManDisplay = annualManRounded % 1 === 0
        ? annualManRounded.toLocaleString()
        : annualManRounded.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

    // Lock body scroll when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
            return () => { document.body.style.overflow = ''; };
        }
    }, [showModal]);

    const simulatorProps: SimulatorContentProps = {
        employees,
        setEmployees,
        hoursPerPerson,
        setHoursPerPerson,
        hourlyRate,
        setHourlyRate,
        selectedWorkType,
        setSelectedWorkType,
        currentWorkType,
        reducedHoursMonthly,
        costReductionMonthly,
        costReductionAnnual,
        annualManDisplay,
    };

    return (
        <>
            <section className="py-24 lg:py-32 relative overflow-hidden">
                {/* Background decoration */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    aria-hidden="true"
                    style={{
                        background:
                            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(37,99,235,0.04) 0%, transparent 70%)',
                    }}
                />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    {/* Header */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-center mb-14 flex flex-col items-center"
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-5"
                        >
                            AI導入の価値
                        </motion.span>
                        <motion.h2
                            variants={fadeInUp}
                            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.2]"
                        >
                            こんな「困った」、<br />
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                                }}
                            >
                                AIで解決できます。
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
                        >
                            「人手が足りない」「ミスが減らない」「あの人しかできない」<br className="hidden sm:block" />
                            ——よくある悩み、実はAIの得意分野です。
                        </motion.p>
                    </motion.div>

                    {/* Value Proposition Cards */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-20 max-w-5xl mx-auto"
                    >
                        {VALUE_ITEMS.map((item) => (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className="rounded-2xl p-5 text-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                                style={{
                                    background: 'rgba(255,255,255,0.8)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(226,232,240,0.8)',
                                }}
                            >
                                <span
                                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                                    style={{
                                        background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                                        border: '1px solid rgba(59,130,246,0.15)',
                                    }}
                                >
                                    <span className="text-blue-600">{item.icon}</span>
                                </span>
                                <h3 className="font-bold text-slate-800 text-sm mb-1.5">{item.title}</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Simulator Header */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-center mb-10 flex flex-col items-center"
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-5"
                        >
                            ROI Simulator
                        </motion.span>
                        <motion.h3
                            variants={fadeInUp}
                            className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 leading-[1.2]"
                        >
                            まずはコスト削減効果を試算してみましょう
                        </motion.h3>
                        <motion.p
                            variants={fadeInUp}
                            className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed"
                        >
                            AIに置き換えたい業務のタイプと規模を選ぶだけで、<br className="hidden sm:block" />
                            削減見込みをシミュレーションできます。
                        </motion.p>
                    </motion.div>

                    {/* Mobile: CTA button to open modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:hidden max-w-md mx-auto"
                    >
                        <button
                            type="button"
                            onClick={() => setShowModal(true)}
                            className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-base text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
                            style={{
                                background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                                boxShadow: '0 8px 24px rgba(37,99,235,0.3)',
                            }}
                        >
                            <Calculator className="w-5 h-5" />
                            削減効果をシミュレーションする
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Desktop: inline simulator */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden lg:block max-w-4xl mx-auto"
                    >
                        <SimulatorContent {...simulatorProps} />
                    </motion.div>
                </div>
            </section>

            {/* Mobile Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 lg:hidden"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={() => setShowModal(false)}
                        />

                        {/* Modal content */}
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-x-0 bottom-0 max-h-[92vh] overflow-y-auto rounded-t-3xl bg-white"
                            style={{ boxShadow: '0 -8px 40px rgba(0,0,0,0.15)' }}
                        >
                            {/* Modal header with close button */}
                            <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-lg border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="w-8 h-8 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                                        }}
                                    >
                                        <Calculator className="w-4 h-4 text-white" />
                                    </span>
                                    <h3 className="font-bold text-slate-800 text-base">ROIシミュレーター</h3>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                                    aria-label="閉じる"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Simulator */}
                            <div className="px-3 pb-6">
                                <SimulatorContent {...simulatorProps} compact />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
