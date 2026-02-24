// MAY Beauty & More Heilbronn Configuration
// Kosmetikstudio im Wollhaus Center

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "MAY Beauty & More",
    tagline: "Ihr Kosmetikstudio im Wollhaus Center Heilbronn",
    description: "Professionelle Laser-Haarentfernung, Permanent Make-up, Aquafacial und mehr. 20 Jahre Erfahrung und modernste Technologie für Ihre Schönheit.",
    foundingYear: 2022,
    yearsExperience: 20,
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
    note: "Termine nach Vereinbarung",
    display: "Mo-Fr 10:00-18:00",
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
    name: "Ayse",
    fullName: "Ayse Yilmaz",
    image: "/beauty/frau.jpg",
    bio: [
      "Mit 20 Jahren Erfahrung in der Beauty-Branche und modernster Technologie bieten wir Ihnen professionelle Behandlungen auf höchstem Niveau.",
      "Unser Schwerpunkt liegt auf dauerhafter Haarentfernung mit ICE Dioden-Laser, Permanent Make-up und innovativen Gesichtsbehandlungen wie Aquafacial und RF Microneedling.",
      "Im Herzen von Heilbronn im Wollhaus Center sind wir Ihr Partner für dauerhafte Schönheitslösungen.",
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
      price: "ab 29 €",
      image: "/beauty/behandlung 3.png",
      benefits: ["Schmerzarm", "Alle Hauttypen"],
    },
    {
      title: "Permanent Make-up",
      description: "Perfekte Augenbrauen mit Microblading oder Powder Brows, natürliche Lippen und präziser Lidstrich.",
      price: "ab 199 €",
      image: "/beauty/eyebrow-after.png",
      benefits: ["Microblading", "Powder Brows"],
    },
    {
      title: "Aquafacial",
      description: "Innovative Hautbehandlung mit Tiefenreinigung, Peeling und Hydration für strahlende Haut.",
      price: "ab 89 €",
      image: "/beauty/face.jpg",
      benefits: ["Tiefenreinigung", "Sofortergebnis"],
    },
    {
      title: "RF Microneedling",
      description: "Hautstraffung und Kollagenaufbau mit Radiofrequenz-Microneedling für ein jugendliches Erscheinungsbild.",
      price: "ab 149 €",
      image: "/beauty/microneedling.jpg",
      benefits: ["Hautstraffung", "Anti-Aging"],
    },
    {
      title: "UV Wimpern",
      description: "Professionelle Wimpernverlängerung mit UV-Technik für einen langanhaltenden, glamourösen Look.",
      price: "ab 99 €",
      image: "/beauty/wimpern.png",
      benefits: ["UV-Technik", "Langanhaltend"],
    },
    {
      title: "Nadelepilation",
      description: "Dauerhafte Haarentfernung mit Elektrolyse. Die einzige Methode für 100% permanente Ergebnisse.",
      price: "ab 39 €",
      image: "/beauty/behandlung 2.webp",
      benefits: ["100% Permanent", "Alle Haarfarben"],
    },
    {
      title: "Zahnaufhellung",
      description: "Professionelles Bleaching für ein strahlendes Lächeln. Sicher und effektiv in einer Sitzung.",
      price: "ab 149 €",
      image: "/beauty/contact.png",
      benefits: ["Sofortergebnis", "Schonend"],
    },
    {
      title: "BB Glow",
      description: "Semi-permanente Foundation für einen ebenmäßigen, makellosen Teint ohne tägliches Schminken.",
      price: "ab 129 €",
      image: "/beauty/face2.jpg",
      benefits: ["Ebenmäßiger Teint", "Semi-permanent"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Laser-Haarentfernung",
      items: [
        { name: "Oberlippe", price: "29 €" },
        { name: "Kinn", price: "35 €" },
        { name: "Achseln", price: "49 €" },
        { name: "Bikinizone", price: "59 €" },
        { name: "Intimbereich komplett", price: "99 €" },
        { name: "Unterschenkel", price: "89 €" },
        { name: "Ganzes Bein", price: "149 €" },
        { name: "Rücken / Brust (Herren)", price: "129 €" },
      ],
    },
    {
      category: "Permanent Make-up",
      items: [
        { name: "Augenbrauen Microblading", price: "299 €" },
        { name: "Augenbrauen Powder Brows", price: "279 €" },
        { name: "Lidstrich oben", price: "199 €" },
        { name: "Lidstrich oben & unten", price: "299 €" },
        { name: "Lippen Kontur", price: "249 €" },
        { name: "Lippen Vollschattierung", price: "349 €" },
        { name: "Nacharbeit (4-8 Wochen)", price: "69 €" },
      ],
    },
    {
      category: "Gesichtsbehandlungen",
      items: [
        { name: "Aquafacial Basic", price: "89 €" },
        { name: "Aquafacial Premium", price: "129 €" },
        { name: "RF Microneedling Gesicht", price: "149 €" },
        { name: "RF Microneedling Gesicht & Hals", price: "199 €" },
        { name: "BB Glow Treatment", price: "129 €" },
        { name: "BB Glow 3er Kur", price: "329 €" },
      ],
    },
    {
      category: "Wimpern",
      items: [
        { name: "UV Wimpern Klassik", price: "99 €" },
        { name: "UV Wimpern Volumen", price: "129 €" },
        { name: "UV Wimpern Mega Volumen", price: "149 €" },
        { name: "Auffüllen (2-3 Wochen)", price: "59 €" },
        { name: "Wimpern Lifting inkl. Färben", price: "55 €" },
      ],
    },
    {
      category: "Nadelepilation",
      items: [
        { name: "15 Minuten", price: "39 €" },
        { name: "30 Minuten", price: "69 €" },
        { name: "45 Minuten", price: "95 €" },
        { name: "60 Minuten", price: "119 €" },
      ],
    },
    {
      category: "Extras",
      items: [
        { name: "Zahnaufhellung", price: "149 €" },
        { name: "Scalp Micropigmentation (Beratung)", price: "auf Anfrage" },
        { name: "Haartransplantation (Beratung)", price: "auf Anfrage" },
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
    headline: "Modernste Technologie",
    description: "Bei MAY Beauty & More setzen wir auf modernste Geräte und Technologien für sichere und effektive Behandlungen.",
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
        title: "Zertifizierte Qualität",
        description: "Regelmäßige Schulungen und höchste Qualitätsstandards.",
      },
      {
        icon: "check",
        title: "Individuelle Beratung",
        description: "Persönliche Beratung für optimale Behandlungsergebnisse.",
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
