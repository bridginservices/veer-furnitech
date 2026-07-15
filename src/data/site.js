// Single source of truth for business info (NAP), navigation, and shared
// content. Keeping Name / Address / Phone consistent everywhere is important
// for local SEO, so pull from here rather than hard-coding in pages.

export const business = {
  name: 'Veer Furnitech',
  tagline: 'स्वप्न। निर्मीयताम्। निवसति।', // Dream it. Craft it. Live in it.
  taglineEn: 'Dream it · Craft it · Live in it',
  legalName: 'Veer Furnitech',
  city: 'Nagpur',
  state: 'Maharashtra',
  phone: '+91 83298 10138',
  phoneRaw: '918329810138', // for tel: and wa.me links
  whatsapp: '918329810138',
  email: 'veerfurnitech@gmail.com',
  address: {
    line1: 'F27/1, Hingna, MIDC',
    line2: 'Near Nildoh',
    city: 'Nagpur',
    region: 'Maharashtra',
    postalCode: '440016',
    country: 'India',
  },
  addressOneLine: 'F27/1, Hingna, MIDC, Near Nildoh, Nagpur – 440016',
  hours: 'Mon – Sat: 10:00 AM – 8:00 PM',
  // Google Maps embed for the Hingna MIDC, Nagpur area. Replace `q` with the
  // exact business pin once the Google Business Profile is verified.
  mapEmbed:
    'https://www.google.com/maps?q=Hingna+MIDC+Nagpur+440016&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Hingna+MIDC+Nagpur+440016',
  social: {
    instagram: 'https://instagram.com/veerfurnitech',
    facebook: 'https://facebook.com/veerfurnitech',
    linkedin: 'https://linkedin.com/company/veerfurnitech',
  },
};

// Prebuilt WhatsApp link with a friendly default message.
export const whatsappLink = (message) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    message ||
      "Hello Veer Furnitech! I'd like to know more about your furniture & interior services."
  )}`;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Furniture', href: '/furniture/' },
  { label: 'Contact', href: '/contact/' },
];

export const services = [
  {
    icon: 'compass',
    title: 'Interior Design & Planning',
    short:
      'End-to-end space planning, 3D concepts and material boards tailored to how you live and work.',
    steps: [
      'On-site measurement & requirement study',
      '3D design concepts and mood boards',
      'Material, finish & budget finalisation',
      'Detailed execution drawings',
    ],
  },
  {
    icon: 'layers',
    title: 'Material Supply',
    short:
      'Premium plywood, laminates, hardware and finishes sourced from trusted brands at factory rates.',
    steps: [
      'Curated selection of boards & laminates',
      'Branded, warranty-backed hardware',
      'Quality checks before dispatch',
      'Timely on-site delivery',
    ],
  },
  {
    icon: 'saw',
    title: 'Custom Manufacturing',
    short:
      'In-house factory producing modular and bespoke furniture with machine precision and durability.',
    steps: [
      'Precision cutting & edge banding',
      'Modular & fully-custom builds',
      'Durable, moisture-resistant construction',
      'Strict factory quality control',
    ],
  },
  {
    icon: 'wrench',
    title: 'Installation',
    short:
      'Skilled installation teams that deliver a clean, on-time, hassle-free finish at your site.',
    steps: [
      'Scheduled, dust-controlled installation',
      'Precise fitting & alignment',
      'Site cleanup & handover',
      'After-service support',
    ],
  },
];

export const serveStrip = [
  'Living Rooms',
  'Kitchens',
  'Bedrooms',
  'Offices',
  'Commercial Spaces',
  'Wardrobes',
  'Modular Kitchens',
  'Showrooms',
];

export const testimonials = [
  {
    name: 'Rohan Deshmukh',
    role: 'Homeowner, Manish Nagar',
    rating: 5,
    quote:
      'Veer Furnitech handled our entire 3BHK interior — from the modular kitchen to the wardrobes. The finish is flawless and they delivered right on schedule.',
  },
  {
    name: 'Priya Kulkarni',
    role: 'Interior Client, Dharampeth',
    rating: 5,
    quote:
      'The team understood exactly the elegant, minimal look we wanted. Great material quality and the installation was neat and quick.',
  },
  {
    name: 'Amit Sharma',
    role: 'Office Owner, MIDC Hingna',
    rating: 5,
    quote:
      'We got our entire office furnished — workstations, cabins and storage. Sturdy build and very professional service throughout.',
  },
  {
    name: 'Sneha Patil',
    role: 'Homeowner, Wardha Road',
    rating: 5,
    quote:
      'Beautiful custom TV unit and bedroom set. Fair pricing for the quality and they were patient with all our design changes.',
  },
];

export const furnitureCategories = [
  {
    id: 'living-room',
    title: 'Living Room Furniture',
    description:
      'Statement sofas, entertainment units and storage that turn your living room into a warm, welcoming centrepiece.',
    items: ['Sofa Sets', 'TV & Entertainment Units', 'Coffee Tables', 'Display & Storage Units', 'Shoe Racks'],
    image:
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern living room with a custom sofa and wooden TV unit',
  },
  {
    id: 'bedroom',
    title: 'Bedroom Furniture',
    description:
      'Restful bedrooms built around smart storage — sliding wardrobes, upholstered beds and matching side units.',
    items: ['Beds & Cots', 'Sliding & Openable Wardrobes', 'Dressing Units', 'Bedside Tables', 'Study Tables'],
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Elegant bedroom with a custom wardrobe and upholstered bed',
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen',
    description:
      'Ergonomic, moisture-resistant modular kitchens designed for real Indian cooking — with tall units and clever corners.',
    items: ['L & U Shaped Layouts', 'Tall & Pantry Units', 'Chimney & Hob Integration', 'Soft-Close Hardware', 'Breakfast Counters'],
    image:
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern modular kitchen with tall units and island counter',
  },
  {
    id: 'office',
    title: 'Office Furniture',
    description:
      'Productive workspaces with durable workstations, cabins and storage that scale with your team.',
    items: ['Workstations', 'Manager & Director Cabins', 'Conference Tables', 'Office Storage', 'Reception Desks'],
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Contemporary office interior with workstations and cabins',
  },
  {
    id: 'commercial',
    title: 'Commercial Furniture',
    description:
      'Retail and hospitality fit-outs — display systems, counters and seating built to handle high footfall.',
    items: ['Retail Display Units', 'Billing & Reception Counters', 'Café & Restaurant Seating', 'Showroom Fit-outs', 'Storage Solutions'],
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Retail showroom interior with custom display units',
  },
];

export const stats = [
  { value: '10+', label: 'Years of Craftsmanship' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '100%', label: 'In-house Manufacturing' },
  { value: '5★', label: 'Client Satisfaction' },
];
