
import React from 'react';
import { Service, TeamMember, CaseStudy } from './types';

// Icons for services
const ERPIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-plasma-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10m16-10v10M4 7h16M4 17h16M8 7v10m8-10v10m-5-9h2" /></svg>;
const WebIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-plasma-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const AIIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-plasma-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6a2 2 0 100-4 2 2 0 000 4zm0 14a2 2 0 100-4 2 2 0 000 4zm6-8a2 2 0 10-4 0 2 2 0 004 0zM6 12a2 2 0 10-4 0 2 2 0 004 0z" /></svg>;
const TeamsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-plasma-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Our Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    icon: <ERPIcon />,
    title: 'ERP Solutions',
    description: 'Scalable, custom enterprise resource planning systems to streamline your operations and drive growth.',
  },
  {
    icon: <WebIcon />,
    title: 'Web & Mobile Development',
    description: 'Beautiful, high-performance, and user-centric digital experiences for web and mobile platforms.',
  },
  {
    icon: <AIIcon />,
    title: 'AI Integration',
    description: 'Leveraging artificial intelligence to create intelligent, predictive, and automated solutions for complex challenges.',
  },
];

export const DETAILED_SERVICES: Service[] = [
    ...SERVICES,
    {
      icon: <TeamsIcon />,
      title: 'Dedicated Teams',
      description: 'Access our top-tier technical experts. We provide dedicated teams that integrate seamlessly with your projects.',
    }
]

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Elara Vance', title: 'Founder & CEO', photoUrl: 'https://picsum.photos/seed/elara/400/400' },
  { name: 'Jaxon Reed', title: 'Chief Technology Officer', photoUrl: 'https://picsum.photos/seed/jaxon/400/400' },
  { name: 'Lyra Chen', title: 'Head of Design', photoUrl: 'https://picsum.photos/seed/lyra/400/400' },
  { name: 'Kaelen Stone', title: 'Lead AI Architect', photoUrl: 'https://picsum.photos/seed/kaelen/400/400' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    client: 'QuantumLeap Inc.',
    title: 'AI-Powered Predictive Analytics Platform',
    challenge: 'QuantumLeap needed to process massive datasets in real-time to predict market trends, a task their legacy systems couldn\'t handle.',
    solution: 'Folvix designed and deployed a cloud-native platform using custom machine learning models. The system features a real-time data ingestion pipeline and an intuitive dashboard for visualizing predictions.',
    results: 'Achieved a 400% increase in data processing speed and a 35% improvement in prediction accuracy, enabling proactive business strategies.',
    imageUrl: 'https://picsum.photos/seed/quantum/1200/800',
    technologies: ['Python', 'TensorFlow', 'Kubernetes', 'React', 'AWS'],
  },
  {
    id: 2,
    client: 'Synergy Logistics',
    title: 'End-to-End ERP System Overhaul',
    challenge: 'Their existing ERP was fragmented, leading to data silos and operational inefficiencies across their supply chain.',
    solution: 'We built a unified, modular ERP from the ground up, integrating inventory, logistics, and finance into a single source of truth. The mobile-first design empowered their on-the-ground workforce.',
    results: 'Reduced operational costs by 20% and improved inventory turnover by 15% within the first six months.',
    imageUrl: 'https://picsum.photos/seed/synergy/1200/800',
    technologies: ['Node.js', 'PostgreSQL', 'React Native', 'Docker', 'Azure'],
  },
  {
    id: 3,
    client: 'NovaHealth',
    title: 'Next-Generation Telemedicine Mobile App',
    challenge: 'NovaHealth aimed to create a user-friendly and secure telemedicine app to connect doctors and patients, with a focus on a seamless user experience.',
    solution: 'Folvix developed native iOS and Android apps with features like HD video consultations, secure messaging, and EHR integration. The futuristic UI was designed to be calming and intuitive for all user demographics.',
    results: 'User adoption exceeded targets by 50% in the first quarter, with a 98% patient satisfaction rate.',
    imageUrl: 'https://picsum.photos/seed/nova/1200/800',
    technologies: ['Swift', 'Kotlin', 'WebRTC', 'Firebase', 'HIPAA Compliance'],
  },
];
