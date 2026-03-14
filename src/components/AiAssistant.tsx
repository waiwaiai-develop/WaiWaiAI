'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, MessageCircle, Calendar, FileText, ArrowRight, TrendingUp, Clock, DollarSign, Award } from 'lucide-react';

// ============================================
// TYPES
// ============================================
type Step = 'attribute' | 'pain' | 'industry' | 'proposal' | 'chat';
type Attribute = 'executive' | 'technical' | 'business' | 'research';
type PainPoint = 'inquiry' | 'manual' | 'cost' | 'start';
type Industry = 'it' | 'manufacturing' | 'retail' | 'medical' | 'education' | 'other';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface ProposalData {
    challenge: string;
    solution: string;
    solutionDetail: string;
    estimatedSaving: string;
    timeline: string;
    caseResult: string;
    estimatedCost: string;
}

interface FlowContext {
    attribute?: Attribute;
    painPoint?: PainPoint;
    industry?: Industry;
    attributeLabel?: string;
    painPointLabel?: string;
    industryLabel?: string;
}

// ============================================
// CONSTANTS
// ============================================
const ATTRIBUTES: { id: Attribute; emoji: string; label: string; description: string }[] = [
    { id: 'executive', emoji: '💼', label: '経営者・経営企画', description: '会社全体のDX推進や経営効率化を考えている' },
    { id: 'technical', emoji: '👨‍💻', label: '技術責任者・エンジニア', description: '技術選定や開発体制の改善を検討している' },
    { id: 'business', emoji: '📈', label: '事業部門・現場責任者', description: '現場の業務改善や生産性向上を目指している' },
    { id: 'research', emoji: '🔍', label: '情報収集・検討段階', description: 'まずはAI導入の可能性を調べている' },
];

const PAIN_POINTS: { id: PainPoint; emoji: string; label: string }[] = [
    { id: 'inquiry', emoji: '💬', label: '問い合わせ対応が多すぎる' },
    { id: 'manual', emoji: '📊', label: '手作業が多くてミスが出る' },
    { id: 'cost', emoji: '💸', label: '外注コストが高い' },
    { id: 'start', emoji: '🤔', label: 'AIに興味あるけど何から始めれば...' },
];

const INDUSTRIES: { id: Industry; emoji: string; label: string }[] = [
    { id: 'it', emoji: '🏢', label: 'IT・Web' },
    { id: 'manufacturing', emoji: '🏭', label: '製造' },
    { id: 'retail', emoji: '🛒', label: '小売・EC' },
    { id: 'medical', emoji: '🏥', label: '医療・介護' },
    { id: 'education', emoji: '📚', label: '教育' },
    { id: 'other', emoji: '✨', label: 'その他' },
];

// ============================================
// COMPONENTS
// ============================================

// Floating particles component
function Particles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-blue-400/30"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDuration: `${6 + Math.random() * 12}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        animation: `float-particle ${6 + Math.random() * 12}s ease-in-out infinite`,
                    }}
                />
            ))}
        </div>
    );
}

// Attribute Selection Card
function AttributeCard({ attr, onSelect, index }: { attr: typeof ATTRIBUTES[0]; onSelect: () => void; index: number }) {
    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            onClick={onSelect}
            className="group relative w-full text-left p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 hover:bg-blue-500/[0.06] transition-all duration-300 backdrop-blur-sm"
        >
            <div className="flex items-start gap-4">
                <div className="text-4xl">{attr.emoji}</div>
                <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-300 transition-colors">
                        {attr.label}
                    </h3>
                    <p className="text-white/50 text-sm">{attr.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
        </motion.button>
    );
}

// Selection Button (for pain points and industries)
function SelectionButton({ 
    emoji, 
    label, 
    onClick, 
    index 
}: { 
    emoji: string; 
    label: string; 
    onClick: () => void; 
    index: number;
}) {
    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            onClick={onClick}
            className="group px-6 py-4 rounded-xl text-left bg-white/[0.03] text-white/70 border border-white/[0.08] hover:border-blue-500/30 hover:bg-blue-500/[0.06] hover:text-white transition-all duration-300 backdrop-blur-sm"
        >
            <span className="text-2xl mr-3">{emoji}</span>
            <span className="font-medium">{label}</span>
        </motion.button>
    );
}

