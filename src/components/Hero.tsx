'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    BookOpenText,
    Clock3,
    MessagesSquare,
    Heart,
    Leaf,
    Lightbulb,
    Mountain,
    Network,
    Sparkles,
    Waves,
    ChevronRight,
    Loader2,
    Send,
} from 'lucide-react';

type NaluView = 'home' | 'company' | 'services';

type HeroProps = {
    initialView?: NaluView;
};

type WorkstyleCard = {
    image: string;
    title: string;
    body: string;
};

type NaluOptionItem = {
    href: string;
    tone: 'blue' | 'violet';
    icon: typeof BookOpenText;
    nextView?: NaluView;
    title: string;
    body: string;
};

type SupportAreaItem = {
    icon: typeof BookOpenText;
    title: string;
    body: string;
};

type HeroPrincipleItem = {
    icon: typeof BookOpenText;
    title: string;
    body: string;
};

type NaluServiceCardItem = {
    image: string;
    title: string;
    body: string;
};

type NaluTopicLinkItem = {
    href: string;
    label: string;
};

type NaluPanelMessage = {
    role: 'user' | 'assistant';
    content: string;
};

const workstyleCards: WorkstyleCard[] = [
    {
        image: '/nalu/usecase-recruit-dx.png',
        title: '採用DXの強化',
        body: '面接調整や候補者対応を整理。連絡・確認作業を軽くします。',
    },
    {
        image: '/nalu/usecase-inquiry-automation.png',
        title: '問い合わせ自動化',
        body: 'よくある質問や一次受付を整理。必要な確認をスムーズにつなぎます。',
    },
    {
        image: '/nalu/usecase-knowledge.png',
        title: '社内ナレッジ活用',
        body: '資料やFAQをまとめ、必要な情報にたどり着きやすい状態をつくります。',
    },
];

const heroPrinciples: HeroPrincipleItem[] = [
    {
        icon: BookOpenText,
        title: '業務理解',
        body: '現場の流れを整理',
    },
    {
        icon: Lightbulb,
        title: '小さく検証',
        body: '無理なく試す',
    },
    {
        icon: Network,
        title: '現場定着',
        body: '使える仕組みに',
    },
    {
        icon: Sparkles,
        title: '継続改善',
        body: '一緒に育てる',
    },
];

const supportAreas: SupportAreaItem[] = [
    {
        icon: MessagesSquare,
        title: '問い合わせ対応',
        body: 'よくある質問や初回対応を整理',
    },
    {
        icon: BookOpenText,
        title: '社内ナレッジ',
        body: '資料・FAQ・手順を探しやすく',
    },
    {
        icon: Network,
        title: '業務フロー',
        body: '繰り返し作業を見える化',
    },
    {
        icon: Lightbulb,
        title: 'AI活用設計',
        body: '今の業務に合う導入案を検討',
    },
];

const naluOptions: NaluOptionItem[] = [
    {
        href: '#nalu-services',
        tone: 'blue',
        icon: BookOpenText,
        nextView: 'services',
        title: 'WaiWai AIについて知りたい',
        body: 'サービスの特徴や導入事例を見たい方へ',
    },
    {
        href: '/contact',
        tone: 'violet',
        icon: MessagesSquare,
        title: '自社について相談したい',
        body: 'AI活用のご提案やお悩みを相談したい方へ',
    },
];

const naluServiceCards: NaluServiceCardItem[] = [
    {
        image: '/nalu/usecase-knowledge.png',
        title: 'AI導入コンサルティング',
        body: '課題整理から、AI化すべき領域を一緒に設計します。',
    },
    {
        image: '/nalu/usecase-inquiry-automation.png',
        title: 'AIエージェント開発',
        body: 'Dify・RAG・LLMを組み合わせ、業務に合うAIを構築します。',
    },
    {
        image: '/nalu/usecase-recruit-dx.png',
        title: '業務自動化・DX支援',
        body: 'LINE・Slack・Sheetsなど既存ツールをつないで自動化します。',
    },
];

const naluTopicLinks: NaluTopicLinkItem[] = [
    { href: '/services', label: '何ができるの？' },
    { href: '/cases', label: '活用事例を見たい' },
    { href: '/atp', label: 'AI活用方法を知りたい' },
    { href: '/contact', label: '料金感を相談したい' },
];

const companyRows = [
    { label: '会社名', value: 'WaiWai AI 株式会社' },
    { label: '設立', value: '2025年1月23日' },
    { label: '所在地', value: '〒150-0043 東京都渋谷区道玄坂1丁目10-8 渋谷道玄坂東急ビル 2F-C' },
    { label: '事業内容', value: 'AI導入支援・業務自動化支援・AI活用コンサルティング・プロダクト開発' },
    { label: '代表者', value: '久保田 慧（Kei Kubota）' },
    { label: '体制', value: '代表1名 + AIエージェント群' },
];

