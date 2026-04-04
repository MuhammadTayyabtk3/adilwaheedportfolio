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
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Fintech Dashboard',
    category: 'UI/UX Design',
    year: '2023',
    description: 'A comprehensive financial dashboard for tracking investments, analyzing market trends, and managing personal portfolios with real-time data visualization.',
    tags: ['Dashboard', 'Fintech', 'Data Visualization', 'Design System'],
    thumbnail: '#1E293B', // Slate 800
    slug: 'fintech-dashboard',
    content: 'Detailed case study content goes here. This would typically include the problem statement, research, wireframes, high-fidelity designs, and the final outcome.'
  },
  {
    id: '2',
    title: 'Eco-Commerce App',
    category: 'Mobile App',
    year: '2023',
    description: 'A sustainable shopping application that helps users find eco-friendly products, track their carbon footprint, and earn rewards for green purchases.',
    tags: ['iOS', 'E-commerce', 'Sustainability', 'Prototyping'],
    thumbnail: '#14532D', // Green 900
    slug: 'eco-commerce-app',
    content: 'Detailed case study content goes here. This would typically include the problem statement, research, wireframes, high-fidelity designs, and the final outcome.'
  },
  {
    id: '3',
    title: 'Lumina Brand Identity',
    category: 'Brand Identity',
    year: '2022',
    description: 'Complete brand overhaul for a smart lighting company, including logo design, typography selection, color palette, and packaging guidelines.',
    tags: ['Branding', 'Typography', 'Print', 'Guidelines'],
    thumbnail: '#701A75', // Fuchsia 900
    slug: 'lumina-brand',
    content: 'Detailed case study content goes here. This would typically include the problem statement, research, wireframes, high-fidelity designs, and the final outcome.'
  },
  {
    id: '4',
    title: 'HealthSync Portal',
    category: 'Web Application',
    year: '2022',
    description: 'A patient-doctor communication portal streamlining appointment scheduling, medical record access, and secure messaging for healthcare providers.',
    tags: ['Healthcare', 'Web App', 'Accessibility', 'UX Research'],
    thumbnail: '#0C4A6E', // Sky 900
    slug: 'healthsync-portal',
    content: 'Detailed case study content goes here. This would typically include the problem statement, research, wireframes, high-fidelity designs, and the final outcome.'
  }
];
