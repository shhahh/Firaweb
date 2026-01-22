import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-black/30 border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    FIRA WEB
                </div>

                <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                    {[
                        { name: 'Home', id: '#home' },
                        { name: 'About', id: '#about' },
                        { name: 'Services', id: '#services' },
                        { name: 'Portfolio', id: '#portfolio' },
                        { name: 'Career', id: '#career' },
                        { name: 'Contact', id: '#contact' }
                    ].map((item) => (
                        <li key={item.name} className="relative group">
                            <a
                                href={item.id}
                                className="hover:text-primary transition-colors cursor-pointer block py-1"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 transition-all">
                    Let's Talk
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