// Proposal Card Component
function ProposalCard({ proposal, onConsult, onDocument }: { proposal: ProposalData; onConsult: () => void; onDocument: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto"
        >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-sky-500/10 border border-blue-500/20 backdrop-blur-xl p-6">
                {/* Glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        あなたへのおすすめプラン
                    </div>
                    <h3 className="text-xl font-bold text-white">{proposal.solution}</h3>
                </div>

                {/* Challenge */}
                <div className="mb-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <p className="text-white/60 text-sm">課題</p>
                    <p className="text-white font-medium">{proposal.challenge}</p>
                </div>

                {/* Solution Detail */}
                <div className="mb-6">
                    <p className="text-white/80 text-sm leading-relaxed">{proposal.solutionDetail}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        <div className="flex items-center gap-2 text-emerald-400 text-xs mb-1">
                            <TrendingUp className="w-3 h-3" />
                            期待効果
                        </div>
                        <p className="text-white text-sm font-medium">{proposal.estimatedSaving}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <div className="flex items-center gap-2 text-amber-400 text-xs mb-1">
                            <Clock className="w-3 h-3" />
                            導入期間
                        </div>
                        <p className="text-white text-sm font-medium">{proposal.timeline}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
                        <div className="flex items-center gap-2 text-violet-400 text-xs mb-1">
                            <Award className="w-3 h-3" />
                            類似事例
                        </div>
                        <p className="text-white text-sm font-medium">{proposal.caseResult}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                        <div className="flex items-center gap-2 text-rose-400 text-xs mb-1">
                            <DollarSign className="w-3 h-3" />
                            概算費用
                        </div>
                        <p className="text-white text-sm font-medium">{proposal.estimatedCost}</p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={onConsult}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300"
                    >
                        <Calendar className="w-5 h-5" />
                        30分だけ無料で相談してみる
                    </button>
                    <button
                        onClick={onDocument}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] text-white/70 font-medium border border-white/[0.1] hover:bg-white/[0.08] hover:text-white transition-all duration-300"
                    >
                        <FileText className="w-4 h-4" />
                        資料だけ受け取る
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

// ============================================
// MAIN COMPONENT
// ============================================
export default function AiAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<Step>('attribute');
    const [context, setContext] = useState<FlowContext>({});
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isStreaming, setIsStreaming] = useState(false);
    const [empathyMessage, setEmpathyMessage] = useState('');
    const [proposal, setProposal] = useState<ProposalData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, step]);

    useEffect(() => {
        if (isOpen && step === 'chat' && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 500);
        }
    }, [isOpen, step]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Reset flow when closing
    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            setStep('attribute');
            setContext({});
            setMessages([]);
            setEmpathyMessage('');
            setProposal(null);
        }, 500);
    };

    // Step 1: Attribute Selection
    const handleAttributeSelect = async (attr: typeof ATTRIBUTES[0]) => {
        setIsLoading(true);
        setContext({ 
            attribute: attr.id, 
            attributeLabel: attr.label 
        });

        // Initial greeting with empathy
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [{ role: 'user', content: 'こんにちは' }],
                    context: {
                        attribute: attr.label,
                        mode: 'chat'
                    }
                }),
            });

            if (res.ok) {
                const reader = res.body?.getReader();
                if (reader) {
                    const decoder = new TextDecoder();
                    let content = '';
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;
                        const chunk = decoder.decode(value);
                        const lines = chunk.split('\n').filter(line => line.startsWith('data: '));
                        for (const line of lines) {
                            const data = line.slice(6);
                            if (data === '[DONE]') continue;
                            try {
                                const parsed = JSON.parse(data);
                                if (parsed.text) content += parsed.text;
                            } catch { }
                        }
                    }
                    setMessages([{ role: 'assistant', content }]);
                }
            }
        } catch {
            setMessages([{ 
                role: 'assistant', 
                content: `こんにちは！${attr.label}の方ですね。WaiWai AIのアシスタント「ワイくん」です。\\n\\nまず、今こんなお悩みありませんか？下から選んでみてください💡` 
            }]);
        } finally {
            setIsLoading(false);
            setStep('pain');
        }
    };

    // Step 2: Pain Point Selection
    const handlePainSelect = async (pain: typeof PAIN_POINTS[0]) => {
        setIsLoading(true);
        setContext(prev => ({ ...prev, painPoint: pain.id, painPointLabel: pain.label }));

        // Get empathy message from AI
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [{ role: 'user', content: `私の悩みは「${pain.label}」です` }],
                    context: {
                        attribute: context.attributeLabel,
                        painPoint: pain.label,
                        mode: 'empathy'
                    }
                }),
            });

            if (res.ok) {
                const reader = res.body?.getReader();
                if (reader) {
                    const decoder = new TextDecoder();
                    let content = '';
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;
                        const chunk = decoder.decode(value);
                        const lines = chunk.split('\\n').filter(line => line.startsWith('data: '));
                        for (const line of lines) {
                            const data = line.slice(6);
                            if (data === '[DONE]') continue;
                            try {
                                const parsed = JSON.parse(data);
                                if (parsed.text) content += parsed.text;
                            } catch { }
                        }
                    }
                    setEmpathyMessage(content);
                }
            }
        } catch {
            setEmpathyMessage(`それ、めちゃくちゃ多い相談なんですよ！\\n\\n実は似た課題を持ってた会社さん、月200時間の対応コスト削減できたんです💡\\n\\nちなみに、業種だけ教えてもらえます？もっとピッタリな事例出せるので！`);
        } finally {
            setIsLoading(false);
            setStep('industry');
        }
    };

    // Step 3: Industry Selection
    const handleIndustrySelect = async (industry: typeof INDUSTRIES[0]) => {
        setIsLoading(true);
        const newContext = { ...context, industry: industry.id, industryLabel: industry.label };
        setContext(newContext);

        // Get proposal from AI
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [{ role: 'user', content: `業種は「${industry.label}」です` }],
                    context: {
                        attribute: context.attributeLabel,
                        painPoint: context.painPointLabel,
                        industry: industry.label,
                        mode: 'proposal'
                    }
                }),
            });

            if (res.ok) {
                const text = await res.text();
                // Try to parse JSON from the streaming response
                const jsonMatch = text.match(/```json\\n?([\\s\\S]*?)\\n?```/);
                if (jsonMatch) {
                    setProposal(JSON.parse(jsonMatch[1]));
                } else {
                    throw new Error('No JSON found');
                }
            }
        } catch {
            // Fallback proposal
            setProposal({
                challenge: `${industry.label}業界での${context.painPointLabel}の課題`,
                solution: context.painPoint === 'inquiry' ? 'AIカスタマーサポート' : 
                         context.painPoint === 'manual' ? '業務自動化システム' :
                         context.painPoint === 'cost' ? '内製化支援コンサル' : 'AI導入戦略コンサル',
                solutionDetail: 'AIを活用した自律型システムで、繰り返し業務を自動化し、人的リソースを創造的業務に振り向けます。',
                estimatedSaving: '月150時間の工数削減',
                timeline: '最短2週間',
                caseResult: '成約率250%向上',
                estimatedCost: '月額10万円〜'
            });
        } finally {
            setIsLoading(false);
            setStep('proposal');
        }
    };

    // Handle CTA buttons
    const handleConsult = () => {
        window.open('/contact', '_blank');
        handleClose();
    };

    const handleDocument = () => {
        window.open('/contact?type=document', '_blank');
        handleClose();
    };

    const handleChatStart = () => {
        setStep('chat');
    };

    // Chat functions
    const sendMessage = useCallback(async () => {
        if (!input.trim() || isStreaming) return;

        const userMessage: Message = { role: 'user', content: input.trim() };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setIsStreaming(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: newMessages,
                    context: {
                        attribute: context.attributeLabel,
                        painPoint: context.painPointLabel,
                        industry: context.industryLabel,
                        mode: 'chat'
                    }
                }),
            });

            if (!res.ok) throw new Error('API error');
            const reader = res.body?.getReader();
            if (!reader) throw new Error('No reader');

            const decoder = new TextDecoder();
            let assistantContent = '';
            setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value);
                const lines = chunk.split('\\n').filter((line) => line.startsWith('data: '));
                for (const line of lines) {
                    const data = line.slice(6);
                    if (data === '[DONE]') continue;
                    try {
                        const parsed = JSON.parse(data);
                        if (parsed.text) {
                            assistantContent += parsed.text;
                            setMessages((prev) => {
                                const updated = [...prev];
                                updated[updated.length - 1] = { role: 'assistant', content: assistantContent };
                                return updated;
                            });
                        }
                    } catch { }
                }
            }
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: '申し訳ありません、一時的にエラーが発生しました。お問い合わせフォームからもご連絡いただけます。' },
            ]);
        } finally {
            setIsStreaming(false);
        }
    }, [input, isStreaming, messages, context]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* === FLOATING ORB TRIGGER === */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 group cursor-pointer"
                        aria-label="AIアシスタントを開く"
                    >
                        {/* Pulse rings */}
                        <div className="absolute inset-[-8px] rounded-full border border-blue-400/20 animate-[ping_3s_ease-in-out_infinite]" />
                        <div className="absolute inset-[-16px] rounded-full border border-blue-400/10 animate-[ping_4s_ease-in-out_infinite_0.5s]" />

                        {/* Main orb */}
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center justify-center group-hover:shadow-[0_0_60px_rgba(59,130,246,0.7)] transition-all duration-500">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent" />
                            <div className="absolute inset-0 rounded-full animate-[spin_8s_linear_infinite] bg-gradient-conic from-transparent via-white/10 to-transparent" />
                            <Sparkles className="w-7 h-7 text-white relative z-10 drop-shadow-lg" />
                        </div>

                        {/* Label */}
                        <div className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-slate-900/90 backdrop-blur-xl text-white text-sm font-medium rounded-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl border border-white/10">
                            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent font-bold">AI</span>に相談する
                            <div className="absolute top-full right-7 w-2 h-2 bg-slate-900/90 rotate-45 -mt-1" />
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* === FULL-SCREEN IMMERSIVE AI SPACE === */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-[100] flex flex-col"
                    >
                        {/* Deep space background */}
                        <div className="absolute inset-0 bg-[#04060e]">
                            {/* Aurora effect */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] rounded-full bg-blue-600/[0.07] blur-[120px] animate-[aurora1_12s_ease-in-out_infinite]" />
                                <div className="absolute bottom-[-20%] right-[-15%] w-[70%] h-[70%] rounded-full bg-indigo-500/[0.05] blur-[120px] animate-[aurora2_15s_ease-in-out_infinite]" />
                                <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-sky-500/[0.04] blur-[100px] animate-[aurora3_10s_ease-in-out_infinite]" />
                            </div>

                            {/* Star field */}
                            <div className="absolute inset-0 opacity-40">
                                {Array.from({ length: 80 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute rounded-full bg-white"
                                        style={{
                                            width: `${Math.random() * 2 + 1}px`,
                                            height: `${Math.random() * 2 + 1}px`,
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                            opacity: Math.random() * 0.7 + 0.3,
                                            animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
                                        }}
                                    />
                                ))}
                            </div>

                            <Particles />

                            {/* Grid floor effect */}
                            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-blue-500/[0.03] to-transparent"
                                style={{
                                    backgroundImage: 'linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)',
                                    backgroundSize: '60px 60px',
                                    maskImage: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
                                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
                                }}
                            />
                        </div>

                        {/* Top bar */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative z-10 flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/[0.06]"
                        >
                            <div className="flex items-center gap-4">
                                {/* AI Status orb */}
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center relative ${isLoading ? 'animate-pulse' : ''}`}>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                                    <span className="relative z-10 text-sm">🐢</span>
                                </div>
                                <div>
                                    <h2 className="text-white font-bold text-sm tracking-wide">WaiWai AI Assistant</h2>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${isLoading ? 'bg-blue-400 animate-pulse' : 'bg-emerald-400'}`} />
                                        <span className="text-white/40 text-xs font-mono">
                                            {isLoading ? 'PROCESSING...' : step === 'attribute' ? 'SELECT ATTRIBUTE' : step === 'pain' ? 'SELECT PAIN POINT' : step === 'industry' ? 'SELECT INDUSTRY' : step === 'proposal' ? 'VIEW PROPOSAL' : 'CHAT MODE'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleClose}
                                className="p-3 rounded-2xl border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all text-white/50 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </motion.div>

                        {/* Main content area */}
                        <div className="flex-1 relative z-10 flex flex-col max-w-3xl w-full mx-auto px-4 md:px-6 overflow-hidden">
                            
                            {/* STEP: ATTRIBUTE SELECTION */}
                            {step === 'attribute' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex-1 flex flex-col justify-center py-8"
                                >
                                    <div className="text-center mb-10">
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                            どちらに近いですか？
                                        </h2>
                                        <p className="text-white/50 text-lg">
                                            あなたにピッタリのAI導入プランをご提案します
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        {ATTRIBUTES.map((attr, i) => (
                                            <AttributeCard 
                                                key={attr.id} 
                                                attr={attr} 
                                                onSelect={() => handleAttributeSelect(attr)}
                                                index={i}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP: PAIN POINT SELECTION */}
                            {step === 'pain' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex-1 flex flex-col justify-center py-8"
                                >
                                    <div className="text-center mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                            ちなみに、今こんなお悩みありません？
                                        </h2>
                                        <p className="text-white/50">
                                            ボタンをポチッと選んでください💡
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {PAIN_POINTS.map((pain, i) => (
                                            <SelectionButton
                                                key={pain.id}
                                                emoji={pain.emoji}
                                                label={pain.label}
                                                onClick={() => handlePainSelect(pain)}
                                                index={i}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP: INDUSTRY SELECTION */}
                            {step === 'industry' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex-1 flex flex-col justify-center py-8"
                                >
                                    <div className="mb-6">
                                        {empathyMessage && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6"
                                            >
                                                <p className="text-white/90 text-sm leading-relaxed whitespace-pre-line">
                                                    {empathyMessage}
                                                </p>
                                            </motion.div>
                                        )}
                                        <h2 className="text-2xl font-bold text-white text-center mb-2">
                                            業種を教えてください
                                        </h2>
                                        <p className="text-white/50 text-center text-sm">
                                            もっとピッタリな事例を出せるので！
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {INDUSTRIES.map((industry, i) => (
                                            <SelectionButton
                                                key={industry.id}
                                                emoji={industry.emoji}
                                                label={industry.label}
                                                onClick={() => handleIndustrySelect(industry)}
                                                index={i}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP: PROPOSAL CARD */}
                            {step === 'proposal' && proposal && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex-1 overflow-y-auto py-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                                >
                                    <ProposalCard
                                        proposal={proposal}
                                        onConsult={handleConsult}
                                        onDocument={handleDocument}
                                    />
                                    
                                    {/* Chat option */}
                                    <div className="mt-6 text-center">
                                        <button
                                            onClick={handleChatStart}
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] text-white/60 border border-white/[0.08] hover:border-blue-500/30 hover:text-white transition-all text-sm"
                                        >
                                            <MessageCircle className="w-4 h-4" />
                                            もっと詳しく話したい（チャット）
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP: CHAT MODE */}
                            {step === 'chat' && (
                                <>
                                    {/* Messages */}
                                    <div className="flex-1 overflow-y-auto py-8 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                        {messages.map((msg, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 16 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                {msg.role === 'assistant' && (
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 mt-1 mr-3 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                                        <span className="text-xs">🐢</span>
                                                    </div>
                                                )}
                                                <div
                                                    className={`max-w-[75%] px-5 py-4 text-sm leading-relaxed ${
                                                        msg.role === 'user'
                                                            ? 'bg-blue-600/20 text-blue-100 rounded-3xl rounded-br-lg border border-blue-500/20 backdrop-blur-sm'
                                                            : 'bg-white/[0.04] text-white/80 rounded-3xl rounded-bl-lg border border-white/[0.06] backdrop-blur-sm'
                                                    }`}
                                                >
                                                    {msg.content}
                                                    {msg.role === 'assistant' && msg.content === '' && isStreaming && (
                                                        <div className="flex items-center gap-1.5 py-1">
                                                            <div className="w-2 h-2 rounded-full bg-blue-400/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                                                            <div className="w-2 h-2 rounded-full bg-blue-400/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                                                            <div className="w-2 h-2 rounded-full bg-blue-400/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                        <div ref={messagesEndRef} />
                                    </div>

                                    {/* Input area */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="pb-6 md:pb-10"
                                    >
                                        <div className="relative group">
                                            {/* Glow border */}
                                            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-sky-500/20 group-focus-within:from-blue-500/40 group-focus-within:via-indigo-500/40 group-focus-within:to-sky-500/40 transition-all duration-500 blur-sm" />

                                            <div className="relative flex items-center gap-3 bg-white/[0.04] backdrop-blur-xl rounded-2xl px-5 py-4 border border-white/[0.08] group-focus-within:border-blue-500/30 transition-all">
                                                <input
                                                    ref={inputRef}
                                                    type="text"
                                                    value={input}
                                                    onChange={(e) => setInput(e.target.value)}
                                                    onKeyDown={handleKeyDown}
                                                    placeholder="何でも聞いてください..."
                                                    disabled={isStreaming}
                                                    className="flex-1 bg-transparent text-white text-sm placeholder:text-white/25 focus:outline-none disabled:opacity-50 font-medium"
                                                />
                                                <button
                                                    onClick={sendMessage}
                                                    disabled={!input.trim() || isStreaming}
                                                    className="p-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] disabled:opacity-20 disabled:pointer-events-none transition-all duration-300"
                                                >
                                                    <Send className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        <p className="text-center mt-3 text-white/15 text-[10px] font-mono tracking-widest uppercase">
                                            Powered by WaiWai AI
                                        </p>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}