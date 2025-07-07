// components/HeroSection.tsx
import { useState, useEffect, useRef } from 'react';
import { FloatingSymbol }         from './FloatingSymbol';
import AnimatedElement            from './AnimatedElement';
import { Link }                   from 'react-router-dom';

const SYMBOLS = ['+', 'o', '*', '−', '×', '÷', '∑', '%', '#', '|', 'π', '√', '!', '@', '&', '∞', '≠', '≈', '∫', '∂', '∇', '∈', '⊕', '⊗', '⊥'];

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  // measure hero size on mount & resize
  useEffect(() => {
    const measure = () => {
      if (!heroRef.current) return;
      const { width: w, height: h } = heroRef.current.getBoundingClientRect();
      setDimensions({ w, h });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // decide how many symbols: e.g. one per 50px of width
  const count = Math.max(20, Math.floor(dimensions.w / 3));

  return (
    <div ref={heroRef} className="relative text-center py-40 md:py-56 px-6 overflow-hidden">

      {/* STATIC wallpaper */}
      <div className="absolute inset-0 bg-midnight z-0">
        <div className="absolute inset-0
                        bg-[radial-gradient(ellipse_at_center,_rgba(26,26,26,0.5)_0%,rgba(0,0,51,1)_70%)]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%238A2BE2\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* FLOATING SYMBOLS */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: count }).map((_, i) => {
          const glyph = SYMBOLS[randomInt(0, SYMBOLS.length - 1)];
          // start anywhere inside hero
          const startX = randomInt(0, dimensions.w);
          const startY = randomInt(0, dimensions.h);
          // small drift within ±dimensions/4
          const deltaX = randomInt(-dimensions.w / 4, dimensions.w / 4);
          const deltaY = randomInt(-dimensions.h / 4, dimensions.h / 4);
          const size   = randomInt(10, 20);         // tiny icons
          const dur    = randomInt(10, 100);        // very slow
        //   const del    = randomInt(0, 5);
          const del    = 0; // no delay for simplicity


          const hue = randomInt(200, 290);
          return (
            <FloatingSymbol
              key={i}
              glyph={glyph}
              size={size}
              color={`hsl(${hue} 80% 70%)`}
              start={{ x: startX, y: startY }}
              delta={{ x: deltaX, y: deltaY }}
              duration={dur}
              delay={del}
            />
          );
        })}
      </div>

      {/* YOUR HEADLINE & BUTTONS */}
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
};

export default HeroSection;
