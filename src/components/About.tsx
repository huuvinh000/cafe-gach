import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="bg-beige">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-caps text-terracotta mb-6 block">Câu chuyện của Gạch</span>
            <h2 className="text-5xl md:text-6xl serif font-bold text-brick mb-8 italic leading-[1.1]">
              Sự kết hợp giữa cổ điển <br /> 
              <span className="text-forest">và thiên nhiên</span>
            </h2>
            <p className="text-base text-brick/70 mb-8 leading-relaxed max-w-lg">
              Gạch Cafe không chỉ là một quán nước, mà là một khoảng trời riêng biệt giữa lòng phố thị. Với phong cách thiết kế từ những viên gạch đỏ ấm áp kết hợp cùng không gian sân vườn xanh mướt, chúng tôi mang đến trải nghiệm thư giãn đích thực.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              <div className="border-l border-brick/20 pl-6">
                <h4 className="label-caps text-brick mb-3">Không gian mở</h4>
                <p className="text-sm text-brick/60 leading-relaxed">Hít thở bầu không khí tự nhiên, nhiều cây xanh.</p>
              </div>
              <div className="border-l border-brick/20 pl-6">
                <h4 className="label-caps text-brick mb-3">Nội thất mộc</h4>
                <p className="text-sm text-brick/60 leading-relaxed">Bàn ghế gỗ nguyên bản, mang lại cảm giác thân thuộc.</p>
              </div>
            </div>
            <p className="text-brick font-medium italic border-l-2 border-brick pl-6 text-sm opacity-80 uppercase tracking-widest">
              "Chill một chút, sống chậm lại – Tại Gạch, thời gian như ngừng trôi."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://res.cloudinary.com/dtcwty83a/image/upload/v1777035120/Screenshot_2026-04-24_195032_hd5ywh.png" 
                alt="Cafe Interior" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-full h-full border border-brick/10 rounded-2xl -z-0" />
            <div className="absolute -top-16 -left-16 bg-forest/5 w-60 h-60 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
