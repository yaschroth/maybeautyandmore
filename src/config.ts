// MAY Beauty & More Heilbronn Configuration
// Kosmetikstudio im Wollhaus Center

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "MAY Beauty & More",
    tagline: "Dein Look. Deine Stärke.",
    motto: "Schönheit ist kein Zufall – sie ist Technik.",
    description: "Dein modernes Kosmetikstudio im Herzen von Heilbronn. Professionelle Beauty-Behandlungen von Laser-Haarentfernung über Permanent Make-up bis Aquafacial – mit 20 Jahren Erfahrung.",
    foundingYear: 2022,
    yearsExperience: 20,
    yearsInCenter: 3,
    satisfiedClients: "2.500+",
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "07131 2033374",
    phoneLink: "tel:+4971312033374",
    email: "Info@maybeautyandmore.de",
    whatsapp: "+49 7131 2033374",
    whatsappLink: "https://wa.me/4971312033374",
    address: {
      street: "Am Wollhaus 1",
      city: "Heilbronn",
      district: "Wollhaus Center",
      zip: "74072",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.5!2d9.2165!3d49.1420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982915e8888889%3A0x0!2sAm%20Wollhaus%201%2C%2074072%20Heilbronn!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Am+Wollhaus+1,+74072+Heilbronn",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "https://www.instagram.com/may_beauty_and_more",
    facebook: "https://www.facebook.com/maybeautyandmore",
    tiktok: "https://www.tiktok.com/@tosunpascha7",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo-Fr 10:00-18:00",
    saturday: "Sa 10:00-17:00",
    sunday: "Geschlossen",
    note: "Mit & Ohne Termin – Komm Vorbei!",
    display: "Mo-Fr 10:00-18:00",
  },

  // ============================================
  // BOOKING
  // ============================================
  booking: {
    url: "https://beautinda.de/salon/O95cdL9amimY5W8GUtHD",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 5.0,
    count: "200+",
    googleReviewLink: "https://www.google.com/maps/place/MAY+Beauty+%26+More",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Görkem",
    fullName: "Görkem Talu Yilmaz",
    image: "/beauty/frau.jpg",
    bio: [
      "Mit über 20 Jahren Erfahrung in der Beauty-Branche bringe ich Leidenschaft und Expertise in jede Behandlung.",
      "Mein Fokus: dauerhafte Haarentfernung mit ICE Dioden-Laser, Permanent Make-up und innovative Gesichtsbehandlungen wie Aquafacial und RF Microneedling.",
      "Im Wollhaus Center Heilbronn biete ich dir professionelle Behandlungen in entspannter Atmosphäre – mit oder ohne Termin.",
    ],
    certifications: [
      { label: "20 Jahre Erfahrung", icon: "star" },
      { label: "ICE Dioden-Laser", icon: "award" },
      { label: "PMU Spezialistin", icon: "shield" },
      { label: "Modernste Technik", icon: "check" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Sarah K.",
      rating: 5,
      text: "Die Laser-Haarentfernung ist super effektiv und schmerzarm. Nach nur wenigen Sitzungen sehe ich tolle Ergebnisse. Sehr zu empfehlen!",
      service: "Laser-Haarentfernung",
      date: "vor 1 Woche",
    },
    {
      name: "Lisa M.",
      rating: 5,
      text: "Meine Powder Brows sehen so natürlich aus! Das Team ist sehr professionell und nimmt sich Zeit für eine individuelle Beratung.",
      service: "Permanent Make-up",
      date: "vor 2 Wochen",
    },
    {
      name: "Anna T.",
      rating: 5,
      text: "Das Aquafacial hat meine Haut komplett verwandelt. Sie ist jetzt viel strahlender und reiner. Komme auf jeden Fall wieder!",
      service: "Aquafacial",
      date: "vor 3 Wochen",
    },
    {
      name: "Jennifer H.",
      rating: 5,
      text: "Endlich ein Studio mit modernen Geräten und kompetenter Beratung. Die UV-Wimpern halten super und sehen wunderschön aus.",
      service: "Wimpernverlängerung",
      date: "vor 1 Monat",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "ICE Dioden-Laser",
      description: "Dauerhafte Haarentfernung mit modernster ICE-Technologie. Schmerzarm und effektiv für alle Hauttypen.",
      price: "ab 15 €",
      image: "/beauty/behandlung 3.png",
      benefits: ["Schmerzarm", "Alle Hauttypen"],
    },
    {
      title: "Permanent Make-up",
      description: "Perfekte Augenbrauen mit Härchenzeichnung, Powder Brows oder Kombibrows. Natürliche Lippen und präziser Eyeliner.",
      price: "ab 190 €",
      image: "/beauty/eyebrow-after.png",
      benefits: ["Powder Brows", "Kombibrows"],
    },
    {
      title: "RF Microneedling",
      description: "Hautstraffung und Kollagenaufbau mit Radiofrequenz-Microneedling für ein jugendliches Erscheinungsbild.",
      price: "ab 69 €",
      image: "/beauty/microneedling.jpg",
      benefits: ["Hautstraffung", "Anti-Aging"],
    },
    {
      title: "Wimpernverlängerung",
      description: "Professionelle Wimpernverlängerung in verschiedenen Techniken – von 1:1 bis Mega-Volumen.",
      price: "ab 69 €",
      image: "/beauty/wimpern.png",
      benefits: ["1:1 bis 10D", "Langanhaltend"],
    },
    {
      title: "BB Glow",
      description: "Semi-permanente Foundation für einen ebenmäßigen, makellosen Teint ohne tägliches Schminken.",
      price: "ab 49 €",
      image: "/beauty/face2.jpg",
      benefits: ["Ebenmäßiger Teint", "Semi-permanent"],
    },
    {
      title: "Nadelepilation",
      description: "Dauerhafte Haarentfernung mit Elektrolyse. Die einzige Methode für 100% permanente Ergebnisse.",
      price: "ab 40 €",
      image: "/beauty/behandlung 2.webp",
      benefits: ["100% Permanent", "Alle Haarfarben"],
    },
    {
      title: "Zahnaufhellung",
      description: "Professionelles Bleaching für ein strahlendes Lächeln. Sicher und effektiv in einer Sitzung.",
      price: "79 €",
      image: "/beauty/contact.png",
      benefits: ["Sofortergebnis", "Schonend"],
    },
    {
      title: "Gesichtsbehandlung",
      description: "Von Basisreinigung bis Premium-Behandlung mit Radiofrequenz für strahlende, reine Haut.",
      price: "ab 40 €",
      image: "/beauty/face.jpg",
      benefits: ["Tiefenreinigung", "Sofortergebnis"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Laser-Haarentfernung",
      items: [
        { name: "Gesicht (15-20 Min)", price: "ab 15 €" },
        { name: "Oberkörper (10-30 Min)", price: "ab 30 €" },
        { name: "Arme & Beine (45 Min)", price: "50 €" },
        { name: "Intimzone (20 Min)", price: "40 €" },
        { name: "Intimzone Po (10 Min)", price: "40 €" },
        { name: "Ganzkörper (70 Min)", price: "119 €" },
      ],
    },
    {
      category: "Permanent Make-up",
      items: [
        { name: "Härchenzeichnung (120 Min)", price: "220 €" },
        { name: "Powder Brows (140 Min)", price: "250 €" },
        { name: "Kombibrows (150 Min)", price: "270 €" },
        { name: "Eyeliner / Deepliner (120 Min)", price: "200 €" },
        { name: "Lippenkontur / Aquarell Lips (150 Min)", price: "190 €" },
        { name: "Lipstick Effekt (140 Min)", price: "320 €" },
      ],
    },
    {
      category: "Gesichtsbehandlungen",
      items: [
        { name: "Basisreinigung (30 Min)", price: "40 €" },
        { name: "Intensivreinigung (60 Min)", price: "70 €" },
        { name: "Premium + Radiofrequenz (75 Min)", price: "99 €" },
        { name: "Microneedling Gesicht (45 Min)", price: "69 €" },
        { name: "RF Microneedling Gesicht (60 Min)", price: "99 €" },
        { name: "BB Glow Augen (30 Min)", price: "49 €" },
        { name: "BB Glow Gesicht (60 Min)", price: "69 €" },
        { name: "BB Glow + Intensivreinigung (80 Min)", price: "99 €" },
      ],
    },
    {
      category: "Wimpern",
      items: [
        { name: "1:1 Technik Neumodellage (80 Min)", price: "69 €" },
        { name: "2D-5D Neumodellage (80 Min)", price: "79 €" },
        { name: "6D-10D Neumodellage (80 Min)", price: "89 €" },
        { name: "Ab 10D Neumodellage (90 Min)", price: "99 €" },
        { name: "Wimpern Lifting (60 Min)", price: "50 €" },
        { name: "Wimpern Lifting + Färben (70 Min)", price: "59 €" },
      ],
    },
    {
      category: "Nadelepilation",
      items: [
        { name: "30 Minuten", price: "40 €" },
        { name: "60 Minuten", price: "80 €" },
      ],
    },
    {
      category: "Extras",
      items: [
        { name: "Zahnaufhellung (60 Min)", price: "79 €" },
        { name: "Augenbrauen Zupfen (30 Min)", price: "10 €" },
        { name: "Augenbrauen Zupfen + Färben (40 Min)", price: "18 €" },
        { name: "Tages-Make Up (50 Min)", price: "45 €" },
        { name: "Abend-Make Up (80 Min)", price: "75 €" },
        { name: "Hochzeits-Make Up (120 Min)", price: "100 €" },
        { name: "Haartransplantations-Beratung", price: "50 €" },
        { name: "Scalp Micropigmentation", price: "ab 300 €" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/hero main.webp",
    heroAlt: "MAY Beauty & More - Kosmetikstudio im Wollhaus Center Heilbronn",
    hygiene: "/beauty/contact.png",
    gallery: [
      { url: "/beauty/behandlung 3.png", category: "Laser" },
      { url: "/beauty/eyebrow-after.png", category: "Permanent Make-up" },
      { url: "/beauty/face.jpg", category: "Aquafacial" },
      { url: "/beauty/microneedling.jpg", category: "Microneedling" },
      { url: "/beauty/wimpern.png", category: "Wimpern" },
      { url: "/beauty/wimpern (2).webp", category: "Wimpern" },
      { url: "/beauty/face2.jpg", category: "BB Glow" },
      { url: "/beauty/behandlung 2.webp", category: "Behandlung" },
      { url: "/beauty/kopfmassage.png", category: "Wellness" },
      { url: "/beauty/contact.png", category: "Studio" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Coral/Salmon with Light Blue
  // ============================================
  colors: {
    primary: "#FF6F61", // Coral/Salmon
    primaryRgb: "255, 111, 97",
    dark: "#2D2D2D",
    light: "#FFF8F7",
    lightAlt: "#FFF0EE",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Schönheit ist Technik",
    description: "Schönheit ist kein Zufall – sie ist Technik. Bei MAY Beauty & More setzen wir auf modernste Geräte und 20 Jahre Expertise für Ergebnisse, die überzeugen.",
    features: [
      {
        icon: "star",
        title: "20 Jahre Erfahrung",
        description: "Zwei Jahrzehnte Expertise in der Beauty-Branche.",
      },
      {
        icon: "shield",
        title: "ICE Dioden-Laser",
        description: "Schmerzarme Haarentfernung mit modernster Kühltechnologie.",
      },
      {
        icon: "award",
        title: "2.500+ Kundinnen",
        description: "Zufriedene Kundinnen vertrauen auf unsere Expertise.",
      },
      {
        icon: "check",
        title: "Mit & Ohne Termin",
        description: "Flexibel für dich – komm einfach vorbei oder buche online.",
      },
    ],
  },

  // ============================================
  // LOGO
  // ============================================
  logo: {
    src: "", // Empty to show only name
    alt: "MAY Beauty & More Heilbronn Logo",
  },
};

export type Config = typeof config;
