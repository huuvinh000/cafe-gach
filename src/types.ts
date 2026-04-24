export interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  image: string;
  isBestSeller?: boolean;
}

export type Category = 'Coffee' | 'Juice' | 'Tea' | 'Ice Blended' | 'Soda' | 'Yogurt' | 'Cake';

export const MENU_ITEMS: MenuItem[] = [
  { id: '1', name: 'Cafe Sữa Sài Gòn', price: '29.000đ', category: 'Coffee', description: 'Hương vị truyền thống đậm đà.', image: 'https://res.cloudinary.com/dtcwty83a/image/upload/v1777036130/cach-pha-cafe-sua-da-2_133b27b0b9044975a55cbce4d679fd5c_grande_tywgsj.jpg', isBestSeller: true },
  { id: '2', name: 'Bạc Xỉu', price: '32.000đ', category: 'Coffee', description: 'Sữa tươi pha chút cafe.', image: 'https://res.cloudinary.com/dtcwty83a/image/upload/v1777036130/bac-xiu-ca-phe-da-giao-hang-online-10_wd4nbf.jpg' },
  { id: '3', name: 'Trà Đào Cam Sả', price: '45.000đ', category: 'Tea', description: 'Thanh mát giải nhiệt.', image: 'https://res.cloudinary.com/dtcwty83a/image/upload/v1777036131/tra-dao-cam-sa-cong-thuc-pha-che-chuan-vi_iy1zr7.png', isBestSeller: true },
  { id: '4', name: 'Matcha Đá Xay', price: '47.000đ', category: 'Ice Blended', description: 'Vị trà xanh Nhật Bản.', image: 'https://res.cloudinary.com/dtcwty83a/image/upload/v1777036130/Matcha-Da-Xay_v1zbks.jpg', isBestSeller: true },
  { id: '5', name: 'Soda Trái Cây', price: '39.000đ', category: 'Soda', description: 'Sảng khoái từng ngụm.', image: 'https://res.cloudinary.com/dtcwty83a/image/upload/v1777036133/nuoc-soda-la-gi-cach-pha-che-soda-don-gian-giai-nhiet-mua-he-21_ysflvq.jpg', isBestSeller: true },
  { id: '6', name: 'Nước Ép Dưa Hấu', price: '42.000đ', category: 'Juice', description: 'Nguyên chất 100%.', image: 'https://res.cloudinary.com/dtcwty83a/image/upload/v1777036133/watermelon-juice-nuoc-ep-dua-hau-20231125085344_656153a86062d_kfeb67.webp' },
  { id: '7', name: 'Sữa Chua Trái Cây', price: '35.000đ', category: 'Yogurt', description: 'Bổ dưỡng & đẹp da.', image: 'https://res.cloudinary.com/dtcwty83a/image/upload/v1777036134/lam-sua-chua-hoa-qua-01_dzpv1x.jpg' },
  { id: '8', name: 'Bánh Tiramisu', price: '45.000đ', category: 'Cake', description: 'Mềm mịn, ngọt ngào.', image: 'https://res.cloudinary.com/dtcwty83a/image/upload/v1777036133/1200-1200x676-97_qzo74t.jpg' },
];

export const CATEGORIES: Category[] = ['Coffee', 'Juice', 'Tea', 'Ice Blended', 'Soda', 'Yogurt', 'Cake'];
