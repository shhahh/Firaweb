import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Journey = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const events = [
        {
            year: "10th Grade",
            title: "The Seeds of Passion",
            desc: "While teachers questioned our focus during Math and Science, we were building worlds in the school computer lab.",
            quote: '"Aap log kya kroge?"'
        },
        {
            year: "The Cities of Struggle",
            title: "Metro, Rejections & Grit",
            desc: "Delhi, Bangalore, Chennai, Haryana, and Vikasnagar. Traveling in crowded Delhi Metros, facing harsh words and rejections that only made us stronger.",
            quote: 'Every "No" was fuel.'
        },
        {
            year: "Training Days",
            title: "Arena Animation Academy",
            desc: "Moved to Delhi for 12th grade and dove deep into Web Design & Development at Arena Animation. The foundation was laid.",
            quote: 'Mastering the craft.'
        },
        {
            year: "The CP Grind",
            title: "Hustle Under CP Lights",
            desc: "Teaching classes by day, wandering Connaught Place (CP) by evening for inspiration, and coding all night in a small room.",
            quote: 'CP inspiration, code practice.'
        }
    ];

    return (
        <section ref={containerRef} id="journey" className="relative py-32 bg-black overflow-hidden group/journey">
            {/* Grain Overlay */}
            <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] grayscale bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] animate-[grain_8s_steps(10)_infinite]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-sm font-bold tracking-[0.3em] text-primary mb-4 uppercase">The Genesis</h2>
                    <h3 className="text-5xl md:text-7xl font-bold text-white mb-6 grayscale">
                        Our Journey: <br />
                        <span className="text-gray-600">Built on Grit & Hustle.</span>
                    </h3>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Neon Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] -translate-x-1/2" />
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(139,92,246,0.6)]"
                    />

                    {/* Timeline Events */}
                    <div className="space-y-32">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
                            >
                                {/* Year/Label */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                                    <span className="text-primary font-bold tracking-tighter text-lg">{event.year}</span>
                                    <h4 className="text-2xl md:text-3xl font-bold text-white mt-2 grayscale hover:grayscale-0 transition-all duration-500">{event.title}</h4>
                                    <p className="text-gray-500 mt-4 leading-relaxed max-w-sm ml-auto mr-0 md:mr-0 md:ml-auto">
                                        {event.desc}
                                    </p>
                                    <p className="font-handwritten text-3xl text-secondary mt-6 rotate-[-5deg] inline-block opacity-60">
                                        {event.quote}
                                    </p>
                                </div>

                                {/* Timeline Circle */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />

                                {/* Visual Side (Empty for balance or could add B&W images later) */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer Message */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center max-w-3xl mx-auto border-t border-white/5 pt-16"
                >
                    <p className="text-2xl md:text-3xl text-gray-400 italic font-light leading-relaxed">
                        "We didn't just learn to code; we learned to <span className="text-white font-bold">survive and excel</span>. That same energy goes into every project we build for you."
                    </p>
                    <div className="mt-8 flex justify-center gap-4 text-xs font-bold tracking-widest text-primary/40 uppercase">
                        <span>Delhi</span>
                        <span>•</span>
                        <span>Bangalore</span>
                        <span>•</span>
                        <span>Chennai</span>
                        <span>•</span>
                        <span>Haryana</span>
                        <span>•</span>
                        <span>Vikasnagar</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Journey;
