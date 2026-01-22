import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
    {
        title: "Discovery",
        desc: "We dive deep into your industry to find your unique digital edge.",
        icon: "01"
    },
    {
        title: "Strategy",
        desc: "A surgical plan to conquer your market with speed and precision.",
        icon: "02"
    },
    {
        title: "Execution",
        desc: "Where lines of code transform into high-performance experiences.",
        icon: "03"
    },
    {
        title: "Launch",
        desc: "The world meets your brand. We monitor every pixel for perfection.",
        icon: "04"
    }
];

const Workflow = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="container mx-auto px-6 absolute top-24 z-20">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-primary mb-4 uppercase text-center md:text-left">The Process</h2>
                    <h3 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Workflow.</h3>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative w-[350px] md:w-[450px] shrink-0 aspect-[4/5] md:aspect-[3/4] rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 flex flex-col justify-end group overflow-hidden"
                        >
                            {/* Neon Number Background */}
                            <span className="absolute -top-10 -right-10 text-[200px] font-black text-white/[0.02] leading-none select-none group-hover:text-primary/5 transition-colors duration-700">
                                {step.icon}
                            </span>

                            <div className="relative z-10">
                                <span className="text-primary font-bold text-xl mb-4 block">Step {step.icon}</span>
                                <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">{step.title}</h4>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Border Glow Effect */}
                            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-[40px] transition-all duration-700" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Workflow;
