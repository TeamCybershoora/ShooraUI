"use client";

import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeProps {
  className?: string;
}

export default function Code({ className = '' }: CodeProps) {
  const codeString = `import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, MotionValue, Transition } from 'motion/react';

import './CircularText.css';
interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  className?: string;
}

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

const CircularText: React.FC<CircularTextProps> = ({
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
      className={\`circular-text \${className}\`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = \`rotateZ(\${rotationDeg}deg) translate3d(\${x}px, \${y}px, 0)\`;

        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;

`;

  const codeLines = codeString.split('\n');
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    // Format the code with proper indentation
    const formattedCode = codeLines.join('\n');
    // Highlight the code using Prism
    const code = Prism.highlight(
      formattedCode,
      Prism.languages.tsx,
      'tsx'
    );
    setHighlightedCode(code);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-2xl font-medium text-white">Implementation Code</h3>
      <div className="relative mb-20">
        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-[#404040]">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[#1e1e1e] rounded-lg" />
            
            {/* Copy button */}
            <div className="absolute right-2 top-2 z-10">
              <button
                onClick={copyToClipboard}
                className="p-1.5 rounded-md hover:bg-[#2d2d2d] text-[#9e9e9e] hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                {copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>

            {/* Scrollable container */}
            <div className="relative" style={{ maxHeight: '500px', overflow: 'auto' }}>
              {/* Fade effect at the bottom - more subtle */}
              <div className="sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e] via-10% to-transparent z-10 pointer-events-none" />
              
              <div className="flex">
                {/* Line numbers */}
                <div 
                  className="text-[#858585] select-none py-4 text-right"
                  style={{ 
                    width: '50px',
                    flexShrink: 0,
                    backgroundColor: 'rgba(30, 30, 30, 0.2)',
                    paddingLeft: '12px',
                    paddingRight: '16px',
                    lineHeight: '1.5rem'
                  }}
                >
                  {codeLines.map((_, i) => (
                    <div key={i} style={{ height: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                      {i + 1}
                    </div>
                  ))}
                </div>
                
                {/* Code content */}
                <div className="flex-1">
                  <pre 
                    className="p-4 text-sm leading-6 bg-transparent"
                    style={{ margin: 0, minHeight: '100%' }}
                  >
                    <code 
                      className="language-tsx block"
                      style={{ 
                        display: 'block', 
                        whiteSpace: 'pre',
                        fontFamily: 'Consolas, "Courier New", monospace',
                        lineHeight: '1.5rem',
                        margin: 0,
                        padding: 0,
                        color: '#D4D4D4'
                      }}
                      dangerouslySetInnerHTML={{ 
                        __html: highlightedCode
                          .replace(/&lt;/g, '<')
                          .replace(/&gt;/g, '>')
                          .replace(/&amp;/g, '&')
                          // VS Code theme colors
                          .replace(/class="token string"/g, 'style="color: #CE9178"')
                          .replace(/class="token keyword"/g, 'style="color: #569CD6"')
                          .replace(/class="token operator"/g, 'style="color: #D4D4D4"')
                          .replace(/class="token punctuation"/g, 'style="color: #D4D4D4"')
                          .replace(/class="token function"/g, 'style="color: #DCDCAA"')
                          .replace(/class="token comment"/g, 'style="color: #6A9955"')
                          .replace(/class="token number"/g, 'style="color: #B5CEA8"')
                          .replace(/class="token tag"/g, 'style="color: #569CD6"')
                          .replace(/class="token attr-name"/g, 'style="color: #9CDCFE"')
                          .replace(/class="token attr-value"/g, 'style="color: #CE9178"')
                          .replace(/class="token script"/g, 'style="color: #D4D4D4"')
                          .replace(/class="token script-punctuation"/g, 'style="color: #808080"')
                      }}
                    />
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}