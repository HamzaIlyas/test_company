
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
{/* <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.7 1.03A4.5 4.5 0 0014.22 6c-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.7.12 1.03-3.74-.19-7.06-1.98-9.28-4.7a4.5 4.5 0 001.39 6.02c-.68-.02-1.32-.21-1.88-.51v.06c0 2.22 1.58 4.07 3.68 4.5-.38.1-.78.15-1.19.15-.3 0-.58-.03-.86-.08.58 1.8 2.27 3.12 4.27 3.15a9.04 9.04 0 01-5.59 1.92c-.36 0-.72-.02-1.07-.06A12.79 12.79 0 008.28 22c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.35-.01-.53.8-.58 1.49-1.3 2.04-2.13z" /></svg></SocialIcon>
<SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg></SocialIcon>
<SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v2h-2v-2zm0 4h2v6h-2v-6z" /></svg></SocialIcon> */}

export const SOCIAL_LINKS = [
  // {
  //   name: 'Twitter',
  //   href: 'https://twitter.com/folvix',
  //   icon: (
  //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.7 1.03A4.5 4.5 0 0014.22 6c-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.7.12 1.03-3.74-.19-7.06-1.98-9.28-4.7a4.5 4.5 0 001.39 6.02c-.68-.02-1.32-.21-1.88-.51v.06c0 2.22 1.58 4.07 3.68 4.5-.38.1-.78.15-1.19.15-.3 0-.58-.03-.86-.08.58 1.8 2.27 3.12 4.27 3.15a9.04 9.04 0 01-5.59 1.92c-.36 0-.72-.02-1.07-.06A12.79 12.79 0 008.28 22c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.35-.01-.53.8-.58 1.49-1.3 2.04-2.13z" /></svg>
  //   ),
  // },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/folvix',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
    ),
  },
  // {
  //   name: 'GitHub',
  //   href: 'https://github.com/folvix',
  //   icon: (
  //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v2h-2v-2zm0 4h2v6h-2v-6z" /></svg>
  //   ),
  // },
];
