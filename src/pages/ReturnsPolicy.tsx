import React from 'react';
import { motion } from 'motion/react';
import { RefreshCw, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

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

export default function ReturnsPolicy() {
  return (
    <PolicyLayout 
      title="Returns & Exchange" 
      subtitle="Your satisfaction is our priority. We offer a straightforward return and exchange process for all our furniture."
    >
      <div className="space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
              <RefreshCw size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight mb-2 uppercase">30-Day Returns</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">If you're not completely satisfied with your purchase, you can return it within 30 days of delivery for a full refund.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight mb-2 uppercase">Free Returns</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">We offer free returns on all orders. We'll even come to your home to pick up the item at no cost to you.</p>
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-100" />

        <section className="space-y-6">
          <h2 className="text-2xl font-black tracking-tighter uppercase text-gray-900">Return Conditions</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-gray-900 mt-1" size={18} />
              <p className="text-sm text-gray-600 leading-relaxed font-medium">Items must be in original condition, with no signs of wear or damage.</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-gray-900 mt-1" size={18} />
              <p className="text-sm text-gray-600 leading-relaxed font-medium">Custom or personalized orders are eligible for return only if they arrive damaged or defective.</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-gray-900 mt-1" size={18} />
              <p className="text-sm text-gray-600 leading-relaxed font-medium">Refunds will be processed to the original payment method within 5-7 business days after the item is received and inspected.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <Clock className="text-blue-600" size={24} />
            <h3 className="text-lg font-black tracking-tight uppercase">Exchanges</h3>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">
            Want a different color or model? We offer free exchanges within 30 days. Simply contact our support team, and we'll arrange for the pickup of your current item and the delivery of your new selection.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
