import React, { useRef, useState } from 'react';
import HeroSection from '../components/HeroSection';
import { SERVICES, CASE_STUDIES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import AnimatedElement from '../components/AnimatedElement';
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => (
  <section className="relative py-20 bg-charcoal before:absolute before:inset-0 before:bg-gradient-to-t before:from-midnight/40 before:pointer-events-none">
    <div className="relative container mx-auto px-6">
      {/* Heading with animated underline */}
      <AnimatedElement className="text-center mb-12">
        <h2 className="inline-block text-3xl md:text-4xl font-display font-bold text-white relative">
          Core Services
          <span
            className="block h-0.5 bg-plasma-violet absolute left-0 -bottom-2 origin-left scale-x-0 animate-underlineGrow"
          />
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Comprehensive IT solutions for clients of any size.
        </p>
      </AnimatedElement>

      {/* Card grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const WhyFolvixSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const onMouseLeave = () => setMouse(null);

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative py-20 bg-midnight overflow-hidden"
    >
      {/* Cursor‑following glow */}
      {mouse && (
        <div
          className="pointer-events-none absolute w-48 h-48 -translate-x-1/2 -translate-y-1/2
                     rounded-full bg-plasma-violet/30 blur-3xl mix-blend-screen"
          style={{ left: mouse.x, top: mouse.y }}
        />
      )}

      <div className="relative z-10 container mx-auto px-6 text-center mb-12">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Why Folvix?
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto">
            Your partner in digital transformation and innovation.
          </p>
        </AnimatedElement>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={index}
            cursorPos={mouse}
          />
        ))}
      </div>
    </section>
  );
};

const SuccessStorySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  // Track pointer inside this section
  const onMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { left, top } = sectionRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - left, y: e.clientY - top });
  };
  const onMouseLeave = () => setMouse(null);

  const story = CASE_STUDIES[0];

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative py-20 bg-charcoal overflow-hidden"
    >
      {/* Cursor‑following glow orb */}
      {mouse && (
        <div
          className="pointer-events-none absolute w-48 h-48
                     -translate-x-1/2 -translate-y-1/2
                     rounded-full bg-plasma-violet/30 blur-3xl mix-blend-screen"
          style={{ left: mouse.x, top: mouse.y }}
        />
      )}

      <div className="relative z-10 container mx-auto px-6 text-center mb-12">
        <AnimatedElement>
          <h2 className="inline-block text-3xl md:text-4xl font-display font-bold text-white relative">
            Success Story: {story.client}
            {/* subtle underline grow on hover */}
            <span className="block h-0.5 bg-plasma-violet absolute left-0 -bottom-2 origin-left scale-x-0 hover:scale-x-100 transition-transform duration-500" />
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Discover how we transformed challenges into triumphs.
          </p>
        </AnimatedElement>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Text panel */}
        <AnimatedElement delay="delay-200">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
            <blockquote className="text-slate-300 italic border-l-4 border-plasma-violet pl-4">
              “{story.results}”
            </blockquote>
            <Link
              to="/work"
              className="mt-6 inline-block text-plasma-violet font-semibold hover:underline"
            >
              Read the full case study &rarr;
            </Link>
          </div>
        </AnimatedElement>

        {/* Image panel */}
        <AnimatedElement delay="delay-400">
          <div className="overflow-hidden rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300">
            <img
              src={story.imageUrl}
              alt={story.title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => (
  <div>
    <HeroSection />
    <ServicesSection />
    <WhyFolvixSection />
    <SuccessStorySection />
  </div>
);

export default HomePage;
