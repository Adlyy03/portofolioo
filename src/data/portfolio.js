/**
 * Portfolio Data Architecture
 * Centralized, realistic data file for Muhammad Adli Fajriyansyah
 * No fabricated achievements, companies, or broken links.
 */

export const personalData = {
  name: "Muhammad Adli Fajriyansyah",
  shortName: "Adli",
  role: "Full-Stack Developer / Software Engineer",
  status: "Available for select opportunities",
  availabilityStatus: "active", // "active" | "busy"
  location: "Indonesia",
  timezone: "UTC+07:00",
  coordinates: "6.2088° S, 106.8456° E",
  cvUrl: "/CV.pdf",
  tagline: "Building resilient, production-grade digital products with high-performance architectures.",
  statement: "I build digital products that are designed to be used, not just demonstrated.",
  aboutParagraphs: [
    "I am a full-stack developer focused on building durable, high-performance web systems and fluid user interfaces. My work bridges the gap between scalable backend services and intentional frontend craftsmanship.",
    "On the server side, I build maintainable APIs, structured database schemas, and dependable workflows with PHP, Laravel, and MySQL. On the client side, I create responsive, accessible, and fast web experiences using modern React, Tailwind CSS, and precision motion design.",
    "I believe great software doesn't rely on superficial spectacle. Every layout, animation, and database query must serve a functional purpose: lower latency, improve user clarity, and withstand real-world use."
  ],
  stats: [
    { label: "Engineering Ethos", value: "Full-Stack" },
    { label: "Core Foundation", value: "React • Laravel" },
    { label: "Focus", value: "Performance & DX" },
    { label: "Interface Standard", value: "Mobile-First" }
  ]
};

