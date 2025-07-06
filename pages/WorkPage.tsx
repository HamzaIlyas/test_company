
import React from 'react';
import { CASE_STUDIES } from '../constants';
import AnimatedElement from '../components/AnimatedElement';
import CaseStudyCard from '../components/CaseStudyCard';

const WorkPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Our Work</h1>
          <p className="mt-4 text-lg text-slate-300">
            We are proud of the partnerships we've built and the solutions we've delivered. Explore our case studies to see how we've helped businesses like yours achieve outstanding results.
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {CASE_STUDIES.map((study) => (
             <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
