import React from 'react';
import { motion } from 'motion/react';

const CONTENT = {
  title: "Innovation First",
  desc: "Embracing cutting-edge technology to deliver unparalleled experiences. Our team of engineers and designers work tirelessly to push boundaries and redefine what's possible. Join us in shaping the future where creativity meets functionality in perfect harmony.",
  video: "/thevideos.mp4",
  color: "#8B5CF6"
};

export default function MediaLeft() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Video Content */}
        <div className="w-full md:w-1/2 relative order-1 md:order-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
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
              <source src={CONTENT.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-purple-600 opacity-10 mix-blend-overlay pointer-events-none" />
          </motion.div>
          
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
            className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/20 backdrop-blur-3xl rounded-3xl border border-white/30 z-20 shadow-2xl hidden md:block"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Vision</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-gray-900">
              {CONTENT.title}
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-xl mb-10">
              {CONTENT.desc}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-1 w-24 bg-purple-600 rounded-full" />
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Innovation Defined</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}