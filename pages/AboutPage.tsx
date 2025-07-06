
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import AnimatedElement from '../components/AnimatedElement';

const TeamMemberCard = ({ member, index }: { member: typeof TEAM_MEMBERS[0], index: number }) => (
  <AnimatedElement delay={`delay-${index * 100}`}>
    <div className="text-center">
      <img src={member.photoUrl} alt={member.name} className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-charcoal mb-4" />
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="text-plasma-violet">{member.title}</p>
    </div>
  </AnimatedElement>
);

const AboutPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">About Folvix</h1>
          <p className="mt-4 text-lg text-slate-300">
            We are a new company with a long-term vision for service and innovation. Our mission is to empower businesses of all sizes, from individual dreamers to established enterprises, by crafting the technology of tomorrow, today.
          </p>
        </AnimatedElement>

        <AnimatedElement delay="delay-200" className="mt-16 bg-charcoal p-8 md:p-12 rounded-xl border border-slate-800">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">Our Vision</h2>
              <p className="text-slate-400 space-y-4">
                Folvix was born from a shared belief that technology should be a powerful extension of human ambition. The name itself, while new, embodies our philosophy: "Innovation in technologies with advanced futuristic designs and solutions in the domain of computer science."
                <br /><br />
                We don't just build software; we architect futures. We are committed to a partnership model, working alongside our clients to turn their groundbreaking ideas into tangible, transformative realities.
              </p>
            </div>
            <div className="w-full h-64 md:h-auto rounded-lg overflow-hidden">
                <img src="https://picsum.photos/seed/vision/800/600" alt="Futuristic office" className="object-cover w-full h-full"/>
            </div>
          </div>
        </AnimatedElement>
        
        <section className="mt-20">
          <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Our Leadership</h2>
            <p className="mt-2 text-slate-400">The architects of our innovative spirit.</p>
          </AnimatedElement>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