export const navLinks = [
  { name: "About", href: "#about", number: "01" },
  { name: "Skills", href: "#skills", number: "02" },
  { name: "Projects", href: "#projects", number: "03" },
  { name: "Journey", href: "#experience", number: "04" },
  { name: "Contact", href: "#contact", number: "05" }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Semantic structures, accessible interactions, and mobile-first design systems.",
    skills: [
      { name: "HTML5", detail: "Semantic Architecture" },
      { name: "CSS3", detail: "Modern Layouts & Subgrid" },
      { name: "JavaScript", detail: "ES6+, Async, DOM" },
      { name: "React", detail: "Component Lifecycle & Hooks" },
      { name: "Tailwind CSS", detail: "Utility-First Design" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description: "Robust business logic, structured data access, and secure service integrations.",
    skills: [
      { name: "PHP", detail: "Modern OOP & Type Safety" },
      { name: "Laravel", detail: "MVC, Eloquent, Queues" },
      { name: "MySQL", detail: "Schema Design & Indexing" },
      { name: "REST API", detail: "Contract Design & JSON API" }
    ]
  },
  {
    id: "tools",
    title: "Tooling & DevOps",
    description: "Reliable version control, containerized runtime, and developer ergonomics.",
    skills: [
      { name: "Git", detail: "Branching & Collaboration" },
      { name: "GitHub", detail: "Code Reviews & Actions" },
      { name: "Docker", detail: "Containerized Environments" },
      { name: "Linux", detail: "Bash & Server Management" }
    ]
  },
  {
    id: "practices",
    title: "Design & Practices",
    description: "User-centric methodology, responsiveness standards, and project execution.",
    skills: [
      { name: "UI/UX Architecture", detail: "Wireframing & Usability" },
      { name: "Responsive Design", detail: "Mobile-First Viewports" },
      { name: "Motion Design", detail: "GSAP & Spatial Timings" },
      { name: "Project Management", detail: "Sprint Planning & Delivery" }
    ]
  }
];

export const projectsData = [
  {
    id: "01",
    title: "GLOSINDO Digital Guestbook",
    subtitle: "Enterprise Front-Office Management System",
    category: "Web Application",
    year: "2024",
    description: "A centralized visitor registration and verification system built for front-office reception logistics at PT Global Media Pratama Solusindo. Features real-time check-in, host notification routing, administrative audit logging, and automated reporting.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "REST API"],
    metrics: "Instant visitor logging with secure administrative audit records",
    imageAccent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    badgeColor: "emerald",
    githubUrl: "https://github.com/Adlyy03/glosindo",
    liveUrl: null,
    features: [
      "Digital visitor check-in & host coordination",
      "Administrative dashboard with search & filtering",
      "Secure guest record logging and exportable reports",
      "Mobile-optimized verification interface"
    ]
  },
  {
    id: "02",
    title: "Arradea Marketplace",
    subtitle: "Multi-Vendor Digital Commerce Platform",
    category: "E-Commerce",
    year: "2024",
    description: "A comprehensive digital marketplace engineered to support dynamic merchant catalog indexing, inventory synchronization, category filtering, and a reliable multi-step checkout workflow.",
    tags: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    metrics: "Modular merchant management and responsive shopping workflows",
    imageAccent: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    badgeColor: "cyan",
    githubUrl: "https://github.com/Adlyy03/arradea-laravel",
    liveUrl: null,
    features: [
      "Dynamic catalog search with multi-parameter filtering",
      "Shopping cart state persistence and order calculation",
      "Merchant store dashboard for product and stock updates",
      "Resilient RESTful API communication"
    ]
  },
  {
    id: "03",
    title: "Travel Story",
    subtitle: "Interactive Editorial Travel Narrative",
    category: "Interactive Narrative",
    year: "2023",
    description: "An editorial storytelling and journey documentation platform focused on high-contrast typography, interactive media presentation, and fluid timeline navigation across mobile and desktop devices.",
    tags: ["React", "Tailwind CSS", "GSAP", "REST API"],
    metrics: "Fluid media transitions with high-contrast editorial typography",
    imageAccent: "from-amber-500/20 via-amber-500/5 to-transparent",
    badgeColor: "amber",
    githubUrl: "https://github.com/Adlyy03/travel-story-app",
    liveUrl: null,
    features: [
      "Curated travel entries with dynamic geolocation tagging",
      "High-contrast editorial typography and immersive galleries",
      "Custom timeline transitions built with GSAP",
      "Touch-optimized navigation for mobile readers"
    ]
  },
  {
    id: "04",
    title: "System Architecture & Dev Tooling",
    subtitle: "Containerization & Automation Utilities",
    category: "DevOps & Tooling",
    year: "2023",
    description: "Standardized developer environment configurations, Docker multi-stage compose pipelines, and Linux automation scripts created to guarantee environment parity across local and server instances.",
    tags: ["Docker", "Linux", "PHP", "Git", "Bash"],
    metrics: "Consistent containerized development stacks and automated tasks",
    imageAccent: "from-purple-500/20 via-purple-500/5 to-transparent",
    badgeColor: "purple",
    githubUrl: null,
    liveUrl: null,
    features: [
      "Multi-container Docker configurations for PHP/MySQL/Nginx",
      "Bash automation utilities for deployment & database backups",
      "Git workflow standardizations and branch governance",
      "Linux server hardening and log management setup"
    ]
  }
];

export const experienceData = [
  {
    period: "2024 — Present",
    role: "Full-Stack Developer",
    organization: "Independent Development & Production Projects",
    location: "Indonesia",
    type: "Production Engineering",
    description: "Architecting full-stack web applications and custom systems using Laravel, React, and MySQL. Focusing on database integrity, clean API contracts, and performant user experiences across devices.",
    skillsApplied: ["React", "Laravel", "Tailwind CSS", "MySQL", "GSAP"]
  },
  {
    period: "2023 — 2024",
    role: "Web Developer Intern (PKL)",
    organization: "PT Global Media Pratama Solusindo",
    location: "Indonesia",
    type: "Workplace Experience",
    description: "Conducted practical work (PKL) developing and maintaining enterprise web applications, including digital front-office guestbook systems (GLOSINDO), MySQL database schema operations, and client feature enhancements.",
    skillsApplied: ["PHP", "Laravel", "MySQL", "JavaScript", "Git"]
  },
  {
    period: "Foundations",
    role: "Computer Science / Software Engineering",
    organization: "Technical Vocational / Academic Education",
    location: "Indonesia",
    type: "Formal Education",
    description: "Completed rigorous foundational coursework in relational database design, object-oriented programming, modern web application development, algorithms, and software testing practices.",
    skillsApplied: ["Data Structures", "OOP", "Database Normalization", "System Analysis"]
  }
];

export const contactData = {
  title: "Have a project in mind?",
  subtitle: "Let's build something useful.",
  description: "Whether you need a full-stack web application, a database-backed management system, or a high-performance frontend interface, I'm open to discussing your engineering requirements.",
  email: "adlimuhamad358@gmail.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Adlyy03",
      handle: "@Adlyy03"
    }
  ]
};
