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
    <AnimatedElement
      delay={delay}
      className="
        relative overflow-hidden h-full flex flex-col items-start rounded-2xl p-8
        backdrop-blur-md bg-white/5 border border-white/10
        hover:border-plasma-violet/60
        transition-colors duration-150">
      <div className="mb-4 text-4xl text-plasma-violet">
        {service.icon}
      </div>
      <h3 className="text-xl font-display font-semibold text-white mb-2">
        {service.title}
      </h3>
      <p className="text-slate-400">{service.description}</p>
    </AnimatedElement>
  );
};

export default ServiceCard;
