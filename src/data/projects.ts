export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  thumbnail: string;
  slug: string;
  content?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Van Rent Management',
    category: 'Web Application',
    year: '2024',
    description: 'A specialized management system for van rental businesses, streamlining bookings, vehicle tracking, and customer management.',
    tags: ['React', 'Tailwind CSS', 'Management System'],
    thumbnail: 'https://i.postimg.cc/pXkw3vZc/Screenshot-2026-04-05-120315.png',
    slug: 'van-rent-management',
    content: 'This project was developed to solve the complexities of van rental operations. It features a robust dashboard for fleet management, real-time availability tracking, and a seamless booking flow for customers. Built with React and Tailwind CSS for a modern, responsive experience.',
    liveUrl: 'https://van-rent.vercel.app'
  },
  {
    id: '2',
    title: 'WealthTrack',
    category: 'Web Application',
    year: '2024',
    description: 'A sophisticated investment tracking platform designed to help users monitor their portfolios, analyze market trends, and manage wealth effectively.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'PWA'],
    thumbnail: 'https://i.postimg.cc/q72jVXTG/Screenshot-2026-04-05-120740.png',
    slug: 'wealthtrack',
    content: 'WealthTrack provides users with a comprehensive view of their financial health. It integrates with Firebase for real-time data synchronization and offers PWA support for a native-like mobile experience. Users can track multiple asset classes and visualize their growth over time.',
    liveUrl: 'https://wealthtrack-ruddy.vercel.app'
  },
  {
    id: '3',
    title: 'Expense Tracker',
    category: 'Web Application',
    year: '2024',
    description: 'A user-friendly expense management tool featuring real-time tracking, categorized spending analysis, and PWA support for mobile use.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'PWA'],
    thumbnail: 'https://i.postimg.cc/k5ShMPx1/Screenshot-2026-04-05-120415.png',
    slug: 'expense-tracker',
    content: 'Built with a focus on simplicity and speed, this Expense Tracker allows users to log transactions on the go. It features multi-language support (including Urdu) and uses Firebase for secure data storage and authentication.',
    liveUrl: 'https://expense-tracker-delta-one-30.vercel.app'
  },
  {
    id: '4',
    title: 'ProLog Tracker',
    category: 'Web Application',
    year: '2024',
    description: 'An enterprise-grade time and work tracking solution built for professional teams to log hours, manage tasks, and generate reports.',
    tags: ['React', 'Tailwind CSS', 'XLSX Export', 'PWA'],
    thumbnail: 'https://i.postimg.cc/D0pcdxrP/Screenshot-2026-04-05-120507.png',
    slug: 'prolog-tracker',
    content: 'ProLog is designed for high-performance teams. It includes features for detailed task logging, automated report generation in XLSX format, and a highly optimized UI for rapid data entry. It works offline as a PWA.',
    liveUrl: 'https://time-track-flax.vercel.app'
  },
  {
    id: '5',
    title: 'Al-Hafiz: Quran Tracker',
    category: 'Web Application',
    year: '2024',
    description: 'A dedicated spiritual progress tracker for Quran memorization and recitation, featuring a clean RTL interface and progress visualization.',
    tags: ['React', 'GenAI', 'RTL Support', 'PWA'],
    thumbnail: 'https://i.postimg.cc/CMrC268s/Screenshot-2026-04-05-120537.png',
    slug: 'al-hafiz-tracker',
    content: 'Al-Hafiz helps users maintain their Quranic goals. It features a beautiful RTL (Right-to-Left) design, progress tracking charts, and integrates Gemini AI for personalized spiritual insights and memorization tips.',
    liveUrl: 'https://qurantracker-seven.vercel.app/'
  },
  {
    id: '6',
    title: 'Horizon Lab',
    category: 'Web Application',
    year: '2023',
    description: 'A professional laboratory testing services portal providing downloadable forms, pricing updates, and comprehensive resource management.',
    tags: ['Web Design', 'Resource Management', 'Professional Services'],
    thumbnail: 'https://i.postimg.cc/KzvLqnvf/Screenshot-2026-04-05-120759.png',
    slug: 'horizon-lab',
    content: 'Horizon Lab is a corporate portal for a testing laboratory. It streamlines the process of accessing laboratory resources, downloading necessary forms, and staying updated with the latest service pricing and technology.',
    liveUrl: 'https://www.horizonlab.ca/'
  },
  {
    id: '7',
    title: 'Restaurant Culinary Hub',
    category: 'Web Application',
    year: '2024',
    description: 'A comprehensive restaurant website with menu management, online booking features, and a modern dining experience interface.',
    tags: ['React', 'Tailwind CSS', 'Restaurant', 'Web Design'],
    thumbnail: 'https://i.postimg.cc/hv478trp/image.png',
    slug: 'restaurant-culinary-hub',
    content: 'This project focuses on the digital presence of a modern restaurant. It includes a responsive menu, gallery, and an integrated reservation system to enhance the customer\'s pre-dining experience.',
    liveUrl: 'https://restaurants-website-alpha.vercel.app/'
  }
];
