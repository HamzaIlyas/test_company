
import React from 'react';
import { Service } from '../types';
import AnimatedElement from './AnimatedElement';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const delay = `delay-${index * 100}`;
  return (
    <AnimatedElement delay={delay} className="bg-charcoal p-8 rounded-xl border border-slate-800 h-full flex flex-col items-start hover:border-plasma-violet hover:-translate-y-2 transition-all duration-300">
      <div className="mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-display font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-slate-400">{service.description}</p>
    </AnimatedElement>
  );
};

export default ServiceCard;
