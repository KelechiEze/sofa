import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Truck, Sparkles } from 'lucide-react';

const BENEFITS = [
  {
    icon: <Zap size={32} />,
    title: "Eco-Friendly Materials",
    desc: "We use 100% recycled and sustainable materials for all our furniture pieces.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: <Shield size={32} />,
    title: "Lifetime Warranty",
    desc: "Every piece is built to last a lifetime. If it doesn't, we'll replace it for free.",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    icon: <Truck size={32} />,
    title: "White Glove Delivery",
    desc: "We don't just drop it at your door. We set it up exactly where you want it.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <Sparkles size={32} />,
    title: "Custom Design",
    desc: "Tailor every dimension and fabric to fit your unique living space perfectly.",
    color: "bg-orange-100 text-orange-600"
  }
];

export default function Benefits() {
  return (
    <section className="py-32 px-6 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-80 h-80 border-2 border-dashed border-gray-200 rounded-full pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-purple-600 font-bold uppercase tracking-[0.3em] text-xs"
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-none"
            >
              REDEFINING THE<br />ART OF SITTING.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl text-gray-500 max-w-lg leading-relaxed"
            >
              We believe furniture should be more than just functional. It should be an extension of your personality and a sanctuary for your soul.
            </motion.p>
            
            <div className="pt-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-6 p-6 bg-white rounded-3xl shadow-xl shadow-black/5 border border-white"
              >
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-2xl font-black">
                  99%
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Customer Satisfaction</h4>
                  <p className="text-sm text-gray-500">Based on 12,000+ reviews worldwide</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-[32px] shadow-lg shadow-black/5 border border-white"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
