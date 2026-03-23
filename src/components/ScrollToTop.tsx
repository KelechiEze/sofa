import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Zap, Sparkles, Box } from 'lucide-react';

const STATES = [
  { color: "#8B5CF6", icon: <ArrowUp size={24} /> },
  { color: "#FBBF24", icon: <Zap size={24} /> },
  { color: "#10B981", icon: <Sparkles size={24} /> },
  { color: "#F472B6", icon: <Box size={24} /> }
];

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STATES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentState = STATES[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            y: 0,
            backgroundColor: currentState.color
          }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-[24px] flex items-center justify-center text-white shadow-2xl shadow-black/20 border border-white/20 backdrop-blur-md transition-colors duration-1000"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              {currentState.icon}
            </motion.div>
          </AnimatePresence>
          
          {/* Pulse effect */}
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              times: [0, 0.5, 1]
            }}
            className="absolute inset-0 rounded-[24px] border-2 border-white/50"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
