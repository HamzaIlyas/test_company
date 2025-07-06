
import React from 'react';
import { CaseStudy } from '../types';
import AnimatedElement from './AnimatedElement';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  return (
    <AnimatedElement className="bg-charcoal rounded-xl overflow-hidden border border-slate-800 group transition-all duration-300 hover:border-plasma-violet hover:shadow-2xl hover:shadow-plasma-violet/10">
      <div className="relative overflow-hidden h-64">
        <img src={study.imageUrl} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <h3 className="absolute bottom-0 left-0 p-6 text-2xl font-display font-bold text-white">{study.client}</h3>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold text-white mb-2">{study.title}</h4>
        <p className="text-slate-400 mb-4">{study.challenge}</p>
        <div className="flex flex-wrap gap-2">
            {study.technologies.map(tech => (
                <span key={tech} className="bg-slate-700 text-slate-300 text-xs font-medium px-2 py-1 rounded-full">{tech}</span>
            ))}
        </div>
      </div>
    </AnimatedElement>
  );
};

export default CaseStudyCard;