const richnessItems = [
    {
        icon: Clock3,
        title: '時間の豊かさ',
        body: '面倒な作業から解放され、大切なことに集中できる時間をつくります。',
    },
    {
        icon: Heart,
        title: '心の豊かさ',
        body: '余裕が生まれ、やりがいや楽しさを感じられる働き方へ。',
    },
    {
        icon: Network,
        title: 'つながりの豊かさ',
        body: '人と人がもっとつながり、チームの力が最大化する環境をつくります。',
    },
    {
        icon: Lightbulb,
        title: '創造性の豊かさ',
        body: 'AIがアイデアを広げ、新しい価値を生み出す挑戦を支えます。',
    },
    {
        icon: Mountain,
        title: '挑戦の豊かさ',
        body: '挑戦する人を支え、未来の可能性を広げていきます。',
    },
    {
        icon: Leaf,
        title: '未来の豊かさ',
        body: '持続可能で、誰もが笑顔でいられる社会へ貢献します。',
    },
];

const smoothEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

const panelVariants = {
    hidden: { opacity: 0, y: 26, filter: 'blur(12px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.68, ease: smoothEase, staggerChildren: 0.06 },
    },
    exit: {
        opacity: 0,
        y: -18,
        filter: 'blur(8px)',
        transition: { duration: 0.32, ease: smoothEase },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.54, ease: smoothEase } },
};

const companyTileOffsets = [
    { x: -120, y: 52, rotate: -1.8 },
    { x: 18, y: 76, rotate: 1.1 },
    { x: 120, y: 48, rotate: 1.7 },
];

const companyTileVariants = {
    hidden: (index: number) => {
        const offset = companyTileOffsets[index] ?? companyTileOffsets[0];

        return {
            opacity: 0,
            x: offset.x,
            y: offset.y,
            rotate: offset.rotate,
            scale: 0.95,
            filter: 'blur(18px)',
        };
    },
    visible: (index: number) => ({
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.82, delay: 0.08 + index * 0.06, ease: smoothEase },
    }),
};

const richnessScatterOffsets = [
    { x: -92, y: 46, rotate: -2.2 },
    { x: 0, y: 72, rotate: 1.4 },
    { x: 94, y: 42, rotate: 2.1 },
    { x: -78, y: -34, rotate: 1.8 },
    { x: 12, y: -58, rotate: -1.2 },
    { x: 82, y: -30, rotate: -2 },
];

const richnessItemVariants = {
    hidden: (index: number) => {
        const offset = richnessScatterOffsets[index] ?? richnessScatterOffsets[0];

        return {
            opacity: 0,
            x: offset.x,
            y: offset.y,
            rotate: offset.rotate,
            scale: 0.9,
            filter: 'blur(14px)',
        };
    },
    visible: (index: number) => ({
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.78, delay: 0.18 + index * 0.055, ease: smoothEase },
    }),
};

