import React from 'react';
import { motion } from 'motion/react';
import { Truck, Clock, MapPin, ShieldCheck } from 'lucide-react';

const PolicyLayout = ({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) => (
  <div className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <span className="text-purple-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Policies</span>
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

export default function ShippingPolicy() {
  return (
    <PolicyLayout 
      title="Shipping Policy" 
      subtitle="We deliver our handcrafted furniture with the utmost care and precision to your doorstep."
    >
      <div className="space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
              <Truck size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight mb-2 uppercase">Free Delivery</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">We offer free standard shipping on all orders within the continental United States. No minimum purchase required.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight mb-2 uppercase">Delivery Time</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">Most items are delivered within 2-4 weeks. Custom orders may take 6-8 weeks for handcrafted production and delivery.</p>
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-100" />

        <section className="space-y-6">
          <h2 className="text-2xl font-black tracking-tighter uppercase text-gray-900">Delivery Process</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-1">1</div>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">Once your order is ready, our delivery partner will contact you to schedule a convenient delivery window.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-1">2</div>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">On the day of delivery, you will receive a call 30 minutes prior to arrival.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-1">3</div>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">Our white-glove delivery team will bring the furniture into your room of choice, assemble it, and remove all packaging materials.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="text-green-600" size={24} />
            <h3 className="text-lg font-black tracking-tight uppercase">Safe Arrival Guarantee</h3>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">
            Every shipment is fully insured. If your furniture arrives with any damage, please note it on the delivery receipt and contact us immediately. We will repair or replace the item at no cost to you.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
