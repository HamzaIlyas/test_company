
import React from 'react';
import HeroSection from '../components/HeroSection';
import { SERVICES, CASE_STUDIES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import AnimatedElement from '../components/AnimatedElement';
import { Link } from 'react-router-dom';


const ServicesSection = () => (
  <section className="py-20 bg-charcoal">
    <div className="container mx-auto px-6">
      <AnimatedElement className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Core Services</h2>
        <p className="mt-2 text-slate-400 max-w-2xl mx-auto">Comprehensive IT solutions for clients of any size.</p>
      </AnimatedElement>
      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const WhyFolvixSection = () => (
    <section className="py-20">
        <div className="container mx-auto px-6">
             <AnimatedElement className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Why Folvix?</h2>
                <p className="mt-2 text-slate-400 max-w-2xl mx-auto">Your partner in digital transformation and innovation.</p>
            </AnimatedElement>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <AnimatedElement className="bg-charcoal p-8 rounded-xl border border-slate-800">
                    <h3 className="text-xl font-display font-semibold text-white mb-2">Top-Tier Talent</h3>
                    <p className="text-slate-400">Our teams are composed of dedicated experts passionate about pushing technological boundaries.</p>
                </AnimatedElement>
                <AnimatedElement delay="delay-200" className="bg-charcoal p-8 rounded-xl border border-slate-800">
                    <h3 className="text-xl font-display font-semibold text-white mb-2">Futuristic Design</h3>
                    <p className="text-slate-400">We believe in creating solutions that are not just functional, but also aesthetically advanced and future-proof.</p>
                </AnimatedElement>
                 <AnimatedElement delay="delay-400" className="bg-charcoal p-8 rounded-xl border border-slate-800">
                    <h3 className="text-xl font-display font-semibold text-white mb-2">Custom Innovation</h3>
                    <p className="text-slate-400">Every solution is custom-built, ensuring it perfectly aligns with your unique vision and goals.</p>
                </AnimatedElement>
            </div>
        </div>
    </section>
);

const SuccessStorySection = () => {
  const story = CASE_STUDIES[0];
  return (
    <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
            <AnimatedElement>
                <div className="bg-midnight rounded-xl grid md:grid-cols-2 items-center overflow-hidden border border-slate-800">
                    <div className="p-8 md:p-12">
                        <span className="text-plasma-violet font-bold">Success Story: {story.client}</span>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-2 mb-4">{story.title}</h3>
                        <blockquote className="text-slate-300 italic border-l-4 border-plasma-violet pl-4">
                            "{story.results}"
                        </blockquote>
                        <Link to="/work" className="mt-6 inline-block text-plasma-violet font-bold hover:underline">Read the full case study &rarr;</Link>
                    </div>
                    <div className="h-64 md:h-full">
                        <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover"/>
                    </div>
                </div>
            </AnimatedElement>
        </div>
    </section>
  );
};


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyFolvixSection />
      <SuccessStorySection />
    </div>
  );
};

export default HomePage;
