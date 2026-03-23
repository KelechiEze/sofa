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
  Leaf
} from 'lucide-react';

// Product data based on the video
const PRODUCTS = [
  {
    id: 1,
    title: "Sofa cake",
    color: "#8B5CF6", // Purple
    secondaryColor: "#7C3AED",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Worktop", size: "110 x 110", icon: <Box className="text-orange-400" /> },
      { name: "Couch capsule", size: "110 x 110", icon: <Zap className="text-blue-400" /> },
      { name: "Couch cake", size: "110 x 110", icon: <ShoppingBag className="text-purple-400" /> }
    ],
    bgShapes: ["#F472B6", "#FB923C"]
  },
  {
    id: 2,
    title: "Blob sofa",
    color: "#FBBF24", // Yellow/Orange
    secondaryColor: "#F59E0B",
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Purifier O2", size: "110 x 110", icon: <Leaf className="text-red-400" /> },
      { name: "Copse combo", size: "110 x 110", icon: <Box className="text-yellow-600" /> },
      { name: "Bouncy prop", size: "110 x 110", icon: <Zap className="text-orange-500" /> }
    ],
    bgShapes: ["#F87171", "#FCD34D"]
  },
  {
    id: 3,
    title: "Herb pods",
    color: "#10B981", // Green
    secondaryColor: "#059669",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Herbs pods", size: "110 x 110", icon: <Leaf className="text-green-600" /> },
      { name: "Garden pack", size: "110 x 110", icon: <Box className="text-blue-500" /> },
      { name: "Outdoor light", size: "110 x 110", icon: <Zap className="text-yellow-400" /> }
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center overflow-hidden">
      {/* Main Card Container - Responsive update */}
      <motion.div 
        layout
        className="relative w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white/20"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5) inset'
        }}
      >
        {/* Left Section: Hero Content */}
        <motion.div 
          animate={{ backgroundColor: product.color }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-full md:w-[45%] h-[450px] md:h-auto p-8 md:p-12 flex flex-col justify-between overflow-hidden"
        >
          {/* Background Floating Blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
                backgroundColor: product.bgShapes[0]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] },
                x: { duration: 5, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] },
                backgroundColor: { duration: 0.8 }
              }}
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-60"
            />
            <motion.div 
              animate={{ 
                y: [0, 30, 0],
                x: [0, -15, 0],
                backgroundColor: product.bgShapes[1]
              }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] },
                x: { duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] },
                backgroundColor: { duration: 0.8 }
              }}
              className="absolute top-1/2 -left-20 w-60 h-60 rounded-full blur-3xl opacity-40"
            />
          </div>

          {/* Top Bar Left */}
          <div className="relative z-10">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
            </div>
          </div>

          {/* Main Title & Product Image */}
          <div className="relative z-10 flex-1 flex flex-col justify-start pt-12">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={product.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 relative z-20"
              >
                {product.title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    <br />
                  </React.Fragment>
                ))}
              </motion.h1>
            </AnimatePresence>

            {/* Product Image with Floating Animation - MOVED DOWN AND REDUCED SIZE */}
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/2 w-[60%] md:w-[80%] z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  className="relative"
                >
                  <motion.img 
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
                    className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] rounded-3xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Nav Left */}
          <div className="relative z-10 flex items-center gap-6">
            <div className="flex bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/10">
              <button className="p-3 text-white/50 hover:text-white transition-colors"><LayoutGrid size={20} /></button>
              <button className="p-3 text-white bg-white/20 rounded-xl shadow-lg"><ShoppingBag size={20} /></button>
              <button className="p-3 text-white/50 hover:text-white transition-colors"><Search size={20} /></button>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Storehouse List */}
        <div className="w-full md:w-[55%] h-auto md:h-auto p-8 md:p-12 flex flex-col bg-[#F9FAFB]">
          {/* Top Bar Right */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">My<br />storehouse</h2>
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
              <Smile className="text-orange-500" />
            </div>
          </div>

          {/* List Header */}
          <div className="flex text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">
            <span className="flex-1">Product</span>
            <span className="w-24 text-center">No</span>
          </div>

          {/* Product List */}
          <div className="flex-1 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div 
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {product.items.map((item, idx) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex items-center p-4 bg-white rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-sm md:text-base">{item.name}</h3>
                      <p className="text-[10px] md:text-xs text-gray-400 font-medium">{item.size}</p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                        <div className="w-1.5 h-5 bg-red-500 rounded-full" />
                      </div>
                      <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white transition-all">
                        <Plus size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Controls Right */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
              <button className="p-2 text-purple-500 hover:bg-purple-50 rounded-lg transition-colors"><ChevronRight size={18} className="rotate-180" /></button>
              <div className="w-px h-4 bg-gray-200 mx-1" />
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors"><LayoutGrid size={18} /></button>
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors"><User size={18} /></button>
              <button 
                onClick={() => setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length)}
                className="ml-2 w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-black transition-colors shadow-lg shadow-gray-900/20"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <button className="p-3 text-gray-400 hover:text-gray-800 transition-colors hidden sm:block">
              <LayoutGrid size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
