
/**
 * PHONES DATA
 * Add, edit or remove devices in this array.
 * Store product images inside public/phones/.
 * The first image is used as the main product image.
 */

export const BRANDS = [
  'Apple',
  'Samsung',
  'OnePlus',
  'Vivo',
  'Motorola',
];

export const phones = [

   {
    slug: 'iphone-18-pro-max',
    brand: 'Apple',
    name: 'iPhone 18 Pro Max',
    tag: 'New arrival',
    featured: true,
    summary: 'Premium Apple Pro Max smartphone.',
    images: [
      'https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/b/4/7/-original-imahrazyadggh5tp.jpeg?q=90',
      'https://r.iservices.nl/common/online_products/iphone-18-pro-max-1789345988.webp',
    ],
    specs: [
      ['Display', 'Confirm official specifications'],
      ['Processor', 'Confirm official specifications'],
      ['Rear camera', 'Confirm official specifications'],
      ['Design', 'Confirm official specifications'],
    ],
  },

 

  
 {
  slug: 'google-pixel-11-pro-xl',
  brand: 'Google',
  name: 'Pixel 11 Pro XL',
  tag: 'Flagship',
  featured: true,
  summary: 'Google flagship featuring Tensor G6, a 50MP triple-camera system and advanced Gemini AI.',
  images: [
    'https://rukminim3.flixcart.com/image/480/640/xif0q/mobile/f/m/r/-resized-original-imahqszetaaagqyg.jpeg?q=20',
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Pixel-11ProXL_Family-Shot.width-1200.format-webp.webp"
  ],
  specs: [
    ['Chip', 'Google Tensor G6'],
    ['Display', '6.8-inch LTPO OLED, 1–120Hz'],
    ['Rear camera', '50MP + 48MP Ultra-wide + 48MP 5x Telephoto'],
    ['Front camera', '42MP'],
    ['Battery', '5115mAh'],
    ['Charging', '45W wired + 25W wireless'],
    ['RAM', '12GB / 16GB'],
    ['Storage', '256GB / 512GB'],
    ['Operating system', 'Android 17'],
    ['Protection', 'IP68'],
  ],
},

  {
    slug: 'samsung-galaxy-s26-ultra',
    brand: 'Samsung',
    name: 'Galaxy S26 Ultra',
    tag: 'Flagship',
    featured: true,
    summary: 'Samsung’s top Galaxy with a 200 MP camera and a 5x periscope zoom.',
    images: [
      'https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/321497_0_vYQhGRPr3.png?updatedAt=1772297748976',
      'https://www.getorchard.com/cdn/shop/files/galaxy-s26-ultra.png?v=1775844546&width=1024',
    ],
    specs: [
      ['Chip', 'Snapdragon 8 Elite Gen 5'],
      ['Rear camera', '200 MP main + 50 MP 5x periscope'],
      ['Battery', '5,000 mAh'],
      ['Charging', '60W wired'],
      ['Operating system', 'Android (One UI)'],
    ],
  },

   {
    slug: 'iphone-17-pro-max',
    brand: 'Apple',
    name: 'iPhone 17 Pro Max',
    tag: 'Flagship',
    featured: true,
    summary: 'Apple’s biggest Pro with the A19 Pro chip and a pro triple camera system.',
    images: [
      'https://rukminim3.flixcart.com/image/480/640/xif0q/mobile/f/v/m/-resized-original-imahft6chnx2vbuy.jpeg?q=90',
      'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-17-pro-17-pro-max-hero.png',
    ],
    specs: [
      ['Chip', 'Apple A19 Pro'],
      ['Rear camera', '48 MP triple camera'],
      ['Battery', 'About 4,800 mAh'],
      ['Charging', '40W wired'],
      ['Operating system', 'iOS'],
    ],
  },

  {
  slug: 'infinix-gt-50-pro-5g',
  brand: 'Infinix',
  name: 'GT 50 Pro 5G',
  tag: 'Gaming',
  featured: true,
  summary: 'Gaming-focused smartphone with a 144Hz AMOLED display and Dimensity 8400 Ultimate processor.',
  images: ["https://infinixmobiles.in/cdn/shop/files/backleft-1.webp?v=1793093548",
    "https://infinixmobiles.in/cdn/shop/files/Front_Back_e92b7bb9-221a-4b24-96ea-dd98b43ff26f.webp?v=1791785333&width=2000"
  ],
  specs: [
    ['Chip', 'MediaTek Dimensity 8400 Ultimate'],
    ['Display', '6.78-inch 1.5K AMOLED, 144Hz'],
    ['Rear camera', '50MP + 8MP Ultra-wide'],
    ['Front camera', '13MP'],
    ['Battery', '6500mAh'],
    ['Charging', '45W fast charging'],
    ['RAM', '12GB'],
    ['Storage', '256GB'],
    ['Operating system', 'Android 16, XOS'],
  ],
},

{
  slug: 'vivo-v80-5g',
  brand: 'Vivo',
  name: 'V80 5G',
  tag: 'New Arrival',
  featured: true,
  summary: 'Premium Vivo smartphone focused on portrait photography, AMOLED visuals and long battery life.',
  images: ["https://m.media-amazon.com/images/I/71EADoSqrwL.jpg",
    "https://telecomtalk.info/wp-content/uploads/2026/09/vivo-v80-5g-india-launch-date-confirmed.jpg"
  ],
  specs: [
    ['Chip', 'Qualcomm Snapdragon 7 Gen 4'],
    ['Display', '6.78-inch AMOLED, 120Hz'],
    ['Rear camera', '50MP OIS + 50MP Ultra-wide'],
    ['Front camera', '50MP'],
    ['Battery', '7000mAh'],
    ['Charging', '90W fast charging'],
    ['RAM', '8GB / 12GB'],
    ['Storage', '256GB / 512GB'],
    ['Operating system', 'Android 17, OriginOS'],
  ],
},

  {
    slug: 'iphone-17',
    brand: 'Apple',
    name: 'iPhone 17',
    tag: 'Latest',
    featured: true,
    summary: 'The everyday iPhone with the A19 chip and a 48 MP main camera.',
    images: [
      'https://www.apple.com/newsroom/images/2025/09/apple-debuts-iphone-17/geo/tile/Apple-iPhone-17-hero-250909-lp.jpg.news_app_ed.jpg',
      'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-17-hero.png',
    ],
    specs: [
      ['Chip', 'Apple A19'],
      ['Display', '6.3-inch'],
      ['Rear camera', '48 MP'],
      ['Battery', 'About 3,700 mAh'],
      ['Operating system', 'iOS'],
    ],
  },

  

  {
    slug: 'samsung-galaxy-z-fold7',
    brand: 'Samsung',
    name: 'Galaxy Z Fold7',
    tag: 'Foldable',
    featured: false,
    summary: 'Samsung’s book-style foldable: a phone that opens into a tablet-size screen.',
    images: [
      'https://m.media-amazon.com/images/I/61Q1AgNSO3L._AC_UF1000,1000_QL80_.jpg',
      'https://rukminim3.flixcart.com/image/480/480/xif0q/mobile/z/j/s/-original-imahggetf4mhj9db.jpeg?q=80',
    ],
    specs: [
      ['Type', 'Foldable'],
      ['Operating system', 'Android (One UI)'],
      ['Best for', 'Multitasking and big-screen viewing'],
    ],
  },

 {
  slug: 'oppo-find-x10-pro-max',
  brand: 'OPPO',
  name: 'Find X10 Pro Max',
  tag: 'Flagship',
  featured: true,
  summary: 'OPPO’s flagship with a triple 200 MP Hasselblad camera system, Dimensity 9600 Pro and an 8,000 mAh battery.',
  images: [
    'https://m.media-amazon.com/images/I/71vjBvhfIeL.jpg',
    'https://static.hub.91mobiles.com/wp-content/uploads/sites/9/2026/10/oppo-find-x10-series-feat.png?tr=q-70,q-70,w-696',
  ],
  specs: [
    ['Chip', 'MediaTek Dimensity 9600 Pro'],
    ['Display', '6.78-inch AMOLED, up to 144Hz'],
    ['Rear camera', 'Triple 200 MP cameras'],
    ['Front camera', '50 MP'],
    ['Battery', '8,000 mAh'],
    ['Charging', '80W wired + 50W wireless'],
    ['Storage', '12GB RAM + 512GB'],
    ['Operating system', 'ColorOS 17'],
  ],
},

  {
    slug: 'oneplus-15',
    brand: 'OnePlus',
    name: 'OnePlus 15',
    tag: 'Flagship',
    featured: true,
    summary: 'Flagship speed with a huge 7,300 mAh battery and a 165 Hz display.',
    images: [
      'https://izoleapv4-prod-assets.izoleap.com/izoleap_m_31/pims/cp_img/6921815630517_1.webp',
      'https://img-prd-pim.poorvika.com/product/Oneplus-15-sand-storm-12gb-256gb-Camera.webp',
    ],
    specs: [
      ['Chip', 'Snapdragon 8 Elite Gen 5'],
      ['Display', '165 Hz LTPO AMOLED'],
      ['Rear camera', '50 MP main'],
      ['Battery', '7,300 mAh'],
      ['Charging', '80W wired'],
    ],
  },

  {
    slug: 'vivo-x300-pro',
    brand: 'Vivo',
    name: 'Vivo X300 Pro',
    tag: 'Camera phone',
    featured: true,
    summary: 'A camera-first flagship with a 200 MP ZEISS periscope and a 6,510 mAh battery.',
    images: [
      'https://m.media-amazon.com/images/I/71Gxa9gpbnL._AC_UF1000,1000_QL80_.jpg',
      'https://img.pchome.com.tw/cs/items/DYAY3Q1900K2FPB/000001_1783941315.jpg?width=320',
    ],
    specs: [
      ['Chip', 'MediaTek Dimensity 9500'],
      ['Rear camera', '200 MP ZEISS periscope'],
      ['Battery', '6,510 mAh'],
      ['Charging', '90W+ wired'],
    ],
  },

  {
  slug: 'realme-16-5g',
  brand: 'Realme',
  name: '16 5G',
  tag: 'New Arrival',
  featured: true,
  summary: 'Realme 16 5G with a 120Hz AMOLED display, 7000mAh battery and 50MP selfie camera.',
  images: [
    'https://vsprod.vijaysales.com/media/catalog/product/a/i/air_white_1__2.jpg?optimize=medium&fit=bounds&height=500&width=500',
    "https://vsprod.vijaysales.com/media/catalog/product/a/i/air_white_7__2.jpg?optimize=medium&fit=bounds&height=500&width=500"
  ],
  specs: [
    ['Chip', 'MediaTek Dimensity 6400 Turbo'],
    ['Display', '6.57-inch FHD+ AMOLED, 120Hz'],
    ['Rear camera', '50MP + 2MP'],
    ['Front camera', '50MP'],
    ['Battery', '7000mAh'],
    ['Charging', '60W SUPERVOOC'],
    ['RAM', '8GB / 12GB'],
    ['Storage', '128GB / 256GB'],
    ['Operating system', 'Android 16, Realme UI 7.0'],
    ['Protection', 'IP66 / IP68 / IP69 / IP69K'],
  ],
},

  {
    slug: 'motorola-edge-70-pro',
    brand: 'Motorola',
    name: 'Motorola Edge 70 Pro',
    tag: 'New',
    featured: true,
    summary: 'Slim and fast, with a 144 Hz display, 50 MP Sony LYTIA camera and 6,500 mAh battery.',
    images: [
      'https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/u/b/c/-resized-original-imahnzuxqctqxkjz.jpeg?q=70',
      'https://www.indiyase.in/cdn/shop/files/Motorola-Edge-70-Pro-5G-smartphone-with-8GB-RAM-256GB-storage-indiya-Se-31322819264701.webp?v=1778498550&width=1946',
    ],
    specs: [
      ['Chip', 'Dimensity 8500 Extreme'],
      ['Display', '144 Hz'],
      ['Rear camera', '50 MP Sony LYTIA 710'],
      ['Battery', '6,500 mAh'],
    ],
  },

 


];

export const BRAND_STYLE = {
  Apple: ['#f2f2f4', '#c9ccd3'],
  Samsung: ['#e8eefb', '#9db4e8'],
  OnePlus: ['#fdeaea', '#ef9a9a'],
  Vivo: ['#e8f1ff', '#8fb6ff'],
  Motorola: ['#eaf6ef', '#8fd0ac'],
};
