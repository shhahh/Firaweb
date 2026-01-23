import { motion } from 'framer-motion';

const stats = [
    { value: '15+', label: 'Years Served' },
    { value: '15+', label: 'Countries' },
    { value: '85+', label: 'Global Team' },
    { value: '8.5k+', label: 'Solutions Delivered' },
];

const Stats = () => {
    return (
        <section className="py-20 bg-black border-y border-white/5">
            <div className="w-full px-6 md:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
