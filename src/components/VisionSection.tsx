import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake } from 'lucide-react';

export default function VisionSection() {
    return (
        <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
            {/* Elegant Dark Background for Contrast */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>

            {/* Geometric Turtle (Honu) Abstract Pattern */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-400 fill-current animate-pulse duration-[10000ms]">
                    <path d="M 100, 20 L 140, 50 L 140, 100 L 100, 140 L 60, 100 L 60, 50 Z" opacity="0.5" />
                    <path d="M 140, 50 L 180, 80 L 160, 120 L 140, 100 Z" opacity="0.3" />
                    <path d="M 60, 50 L 20, 80 L 40, 120 L 60, 100 Z" opacity="0.3" />
                    <path d="M 100, 140 L 120, 180 L 80, 180 Z" opacity="0.4" />
                    <path d="M 140, 100 L 170, 160 L 130, 150 Z" opacity="0.2" />
                    <path d="M 60, 100 L 30, 160 L 70, 150 Z" opacity="0.2" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-bold text-sm tracking-widest mb-10 shadow-sm">
                        <HeartHandshake className="w-4 h-4 text-cyan-400" /> OUR VISION & ORIGIN
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-tight drop-shadow-lg">
                        AIを味方に、<br className="md:hidden" />未来を豊かに。
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mb-10 rounded-full"></div>

                    <div className="space-y-8 text-xl md:text-2xl text-slate-300 leading-relaxed font-medium mx-auto max-w-4xl text-left md:text-center">
                        <p>
                            社名である「<strong className="text-white font-black">WaiWai</strong>」は、ハワイの言葉で「<strong className="text-cyan-400 font-bold">豊かさ</strong>」を意味します。
                        </p>
                        <p>
                            ハワイで幸運と繁栄の象徴とされるウミガメ（ホヌ）のように、クライアントの事業に長く確実な繁栄をもたらすこと。
                        </p>
                        <p>
                            そして、テクノロジーの力で誰もが本来のポテンシャルを発揮できる、豊かな未来を創り出すこと。
                        </p>
                        <p className="pt-4 text-slate-400 text-lg">
                            それが、次世代の開発パートナーとしての私たちの使命です。
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-16 inline-block"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center backdrop-blur-sm mx-auto shadow-2xl">
                            <Sparkles className="w-8 h-8 text-cyan-400" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
