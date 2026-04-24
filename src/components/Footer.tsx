import { Coffee, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-beige text-brick pt-24 pb-12 border-t border-brick/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="space-y-8">
          <a href="#" className="flex items-baseline gap-2">
            <span className="serif text-3xl font-bold tracking-tighter">GẠCH</span>
            <span className="text-[10px] uppercase tracking-widest opacity-60">EST. 2024</span>
          </a>
          <p className="text-xs uppercase tracking-[0.2em] leading-relaxed opacity-60 font-light">
            Hương vị cafe đích thực kết hợp cùng không gian sân vườn xanh mát. Nơi lưu giữ những khoảnh khắc tuyệt vời nhất của bạn.
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-8 h-8 rounded-full border border-brick/20 flex items-center justify-center hover:bg-brick hover:text-white transition-all duration-500">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-brick/20 flex items-center justify-center hover:bg-brick hover:text-white transition-all duration-500">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-brick/20 flex items-center justify-center hover:bg-brick hover:text-white transition-all duration-500">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="label-caps mb-8 text-brick">Khám phá</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
            <li><a href="#about" className="hover:text-terracotta transition-colors">Câu chuyện</a></li>
            <li><a href="#menu" className="hover:text-terracotta transition-colors">Thực đơn</a></li>
            <li><a href="#gallery" className="hover:text-terracotta transition-colors">Không gian</a></li>
            <li><a href="#location" className="hover:text-terracotta transition-colors">Liên hệ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="label-caps mb-8 text-brick">Liên kết</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
            <li><a href="#" className="hover:text-terracotta transition-colors">Tuyển dụng</a></li>
            <li><a href="#" className="hover:text-terracotta transition-colors">Chính sách</a></li>
            <li><a href="#" className="hover:text-terracotta transition-colors">Hợp tác</a></li>
            <li><a href="#" className="hover:text-terracotta transition-colors">Góp ý</a></li>
          </ul>
        </div>

        <div>
          <h4 className="label-caps mb-8 text-brick">Newsletter</h4>
          <p className="text-[10px] uppercase tracking-widest opacity-60 mb-8 font-light leading-relaxed">Đăng ký để nhận những thông tin mới nhất về mùa vụ cafe và các sự kiện tại Gạch.</p>
          <div className="relative border-b border-brick/20 pb-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-transparent text-[10px] uppercase tracking-widest text-brick focus:outline-none placeholder:text-brick/30"
            />
            <button className="absolute right-0 top-0 text-[10px] font-bold uppercase tracking-widest hover:text-terracotta transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-12 border-t border-brick/5 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">© 2024 Gạch Cafe Vietnam</span>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold mt-4 md:mt-0 italic">Cultivating Peace & Specialty Coffee</span>
      </div>
    </footer>
  );
}
