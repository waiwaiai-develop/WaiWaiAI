'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, ChevronRight } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

// Sonic ring pulse on send
function SonicRing({ trigger }: { trigger: number }) {
    return (
        <AnimatePresence>
            {trigger > 0 && (
                <motion.div
                    key={trigger}
                    initial={{ scale: 0.3, opacity: 0.8 }}
                    animate={{ scale: 3, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-full border-2 border-blue-400/40 pointer-events-none"
                    style={{ top: '50%', left: '50%', width: 40, height: 40, marginTop: -20, marginLeft: -20 }}
                />
            )}
        </AnimatePresence>
    );
}

// Enhanced particles - fewer but bigger on mobile
function Particles() {
    const particles = useMemo(
        () =>
            Array.from({ length: 30 }).map((_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                size: Math.random() * 3 + 1.5,
                duration: 8 + Math.random() * 14,
                delay: Math.random() * 6,
            })),
        []
    );
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full bg-blue-400/40"
                    style={{
                        left: p.left,
                        top: p.top,
                        width: p.size,
                        height: p.size,
                        animation: `float-particle ${p.duration}s ease-in-out infinite ${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}

// Stars - bigger and more visible on mobile
function StarField() {
    const stars = useMemo(
        () =>
            Array.from({ length: 60 }).map((_, i) => ({
                id: i,
                size: Math.random() * 2.5 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.4,
                duration: 2 + Math.random() * 4,
                delay: Math.random() * 3,
            })),
        []
    );
    return (
        <div className="absolute inset-0">
            {stars.map((s) => (
                <div
                    key={s.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        width: s.size,
                        height: s.size,
                        left: s.left,
                        top: s.top,
                        opacity: s.opacity,
                        animation: `twinkle ${s.duration}s ease-in-out infinite ${s.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}

// Waveform visualizer for AI processing
function WaveVisualizer({ active }: { active: boolean }) {
    return (
        <div className="flex items-center gap-[3px] h-6">
            {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="w-[3px] rounded-full bg-gradient-to-t from-blue-500 to-cyan-400"
                    animate={
                        active
                            ? {
                                  height: [6, 18 + Math.random() * 10, 6],
                                  opacity: [0.5, 1, 0.5],
                              }
                            : { height: 6, opacity: 0.3 }
                    }
                    transition={
                        active
                            ? {
                                  duration: 0.6 + Math.random() * 0.4,
                                  repeat: Infinity,
                                  delay: i * 0.1,
                                  ease: 'easeInOut',
                              }
                            : { duration: 0.3 }
                    }
                />
            ))}
        </div>
    );
}

export default function AiAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isStreaming, setIsStreaming] = useState(false);
    const [hasGreeted, setHasGreeted] = useState(false);
    const [sonicPulse, setSonicPulse] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 600);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && !hasGreeted && messages.length === 0) {
            setHasGreeted(true);
            setMessages([
                {
                    role: 'assistant',
                    content:
                        'こんにちは！WaiWai AIのアシスタント「ワイくん」です🐢✨ AI導入やシステム開発のこと、なんでも聞いてくださいね！概算見積もりもお出しできますよ。何かお困りのことはありますか？',
                },
            ]);
        }
    }, [isOpen, hasGreeted, messages.length]);

    const sendMessage = useCallback(async () => {
        if (!input.trim() || isStreaming) return;

        setSonicPulse((p) => p + 1);
        const userMessage: Message = { role: 'user', content: input.trim() };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setIsStreaming(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages }),
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
                const lines = chunk.split('\n').filter((line) => line.startsWith('data: '));
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
                    } catch {
                        /* skip */
                    }
                }
            }
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: '申し訳ありません、一時的にエラーが発生しました。お問い合わせフォームからもご連絡いただけます。',
                },
            ]);
        } finally {
            setIsStreaming(false);
        }
    }, [input, isStreaming, messages]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const quickAction = (text: string) => {
        setSonicPulse((p) => p + 1);
        const userMessage: Message = { role: 'user', content: text };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setIsStreaming(true);

        fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: newMessages }),
        })
            .then(async (res) => {
                if (!res.ok) throw new Error('API error');
                const reader = res.body?.getReader();
                if (!reader) throw new Error('No reader');
                const decoder = new TextDecoder();
                let content = '';
                setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    const chunk = decoder.decode(value);
                    const lines = chunk.split('\n').filter((l) => l.startsWith('data: '));
                    for (const line of lines) {
                        const data = line.slice(6);
                        if (data === '[DONE]') continue;
                        try {
                            const parsed = JSON.parse(data);
                            if (parsed.text) {
                                content += parsed.text;
                                setMessages((prev) => {
                                    const u = [...prev];
                                    u[u.length - 1] = { role: 'assistant', content };
                                    return u;
                                });
                            }
                        } catch {
                            /* skip */
                        }
                    }
                }
            })
            .catch(() => {
                setMessages((prev) => [...prev, { role: 'assistant', content: 'エラーが発生しました。' }]);
            })
            .finally(() => setIsStreaming(false));
    };

    return (
        <>
            {/* === FLOATING ORB TRIGGER (Mobile: bigger, more dramatic) === */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 group cursor-pointer"
                        aria-label="AIアシスタントを開く"
                    >
                        {/* Outer glow ring */}
                        <div className="absolute inset-[-14px] md:inset-[-10px] rounded-full bg-blue-500/10 animate-[pulse_3s_ease-in-out_infinite]" />

                        {/* Pulse rings */}
                        <div className="absolute inset-[-10px] rounded-full border border-blue-400/25 animate-[ping_3s_ease-in-out_infinite]" />
                        <div className="absolute inset-[-22px] rounded-full border border-blue-400/10 animate-[ping_4s_ease-in-out_infinite_0.5s]" />

                        {/* Main orb - bigger on mobile */}
                        <div className="relative w-[68px] h-[68px] md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_50px_rgba(59,130,246,0.6)] flex items-center justify-center group-hover:shadow-[0_0_70px_rgba(59,130,246,0.8)] transition-all duration-500">
                            {/* Inner shine */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-transparent to-transparent" />
                            {/* Rotating light sweep */}
                            <div className="absolute inset-0 rounded-full animate-[spin_6s_linear_infinite] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-conic from-transparent via-white/20 to-transparent" />
                            </div>
                            <Sparkles className="w-7 h-7 md:w-6 md:h-6 text-white relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                        </div>

                        {/* Tooltip - desktop only */}
                        <div className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-slate-900/95 backdrop-blur-xl text-white text-sm font-medium rounded-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl border border-white/10 hidden md:block">
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">AI</span>
                            に相談する
                            <div className="absolute top-full right-7 w-2 h-2 bg-slate-900/95 rotate-45 -mt-1" />
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* === FULL-SCREEN IMMERSIVE AI SPACE === */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[100] flex flex-col"
                    >
                        {/* Deep space background */}
                        <div className="absolute inset-0 bg-[#020408]">
                            {/* Aurora effect - more intense on mobile */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute top-[-40%] left-[-30%] w-[100%] h-[100%] md:w-[80%] md:h-[80%] rounded-full bg-blue-600/[0.1] blur-[80px] md:blur-[120px] animate-[aurora1_12s_ease-in-out_infinite]" />
                                <div className="absolute bottom-[-30%] right-[-25%] w-[90%] h-[90%] md:w-[70%] md:h-[70%] rounded-full bg-indigo-500/[0.08] blur-[80px] md:blur-[120px] animate-[aurora2_15s_ease-in-out_infinite]" />
                                <div className="absolute top-[10%] right-[-5%] w-[70%] h-[70%] md:w-[50%] md:h-[50%] rounded-full bg-cyan-500/[0.06] blur-[60px] md:blur-[100px] animate-[aurora3_10s_ease-in-out_infinite]" />
                            </div>

                            {/* Star field */}
                            <StarField />

                            {/* Floating particles */}
                            <Particles />

                            {/* Grid floor effect */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-[50%] md:h-[40%]"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
                                    backgroundSize: '40px 40px',
                                    maskImage: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                                    perspective: '500px',
                                    transform: 'rotateX(45deg)',
                                    transformOrigin: 'bottom',
                                }}
                            />
                            {/* Horizon glow */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                        </div>

                        {/* Top bar */}
                        <motion.div
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 flex items-center justify-between px-4 md:px-10 py-4 md:py-5 border-b border-white/[0.06]"
                        >
                            <div className="flex items-center gap-3">
                                {/* AI Status orb with wave visualizer */}
                                <div className="relative">
                                    <div
                                        className={`w-11 h-11 md:w-10 md:h-10 rounded-full flex items-center justify-center relative ${isStreaming ? '' : ''}`}
                                    >
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 shadow-[0_0_25px_rgba(59,130,246,0.5)]" />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                                        <span className="relative z-10 text-sm">🐢</span>
                                    </div>
                                    {/* Ripple when streaming */}
                                    {isStreaming && (
                                        <motion.div
                                            className="absolute inset-[-6px] rounded-full border border-blue-400/30"
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                        />
                                    )}
                                </div>
                                <div>
                                    <h2 className="text-white font-bold text-sm tracking-wide">ワイくん</h2>
                                    <div className="flex items-center gap-2">
                                        <WaveVisualizer active={isStreaming} />
                                        <span className="text-white/40 text-[10px] font-mono tracking-wider">
                                            {isStreaming ? 'THINKING...' : 'ONLINE'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-3 rounded-2xl border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] active:scale-95 transition-all text-white/50 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </motion.div>

                        {/* Main content area */}
                        <div className="flex-1 relative z-10 flex flex-col max-w-3xl w-full mx-auto px-3 md:px-6 overflow-hidden">
                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto py-5 md:py-8 space-y-5 md:space-y-6 overscroll-contain">
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20, scale: 0.97 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        {msg.role === 'assistant' && (
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shrink-0 mt-1 mr-2.5 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                                <span className="text-xs">🐢</span>
                                            </div>
                                        )}
                                        <div
                                            className={`max-w-[82%] md:max-w-[75%] px-4 md:px-5 py-3.5 md:py-4 text-[14px] md:text-sm leading-relaxed ${
                                                msg.role === 'user'
                                                    ? 'bg-gradient-to-br from-blue-600/25 to-indigo-600/20 text-blue-100 rounded-2xl rounded-br-md border border-blue-500/20 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.1)]'
                                                    : 'bg-white/[0.05] text-white/85 rounded-2xl rounded-bl-md border border-white/[0.08] backdrop-blur-sm'
                                            }`}
                                        >
                                            {msg.content}
                                            {msg.role === 'assistant' && msg.content === '' && isStreaming && (
                                                <div className="flex items-center gap-1.5 py-1">
                                                    <motion.div
                                                        className="w-2 h-2 rounded-full bg-cyan-400/70"
                                                        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                                                        transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                                                    />
                                                    <motion.div
                                                        className="w-2 h-2 rounded-full bg-blue-400/70"
                                                        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                                                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }}
                                                    />
                                                    <motion.div
                                                        className="w-2 h-2 rounded-full bg-indigo-400/70"
                                                        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                                                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Quick actions - horizontal scroll on mobile */}
                            {messages.length <= 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="pb-4 md:pb-6"
                                >
                                    <div className="flex md:flex-wrap md:justify-center gap-2.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none snap-x snap-mandatory px-1">
                                        {[
                                            { emoji: '💰', text: '料金を知りたい', sub: 'Pricing' },
                                            { emoji: '🤖', text: 'AI導入の相談', sub: 'Consulting' },
                                            { emoji: '📊', text: '事例を教えて', sub: 'Case Study' },
                                            { emoji: '⚡', text: '業務を自動化したい', sub: 'Automation' },
                                        ].map((item) => (
                                            <button
                                                key={item.text}
                                                onClick={() => quickAction(item.text)}
                                                disabled={isStreaming}
                                                className="group flex-shrink-0 snap-center px-4 py-3 md:px-5 md:py-3 rounded-2xl text-sm font-medium bg-white/[0.04] text-white/60 border border-white/[0.08] hover:border-cyan-500/30 hover:bg-cyan-500/[0.08] hover:text-cyan-300 active:scale-95 transition-all duration-300 backdrop-blur-sm disabled:opacity-30"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="text-base">{item.emoji}</span>
                                                    <div className="text-left">
                                                        <div className="text-xs md:text-sm">{item.text}</div>
                                                        <div className="text-[9px] font-mono text-white/20 tracking-wider md:hidden">{item.sub}</div>
                                                    </div>
                                                    <ChevronRight className="w-3.5 h-3.5 text-white/15 group-hover:text-cyan-400/50 transition-colors md:hidden" />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Input area */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.25, duration: 0.5 }}
                                className="pb-4 md:pb-10 relative"
                            >
                                <SonicRing trigger={sonicPulse} />

                                <div className="relative group">
                                    {/* Glow border */}
                                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 group-focus-within:from-cyan-500/50 group-focus-within:via-blue-500/50 group-focus-within:to-indigo-500/50 transition-all duration-500 blur-sm" />

                                    <div className="relative flex items-center gap-2.5 md:gap-3 bg-white/[0.05] backdrop-blur-xl rounded-2xl px-4 md:px-5 py-3.5 md:py-4 border border-white/[0.1] group-focus-within:border-cyan-500/30 transition-all">
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder="何でも聞いてください..."
                                            disabled={isStreaming}
                                            className="flex-1 bg-transparent text-white text-[15px] md:text-sm placeholder:text-white/25 focus:outline-none disabled:opacity-50 font-medium"
                                        />
                                        <button
                                            onClick={sendMessage}
                                            disabled={!input.trim() || isStreaming}
                                            className="p-2.5 md:p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-90 disabled:opacity-20 disabled:shadow-none disabled:pointer-events-none transition-all duration-300"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <p className="text-center mt-3 text-white/10 text-[9px] font-mono tracking-[0.25em] uppercase">
                                    Powered by WaiWai AI
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
