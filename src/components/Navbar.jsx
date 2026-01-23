import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { name: 'Home', id: '#home' },
  { name: 'About', id: '#about' },
  { name: 'Services', id: '#services' },
  { name: 'Portfolio', id: '#portfolio' },
  { name: 'Career', id: '#career' },
  { name: 'Contact', id: '#contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled
          ? 'backdrop-blur-md bg-black/40 border-b border-white/10'
          : 'bg-transparent'
          }`}
      >
        <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="FIRA WEB Logo"
              className="h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            {navItems.map((item) => (
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

          {/* Desktop Button */}
          <button 
                onClick={() => window.open("https://wa.me/918630628812?text=Hi, I'm interested in building a modern website!", "_blank")}
                className="hidden md:block bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 transition-all"
              >
                Let's Talk
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-[100] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-white rounded-full transition-transform"
            />
            <motion.span
              animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-8 h-0.5 bg-white rounded-full transition-all"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-white rounded-full transition-transform"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-black/80 backdrop-blur-2xl md:hidden overflow-hidden"
          >
            {/* Background Blob */}
            <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />

            <ul className="h-full flex flex-col justify-center px-10 gap-6 relative z-10 overflow-y-auto pt-20 pb-10">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <a
                    href={item.id}
                    onClick={() => setOpen(false)}
                    className="text-2xl sm:text-3xl font-medium text-white hover:text-primary transition-colors flex items-center gap-4 group"
                  >
                    <span className="text-[10px] sm:text-xs font-medium text-gray-500 font-mono">0{i + 1}</span>
                    {item.name}
                    <span className="w-0 h-[1px] bg-primary group-hover:w-8 transition-all duration-500"></span>
                  </a>
                </motion.li>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12 pt-12 border-t border-white/10 flex flex-col gap-8"
              >
                <div className="flex gap-6">
                  {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                    <a key={social} href="#" className="text-gray-400 font-medium hover:text-white transition-colors">{social}</a>
                  ))}
                </div>
                <div className="text-gray-500">
                  <p className="text-sm uppercase tracking-widest font-bold mb-2">Build your project</p>
                  <a href="mailto:info@firaweb.com" className="text-xl text-white font-medium hover:text-primary transition-colors">info@firaweb.com</a>
                </div>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
