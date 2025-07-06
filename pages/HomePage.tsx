
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, CASE_STUDIES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import AnimatedElement from '../components/AnimatedElement';

const HeroSection = () => (
  <div className="relative text-center py-40 md:py-56 px-6 overflow-hidden">
     <div className="absolute inset-0 bg-midnight z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(26,26,26,0.5)_0%,rgba(0,0,51,1)_70%)]"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%238A2BE2\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
     </div>

    <div className="relative z-20">
      <AnimatedElement>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
          Folvix: Architecting Your Future
        </h1>
      </AnimatedElement>
      <AnimatedElement delay="delay-200">
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
          We build advanced ERPs, websites, and AI-powered applications that redefine possibilities.
        </p>
      </AnimatedElement>
      <AnimatedElement delay="delay-400" className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/solutions" className="bg-plasma-violet text-white font-bold py-3 px-8 rounded-lg hover:bg-plasma-violet-dark transition-all duration-300 shadow-lg shadow-plasma-violet/20 hover:shadow-plasma-violet/40 text-lg">
          Explore Our Solutions
        </Link>
        <Link to="/contact" className="bg-charcoal text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 text-lg">
          Schedule a Consultation
        </Link>
      </AnimatedElement>
    </div>
  </div>
);

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
