import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES, MENU_ITEMS, Category } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('Coffee');
  const [showFullMenu, setShowFullMenu] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="bg-beige overflow-hidden">
      <div className="section-padding">
        <div className="text-center mb-16">
          <span className="label-caps text-terracotta mb-4 block">Thực Đơn Mùa Này</span>
          <h2 className="text-5xl md:text-6xl serif font-bold text-brick mb-6 italic tracking-tight">Vị Ngon Rang Mộc</h2>
          <div className="w-24 h-[1px] bg-brick mx-auto opacity-30"></div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 relative py-2 ${
                activeCategory === cat 
                ? 'text-terracotta' 
                : 'text-brick/40 hover:text-brick'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-terracotta"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div className="flex justify-between items-end border-b border-dotted border-brick/30 pb-4 mb-4 transition-colors group-hover:border-brick/60">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                       <span className="serif text-xl font-bold text-brick group-hover:text-terracotta transition-colors">{item.name}</span>
                       {item.isBestSeller && (
                         <span className="bg-forest text-white text-[8px] px-2 py-0.5 rounded-full uppercase tracking-tighter">BEST</span>
                       )}
                    </div>
                    <span className="text-[10px] italic opacity-60 uppercase tracking-widest mt-1">{item.description}</span>
                  </div>
                  <span className="text-lg serif font-bold text-brick">{item.price}</span>
                </div>
                <div className="aspect-[2/3] rounded-sm overflow-hidden transition-all duration-700">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-20 flex justify-center">
           <button 
             onClick={() => setShowFullMenu(true)}
             className="bg-brick text-white px-12 py-4 text-[10px] uppercase tracking-widest font-bold rounded-sm shadow-2xl hover:bg-terracotta transition-all"
           >
              Khám phá toàn bộ menu
           </button>
        </div>
      </div>

      {/* Full Menu Modal Overlay */}
      <AnimatePresence>
        {showFullMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10"
          >
            <div 
              className="absolute inset-0 bg-brick/90 backdrop-blur-md"
              onClick={() => setShowFullMenu(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full overflow-auto bg-beige rounded-sm shadow-2xl"
            >
              <button 
                onClick={() => setShowFullMenu(false)}
                className="absolute top-4 right-4 z-20 bg-brick text-white p-2 rounded-full hover:bg-terracotta transition-colors"
              >
                <ChevronRight className="w-6 h-6 rotate-45" />
              </button>
              <img 
                src="https://res.cloudinary.com/dtcwty83a/image/upload/v1777035533/Screenshot_2026-04-24_195836_cvkv5c.png" 
                alt="Full Menu Gạch Cafe"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
