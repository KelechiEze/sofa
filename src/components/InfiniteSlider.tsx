import React from 'react';
import { motion } from 'motion/react';

const ITEMS = [
  "Sofa Cakes", "Blob Sofas", "Herb Pods", "Cloud Lounges", "Velvet Pods", 
  "Minimalist Arcs", "Couch Capsules", "Worktops", "Purifier O2", "Bouncy Props"
];

export default function InfiniteSlider() {
  // Duplicate items to ensure seamless loop
  const duplicatedItems = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="py-10 bg-black overflow-hidden whitespace-nowrap border-y border-white/10 relative z-10">
      <motion.div 
        animate={{ x: ["-100%", "0%"] }}
        transition={{ 
          duration: 60, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="inline-flex gap-20 items-center"
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter opacity-80 hover:opacity-100 transition-opacity cursor-default">
              {item}
            </span>
            <div className="w-4 h-4 bg-purple-600 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
