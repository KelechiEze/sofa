import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Interior Designer",
    text: "The 'Sofa Cake' isn't just a piece of furniture; it's a conversation starter. The comfort level is beyond anything I've sourced for my clients.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Thorne",
    role: "Architect",
    text: "Precision engineering meets organic design. Sofa. has managed to defy the traditional logic of furniture manufacturing.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Elena Rodriguez",
    role: "Homeowner",
    text: "I was skeptical about buying a 'blob' sofa, but it's now the favorite spot in our house. It's like sitting on a cloud made of velvet.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-black text-white overflow-hidden relative">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Voices of Comfort
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none"
          >
            LOVED BY<br />VISIONARIES.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] flex flex-col justify-between"
            >
              <div>
                <Quote className="text-purple-500 mb-8" size={40} />
                <p className="text-xl font-medium leading-relaxed mb-10 italic">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover" />
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
