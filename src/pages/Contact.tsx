import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="text-purple-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Get in Touch</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-gray-900">We'd Love to<br />Hear From You</h1>
        <p className="text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
          Have a question about our products or need help with a custom order? Our team is here to help you every step of the way.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight uppercase mb-2">Email Us</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">hello@kcsofa.com<br />support@kcsofa.com</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 flex-shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight uppercase mb-2">Call Us</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">+1 (555) 123-4567<br />Mon-Fri: 9am - 6pm EST</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100 flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight uppercase mb-2">Visit Our Showroom</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">123 Design District<br />New York, NY 10013</p>
            </div>
          </div>
        </div>

        <form className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-2xl shadow-black/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">First Name</label>
              <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
              <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all text-sm" />
            </div>
          </div>
          <div className="space-y-2 mb-6">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <input type="email" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all text-sm" />
          </div>
          <div className="space-y-2 mb-8">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
            <textarea rows={4} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all text-sm resize-none" />
          </div>
          <button className="w-full bg-gray-900 text-white py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/10 active:scale-95">
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
