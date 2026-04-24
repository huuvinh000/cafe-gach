import { motion } from 'motion/react';

export default function Hero({ onBookingClick }: { onBookingClick: () => void }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000")',
          transform: 'scale(1.1)' 
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="label-caps text-forest mb-4">Welcome to Gạch Cafe</h2>
          <h1 className="text-6xl md:text-8xl serif italic leading-[0.9] text-white mb-8 tracking-tighter shadow-sm">
            Chút mộc <br /> 
            giữa lòng phố.
          </h1>
          <p className="text-sm md:text-base text-white/80 mb-10 max-w-sm mx-auto leading-relaxed uppercase tracking-widest font-light">
            Không gian tĩnh lặng, nơi những viên gạch cũ kể câu chuyện về sự bình yên giữa phố thị ồn ào.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#menu"
              className="w-full sm:w-auto bg-brick text-white px-10 py-4 text-[10px] uppercase tracking-widest font-bold rounded-sm shadow-2xl hover:bg-terracotta transition-all transform hover:-translate-y-1"
            >
              Xem thực đơn
            </a>
            <button 
              onClick={onBookingClick}
              className="w-full sm:w-auto border border-white/40 text-white px-10 py-4 text-[10px] uppercase tracking-widest font-bold rounded-sm hover:bg-white hover:text-brick transition-all"
            >
              Đặt bàn ngay
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute -left-20 bottom-20 w-80 h-80 bg-terracotta opacity-10 rounded-full blur-3xl -z-0"></div>
    </section>
  );
}