export default function Hero({ initialView = 'home' }: HeroProps) {
    const [view, setView] = useState<NaluView>(() => {
        if (typeof window !== 'undefined' && window.location.hash === '#nalu-services') {
            return 'services';
        }

        return initialView;
    });
    const isCompany = view === 'company';
    const isServiceGuide = view === 'services';

    useEffect(() => {
        if (window.location.hash === '#nalu-services') {
            setView('services');
            return;
        }

        setView(initialView);
    }, [initialView]);

    useEffect(() => {
        const syncHashView = () => {
            if (window.location.hash === '#nalu-services') {
                setView('services');
            }
        };

        syncHashView();
        window.addEventListener('hashchange', syncHashView);
        return () => window.removeEventListener('hashchange', syncHashView);
    }, []);

    useEffect(() => {
        const handleViewChange = (event: Event) => {
            const nextView = (event as CustomEvent<{ view?: NaluView }>).detail?.view;
            if (nextView === 'home' || nextView === 'company' || nextView === 'services') {
                setView(nextView);
            }
        };

        window.addEventListener('waiwai:nalu-view-change', handleViewChange);
        return () => window.removeEventListener('waiwai:nalu-view-change', handleViewChange);
    }, []);

    const switchView = (nextView: NaluView) => {
        setView(nextView);

        if (nextView === 'services') {
            window.history.replaceState(null, '', '#nalu-services');
            return;
        }

        if (window.location.hash === '#nalu-services') {
            window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
        }
    };

    return (
        <section className="relative overflow-hidden bg-[#f7f1e8] pt-[64px] text-[#152039] md:pt-[72px] lg:pt-[74px]">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(246,252,255,0.98),rgba(255,250,242,0.92)_48%,rgba(235,218,192,0.9))]" aria-hidden="true" />
            <div className="noise-overlay opacity-[0.035]" aria-hidden="true" />

            <div className="relative z-10 w-full pb-6">
                <div
                    className={`relative overflow-hidden ${
                        isCompany
                            ? 'min-h-[860px] sm:min-h-[920px] lg:min-h-[620px] xl:min-h-[640px]'
                            : isServiceGuide
                              ? 'min-h-[700px] sm:min-h-[740px] lg:min-h-[590px] xl:min-h-[610px]'
                            : 'min-h-[760px] sm:min-h-[790px] lg:min-h-[595px] xl:min-h-[600px]'
                    }`}
                >
                    <img
                        src="/nalu/nalu-lounge-bg.png"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.44)_34%,rgba(255,255,255,0.06)_62%,rgba(255,255,255,0.12)_100%)]" aria-hidden="true" />
                    <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.62)_62%,rgba(255,255,255,0.94))]" aria-hidden="true" />
                    <div className="absolute left-0 top-0 h-full w-[44%] bg-[radial-gradient(ellipse_at_12%_58%,rgba(87,184,214,0.16),transparent_45%)]" aria-hidden="true" />
                    <AmbientLoungeMotion />

                    <motion.div
                        initial={{ opacity: 0, x: -88, y: 34, rotate: -1.4, scale: 0.96, filter: 'blur(18px)' }}
                        animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.78, ease: smoothEase }}
                        className="relative z-30 max-w-[min(560px,calc(100vw-2rem))] px-5 pt-10 sm:px-10 sm:pt-16 md:px-14 lg:ml-[clamp(72px,11vw,170px)] lg:px-0 lg:pt-[68px] xl:ml-[clamp(120px,11vw,170px)]"
                    >
                        <h1 className="font-serif text-[clamp(31px,8.4vw,38px)] font-medium leading-[1.4] text-[#17223a] drop-shadow-[0_8px_28px_rgba(255,255,255,0.88)] lg:text-[clamp(36px,2.9vw,42px)]">
                            AIを味方に、
                            <br />
                            未来を豊かに。
                        </h1>
                        <p className="mt-5 max-w-[min(560px,calc(100vw-2rem))] text-sm font-bold leading-7 text-[#23334b] sm:text-base sm:leading-8 lg:text-base lg:leading-8">
                            WaiWai AIは、中小企業のAI導入支援パートナーです。
                            <br className="hidden sm:block" />
                            代表自ら業務を理解し、現場に寄り添いながら
                            <br className="hidden sm:block" />
                            成果につながるAI活用を一緒に実現します。
                        </p>
                        {!isServiceGuide && (
                            <motion.div
                                className="mt-8 grid max-w-[520px] grid-cols-2 gap-2 sm:grid-cols-4 lg:mt-8"
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.72, delay: 0.16, ease: smoothEase }}
                            >
                                {heroPrinciples.map((item) => (
                                    <HeroPrinciple key={item.title} {...item} />
                                ))}
                            </motion.div>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 144, y: -30, rotate: 2.4, scale: 0.94, filter: 'blur(16px)' }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            y: 0,
                            rotate: 0,
                            filter: 'blur(0px)',
                        }}
                        transition={{ duration: 0.92, delay: 0.04, ease: smoothEase }}
                        className={`pointer-events-none absolute bottom-[110px] right-[-82px] z-20 w-[min(78vw,360px)] sm:bottom-[88px] sm:right-[6vw] sm:w-[min(58vw,560px)] md:right-[12vw] lg:bottom-auto lg:overflow-hidden ${
                            isServiceGuide
                                ? 'lg:right-[clamp(470px,38vw,560px)] lg:top-[-44px] lg:h-[560px] lg:w-[clamp(420px,34vw,500px)] xl:h-[580px]'
                                : 'lg:right-[clamp(330px,36vw,650px)] lg:top-[-78px] lg:h-[650px] lg:w-[clamp(520px,45vw,660px)]'
                        }`}
                    >
                        <div className="nalu-breathe relative h-full w-full">
                            <motion.span
                                className="nalu-focus-glow absolute left-[17%] top-[13%] h-[46%] w-[66%] rounded-[999px]"
                                aria-hidden="true"
                                animate={{
                                    opacity: [0.1, 0.18, 0.1],
                                    scale: [1, 1.035, 1],
                                }}
                                transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <motion.span
                                className="absolute left-[22%] top-[17%] h-[35%] w-[52%] rounded-[999px] border border-white/35"
                                aria-hidden="true"
                                animate={{ opacity: [0, 0.18, 0], scale: [0.92, 1.12, 1.24] }}
                                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeOut' }}
                            />
                            <img
                                src="/nalu/nalu-concierge.png"
                                alt="Nalu"
                                className="relative z-10 h-auto w-full select-none drop-shadow-[0_36px_70px_rgba(70,45,25,0.24)]"
                                draggable={false}
                            />
                        </div>
                    </motion.div>

                    {!isCompany && (
                        <aside className={`relative z-40 mx-auto mt-8 w-full max-w-[min(720px,calc(100vw-2rem))] px-4 sm:px-8 lg:absolute lg:right-[clamp(28px,4.4vw,70px)] lg:top-[48px] lg:mt-0 lg:px-0 ${
                            isServiceGuide ? 'lg:w-[430px] lg:min-w-[430px]' : 'lg:w-[475px] lg:min-w-[475px]'
                        }`}>
                            <AnimatePresence mode="wait">
                                {isServiceGuide ? (
                                    <NaluServiceGuidePanel key="service-guide" onBack={() => switchView('home')} />
                                ) : (
                                    <NaluChoicePanel key="choice-panel" onSelectView={switchView} />
                                )}
                            </AnimatePresence>
                            {!isServiceGuide && <p className="mt-5 text-center text-[11px] font-bold text-[#7a8798]">※ どちらを選んでも、後から切り替え可能です</p>}
                        </aside>
                    )}

                    {isCompany && <CompanyInfoHeroPanel />}

                </div>

                <AnimatePresence mode="wait" initial={false}>
                    {isCompany ? (
                        <CompanyOverviewContent />
                    ) : (
                        <motion.div
                            key="home-lounge-content"
                            variants={panelVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="relative z-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(245,250,255,0.86)_22%,rgba(255,255,255,0.96)_100%)] pb-7"
                        >
                            <div className="pointer-events-none absolute inset-x-0 top-[-74px] h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.96)_72%)]" aria-hidden="true" />

                            {isServiceGuide && (
                                <div className="relative z-40 mx-auto -mt-[30px] w-[min(86vw,1120px)]">
                                    <NaluDirectAskBand />
                                </div>
                            )}

                            <div className={`relative z-30 mx-auto w-[min(85vw,1308px)] rounded-[18px] border border-white/78 bg-white/72 px-5 py-4 shadow-[0_26px_84px_-62px_rgba(34,74,124,0.72)] backdrop-blur-2xl sm:px-7 ${
                                isServiceGuide ? 'mt-4' : '-mt-[38px]'
                            }`}>
                                <div className="grid gap-4 lg:grid-cols-[260px_1fr] lg:items-center">
                                    <div className="text-center lg:text-left">
                                        <p className="text-[10px] font-black tracking-[0.2em] text-[#2b82f3]">AI CONSULTING AREA</p>
                                        <h2 className="mt-1 text-[15px] font-bold leading-6 text-[#10234a] sm:text-lg">
                                            まずは身近な業務から相談できます
                                        </h2>
                                    </div>
                                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#dce8f6]">
                                        {supportAreas.map((area) => {
                                            const AreaIcon = area.icon;

                                            return (
                                                <div key={area.title} className="flex min-h-[58px] items-center gap-3 rounded-[14px] bg-white/45 px-3 py-2 ring-1 ring-white/58 lg:rounded-none lg:bg-transparent lg:ring-0">
                                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#eef6ff] text-[#176de5]">
                                                        <AreaIcon className="h-5 w-5" strokeWidth={1.8} />
                                                    </span>
                                                    <span className="min-w-0">
                                                        <span className="block text-sm font-black leading-5 text-[#13264d]">{area.title}</span>
                                                        <span className="mt-0.5 block text-[11px] font-bold leading-4 text-[#5d6f86]">{area.body}</span>
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-20 mx-auto mt-5 w-[min(86vw,1314px)]">
                                <h2 className="text-center font-serif text-[clamp(20px,2vw,24px)] font-medium leading-9 text-[#14234a]">
                                    AIがつくる、ワクワクする未来の
                                    <Waves className="mx-1 inline h-5 w-5 text-[#2b82f3]" strokeWidth={1.9} />
                                    働き方
                                </h2>

                                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                                    {workstyleCards.map((item) => (
                                        <motion.a
                                            key={item.title}
                                            href="/services"
                                            variants={itemVariants}
                                            whileHover={{ y: -4, scale: 1.006 }}
                                            whileTap={{ scale: 0.992 }}
                                            className="group grid min-h-[146px] overflow-hidden rounded-[8px] border border-[#cfdcf1] bg-white/86 shadow-[0_18px_55px_-44px_rgba(30,66,120,0.62)] transition hover:bg-white lg:grid-cols-[38%_1fr]"
                                        >
                                            <span className="relative block min-h-[145px] overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    className="h-full w-full object-cover"
                                                    aria-hidden="true"
                                                />
                                                <span className="absolute inset-y-0 right-[-1px] w-12 bg-[radial-gradient(ellipse_at_100%_50%,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.96)_42%,rgba(255,255,255,0)_66%)]" aria-hidden="true" />
                                            </span>
                                            <span className="flex min-w-0 flex-col justify-center px-6 py-5">
                                                <span className="block text-lg font-bold leading-7 text-[#14234a]">{item.title}</span>
                                                <span className="mt-2 block text-[13px] font-bold leading-6 text-[#42556d]">{item.body}</span>
                                                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2b82f3]">
                                                    詳しく見る
                                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                                                </span>
                                            </span>
                                        </motion.a>
                                    ))}
                                </div>

                                <p className="mt-7 flex items-center justify-center gap-4 text-center text-sm font-bold leading-7 text-[#6a7892]">
                                    <Sparkles className="h-5 w-5 text-[#2b82f3]" strokeWidth={1.7} />
                                    その他の活用方法もご案内できます。まずはお気軽にご相談ください。
                                    <Sparkles className="h-5 w-5 text-[#2b82f3]" strokeWidth={1.7} />
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

function HeroPrinciple({ icon: Icon, title, body }: HeroPrincipleItem) {
    return (
        <div className="flex min-h-[72px] flex-col items-center justify-center rounded-[16px] border border-white/72 bg-white/58 px-2.5 py-3 text-center shadow-[0_16px_44px_-36px_rgba(24,72,126,0.72)] backdrop-blur-md">
            <Icon className="h-5 w-5 text-[#2b82f3]" strokeWidth={1.8} />
            <p className="mt-2 text-[12px] font-black leading-4 text-[#173466]">{title}</p>
            <p className="mt-1 text-[10px] font-bold leading-4 text-[#5f7086]">{body}</p>
        </div>
    );
}

function NaluChoicePanel({ onSelectView }: { onSelectView: (view: NaluView) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 118, y: -24, rotate: 1.4, scale: 0.95, filter: 'blur(16px)' }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 28, y: -10, scale: 0.98, filter: 'blur(8px)' }}
            transition={{ duration: 0.78, delay: 0.1, ease: smoothEase }}
            className="relative rounded-[36px] border border-white/78 bg-white/68 px-6 py-7 shadow-[0_34px_90px_-56px_rgba(42,82,124,0.78)] backdrop-blur-2xl sm:px-9 sm:py-8"
        >
            <NaluPanelLogo />

            <p className="text-[15px] font-bold leading-7 text-[#142243]">こんにちは！AIエージェントのNaluです🌺</p>
            <p className="mt-1 text-[15px] font-bold leading-7 text-[#142243]">AI活用について、どちらから始めますか？</p>

            <div className="mt-6 grid gap-4">
                {naluOptions.map((option) => {
                    const OptionIcon = option.icon;

                    return (
                        <a
                            key={option.title}
                            href={option.href}
                            onClick={(event) => {
                                if (option.nextView) {
                                    event.preventDefault();
                                    onSelectView(option.nextView);
                                }
                            }}
                            className="group flex min-h-[98px] items-center gap-5 rounded-[20px] border border-white/78 bg-white/76 px-5 py-4 shadow-[0_18px_50px_-38px_rgba(62,92,128,0.72)] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                        >
                            <span
                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border ${
                                    option.tone === 'blue'
                                        ? 'border-[#d8eafd] bg-[#f7fbff] text-[#176de5] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]'
                                        : 'border-[#e5dcff] bg-[#fbf9ff] text-[#7459d8] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]'
                                }`}
                            >
                                <OptionIcon className="h-6 w-6" strokeWidth={1.8} />
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block text-base font-bold text-[#142243]">{option.title}</span>
                                <span className="mt-2 block text-xs font-bold leading-6 text-[#4f6077] lg:whitespace-nowrap">{option.body}</span>
                            </span>
                            <ChevronRight className="h-7 w-7 shrink-0 text-[#0d48a8] transition group-hover:translate-x-1" strokeWidth={2.2} />
                        </a>
                    );
                })}
            </div>
        </motion.div>
    );
}

function NaluServiceGuidePanel({ onBack }: { onBack: () => void }) {
    return (
        <motion.div
            data-nalu-panel="services"
            initial={false}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -22, y: -10, scale: 0.98, filter: 'blur(8px)' }}
            transition={{ duration: 0.68, ease: smoothEase }}
            className="relative flex max-h-[min(720px,calc(100dvh-104px))] flex-col rounded-[34px] border border-white/78 bg-white/70 px-5 py-4 shadow-[0_34px_90px_-56px_rgba(42,82,124,0.78)] backdrop-blur-2xl sm:px-6 lg:max-h-[520px] xl:max-h-[540px]"
        >
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-2">
                    <p className="font-serif text-[31px] italic leading-none text-[#2b82f3] drop-shadow-[0_12px_24px_rgba(43,130,243,0.18)]">
                        Nalu
                    </p>
                    <p className="text-[10px] font-bold text-[#2b82f3]">by WaiWai AI</p>
                </div>
                <button
                    type="button"
                    onClick={onBack}
                    className="rounded-full border border-[#dce9fb] bg-white/70 px-3 py-1.5 text-[11px] font-black text-[#3569b4] transition hover:bg-white"
                >
                    戻る
                </button>
            </div>

            <div className="mt-3 min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-color:rgba(43,130,243,0.42)_transparent] [scrollbar-width:thin]">
                <div className="rounded-[22px] border border-white/70 bg-white/54 p-3.5 shadow-[0_20px_58px_-48px_rgba(42,82,124,0.78)]">
                    <h3 className="text-[15px] font-black text-[#142243]">WaiWai AIのサービス</h3>
                    <div className="mt-2.5 grid grid-cols-3 gap-2">
                        {naluServiceCards.map((service) => (
                            <a
                                key={service.title}
                                href="/services"
                                className="group overflow-hidden rounded-[14px] border border-[#d9e7f8] bg-white/74 shadow-[0_14px_42px_-34px_rgba(34,74,124,0.72)] transition hover:-translate-y-0.5 hover:bg-white"
                            >
                                <span className="relative block aspect-[1.55] overflow-hidden bg-[#eef6ff]">
                                    <img
                                        src={service.image}
                                        alt=""
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </span>
                                <span className="block px-2 py-2">
                                    <span className="block text-[11px] font-black leading-4 text-[#142243]">{service.title}</span>
                                    <span className="mt-1 block text-[10px] font-bold leading-[1.45] text-[#56677e]">{service.body}</span>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-3">
                    <p className="text-[13px] font-black leading-6 text-[#142243]">他にご覧になりたい内容はありますか？</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {naluTopicLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="rounded-full border border-[#bcd4f5] bg-white/56 px-4 py-2 text-[12px] font-black text-[#244a8e] transition hover:-translate-y-0.5 hover:bg-white"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

function NaluDirectAskBand() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.985, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.62, delay: 0.08, ease: smoothEase }}
            className="grid gap-4 rounded-[18px] border border-white/80 bg-white/78 px-4 py-4 shadow-[0_28px_86px_-62px_rgba(34,74,124,0.78)] backdrop-blur-2xl sm:px-5 lg:grid-cols-[280px_1fr] lg:items-center"
        >
            <div>
                <p className="text-[10px] font-black tracking-[0.2em] text-[#2b82f3]">ASK NALU</p>
                <h2 className="mt-1 text-lg font-black leading-6 text-[#10234a]">Naluに直接聞いてみる</h2>
                <p className="mt-1 text-[12px] font-bold leading-5 text-[#5d6f86]">
                    業務の悩みを一言で送ると、相談の入口を整理します。
                </p>
            </div>
            <NaluQuickAskPanel variant="band" />
        </motion.div>
    );
}

function NaluQuickAskPanel({ variant = 'compact' }: { variant?: 'compact' | 'band' }) {
    const [messages, setMessages] = useState<NaluPanelMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messageListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = useCallback(async (text: string) => {
        const trimmedText = text.trim();
        if (!trimmedText || isLoading) return;

        const nextMessages: NaluPanelMessage[] = [...messages, { role: 'user', content: trimmedText }];
        setMessages(nextMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: nextMessages }),
            });

            if (!response.ok || !response.body) {
                throw new Error('Failed to send message');
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let assistantContent = '';

            setMessages([...nextMessages, { role: 'assistant', content: '' }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (!line.startsWith('data: ') || line === 'data: [DONE]') continue;

                    try {
                        const data = JSON.parse(line.slice(6));
                        if (data.text) {
                            assistantContent += data.text;
                            setMessages([...nextMessages, { role: 'assistant', content: assistantContent }]);
                        }
                    } catch {
                        // Ignore malformed stream chunks.
                    }
                }
            }
        } catch {
            setMessages([
                ...nextMessages,
                { role: 'assistant', content: '通信がうまくいきませんでした。無料相談フォームからもお気軽にご相談ください。' },
            ]);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, messages]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendMessage(input);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage(input);
        }
    };

    return (
        <motion.form
            data-nalu-panel="quick-ask"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.52, delay: 0.05, ease: smoothEase }}
            className={
                variant === 'band'
                    ? 'rounded-[16px] border border-[#d6e6f8] bg-white/82 p-2.5 shadow-[0_18px_58px_-48px_rgba(42,82,124,0.82)]'
                    : 'mt-3 rounded-[22px] border border-white/78 bg-white/78 p-2.5 shadow-[0_28px_70px_-52px_rgba(42,82,124,0.82)] backdrop-blur-xl'
            }
        >
            {messages.length > 0 && (
                <div ref={messageListRef} className={`${variant === 'band' ? 'max-h-[140px]' : 'max-h-[112px]'} mb-3 space-y-2 overflow-y-auto pr-1`}>
                    {messages.map((message, index) => (
                        <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div
                                className={`max-w-[88%] rounded-[16px] px-3 py-2 text-[12px] font-bold leading-5 ${
                                    message.role === 'user'
                                        ? 'bg-[#174ba8] text-white'
                                        : 'border border-[#dbe8f8] bg-white/82 text-[#30415c]'
                                }`}
                            >
                                {message.content || <Loader2 className="h-4 w-4 animate-spin text-[#7d8da3]" />}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex items-end gap-2">
                <textarea
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    disabled={isLoading}
                    placeholder="Naluに聞いてみる 例：採用業務を効率化したい"
                    className={`${variant === 'band' ? 'min-h-11' : 'min-h-10'} max-h-20 flex-1 resize-none rounded-[14px] border border-[#cfe0f6] bg-white/86 px-3.5 py-2.5 text-[13px] font-bold leading-5 text-[#142243] outline-none transition placeholder:text-[#8a99ad] focus:border-[#78aef5] focus:ring-2 focus:ring-[#d9ebff] disabled:opacity-60`}
                />
                <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#174ba8] text-white shadow-[0_14px_32px_-18px_rgba(23,75,168,0.9)] transition hover:-translate-y-0.5 hover:bg-[#0d3d92] disabled:translate-y-0 disabled:opacity-40"
                    aria-label="Naluに送信"
                >
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" strokeWidth={2.1} />}
                </button>
            </div>
        </motion.form>
    );
}

function NaluPanelLogo({ compact = false }: { compact?: boolean }) {
    return (
        <div className={compact ? '' : 'mb-6'}>
            <p className={`${compact ? 'text-[38px]' : 'text-[44px]'} font-serif italic leading-none text-[#2b82f3] drop-shadow-[0_12px_24px_rgba(43,130,243,0.18)]`}>
                Nalu
            </p>
            <p className="ml-7 mt-1 text-[10px] font-bold text-[#2b82f3]">by WaiWai AI</p>
        </div>
    );
}

function AmbientLoungeMotion() {
    return (
        <div className="pointer-events-none absolute inset-0 z-[18] overflow-hidden" aria-hidden="true">
            <motion.div
                className="absolute inset-x-[-12%] bottom-[-16px] h-[42%] text-[#86d1eb]"
                animate={{ opacity: 0.46, y: 0 }}
                transition={{ duration: 0.9, ease: smoothEase }}
            >
                <svg className="h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    {[0, 1, 2, 3].map((index) => (
                        <motion.path
                            key={index}
                            d={`M-80 ${210 + index * 22} C 180 ${145 + index * 16}, 392 ${260 - index * 12}, 624 ${202 + index * 18} S 1040 ${164 + index * 22}, 1520 ${188 + index * 16}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={index === 1 ? 1.4 : 0.9}
                            strokeOpacity={0.2 + index * 0.04}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0.18, 1, 0.18],
                                opacity: [0.05, 0.42, 0.05],
                            }}
                            transition={{
                                duration: 7.6 + index * 1.1,
                                delay: index * 0.34,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </svg>
            </motion.div>

            <motion.div
                className="absolute left-[5%] top-[24%] h-px w-[42%] origin-left bg-[linear-gradient(90deg,rgba(22,135,176,0),rgba(22,135,176,0.5),rgba(255,255,255,0))]"
                animate={{ scaleX: [0.16, 0.62, 0.2], opacity: [0.04, 0.22, 0.04] }}
                transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute right-[18%] top-[18%] h-[42%] w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.64),rgba(22,135,176,0))]"
                animate={{ y: [0, 12, 0], opacity: [0.06, 0.2, 0.06] }}
                transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
}

function CompanyInfoHeroPanel() {
    return (
        <aside
            id="company-info"
            className="relative z-40 mx-auto mt-7 w-full max-w-[min(720px,calc(100vw-2rem))] px-4 sm:px-8 lg:absolute lg:right-[clamp(20px,3vw,48px)] lg:top-5 lg:mt-0 lg:w-[min(32vw,410px)] lg:min-w-[340px] lg:px-0"
        >
            <motion.div
                initial={{ opacity: 0, x: 132, y: -26, rotate: 1.6, scale: 0.94, filter: 'blur(16px)' }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.82, delay: 0.12, ease: smoothEase }}
                className="rounded-[24px] border border-white/72 bg-white/62 p-4 shadow-[0_24px_70px_-50px_rgba(54,72,91,0.65)] backdrop-blur-2xl sm:p-5 lg:p-4"
            >
                <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                        <p className="text-[11px] font-bold tracking-[0.18em] text-[#1b7fa5]">MESSAGE</p>
                        <h2 className="mt-1 text-lg font-bold text-[#21304a]">代表メッセージ</h2>
                    </div>
                    <span className="rounded-full bg-white/72 px-3 py-1 text-[11px] font-bold text-[#0f7fa7] ring-1 ring-white/80">
                        by Nalu
                    </span>
                </div>

                <p className="text-xs font-bold leading-5 text-[#314960]">
                    AIは、私たちの仕事や暮らしを奪うものではなく、人の可能性を広げ、未来を豊かにするパートナーです。WaiWai AIは、技術と人の力をつなぎ、一社一社の想いに寄り添いながら豊かな未来を共に創っていきます。
                </p>
                <p className="mt-3 text-xs font-bold text-[#173466]">
                    代表取締役
                    <span className="ml-3 font-serif text-lg font-medium tracking-[0.16em]">久保田 慧</span>
                </p>

                <div className="my-3 h-px bg-[#d9e6ea]/80" />

                <p className="mb-2 text-[11px] font-bold tracking-[0.18em] text-[#1b7fa5]">COMPANY PROFILE</p>
                <dl className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                    {companyRows.map((row) => (
                        <div
                            key={row.label}
                            className="grid gap-1 rounded-lg bg-white/70 px-3 py-1.5 ring-1 ring-white/70 sm:grid-cols-[68px_1fr] sm:gap-3 lg:grid-cols-[68px_1fr]"
                        >
                            <dt className="text-[10px] font-bold leading-4 text-[#627587]">{row.label}</dt>
                            <dd className="break-words text-[11px] font-bold leading-4 text-[#173466]">{row.value}</dd>
                        </div>
                    ))}
                </dl>
            </motion.div>
        </aside>
    );
}

function CompanyOverviewContent() {
    return (
        <motion.div
            key="company-overview-content"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-30 -mt-4 overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(241,249,250,0.96)_38%,rgba(255,255,255,0.98))] pb-20"
        >
            <WaveField position="top" />

            <div className="relative mx-auto max-w-[1500px] px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
                <motion.section
                    variants={itemVariants}
                    className="overflow-hidden rounded-[28px] border border-white/80 bg-white/82 p-3 shadow-[0_34px_110px_-70px_rgba(24,65,96,0.58)] backdrop-blur-2xl sm:p-4 lg:p-4"
                >
                    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch xl:grid-cols-[0.86fr_0.74fr_1.42fr]">
                        <motion.div
                            custom={0}
                            variants={companyTileVariants}
                            className="relative min-h-[230px] overflow-hidden rounded-[22px] bg-[#e5f1f3] lg:min-h-[320px]"
                        >
                            <motion.img
                                src="/nalu/nalu-lounge-bg.png"
                                alt=""
                                className="absolute inset-0 h-full w-full scale-110 object-cover object-left-bottom"
                                animate={{ scale: [1.1, 1.14, 1.1], x: ['0%', '-1.2%', '0%'] }}
                                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,41,66,0.16),rgba(255,255,255,0.02)_54%,rgba(255,255,255,0.32))]" />
                            <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.48))]" />
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={companyTileVariants}
                            className="flex flex-col justify-center border-[#d9e6ea] px-2 py-3 lg:border-r lg:px-4"
                        >
                            <p className="text-sm font-bold tracking-[0.18em] text-[#1b7fa5]">私たちの想い</p>
                            <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.45] tracking-[0.04em] text-[#173466] sm:text-[31px]">
                                AIと人が、
                                <br />
                                自然に協力し合い、
                                <br />
                                未来を豊かにする。
                            </h2>
                            <p className="mt-5 text-sm font-bold leading-7 text-[#42566b]">
                                一人ひとりが力を発揮できる社会へ。
                                <br />
                                WaiWai AIは、豊かな未来を
                                <br />
                                共に創っていきます。
                            </p>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={companyTileVariants}
                            className="grid overflow-hidden rounded-[20px] border border-[#d9e6ea] bg-white/70 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 xl:col-span-1"
                        >
                            {richnessItems.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        custom={index}
                                        variants={richnessItemVariants}
                                        className="flex min-h-[142px] flex-col items-center justify-center border-b border-r border-[#d9e6ea] p-4 text-center last:border-b-0 sm:min-h-[154px] sm:[&:nth-child(5)]:border-b-0 sm:[&:nth-child(6)]:border-b-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+4)]:border-b-0"
                                    >
                                        <Icon className="h-9 w-9 text-[#1d63c9]" strokeWidth={1.55} />
                                        <h3 className="mt-3 text-sm font-bold text-[#173466]">{item.title}</h3>
                                        <p className="mt-2 text-xs font-bold leading-5 text-[#5b6d7d]">{item.body}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.section>
            </div>

            <WaveField position="bottom" />
        </motion.div>
    );
}

function WaveField({ position }: { position: 'top' | 'bottom' }) {
    const positionClass = position === 'top' ? 'top-0' : 'bottom-0 rotate-180';

    return (
        <div className={`pointer-events-none absolute left-0 right-0 ${positionClass} h-44 overflow-hidden text-[#84c9e7] opacity-60`} aria-hidden="true">
            <svg className="absolute inset-x-[-8%] top-0 h-full w-[116%]" viewBox="0 0 1440 220" preserveAspectRatio="none">
                {[0, 1, 2, 3, 4].map((index) => (
                    <motion.path
                        key={index}
                        d={`M0 ${70 + index * 18} C 210 ${18 + index * 10}, 410 ${126 + index * 6}, 650 ${76 + index * 14} S 1090 ${96 - index * 4}, 1440 ${56 + index * 18}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={index === 2 ? 1.4 : 0.9}
                        strokeOpacity={0.28 - index * 0.03}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0.08, 1, 0.08], opacity: [0, 1, 0] }}
                        transition={{ delay: 0.08 * index, duration: 8 + index * 0.8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                ))}
            </svg>
        </div>
    );
}
