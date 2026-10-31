export const CATEGORIES = [
  { id: 'phone', label: 'Phones', icon: 'phone' },
  { id: 'accessory', label: 'Accessories', icon: 'headphones' },
  { id: 'tv', label: 'TVs', icon: 'screen' },
];

export const catalog = [
  // ---------- Cables & Chargers ----------

  {
    slug: 'usb-c-cable',
    category: 'accessory',
    brand: '',
    name: 'USB-C Charging Cable',
    tag: 'Cables',
    icon: 'plug',
    featured: true,
    summary: 'Fast-charge and data cable for Android phones and the latest iPhones.',
    images: [
      'https://probots.co.in/pub/media/catalog/product/cache/d8ddd0f9b0cd008b57085cd218b48832/u/s/usb_to_c_data_cable_1.jpg'
    ],
  },

  {
    slug: 'lightning-cable',
    category: 'accessory',
    brand: '',
    name: 'Lightning Cable',
    tag: 'Cables',
    icon: 'plug',
    summary: 'Charging and sync cable for older iPhones and iPads.',
    images: [
      'https://media.cdn.kaufland.de/product-images/1024x1024/e09eca9c62e2eb86a76ae642c249860f.jpg'
    ],
  },

  {
    slug: 'micro-usb-cable',
    category: 'accessory',
    brand: '',
    name: 'Micro-USB Cable',
    tag: 'Cables',
    icon: 'plug',
    summary: 'Everyday cable for older Android phones and keypad phones.',
    images: ["https://rukmini1.flixcart.com/image/1500/1500/xif0q/data-cable/micro-usb-cable/b/o/5/fast-charging-cable-5v-2a-ultrawarp-original-imahfp65pkxnhf3z.jpeg?q=70"],
  },

  {
    slug: 'fast-charger',
    category: 'accessory',
    brand: '',
    name: 'Fast Charger Adapter',
    tag: 'Chargers',
    icon: 'plug',
    featured: true,
    summary: 'Wall adapter for quick charging. Ask us which wattage suits your phone.',
    images: [
      'https://www.xcharge.dk/cdn/shop/files/wallplug2pp.png?v=1714390484&width=2048'
    ],
  },

  {
    slug: 'car-charger',
    category: 'accessory',
    brand: '',
    name: 'Car Charger',
    tag: 'Chargers',
    icon: 'plug',
    summary: 'Charge on the go from your car’s socket.',
    images: [
      'https://bilder.obi.pl/d688b6d9-29bd-4268-b9b0-1fe0d4c6cdc2/prZZH/image.jpg'
    ],
  },

  {
    slug: 'power-bank',
    category: 'accessory',
    brand: '',
    name: 'Power Bank',
    tag: 'Power banks',
    icon: 'battery',
    featured: true,
    summary: 'Portable backup battery in different capacities.',
    images: ["https://ambraneindia.com/cdn/shop/files/20000mah-power-bank.webp?v=1763208020&width=1000"],
  },

  // ---------- Audio ----------

  {
    slug: 'wired-earphones',
    category: 'accessory',
    brand: '',
    name: 'Wired Earphones',
    tag: 'Earphones',
    icon: 'headphones',
    summary: 'Earphones with mic, in Type-C, Lightning and 3.5 mm options.',
    images: [
      'https://cpimg.tistatic.com/6008286/b/6/bluei-shook-s4-3-5mm-jack-heavy-bass-superior-sound-stereo-earphone.jpg'
    ],
  },

  {
    slug: 'wireless-earbuds',
    category: 'accessory',
    brand: '',
    name: 'Wireless Earbuds (TWS)',
    tag: 'Earphones',
    icon: 'headphones',
    featured: true,
    summary: 'True wireless earbuds with a charging case.',
    images: [
      'https://cdn.teufelaudio.com/image/upload/v1/products/REAL_BLUE_TWS_3/real-blue-tws-3-pure-white-hero-case-1300x1300x72.jpg'
    ],
  },

  {
    slug: 'neckband',
    category: 'accessory',
    brand: '',
    name: 'Bluetooth Neckband',
    tag: 'Earphones',
    icon: 'headphones',
    summary: 'Long-battery wireless neckband earphones for calls and music.',
    images: [
      'https://www.greenlion.net/web/image/product.product/10278/image_1024/%5BGNNECKXBK%5D%20Green%20Lion%20Neck%20X%20Wireless%20Neckband%20%28%D8%A3%D8%B3%D9%88%D8%AF%29?unique=603d906'
    ],
  },

  {
    slug: 'headphones',
    category: 'accessory',
    brand: '',
    name: 'Wireless Headphones',
    tag: 'Headphones',
    icon: 'headphones',
    summary: 'Over-ear headphones for music, gaming and travel.',
    images: [
      'https://listiq.in/assets/white-bg-headphone-B5exBBAy.jpg'
    ],
  },

  {
    slug: 'bluetooth-speaker',
    category: 'accessory',
    brand: '',
    name: 'Bluetooth Speaker',
    tag: 'Speakers',
    icon: 'speaker',
    summary: 'Portable speakers, from pocket size to party size.',
    images: ["https://x.imastudent.com/content/0061615_jbl-boombox-3-portable-bluetooth-speaker_500.png"],
  },

  // ---------- Protection ----------

  {
    slug: 'tempered-glass',
    category: 'accessory',
    brand: '',
    name: 'Tempered Glass',
    tag: 'Protection',
    icon: 'tag',
    summary: 'Screen protector for your phone model, fitted at the shop.',
    images: ["https://casefly.in/cdn/shop/files/casefly-iphone-17-flexiguard-1.png?v=1761483069&width=3000"],
  },

  {
    slug: 'back-case',
    category: 'accessory',
    brand: '',
    name: 'Back Case / Cover',
    tag: 'Protection',
    icon: 'tag',
    summary: 'Cases for popular models. Tell us your phone and we’ll find one.',
    images: ["https://casegear.in/cdn/shop/files/15_Blue_Bold_pro_Front.png?v=1785741233"],
  },

  // ---------- TVs ----------

  {
    slug: 'tv-32',
    category: 'tv',
    brand: '',
    name: '32-inch Smart LED TV',
    tag: 'Smart TV',
    icon: 'screen',
    summary: 'Compact smart TV for bedrooms and small rooms.',
    images: [
      'https://img.bobshop.co.za/image/upload/f_auto%2Cq_auto%3Aeco%2Cd_notfound.png/user_images/190/396190/s-zoom.file_dbf3kz.jpg'
    ],
  },

  {
    slug: 'tv-43',
    category: 'tv',
    brand: '',
    name: '43-inch Smart LED TV',
    tag: 'Smart TV',
    icon: 'screen',
    featured: true,
    summary: 'Popular size for the living room, with built-in apps.',
    images: [
      'https://bigdeals.lk/uploads/product/normal/bdlp43fusn910abga.png'
    ],
  },

  {
    slug: 'soundbar',
    category: 'tv',
    brand: '',
    name: 'Soundbar / Home Theatre',
    tag: 'TV audio',
    icon: 'speaker',
    summary: 'Better TV sound with a soundbar or home theatre system.',
    images: [
      'https://m.media-amazon.com/images/I/31uIhupNStL.jpg'
    ],
 },
  {
    slug: 'tv-50',
    category: 'tv',
    brand: '',
    name: '50-inch 4K Smart TV',
    tag: '4K TV',
    icon: 'screen',
    summary: '4K picture and smart apps for a bigger screen.',
    images: [
      'https://de2kqc9pq55cj.cloudfront.net/_img_productos/smart-tv-jvc-4k-50-foto1---.jpg'
    ],
  },

  {
    slug: 'tv-55',
    category: 'tv',
    brand: '',
    name: '55-inch 4K Smart TV',
    tag: '4K TV',
    icon: 'screen',
    featured: true,
    summary: 'Big-screen 4K viewing for movies and cricket.',
    images: ["https://m.media-amazon.com/images/I/81tilPzs7sL._AC_UF1000,1000_QL80_.jpg"],
  },

  {
    slug: 'tv-65',
    category: 'tv',
    brand: '',
    name: '65-inch 4K Smart TV',
    tag: '4K TV',
    icon: 'screen',
    summary: 'Home-theatre size 4K TV. Ask us about wall mounting.',
    images: [
      'https://media-ik.croma.com/Croma%20Assets/Entertainment/Television/Images/316505_0_c3F3a8-pJt.png?updatedAt=1754313292156&tr=w-600'
    ],
  },

  
 
];