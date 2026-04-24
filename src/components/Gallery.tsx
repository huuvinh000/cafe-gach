import { motion } from 'motion/react';

const IMAGES = [
  'https://res.cloudinary.com/dtcwty83a/image/upload/v1777035113/Screenshot_2026-04-24_194931_lprust.png',
  'https://res.cloudinary.com/dtcwty83a/image/upload/v1777035112/Screenshot_2026-04-24_195048_zt2qdo.png',
  'https://res.cloudinary.com/dtcwty83a/image/upload/v1777035112/Screenshot_2026-04-24_195011_ko51f4.png',
  'https://res.cloudinary.com/dtcwty83a/image/upload/v1777035112/Screenshot_2026-04-24_195130_vwagso.png',
  'https://res.cloudinary.com/dtcwty83a/image/upload/v1777035112/Screenshot_2026-04-24_195104_yne43g.png',
  'https://res.cloudinary.com/dtcwty83a/image/upload/v1777035112/Screenshot_2026-04-24_194952_i8kp8w.png',
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <div className="section-padding">
        <div className="text-center mb-20">
          <span className="label-caps text-terracotta mb-4 block">Ảnh Chụp Thực Tế</span>
          <h2 className="text-5xl md:text-6xl serif font-bold text-brick italic tracking-tight">Không Gian Gạch</h2>
          <div className="w-16 h-[1px] bg-brick mx-auto mt-6 opacity-30"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-sm break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-1000 grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brick/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
