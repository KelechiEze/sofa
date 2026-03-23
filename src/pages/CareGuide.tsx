import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Droplets, Sun, Wind } from 'lucide-react';

const PolicyLayout = ({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) => (
  <div className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <span className="text-purple-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Maintenance</span>
      <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-gray-900">{title}</h1>
      <p className="text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">{subtitle}</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-xl shadow-black/5"
    >
      {children}
    </motion.div>
  </div>
);

export default function CareGuide() {
  return (
    <PolicyLayout 
      title="Care Guide" 
      subtitle="Keep your furniture looking as beautiful as the day it arrived with our expert care tips."
    >
      <div className="space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-black tracking-tight uppercase">Fabric Care</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">Vacuum regularly to remove dust and debris. For spills, blot immediately with a clean, dry cloth. Do not rub, as this can push the stain deeper into the fibers.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Droplets size={24} />
            </div>
            <h3 className="text-xl font-black tracking-tight uppercase">Leather Care</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">Wipe with a soft, damp cloth. Use a leather conditioner every 6-12 months to maintain suppleness and prevent cracking. Avoid harsh chemicals or cleaners.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
              <Sun size={24} />
            </div>
            <h3 className="text-xl font-black tracking-tight uppercase">Sun Exposure</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">Avoid placing furniture in direct sunlight for extended periods, as this can cause fading and damage to both fabric and wood finishes.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
              <Wind size={24} />
            </div>
            <h3 className="text-xl font-black tracking-tight uppercase">Wood Finishes</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">Dust with a soft, dry cloth. Use coasters for hot or cold drinks to prevent water rings and heat damage. Avoid using silicone-based polishes.</p>
          </div>
        </section>

        <div className="h-px bg-gray-100" />

        <section className="bg-gray-900 text-white rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-black tracking-tighter uppercase mb-6">Pro Tip</h2>
          <p className="text-gray-400 leading-relaxed font-medium italic">
            "Rotate your cushions every few months to ensure even wear and maintain the sofa's shape. This simple step can significantly extend the lifespan of your furniture."
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
