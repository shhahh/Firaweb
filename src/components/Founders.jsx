import { motion } from 'framer-motion';
import shahImg from '../assets/shah.png';
import arifImg from '../assets/arif.png';

const founders = [
    {
        name: 'Arif Raza',
        role: 'Co-Founder & CEO',
        desc: 'Visionary leader with 15+ years in tech innovation.',
        image: arifImg,
        socials: ['linkedin', 'twitter']
    },
    {
        name: 'Shah Raza',
        role: 'Co-Founder & CTO',
        desc: 'Technical architect pushing the boundaries of web.',
        image: shahImg,
        socials: ['linkedin', 'github']
    }
];

const Founders = () => {
    return (
        <section id="career" className="py-24 px-6 bg-background">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Minds Behind Fira</h2>
                    <p className="text-gray-400">Led by passion, driven by excellence.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-xl"
                        >
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                                />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <h3 className="text-2xl font-bold text-white">{founder.name}</h3>
                                <p className="text-primary font-medium mb-2">{founder.role}</p>
                                <p className="text-gray-400 text-sm">{founder.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founders;
