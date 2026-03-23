import React from 'react';
import { motion } from 'motion/react';

const FEATURE_CONTENT = {
  title: "Unmatched Craftsmanship",
  desc: "Every stitch is placed with surgical precision. Our artisans spend over 200 hours on each individual piece to ensure it defies the logic of standard manufacturing. Join the elite circle of visionaries who have already transformed their living spaces into sanctuaries of modern art and absolute comfort.",
  video: "/thevideo.mp4",
  color: "#8B5CF6"
};

export default function StickyScrollSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-gray-900">
              {FEATURE_CONTENT.title}
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-xl mb-10">
              {FEATURE_CONTENT.desc}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-1 w-24 bg-purple-600 rounded-full" />
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Excellence Defined</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Video Content */}
        <div className="w-full md:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl bg-gray-100"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-[600px] object-cover"
            >
              <source src={FEATURE_CONTENT.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dynamic Overlay */}
            <div className="absolute inset-0 bg-purple-600 opacity-10 mix-blend-overlay pointer-events-none" />
          </motion.div>
          
          {/* Floating decorative elements */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/20 backdrop-blur-3xl rounded-3xl border border-white/30 z-20 shadow-2xl hidden md:block"
          />
        </div>

      </div>
    </section>
  );
}
