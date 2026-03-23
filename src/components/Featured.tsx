import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

const FEATURED_ITEMS = [
  {
    id: 1,
    name: "Cloud Lounge",
    price: "$1,200",
    color: "#8B5CF6",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=400",
    rating: 4.9
  },
  {
    id: 2,
    name: "Velvet Pod",
    price: "$850",
    color: "#10B981",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=400",
    rating: 4.8
  },
  {
    id: 3,
    name: "Minimalist Arc",
    price: "$2,400",
    color: "#FBBF24",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=400",
    rating: 5.0
  }
];

export default function Featured() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-purple-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              Curated Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-none"
            >
              FEATURED<br />COLLECTIONS
            </motion.h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 bg-black text-white px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm self-start md:self-auto"
          >
            View All Catalog <ArrowRight size={20} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURED_ITEMS.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-gray-100 mb-8">
                <motion.img 
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 font-bold text-sm">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  {item.rating}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <button className="w-full bg-white text-black py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Quick Add
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Premium Comfort</p>
                </div>
                <span className="text-2xl font-black text-purple-600">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
