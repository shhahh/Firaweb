import { motion } from 'framer-motion';

const services = [
    {
        title: 'Web Development',
        desc: 'High-performance, scalable responsive websites.',
        col: 'col-span-12 md:col-span-8',
        color: 'from-blue-500/20 to-blue-600/5'
    },
    {
        title: 'Graphic Design',
        desc: 'Visuals that tell your brand story.',
        col: 'col-span-12 md:col-span-4',
        color: 'from-purple-500/20 to-purple-600/5'
    },
    {
        title: 'Motion Graphics',
        desc: 'Animations that captivate and convert.',
        col: 'col-span-12 md:col-span-4',
        color: 'from-pink-500/20 to-pink-600/5'
    },
    {
        title: 'Video Editing',
        desc: 'Professional cuts for maximum impact.',
        col: 'col-span-12 md:col-span-8',
        color: 'from-orange-500/20 to-orange-600/5'
    },
    {
        title: 'SEO',
        desc: 'Visibility that drives real growth.',
        col: 'col-span-12 md:col-span-6',
        color: 'from-green-500/20 to-green-600/5'
    },
    {
        title: 'Branding',
        desc: 'Identity that speaks louder than words.',
        col: 'col-span-12 md:col-span-6',
        color: 'from-yellow-500/20 to-yellow-600/5'
    }
];

const Expertise = () => {
    return (
        <section id="services" className="py-24 px-0 bg-background relative overflow-hidden">
            <div className="w-full px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Design. Development.</span> <br />
                        <span className="text-gray-500">Branding. That Delivers.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-12 gap-6">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`${item.col} group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl`}
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
