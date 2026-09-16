/**
 * Portfolio Data Architecture
 * Data portofolio terpusat dan realistis untuk Muhamad Adli Fajriyansyah
 */

export const personalData = {
  name: "Muhamad Adli Fajriyansyah",
  shortName: "Adli",
  role: "Full-Stack Developer / Software Engineer",
  status: "Terbuka untuk peluang proyek",
  availabilityStatus: "active", // "active" | "busy"
  location: "Indonesia",
  timezone: "WIB (UTC+07:00)",
  coordinates: "6.2088° S, 106.8456° E",
  cvUrl: "/CV.pdf",
  tagline: "Membangun produk digital yang andal dan siap pakai dengan arsitektur performa tinggi.",
  statement: "Saya membangun produk digital yang dirancang untuk digunakan, bukan sekadar didemonstrasikan.",
  aboutParagraphs: [
    "Saya adalah seorang full-stack developer yang berfokus membangun sistem web yang tangguh, berkinerja tinggi, dan antarmuka pengguna yang nyaman. Fokus saya adalah menjembatani arsitektur layanan backend yang skalabel dengan ketelitian desain frontend yang fungsional.",
    "Pada sisi server, saya merancang API yang terstruktur, skema database yang rapi, serta alur kerja yang andal menggunakan PHP, Laravel, dan MySQL. Pada sisi client, saya menciptakan pengalaman web yang responsif, aksesibel, dan cepat menggunakan React modern, Tailwind CSS, dan desain interaksi yang presisi.",
    "Saya percaya bahwa perangkat lunak yang hebat tidak bergantung pada efek visual yang berlebihan. Setiap tata letak, animasi, dan kueri database harus memiliki tujuan nyata: mempercepat waktu muat, mempermudah pengguna, dan siap digunakan di dunia nyata."
  ],
  stats: [
    { label: "Fokus Rekayasa", value: "Full-Stack" },
    { label: "Fondasi Utama", value: "React • Laravel" },
    { label: "Prioritas", value: "Performa & DX" },
    { label: "Standar Tampilan", value: "Mobile-First" }
  ]
};

