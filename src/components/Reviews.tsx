import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Thùy Linh',
    role: 'Khách hàng thân thiết',
    text: 'Không gian ở Gạch thực sự rất chill, ngồi làm việc cả chiều không thấy chán. Nước ngon và nhân viên rất nhiệt tình.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    stars: 5
  },
  {
    id: 2,
    name: 'Minh Tuấn',
    role: 'Content Creator',
    text: 'Góc nào cũng có thể sống ảo được. Trà đào cam sả ở đây đúng là cực phẩm, thanh mát mà không bị quá ngọt.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    stars: 5
  },
  {
    id: 3,
    name: 'Hà Phương',
    role: 'Freelancer',
    text: 'Mình thích nhất là những mảng tường gạch và nhiều cây xanh ở đây. Cảm giác rất gần gũi với thiên nhiên.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    stars: 4
  }
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-beige overflow-hidden">
      <div className="section-padding">
        <div className="text-center mb-16">
          <Quote className="w-10 h-10 text-terracotta/20 mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl serif font-bold text-brick italic tracking-tight">Cảm Nhận Từ Bạn</h2>
          <div className="w-12 h-[1px] bg-brick mx-auto mt-6 opacity-30"></div>
        </div>

        <div className="max-w-4xl mx-auto relative h-[400px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center text-center px-10"
            >
              <div className="flex mb-8 gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < REVIEWS[index].stars ? 'bg-terracotta' : 'bg-brick/10'}`} />
                ))}
              </div>
              <p className="text-2xl md:text-3xl text-brick/90 mb-10 serif italic leading-relaxed tracking-tight">
                "{REVIEWS[index].text}"
              </p>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img 
                    src={REVIEWS[index].avatar} 
                    alt={REVIEWS[index].name} 
                    className="w-16 h-16 rounded-full grayscale hover:grayscale-0 transition-all duration-500 border border-brick/10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-beige rounded-full flex items-center justify-center border border-brick/5 shadow-sm">
                    <Quote className="w-2.5 h-2.5 text-terracotta" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="label-caps text-brick">{REVIEWS[index].name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-brick/40 mt-1">{REVIEWS[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === i ? 'bg-brand-orange w-8' : 'bg-brand-brown/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
