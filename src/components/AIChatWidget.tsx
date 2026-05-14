'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Bot, Loader2, Send, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

const SUGGESTIONS = [
    'どんなことができますか？',
    'LINEとAIを連携したい',
    '業務を自動化したい',
    'AI研修をお願いしたい',
];

export default function AIChatWidget() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Hide on contact/booking pages
    if (pathname === '/contact' || pathname === '/booking') {
        return null;
    }

    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const sendMessage = useCallback(async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: text.trim() };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!res.ok) throw new Error('Failed');

            const reader = res.body?.getReader();
            if (!reader) throw new Error('No reader');

            const decoder = new TextDecoder();
            let assistantContent = '';

            setMessages([...newMessages, { role: 'assistant', content: '' }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                        try {
                            const data = JSON.parse(line.slice(6));
                            if (data.text) {
                                assistantContent += data.text;
                                setMessages([...newMessages, { role: 'assistant', content: assistantContent }]);
                            }
                        } catch {
                            // Skip malformed JSON
                        }
                    }
                }
            }
        } catch {
            setMessages([
                ...newMessages,
                { role: 'assistant', content: '申し訳ありません。通信エラーが発生しました。もう一度お試しください。' },
            ]);
        } finally {
            setIsLoading(false);
        }
    }, [messages, isLoading]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(input);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-20 right-3 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_20px_54px_-22px_rgba(15,23,42,0.95)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-blue-800 sm:bottom-24 sm:right-6"
                        aria-label="AIに相談する"
                    >
                        <Bot className="h-6 w-6" />
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
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="fixed bottom-0 right-0 z-50 flex h-[min(600px,100dvh)] w-full flex-col overflow-hidden bg-white shadow-[0_-10px_60px_-20px_rgba(15,23,42,0.3)] sm:bottom-6 sm:right-6 sm:h-[560px] sm:w-[380px] sm:rounded-2xl sm:border sm:border-slate-200"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-950 px-4 py-3 text-white">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700">
                                    <Bot className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">WaiWai AI アシスタント</p>
                                    <p className="text-[11px] text-blue-200">何でもお気軽にどうぞ</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg p-1.5 transition hover:bg-white/10"
                                aria-label="チャットを閉じる"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
                            {messages.length === 0 ? (
                                <div className="flex h-full flex-col items-center justify-center text-center">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                                        <Bot className="h-6 w-6 text-blue-700" />
                                    </div>
                                    <p className="mb-1 text-sm font-bold text-slate-950">WaiWai AIに相談する</p>
                                    <p className="mb-6 text-xs leading-5 text-slate-500">
                                        やりたいことを教えてください。<br />
                                        どんなAI活用ができるかお答えします。
                                    </p>
                                    <div className="grid w-full gap-2">
                                        {SUGGESTIONS.map((suggestion) => (
                                            <button
                                                key={suggestion}
                                                onClick={() => sendMessage(suggestion)}
                                                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-left text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                                            >
                                                {suggestion}
                                                <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {messages.map((message, index) => (
                                        <div
                                            key={index}
                                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-6 ${
                                                    message.role === 'user'
                                                        ? 'bg-blue-700 text-white'
                                                        : 'border border-slate-200 bg-slate-50 text-slate-800'
                                                }`}
                                            >
                                                {message.content || (
                                                    <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && messages[messages.length - 1]?.role === 'user' && (
                                        <div className="flex justify-start">
                                            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5">
                                                <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="border-t border-slate-100 bg-white px-3 py-3">
                            <div className="flex items-end gap-2">
                                <textarea
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="やりたいことを教えてください..."
                                    rows={1}
                                    disabled={isLoading}
                                    className="max-h-24 min-h-[44px] flex-1 resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:opacity-60"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white transition hover:bg-blue-800 disabled:opacity-40"
                                    aria-label="送信"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                            <p className="mt-2 text-center text-[10px] text-slate-400">
                                AIによる回答です。詳細は
                                <a href="/contact" className="text-blue-600 hover:underline">無料相談</a>
                                でお話しできます。
                            </p>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