export const navLinks = [
  { name: "Tentang", href: "#about", number: "01" },
  { name: "Keahlian", href: "#skills", number: "02" },
  { name: "Proyek", href: "#projects", number: "03" },
  { name: "Perjalanan", href: "#experience", number: "04" },
  { name: "Kontak", href: "#contact", number: "05" }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Rekayasa Frontend",
    description: "Struktur semantik, interaksi aksesibel, dan sistem desain mobile-first.",
    skills: [
      { name: "HTML5", detail: "Arsitektur Semantik" },
      { name: "CSS3", detail: "Layout Modern & Flex/Grid" },
      { name: "JavaScript", detail: "ES6+, Async, DOM" },
      { name: "React", detail: "Komponen & Hooks Lifecycle" },
      { name: "Tailwind CSS", detail: "Desain Berbasis Utilitas" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Sistem",
    description: "Logika bisnis yang andal, struktur data terorganisir, dan integrasi API yang aman.",
    skills: [
      { name: "PHP", detail: "OOP Modern & Type Safety" },
      { name: "Laravel", detail: "MVC, Eloquent, Queues" },
      { name: "MySQL", detail: "Desain Skema & Indexing" },
      { name: "REST API", detail: "Desain Kontrak & JSON API" }
    ]
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    description: "Kontrol versi terstruktur, lingkungan kontainer, dan efisiensi alur kerja.",
    skills: [
      { name: "Git", detail: "Branching & Kolaborasi" },
      { name: "GitHub", detail: "Code Review & Repositori" },
      { name: "Docker", detail: "Lingkungan Kontainer" },
      { name: "Linux", detail: "Bash & Manajemen Server" }
    ]
  },
  {
    id: "practices",
    title: "Desain & Metodologi",
    description: "Pendekatan ramah pengguna, standar responsif, dan eksekusi proyek terarah.",
    skills: [
      { name: "UI/UX Architecture", detail: "Wireframing & Kemudahan Pakai" },
      { name: "Desain Responsif", detail: "Standar Tampilan Mobile-First" },
      { name: "Motion Design", detail: "GSAP & Ritme Spasial" },
      { name: "Manajemen Proyek", detail: "Perencanaan & Eksekusi Sprint" }
    ]
  }
];

export const projectsData = [
  {
    id: "01",
    title: "GLOSINDO Digital Guestbook",
    subtitle: "Sistem Manajemen Resepsionis & Tamu Perusahaan",
    category: "Aplikasi Web",
    year: "2024",
    description: "Sistem pencatatan dan verifikasi tamu digital terpusat yang dirancang untuk kebutuhan resepsionis di PT Global Media Pratama Solusindo. Dilengkapi fitur check-in real-time, notifikasi pihak terkait, pencatatan audit log, dan laporan rekap otomatis.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "REST API"],
    metrics: "Pencatatan tamu instan dengan catatan audit administrasi yang aman",
    imageAccent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    badgeColor: "emerald",
    githubUrl: "https://github.com/Adlyy03/glosindo",
    liveUrl: null,
    features: [
      "Check-in tamu digital & koordinasi ke pihak yang dituju",
      "Dashboard admin dengan pencarian dan filter cepat",
      "Pencatatan log tamu yang aman serta ekspor laporan",
      "Tampilan verifikasi yang dioptimalkan untuk mobile"
    ]
  },
  {
    id: "02",
    title: "Arradea Marketplace",
    subtitle: "Platform E-Commerce Multi-Vendor",
    category: "E-Commerce",
    year: "2024",
    description: "Platform marketplace digital yang dirancang untuk mendukung katalog multi-toko pedagang, sinkronisasi inventaris produk, filter kategori yang dinamis, serta alur checkout yang aman dan stabil.",
    tags: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    metrics: "Manajemen pedagang modular dan alur belanja yang responsif",
    imageAccent: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    badgeColor: "cyan",
    githubUrl: "https://github.com/Adlyy03/arradea-laravel",
    liveUrl: null,
    features: [
      "Pencarian katalog dinamis dengan filter multi-parameter",
      "Penyimpanan status keranjang belanja dan kalkulasi pesanan",
      "Dashboard toko mitra untuk kelola produk dan stok barang",
      "Komunikasi data yang stabil menggunakan RESTful API"
    ]
  },
  {
    id: "03",
    title: "Travel Story",
    subtitle: "Platform Dokumentasi & Jurnal Perjalanan Interaktif",
    category: "Kisah Interaktif",
    year: "2023",
    description: "Platform jurnal narasi dan dokumentasi perjalanan dengan tipografi kontras tinggi, presentasi media yang interaktif, serta navigasi linimasa yang mulus di perangkat mobile maupun desktop.",
    tags: ["React", "Tailwind CSS", "GSAP", "REST API"],
    metrics: "Transisi konten yang mulus dengan tipografi editorial kontras tinggi",
    imageAccent: "from-amber-500/20 via-amber-500/5 to-transparent",
    badgeColor: "amber",
    githubUrl: "https://github.com/Adlyy03/travel-story-app",
    liveUrl: null,
    features: [
      "Dokumentasi catatan perjalanan dengan penandaan lokasi dinamis",
      "Tipografi editorial berbobot dan galeri visual yang imersif",
      "Animasi transisi linimasa khusus yang dibangun dengan GSAP",
      "Navigasi ramah sentuhan untuk kenyamanan pembaca di ponsel"
    ]
  },
  {
    id: "04",
    title: "System Architecture & Dev Tooling",
    subtitle: "Lingkungan Kontainer & Otomasi Sistem Pengembang",
    category: "DevOps & Tools",
    year: "2023",
    description: "Standardisasi konfigurasi lingkungan pengembang, pipeline Docker multi-stage compose, serta skrip otomatisasi Linux untuk menjamin konsistensi antara lingkungan lokal dan server.",
    tags: ["Docker", "Linux", "PHP", "Git", "Bash"],
    metrics: "Lingkungan pengembangan berbasis kontainer yang konsisten",
    imageAccent: "from-purple-500/20 via-purple-500/5 to-transparent",
    badgeColor: "purple",
    githubUrl: null,
    liveUrl: null,
    features: [
      "Konfigurasi multi-kontainer Docker untuk PHP, MySQL, dan Nginx",
      "Otomasi skrip Bash untuk deployment dan pencadangan database",
      "Standardisasi alur kerja Git dan tata kelola branch",
      "Pengerasan dasar keamanan dan manajemen log server Linux"
    ]
  }
];

export const experienceData = [
  {
    period: "2024 — Sekarang",
    role: "Full-Stack Developer",
    organization: "Pengembangan Proyek Independen & Produksi",
    location: "Indonesia",
    type: "Rekayasa Perangkat Lunak",
    description: "Merancang dan membangun aplikasi web secara menyeluruh menggunakan Laravel, React, dan MySQL. Berfokus pada keandalan database, kontrak API yang bersih, serta pengalaman pengguna yang lancar di semua ukuran layar.",
    skillsApplied: ["React", "Laravel", "Tailwind CSS", "MySQL", "GSAP"]
  },
  {
    period: "2023 — 2024",
    role: "Web Developer Intern (PKL)",
    organization: "PT Global Media Pratama Solusindo",
    location: "Indonesia",
    type: "Pengalaman Kerja Industri",
    description: "Melaksanakan Praktik Kerja Lapangan (PKL) dengan berkontribusi langsung pada pengembangan aplikasi web perusahaan, termasuk sistem buku tamu digital (GLOSINDO), pengelolaan skema database MySQL, serta perbaikan fitur klien.",
    skillsApplied: ["PHP", "Laravel", "MySQL", "JavaScript", "Git"]
  },
  {
    period: "Fondasi",
    role: "Pendidikan Rekayasa Perangkat Lunak / Teknik Informatika",
    organization: "Pendidikan Kejuruan / Akademik Teknik",
    location: "Indonesia",
    type: "Pendidikan Formal",
    description: "Menempuh pembelajaran mendalam mengenai perancangan basis data relasional, pemrograman berorientasi objek (OOP), standar pengembangan web modern, algoritma struktur data, serta metodologi pengujian perangkat lunak.",
    skillsApplied: ["Struktur Data", "OOP", "Normalisasi Database", "Analisis Sistem"]
  }
];

export const contactData = {
  title: "Ada proyek atau ide yang ingin dibangun?",
  subtitle: "Mari ciptakan sesuatu yang bermanfaat.",
  description: "Baik Anda membutuhkan aplikasi web full-stack, sistem manajemen berbasis database, maupun antarmuka frontend berkinerja tinggi, saya terbuka untuk berdiskusi mengenai kebutuhan teknis Anda.",
  email: "adlimuhamad358@gmail.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Adlyy03",
      handle: "@Adlyy03"
    }
  ]
};
