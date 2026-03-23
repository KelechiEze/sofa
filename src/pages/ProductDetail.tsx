import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  Heart,
  Plus,
  Minus
} from 'lucide-react';
import { useCart, Product } from '../store/useCart';
import { MOCK_PRODUCTS } from '../constants/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCart((state) => state.addItem);

  useEffect(() => {
    const foundProduct = MOCK_PRODUCTS.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      window.scrollTo(0, 0);
    } else {
      navigate('/catalog');
    }
  }, [id, navigate]);

  if (!product) return null;

  const similarProducts = MOCK_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Link 
        to="/catalog" 
        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8 font-bold uppercase tracking-widest text-[10px]"
      >
        <ChevronLeft size={16} />
        Back to Catalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-square rounded-[40px] overflow-hidden bg-gray-50 border border-gray-100"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-all shadow-sm">
            <Heart size={20} />
          </button>
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1 bg-purple-50 text-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
                <span className="text-gray-400 text-xs font-bold ml-2">(128 Reviews)</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-gray-900">{product.name}</h1>
            <p className="text-3xl font-black text-gray-900 mb-6">${product.price}</p>
            <p className="text-gray-500 leading-relaxed font-medium mb-8">
              {product.description}
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest w-24">Quantity</span>
              <div className="flex items-center bg-gray-50 rounded-2xl p-1 border border-gray-100">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-black text-gray-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest w-24">Materials</span>
              <div className="flex flex-wrap gap-2">
                {product.materials?.map((material) => (
                  <span key={material} className="px-3 py-1 bg-white border border-gray-100 rounded-lg text-[10px] font-bold text-gray-600">
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <button 
              onClick={() => {
                for(let i = 0; i < quantity; i++) addItem(product);
              }}
              className="flex-1 bg-gray-900 text-white py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/10 active:scale-95"
            >
              <ShoppingBag size={20} />
              Add to Cart
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-4 py-8 border-t border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-2">
                <ShieldCheck size={20} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Lifetime Warranty</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
                <Truck size={20} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Free Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mb-2">
                <RefreshCw size={20} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">30-Day Returns</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section>
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-purple-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">You might also like</span>
              <h2 className="text-3xl font-black tracking-tighter uppercase text-gray-900">Similar Products</h2>
            </div>
            <Link to="/catalog" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2">
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <Link to={`/product/${p.id}`} className="block relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-1">{p.category}</p>
                      <Link to={`/product/${p.id}`} className="text-lg font-black tracking-tight hover:text-purple-600 transition-colors">{p.name}</Link>
                    </div>
                    <p className="text-lg font-black text-gray-900">${p.price}</p>
                  </div>
                  <button 
                    onClick={() => addItem(p)}
                    className="w-full bg-gray-50 text-gray-900 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={14} />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
