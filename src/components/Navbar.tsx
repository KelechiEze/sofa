import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Menu, User, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Catalog', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-7xl"
      >
        <div className="bg-white/70 backdrop-blur-2xl border border-white/20 rounded-3xl px-6 md:px-8 py-4 flex items-center justify-between shadow-xl shadow-black/5">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">Sofa.</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-gray-500">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-purple-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 text-gray-500 hover:text-black transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-black transition-colors">
              <User size={20} />
            </button>
            <button className="relative p-2 text-gray-500 hover:text-black transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-purple-600 text-white text-[10px] flex items-center justify-center rounded-full font-bold">3</span>
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 hover:text-black transition-colors md:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 md:hidden"
            >
              <div className="bg-white/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl shadow-black/10">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-black uppercase tracking-tighter text-gray-800 hover:text-purple-600 transition-colors flex items-center justify-between group"
                    >
                      {link.name}
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="w-2 h-2 bg-purple-600 rounded-full"
                      />
                    </motion.a>
                  ))}
                  <div className="h-px bg-gray-100 my-2" />
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Follow Us</span>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-900 hover:text-white transition-all cursor-pointer">
                        <User size={14} />
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-900 hover:text-white transition-all cursor-pointer">
                        <ShoppingBag size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
