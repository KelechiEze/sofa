import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ShoppingBag, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../store/useCart';
import { MOCK_PRODUCTS } from '../constants/products';

const CATEGORIES = ['All', 'Sofas', 'Armchairs', 'Sectionals', 'Ottomans'];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const addItem = useCart((state) => state.addItem);

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-2">Catalog</h1>
          <p className="text-gray-500 text-sm font-medium">Explore our premium collection of handcrafted furniture.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-all text-sm"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-2xl hover:bg-black transition-all text-sm font-bold">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
              selectedCategory === category 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20' 
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
          >
            <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Star size={12} className="text-yellow-500 fill-yellow-500" />
                <span className="text-[10px] font-black">4.9</span>
              </div>
            </Link>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-1">{product.category}</p>
                  <Link to={`/product/${product.id}`} className="text-lg font-black tracking-tight hover:text-purple-600 transition-colors">{product.name}</Link>
                </div>
                <p className="text-lg font-black text-gray-900">${product.price}</p>
              </div>
              
              <p className="text-xs text-gray-500 line-clamp-2 mb-6 font-medium leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => addItem(product)}
                  className="flex-1 bg-gray-900 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>
                <Link 
                  to={`/product/${product.id}`}
                  className="w-12 h-12 bg-gray-50 text-gray-900 rounded-2xl flex items-center justify-center hover:bg-gray-100 transition-all"
                >
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-gray-400 font-bold uppercase tracking-widest">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
