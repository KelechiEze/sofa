import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "What is the delivery time for my order?",
    answer: "Most items are delivered within 2-4 weeks. Custom orders may take 6-8 weeks for handcrafted production and delivery. We'll provide you with a tracking number as soon as your order is ready."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we only ship within the continental United States. We're working on expanding our delivery network to include international destinations in the near future."
  },
  {
    question: "Can I customize my sofa?",
    answer: "Yes! We offer a wide range of customization options, including fabric choices, leg finishes, and dimensions. Contact our design team to discuss your custom project."
  },
  {
    question: "What materials do you use in your furniture?",
    answer: "We use only the highest quality materials, including solid wood frames, high-density foam, and premium fabrics and leathers. Every piece is handcrafted with attention to detail."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all standard items. If you're not completely satisfied, we'll pick up the item and provide a full refund. Custom orders are eligible for return only if they arrive damaged."
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes, all our furniture comes with a lifetime warranty on the frame and a 5-year warranty on the fabric and foam. We stand behind the quality of our craftsmanship."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left hover:text-purple-600 transition-colors"
      >
        <span className="text-lg font-black tracking-tight uppercase">{question}</span>
        <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 transition-all ${isOpen ? 'bg-purple-600 text-white rotate-180' : ''}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-500 leading-relaxed font-medium max-w-2xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = FAQ_DATA.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-purple-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Support</span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-gray-900">Frequently Asked Questions</h1>
        <p className="text-gray-500 font-medium max-w-xl mx-auto leading-relaxed mb-10">Everything you need to know about our products, shipping, and returns.</p>
        
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search FAQs..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all text-sm"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-xl shadow-black/5"
      >
        <div className="divide-y divide-gray-100">
          {filteredFAQs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        {filteredFAQs.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400 font-bold uppercase tracking-widest">No FAQs found matching your search.</p>
          </div>
        )}
      </motion.div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 font-medium mb-6">Still have questions?</p>
        <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-black/10 active:scale-95">
          Contact Support
        </button>
      </div>
    </div>
  );
}
