import React from 'react';
import { Link } from 'react-router-dom';
import { DETAILED_SERVICES } from '../constants';
import AnimatedElement from '../components/AnimatedElement';

const SolutionsPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Our Solutions</h1>
          <p className="mt-4 text-lg text-slate-300">
            We provide a spectrum of services designed to address your most complex challenges and unlock new opportunities for growth. Each solution is built with a focus on scalability, performance, and futuristic design.
          </p>
        </AnimatedElement>

        <div className="space-y-12">
          {DETAILED_SERVICES.map((service, index) => (
            <AnimatedElement key={service.title} delay={`delay-${index * 100}`}>
              <div className="bg-charcoal p-8 md:p-12 rounded-xl border border-slate-800 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">{service.icon}</div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-display font-bold text-white mb-2">{service.title}</h2>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
         <AnimatedElement className="mt-20 text-center bg-plasma-violet/10 p-10 rounded-xl border border-plasma-violet/30">
            <h2 className="text-2xl font-display font-bold text-white">Have a Unique Challenge?</h2>
            <p className="text-slate-300 mt-2 max-w-2xl mx-auto">Our expertise isn't limited to these services. We thrive on complex problems and custom projects. Let's discuss how we can build a bespoke solution for you.</p>
            <Link to="/contact" className="mt-6 inline-block bg-plasma-violet text-white font-bold py-3 px-8 rounded-lg hover:bg-plasma-violet-dark transition-all duration-300">
                Start a Conversation
            </Link>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default SolutionsPage;
