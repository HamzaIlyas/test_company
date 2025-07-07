import { motion, useAnimation } from 'framer-motion';
import React, { useRef, useEffect } from 'react';  // ← import useEffect

type Point = { x: number; y: number };

interface Props {
  glyph:     string;
  size:      number;
  color:     string;
  start:     Point;
  delta:     Point;
  duration:  number;
  delay:     number;
}

export const FloatingSymbol = ({
  glyph, size, color, start, delta, duration, delay,
}: Props) => {
  const controls = useAnimation();
  const ref      = useRef<HTMLSpanElement>(null);

  // kick‑off the default drift
  useEffect(() => {
    controls.start({
      x:     delta.x,
      y:     delta.y,
      rotate: 360,
      opacity: 0.3,
      transition: {
        duration,
        delay,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    });
  // include deps so React knows when to re‑run
  }, [controls, delta.x, delta.y, duration, delay]);

  return (
    <motion.span
      ref={ref}
      className="absolute select-none"
      style={{
        fontSize: size,
        color,
        left: start.x,
        top:  start.y,
        willChange: 'transform, opacity',
      }}
      animate={controls}
      initial={{ opacity: 0.2 }}
      onHoverStart={e => {
        const node = ref.current!;
        const { left, top, width, height } = node.getBoundingClientRect();
        const cx = left + width/2;
        const cy = top  + height/2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        controls.start({
          x:       delta.x + dx * 0.2,
          y:       delta.y + dy * 0.2,
          rotate:  360,
          opacity: 0.7,
          transition: { duration: 0.5, ease: 'easeOut' },
        });
      }}
      onHoverEnd={() => {
        controls.start({
          x:     delta.x,
          y:     delta.y,
          rotate: 360,
          opacity: 0.4,
          transition: {
            duration,
            delay: 0,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          },
        });
      }}
    >
      {glyph}
    </motion.span>
  );
};
