import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ChevronRight, 
  ArrowLeft, 
  CreditCard, 
  Truck, 
  ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../store/useCart';

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCart();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="pt-40 pb-20 px-4 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-50 rounded-[40px] p-12 md:p-20 border border-gray-100"
        >
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-gray-300 mx-auto mb-8 shadow-sm">
            <ShoppingBag size={40} />
          </div>
          <h1 className="text-3xl font-black tracking-tighter uppercase mb-4 text-gray-900">Your cart is empty</h1>
          <p className="text-gray-500 mb-10 font-medium leading-relaxed">
            Looks like you haven't added anything to your cart yet. Explore our catalog to find your perfect sofa.
          </p>
          <Link 
            to="/catalog" 
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-black/10 active:scale-95"
          >
            Start Shopping
            <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-2">Shopping Cart</h1>
          <p className="text-gray-500 text-sm font-medium">You have {items.length} items in your cart.</p>
        </div>
        <button 
          onClick={clearCart}
          className="text-xs font-black uppercase tracking-widest text-red-500 hover:text-red-600 transition-colors flex items-center gap-2"
        >
          <Trash2 size={16} />
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-[32px] border border-gray-100 hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-1">{item.category}</p>
                  <h3 className="text-lg font-black tracking-tight text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-lg font-black text-gray-900">${item.price}</p>
                </div>

                <div className="flex items-center bg-gray-50 rounded-2xl p-1 border border-gray-100">
                  <button 
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-10 text-center font-black text-gray-900">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button 
                  onClick={() => removeItem(item.id)}
                  className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all flex items-center justify-center"
                >
                  <Trash2 size={20} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          <Link 
            to="/catalog" 
            className="inline-flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors font-black uppercase tracking-widest text-[10px] py-4"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-[40px] p-8 md:p-10 border border-gray-100 sticky top-32">
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-8 text-gray-900">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm font-medium text-gray-500">
                <span>Subtotal</span>
                <span className="text-gray-900 font-black">${total}</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500">
                <span>Shipping</span>
                <span className="text-green-600 font-black">FREE</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500">
                <span>Tax</span>
                <span className="text-gray-900 font-black">$0.00</span>
              </div>
              <div className="pt-4 border-t border-gray-200 flex justify-between">
                <span className="text-lg font-black uppercase tracking-widest text-gray-900">Total</span>
                <span className="text-2xl font-black text-gray-900">${total}</span>
              </div>
            </div>

            <button className="w-full bg-gray-900 text-white py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/10 active:scale-95 mb-8">
              <CreditCard size={20} />
              Checkout Now
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-500">
                <Truck size={18} className="text-gray-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Free Express Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <ShieldCheck size={18} className="text-gray-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure Payment Processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
