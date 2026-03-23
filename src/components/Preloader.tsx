import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader({ isLoaded }: { isLoaded: boolean }) {
  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Background Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [-20, 20, -20]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              x: [20, -20, 20]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/30 rounded-full blur-[120px]"
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center mb-8 shadow-2xl shadow-white/10"
            >
              <motion.div 
                animate={{ rotate: 45 }}
                className="w-10 h-10 border-4 border-black rounded-sm"
              />
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                className="text-6xl font-black text-white tracking-tighter uppercase"
              >
                Sofa.
              </motion.h1>
            </div>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-px bg-white/20 mt-8 max-w-[200px]"
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1 }}
              className="text-white text-xs font-bold uppercase tracking-[0.5em] mt-4"
            >
              Loading the future
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
