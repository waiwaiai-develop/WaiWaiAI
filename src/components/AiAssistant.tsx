'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
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
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Initial greeting when first opened
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

            if (!res.ok) {
                throw new Error('API error');
            }

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
                                updated[updated.length - 1] = {
                                    role: 'assistant',
                                    content: assistantContent,
                                };
                                return updated;
                            });
                        }
                    } catch {
                        // skip invalid JSON
                    }
                }
            }
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content:
                        '申し訳ありません、一時的にエラーが発生しました。お問い合わせフォームからもご連絡いただけます。',
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

    return (
        <>
            {/* Floating Orb Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 group"
                        aria-label="AIアシスタントを開く"
                    >
                        {/* Outer glow ring */}
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />

                        {/* Orb */}
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-sky-500 shadow-2xl shadow-blue-500/40 flex items-center justify-center group-hover:shadow-blue-500/60 transition-shadow duration-300">
                            {/* Inner shimmer */}
                            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent" />

                            {/* Icon */}
                            <Sparkles className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform" />
                        </div>

                        {/* Tooltip */}
                        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
                            AIに相談する
                            <div className="absolute top-full right-6 w-2 h-2 bg-slate-900 rotate-45 -mt-1" />
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] flex flex-col rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/15 border border-blue-100"
                    >
                        {/* Header with wave animation */}
                        <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 px-6 py-4 flex items-center justify-between shrink-0">
                            {/* Animated wave bg */}
                            <div className="absolute inset-0 overflow-hidden">
                                <svg
                                    className="absolute bottom-0 w-full"
                                    viewBox="0 0 400 30"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0,15 C100,25 200,5 300,15 C350,20 380,10 400,15 L400,30 L0,30 Z"
                                        fill="rgba(255,255,255,0.08)"
                                    >
                                        <animate
                                            attributeName="d"
                                            dur="4s"
                                            repeatCount="indefinite"
                                            values="M0,15 C100,25 200,5 300,15 C350,20 380,10 400,15 L400,30 L0,30 Z;M0,20 C80,10 180,25 280,12 C340,8 370,18 400,15 L400,30 L0,30 Z;M0,15 C100,25 200,5 300,15 C350,20 380,10 400,15 L400,30 L0,30 Z"
                                        />
                                    </path>
                                </svg>
                            </div>

                            <div className="flex items-center gap-3 relative z-10">
                                {/* Orb avatar */}
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                                    <span className="text-lg">🐢</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">
                                        ワイくん
                                    </h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                                        <span className="text-white/70 text-xs">
                                            {isStreaming ? '考え中...' : 'オンライン'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="relative z-10 p-2 rounded-xl hover:bg-white/20 transition-colors text-white/80 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shrink-0 mt-1 mr-2 shadow-md shadow-blue-500/20">
                                            <span className="text-xs">🐢</span>
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                                            msg.role === 'user'
                                                ? 'bg-blue-600 text-white rounded-br-md shadow-md shadow-blue-600/20'
                                                : 'bg-white text-slate-700 rounded-bl-md shadow-md border border-slate-100'
                                        }`}
                                    >
                                        {msg.content}
                                        {msg.role === 'assistant' && msg.content === '' && isStreaming && (
                                            <div className="flex items-center gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick action chips */}
                        {messages.length <= 1 && (
                            <div className="px-4 pb-2 flex flex-wrap gap-2 bg-white">
                                {['料金を知りたい', 'AI導入の相談', '事例を教えて'].map((text) => (
                                    <button
                                        key={text}
                                        onClick={() => {
                                            setInput(text);
                                            setTimeout(() => {
                                                setInput(text);
                                                sendMessage();
                                            }, 50);
                                        }}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 transition-colors"
                                    >
                                        {text}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input area */}
                        <div className="p-4 bg-white border-t border-slate-100 shrink-0">
                            <div className="flex items-center gap-2 bg-slate-50 rounded-2xl px-4 py-2 border border-slate-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20 transition-all">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="メッセージを入力..."
                                    disabled={isStreaming}
                                    className="flex-1 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none disabled:opacity-50"
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={!input.trim() || isStreaming}
                                    className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-md shadow-blue-600/20"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-[10px] text-slate-400 text-center mt-2">
                                Powered by WaiWai AI
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
