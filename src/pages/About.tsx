import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="text-purple-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Story</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-gray-900">Crafting Comfort<br />Since 1995</h1>
        <p className="text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
          We believe that a sofa is more than just a piece of furniture—it's the heart of the home. Our mission is to create beautiful, sustainable, and incredibly comfortable sofas that last a lifetime.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-50 rounded-3xl flex items-center justify-center text-purple-600 mx-auto mb-6">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-black tracking-tight uppercase mb-4">Expert Craftsmen</h3>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">Our team of master upholsterers has decades of experience in traditional furniture making.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-6">
            <Target size={32} />
          </div>
          <h3 className="text-xl font-black tracking-tight uppercase mb-4">Quality First</h3>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">We source only the finest sustainable materials to ensure every piece meets our rigorous standards.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-50 rounded-3xl flex items-center justify-center text-orange-600 mx-auto mb-6">
            <Award size={32} />
          </div>
          <h3 className="text-xl font-black tracking-tight uppercase mb-4">Award Winning</h3>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">Recognized globally for our innovative designs and commitment to excellence in furniture manufacturing.</p>
        </div>
      </div>
    </div>
  );
}
