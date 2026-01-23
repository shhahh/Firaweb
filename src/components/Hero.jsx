import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Hero = () => {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background pb-12 md:pb-20">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />

            <div className="container mx-auto px-6 relative z-10 text-center pt-24 md:pt-16">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight px-4 sm:px-0"
                >
                    <span className="block text-white">Modern & Logical Rich</span>
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Websites
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    Custom website design to help your business grow. We craft digital experiences that look sharp, feel intuitive, and perform flawlessly across every platform.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 flex justify-center"
                >
                    <Magnetic>
                        <button
                            className="group relative px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]"
                            data-cursor="default"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Fix Your Meeting
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </span>
                        </button>
                    </Magnetic>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
