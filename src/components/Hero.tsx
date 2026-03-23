import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Search, 
  LayoutGrid, 
  ShoppingBag, 
  User, 
  ChevronRight, 
  Smile,
  Box,
  Zap,
  Leaf,
  PenTool,
  MoreHorizontal,
  Grid,
  RotateCw,
  Flower2,
  Package,
  Sprout,
  Lightbulb,
  Sofa,
  Pill,
  Cake,
  Wind,
  ChevronRightSquare,
  ThumbsUp,
  Home,
  Sparkles,
  Gem
} from 'lucide-react';

// Product data based on the video
const PRODUCTS = [
  {
    id: 1,
    title: "Sofa cake",
    color: "#8B5CF6", // Purple
    secondaryColor: "#7C3AED",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=800",
    video: "/ourhero.mp4", // Purple abstract
    items: [
      { name: "Worktop", size: "110 x 110", icon: Sofa, color: "#F97316" },
      { name: "Couch capsule", size: "110 x 110", icon: Pill, color: "#3B82F6" },
      { name: "Couch cake", size: "110 x 110", icon: Cake, color: "#8B5CF6" }
    ],
    bgShapes: ["#F472B6", "#FB923C"]
  },
  {
    id: 2,
    title: "Blob sofa",
    color: "#FBBF24", // Yellow/Orange
    secondaryColor: "#F59E0B",
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&q=80&w=800",
    video: "/ourhero.mp4", // Yellow abstract
    items: [
      { name: "Purifier O2", size: "110 x 110", icon: Wind, color: "#EF4444" },
      { name: "Copse combo", size: "110 x 110", icon: Package, color: "#D97706" },
      { name: "Bouncy prop", size: "110 x 110", icon: Zap, color: "#F59E0B" }
    ],
    bgShapes: ["#F87171", "#FCD34D"]
  },
  {
    id: 3,
    title: "Herb pods",
    color: "#10B981", // Green
    secondaryColor: "#059669",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=800",
    video: "/ourhero.mp4", // Green abstract
    items: [
      { name: "Herbs pods", size: "110 x 110", icon: Sprout, color: "#059669" },
      { name: "Garden pack", size: "110 x 110", icon: Flower2, color: "#3B82F6" },
      { name: "Outdoor light", size: "110 x 110", icon: Lightbulb, color: "#FBBF24" }
    ],
    bgShapes: ["#60A5FA", "#34D399"]
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const product = PRODUCTS[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center bg-[#E5E7EB]/30">
      {/* Main Card Container */}
      <motion.div 
        className="relative w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border border-white/50"
      >
        {/* Left Section: Hero Content */}
        <motion.div 
          className="relative w-full md:w-[45%] h-[500px] md:h-[700px] flex flex-col justify-between overflow-hidden"
        >
          {/* Full-Bleed Background Video */}
          <AnimatePresence mode="wait">
            <motion.div
              key={product.video}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={product.video} type="video/mp4" />
              </video>
              {/* Subtle Overlay to ensure text readability */}
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </AnimatePresence>

          {/* Content Overlay */}
          <div className="relative z-10 h-full p-10 md:p-14 flex flex-col justify-between">
            {/* Top Bar Left */}
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10">
                <RotateCw className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Main Title */}
            <div className="flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={product.title}
                  initial={{ opacity: 0, x: -80, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 80, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
                >
                  {product.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      <br />
                    </React.Fragment>
                  ))}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Bottom Nav Left */}
            <div className="flex items-center gap-6">
              <div className="flex bg-white/10 backdrop-blur-2xl p-2 rounded-[24px] border border-white/10 shadow-lg">
                <button className="p-4 text-white/40 hover:text-white transition-colors"><LayoutGrid size={22} /></button>
                <button className="p-4 text-white bg-white/20 rounded-2xl shadow-xl border border-white/20"><ShoppingBag size={22} /></button>
                <button className="p-4 text-white/40 hover:text-white transition-colors"><Search size={22} /></button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Storehouse List */}
        <div className="w-full md:w-[55%] p-10 md:p-16 flex flex-col bg-[#F3F4F6]/50">
          {/* Top Bar Right */}
          <div className="flex justify-between items-start mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              My<br />storehouse
            </h2>
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center shadow-sm">
              <Smile className="text-orange-500" size={32} />
            </div>
          </div>

          {/* List Header */}
          <div className="flex text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8 px-6">
            <span className="flex-1">Product</span>
            <span className="w-32 text-center">No</span>
          </div>

          {/* Product List */}
          <div className="flex-1 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div 
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {product.items.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, ease: "easeOut" }}
                      className="group flex items-center p-6 bg-white rounded-[32px] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer border border-transparent hover:border-gray-100"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                        <IconComponent size={28} className="text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-gray-900 text-lg tracking-tight">{item.name}</h3>
                        <p className="text-xs text-gray-400 font-bold tracking-wider">{item.size}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-50">
                          <div 
                            className="w-1.5 h-6 rounded-full" 
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-900 hover:text-white transition-all duration-300">
                          <Plus size={20} />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Controls Right */}
          <div className="mt-12 flex items-center justify-between">
            <div className="flex items-center gap-3 bg-white p-3 rounded-[28px] shadow-sm border border-gray-100">
              <button className="p-3 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-2xl transition-all"><PenTool size={22} /></button>
              <div className="w-px h-6 bg-gray-100 mx-1" />
              <button className="p-3 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-2xl transition-all"><User size={22} /></button>
              <button className="p-3 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-2xl transition-all"><MoreHorizontal size={22} /></button>
              <button 
                onClick={() => setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length)}
                className="ml-4 w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center hover:bg-black transition-all shadow-xl shadow-gray-900/20 active:scale-95"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <button className="p-4 text-gray-300 hover:text-gray-900 transition-colors hidden sm:block">
              <Grid size={28} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}