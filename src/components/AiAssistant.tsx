'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

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

export default function AiAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isStreaming, setIsStreaming] = useState(false);
    const [hasGreeted, setHasGreeted] = useState(false);
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
            setTimeout(() => inputRef.current?.focus(), 500);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && !hasGreeted && messages.length === 0) {
            setHasGreeted(true);
            setMessages([
                {
                    role: 'assistant',
                    content:
                        'こんにちは。WaiWai AIのアシスタント「ワイくん」です。AI導入やシステム開発のこと、なんでも聞いてください。概算見積もりもお出しできますよ。',
                },
            ]);
        }
    }, [isOpen, hasGreeted, messages.length]);

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
                    } catch { /* skip */ }
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
    }, [input, isStreaming, messages]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const quickAction = (text: string) => {
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
                        } catch { /* skip */ }
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
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center relative ${isStreaming ? 'animate-pulse' : ''}`}>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                                    <span className="relative z-10 text-sm">🐢</span>
                                </div>
                                <div>
                                    <h2 className="text-white font-bold text-sm tracking-wide">WaiWai AI Assistant</h2>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${isStreaming ? 'bg-blue-400 animate-pulse' : 'bg-emerald-400'}`} />
                                        <span className="text-white/40 text-xs font-mono">
                                            {isStreaming ? 'PROCESSING...' : 'READY'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-3 rounded-2xl border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all text-white/50 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </motion.div>

                        {/* Main content area */}
                        <div className="flex-1 relative z-10 flex flex-col max-w-3xl w-full mx-auto px-4 md:px-6">
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

                            {/* Quick actions */}
                            {messages.length <= 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex flex-wrap justify-center gap-3 pb-6"
                                >
                                    {[
                                        { emoji: '💰', text: '料金を知りたい' },
                                        { emoji: '🤖', text: 'AI導入の相談' },
                                        { emoji: '📊', text: '事例を教えて' },
                                        { emoji: '⚡', text: '業務を自動化したい' },
                                    ].map((item) => (
                                        <button
                                            key={item.text}
                                            onClick={() => quickAction(item.text)}
                                            disabled={isStreaming}
                                            className="group px-5 py-3 rounded-2xl text-sm font-medium bg-white/[0.03] text-white/60 border border-white/[0.08] hover:border-blue-500/30 hover:bg-blue-500/[0.06] hover:text-blue-300 transition-all duration-300 backdrop-blur-sm disabled:opacity-30"
                                        >
                                            <span className="mr-2">{item.emoji}</span>
                                            {item.text}
                                        </button>
                                    ))}
                                </motion.div>
                            )}

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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
