import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-surface relative">
            <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Left Side: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm font-bold tracking-widest text-primary mb-4 uppercase">Who We Are</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        Not just another agency. <br />
                        We are your <span className="text-secondary">growth partners.</span>
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        At Fira Web, we don't just build websites; we build businesses. Our strategy is simple: User-focused design combined with powerful technology to drive real results. From the first pixel to the final code, every decision is made with your growth in mind.
                    </p>

                    <div className="flex gap-8">
                        <div>
                            <h4 className="text-4xl font-bold text-white">100%</h4>
                            <p className="text-gray-500 text-sm">Client Satisfaction</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-bold text-white">24/7</h4>
                            <p className="text-gray-500 text-sm">Support Team</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: CTA / Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[500px] rounded-3xl overflow-hidden bg-black border border-white/5 group shadow-2xl"
                >
                    <img
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop"
                        alt="Fira Web Office"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                    />
                    {/* Decorative Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/40 backdrop-blur-none group-hover:backdrop-blur-sm transition-all duration-500">
                        <h4 className="text-2xl font-bold text-white mb-4">Ready to Scale?</h4>
                        <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105">
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
