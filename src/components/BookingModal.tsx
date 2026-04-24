import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Loader2, Calendar, Users, Phone, User } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    people: '2',
    time: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStep('success');
      } else {
        console.error('Booking failed');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation
    setTimeout(() => {
      setStep('form');
      setFormData({ name: '', phone: '', people: '2', time: '' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-brick/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-beige rounded-sm shadow-2xl overflow-hidden border border-brick/10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-brick/40 hover:text-brick transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 md:p-12">
              {step === 'form' ? (
                <>
                  <div className="mb-10 text-center">
                    <span className="label-caps text-terracotta mb-4 block">Reservation</span>
                    <h2 className="text-4xl md:text-5xl serif font-bold text-brick italic italic leading-tight">Đặt bàn tại Gạch</h2>
                    <div className="w-12 h-[1px] bg-brick mx-auto mt-6 opacity-30"></div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-brick/60 flex items-center gap-2">
                          <User className="w-3 h-3" /> Họ và tên
                       </label>
                       <input
                         required
                         type="text"
                         value={formData.name}
                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                         placeholder="VD: NGUYỄN VĂN A"
                         className="w-full bg-white border border-brick/10 py-4 px-6 text-brick placeholder:text-brick/20 focus:outline-none focus:border-terracotta transition-colors rounded-sm"
                       />
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-brick/60 flex items-center gap-2">
                          <Phone className="w-3 h-3" /> Số điện thoại
                       </label>
                       <input
                         required
                         type="tel"
                         value={formData.phone}
                         onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                         placeholder="09xx xxx xxx"
                         className="w-full bg-white border border-brick/10 py-4 px-6 text-brick placeholder:text-brick/20 focus:outline-none focus:border-terracotta transition-colors rounded-sm"
                       />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brick/60 flex items-center gap-2">
                            <Users className="w-3 h-3" /> Số người
                        </label>
                        <select
                          value={formData.people}
                          onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                          className="w-full bg-white border border-brick/10 py-4 px-6 text-brick focus:outline-none focus:border-terracotta transition-colors rounded-sm"
                        >
                          {[1,2,3,4,5,6,7,8].map(n => (
                            <option key={n} value={n}>{n} người</option>
                          ))}
                          <option value="9+">Trên 8 người</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brick/60 flex items-center gap-2">
                            <Calendar className="w-3 h-3" /> Thời gian
                        </label>
                        <input
                          required
                          type="datetime-local"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full bg-white border border-brick/10 py-4 px-6 text-brick focus:outline-none focus:border-terracotta transition-colors rounded-sm text-sm"
                        />
                      </div>
                    </div>

                    <button
                      disabled={loading}
                      type="submit"
                      className="w-full bg-brick text-white py-5 text-[12px] uppercase tracking-widest font-bold rounded-sm shadow-2xl hover:bg-terracotta transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Xác nhận đặt bàn'}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-forest/20">
                    <CheckCircle2 className="w-10 h-10 text-forest" />
                  </div>
                  <h2 className="text-4xl serif font-bold text-brick mb-4 italic">Đặt bàn thành công!</h2>
                  <p className="text-sm text-brick/60 uppercase tracking-widest leading-relaxed mb-10 font-light">
                    Cảm ơn bạn đã tin tưởng Gạch. <br /> Chúng mình sẽ gọi điện xác nhận sớm nhất.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-brick text-white px-10 py-4 text-[10px] uppercase tracking-widest font-bold rounded-sm hover:bg-terracotta transition-all"
                  >
                    Đóng cửa sổ
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
