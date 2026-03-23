import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] pt-32 pb-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">Sofa.</span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Crafting the future of living spaces with sustainable materials and logic-defying designs.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, idx) => (
                <motion.a 
                  key={idx}
                  href="#" 
                  whileHover={{ y: -5, color: '#8B5CF6' }}
                  className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400 shadow-sm border border-gray-100 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-gray-400">Shop</h4>
            <ul className="space-y-4 font-bold text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">All Collections</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Custom Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-gray-400">Support</h4>
            <ul className="space-y-4 font-bold text-gray-600">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-gray-400">Visit Us</h4>
            <p className="font-bold text-gray-600 leading-relaxed">
              123 Design District<br />
              Creative Valley, CA 90210<br />
              United States
            </p>
            <div className="mt-8">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Email</p>
              <a href="mailto:hello@sofa.design" className="font-bold text-purple-600 text-lg">hello@sofa.design</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-200 gap-6">
          <p className="text-gray-400 text-sm font-medium">
            © 2026 Sofa. Design Studio. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-bold text-gray-400">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
