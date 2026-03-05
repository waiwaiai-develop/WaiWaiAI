import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

    // Animation Variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <section className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white">

            {/* Structural Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

            {/* Immersive Background Image (Parallax) & Right-side composition */}
            <motion.div
                style={{ y: y1, opacity: opacityHero }}
                className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0"
            >
                {/* Gradient mask to blend the image perfectly into the white left side */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-full"></div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
                <img
                    src="/hero-honu.png"
                    alt="WaiWai AI Honu Vision"
                    className="w-full h-full object-cover object-center opacity-90 mix-blend-multiply"
                />
            </motion.div>

            {/* Ambient Glowing Orbs - shifted to be less pervasive */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="max-w-5xl"
                >
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 backdrop-blur-xl text-white font-bold text-sm tracking-wider mb-8 shadow-sm"
                    >
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        AI System Development & Strategy
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-8 leading-[1.05] text-slate-950"
                    >
                        AIを味方に、<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 drop-shadow-sm">未来を豊かに。</span>
                    </motion.h1>

                    {/* Sub Description */}
                    <motion.div
                        variants={itemVariants}
                        className="text-lg md:text-xl text-slate-700 max-w-2xl mb-12 leading-relaxed font-bold tracking-tight space-y-4"
                    >
                        <p>
                            社名である「WaiWai」は、ハワイの言葉で「豊かさ」を意味します。
                        </p>
                        <p>
                            ハワイで幸運と繁栄の象徴とされる「ホヌ（ウミガメ）」のように、<br className="hidden md:block" />
                            お客様の事業に長く確実な繁栄をもたらす次世代の開発パートナーです。
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <a href="#products" className="group relative px-10 py-5 rounded-full bg-blue-600 text-white font-extrabold text-lg text-center overflow-hidden transition-all hover:scale-105 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.6)]">
                            <span className="relative z-10 flex items-center justify-center gap-3 drop-shadow-md">
                                プロダクトを見る <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a href="#contact" className="group px-10 py-5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-extrabold text-lg text-center transition-all hover:scale-105 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)] hover:border-slate-300">
                            まずは無料相談
                        </a>
                    </motion.div>
                </motion.div>

                {/* Removed text proof points to maximize visual space */}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: opacityHero }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-slate-500">Scroll</span>
            </motion.div>

        </section>
    );
}
