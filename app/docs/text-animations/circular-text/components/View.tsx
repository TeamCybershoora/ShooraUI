"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, MotionValue, Transition } from 'framer-motion';

const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
  from,
  to: from + 360,
  ease: 'linear' as const,
  duration,
  type: 'tween' as const,
  repeat: loop ? Infinity : 0
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring' as const,
    damping: 20,
    stiffness: 300
  }
});

const CircularText: React.FC<{
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  className?: string;
}> = ({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = ''
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, onHover, controls]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        };
        break;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  return (
    <motion.div
      style={{
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '200px',
        transformStyle: 'preserve-3d',
        cursor: 'pointer'
      }}
      className={className}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const radius = 80; // Adjust this value to change the circle's radius
        const x = Math.sin((rotationDeg * Math.PI) / 180) * radius;
        const y = -Math.cos((rotationDeg * Math.PI) / 180) * radius;
        
        return (
          <motion.span 
            key={i} 
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotationDeg}deg)`,
              transformOrigin: '0 0',
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              willChange: 'transform',
              whiteSpace: 'nowrap'
            }}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default function View() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '2rem',
      background: 'transparent',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 10px 30px rgba(200, 114, 215, 0.2)'
    }}>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          {/* <h3 style={{ color: '#a5b4fc', marginBottom: '1rem' }}>Default</h3> */}
          <CircularText text="• Shoora UI • Circular Text •" />
        </div>
      </div>

    </div>
  );
}
