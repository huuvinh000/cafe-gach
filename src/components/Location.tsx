import { MapPin, Clock, Phone, Navigation, Calendar } from 'lucide-react';

export default function Location({ onBookingClick }: { onBookingClick: () => void }) {
  return (
    <section id="location" className="bg-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 h-[500px] rounded-sm overflow-hidden shadow-2xl relative grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62697.255805616536!2d106.6502998!3d10.8435341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529002633f5b9%3A0xb70b19555d766f2c!2zR-G6oWNoIGNhZmU!5e0!3m2!1svi!2s!4v1777034422654!5m2!1svi!2s"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="label-caps text-terracotta mb-6 block text-center lg:text-left">Đến Chơi Với Gạch</span>
            <h2 className="text-5xl md:text-6xl serif font-bold text-brick mb-10 text-center lg:text-left italic leading-tight">Ghé Gạch <br /> nhâm nhi chút cà phê.</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-8 group">
                <div className="w-10 h-[1px] bg-brick mt-3 opacity-20 shrink-0 group-hover:w-14 group-hover:bg-terracotta group-hover:opacity-100 transition-all duration-500"></div>
                <div>
                  <h4 className="label-caps text-brick mb-3">Tọa lạc tại</h4>
                  <p className="text-brick/60 text-sm leading-relaxed uppercase tracking-wider">317-319 Nguyễn Văn Khối, Phường 8, Thông Tây Hội, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-10 h-[1px] bg-brick mt-3 opacity-20 shrink-0 group-hover:w-14 group-hover:bg-terracotta group-hover:opacity-100 transition-all duration-500"></div>
                <div>
                  <h4 className="label-caps text-brick mb-3">Thời gian</h4>
                  <p className="text-brick/60 text-sm leading-relaxed uppercase tracking-wider">Mở cửa hàng ngày: 07:00 – 22:30</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-10 h-[1px] bg-brick mt-3 opacity-20 shrink-0 group-hover:w-14 group-hover:bg-terracotta group-hover:opacity-100 transition-all duration-500"></div>
                <div>
                  <h4 className="label-caps text-brick mb-3">Đường dây nóng</h4>
                  <p className="text-brick/60 text-sm leading-relaxed uppercase tracking-wider">0918526646 — hello@gachcafe.vn</p>
                </div>
              </div>
            </div>

            <button 
              onClick={onBookingClick}
              className="mt-16 w-full lg:w-auto bg-brick text-white px-12 py-5 text-[10px] uppercase tracking-widest font-bold rounded-sm shadow-2xl hover:bg-terracotta transition-all flex items-center justify-center gap-3"
            >
              <Calendar className="w-4 h-4" />
              Đặt chỗ ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
