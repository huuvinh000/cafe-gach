import { motion } from 'motion/react';
import { Leaf, Camera, ShieldCheck } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Leaf,
    title: 'Không gian xanh',
    desc: 'Hệ thống cây xanh đa dạng mang lại cảm giác thư thái, trong lành như đang ở giữa một khu vườn.',
    color: 'bg-forest/10 text-forest'
  },
  {
    icon: Camera,
    title: 'Góc sống ảo',
    desc: 'Mọi ngóc ngách tại Gạch đều được chăm chút kỹ lưỡng, là nơi lý tưởng để lưu giữ những khoảnh khắc đẹp.',
    color: 'bg-terracotta/10 text-terracotta'
  },
  {
    icon: ShieldCheck,
    title: 'Giá hợp lý',
    desc: 'Sản phẩm chất lượng cao với mức giá vô cùng dễ tiếp cận, phù hợp cho mọi đối tượng khách hàng.',
    color: 'bg-brick/10 text-brick'
  }
];

export default function Highlights() {
  return (
    <section className="bg-brick text-beige relative overflow-hidden border-y border-white/10">
      <div className="section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group border-brick border-opacity-20 last:border-0 md:border-r md:last:border-0 md:px-8 first:pl-0 last:pr-0"
            >
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-8 bg-white/5 border border-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-brick`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="label-caps mb-4 text-white">0{index + 1}. {item.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed uppercase tracking-widest font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta opacity-5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest opacity-5 rounded-full blur-[100px] -ml-48 -mb-48" />
    </section>
  );
}
