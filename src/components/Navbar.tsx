import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Menu, User, X } from 'lucide-react';
import { useCart } from '../store/useCart';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const cartItems = useCart((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-7xl"
      >
        <div className="bg-white/70 backdrop-blur-2xl border border-white/20 rounded-3xl px-6 md:px-8 py-4 flex items-center justify-between shadow-xl shadow-black/5">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">kcsofa.</span>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-gray-500">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`${isActive(link.href) ? 'text-black' : 'hover:text-purple-600'} transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 text-gray-500 hover:text-black transition-colors hidden sm:block">
              <Search size={18} />
            </button>
            <button className="p-2 text-gray-500 hover:text-black transition-colors">
              <User size={18} />
            </button>
            <Link to="/cart" className="relative p-2 text-gray-500 hover:text-black transition-colors">
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-purple-600 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 hover:text-black transition-colors md:hidden"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
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
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-base font-black uppercase tracking-tighter ${isActive(link.href) ? 'text-purple-600' : 'text-gray-800'} hover:text-purple-600 transition-colors flex items-center justify-between group`}
                      >
                        {link.name}
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: isActive(link.href) ? 1 : 0 }}
                          className="w-2 h-2 bg-purple-600 rounded-full"
                        />
                      </Link>
                    </motion.div>
                  ))}
                  <div className="h-px bg-gray-100 my-2" />
                  <div className="grid grid-cols-2 gap-4">
                    <Link to="/shipping-policy" onClick={() => setIsOpen(false)} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-black transition-colors">Shipping</Link>
                    <Link to="/returns-policy" onClick={() => setIsOpen(false)} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-black transition-colors">Returns</Link>
                    <Link to="/care-guide" onClick={() => setIsOpen(false)} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-black transition-colors">Care Guide</Link>
                    <Link to="/faqs" onClick={() => setIsOpen(false)} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-black transition-colors">FAQs</Link>
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
