"use client";

import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeProps {
  className?: string;
}

export default function Code({ className = '' }: CodeProps) {
  const codeString = `import { useEffect, useRef } from 'react';
import { JSX } from 'react';
import './PixelCard.css';

class Pixel {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  color: string;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSizeInteger: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    speed: number,
    delay: number
  ) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSizeInteger = 2;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }
    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.1;
    }
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }
    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

function getEffectiveSpeed(value: number, reducedMotion: boolean) {
  const min = 0;
  const max = 100;
  const throttle = 0.001;

  if (value <= min || reducedMotion) {
    return min;
  } else if (value >= max) {
    return max * throttle;
  } else {
    return value * throttle;
  }
}

const VARIANTS = {
  default: {
    activeColor: null,
    gap: 5,
    speed: 35,
    colors: '#f8fafc,#f1f5f9,#cbd5e1',
    noFocus: false
  },
  blue: {
    activeColor: '#e0f2fe',
    gap: 10,
    speed: 25,
    colors: '#e0f2fe,#7dd3fc,#0ea5e9',
    noFocus: false
  },
  yellow: {
    activeColor: '#fef08a',
    gap: 3,
    speed: 20,
    colors: '#fef08a,#fde047,#eab308',
    noFocus: false
  },
  pink: {
    activeColor: '#fecdd3',
    gap: 6,
    speed: 80,
    colors: '#fecdd3,#fda4af,#e11d48',
    noFocus: true
  }
};

interface PixelCardProps {
  variant?: 'default' | 'blue' | 'yellow' | 'pink';
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface VariantConfig {
  activeColor: string | null;
  gap: number;
  speed: number;
  colors: string;
  noFocus: boolean;
}

export default function PixelCard({
  variant = 'default',
  gap,
  speed,
  colors,
  noFocus,
  className = '',
  children
}: PixelCardProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const timePreviousRef = useRef(performance.now());
  const reducedMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches).current;

  const variantCfg: VariantConfig = VARIANTS[variant] || VARIANTS.default;
  const finalGap = gap ?? variantCfg.gap;
  const finalSpeed = speed ?? variantCfg.speed;
  const finalColors = colors ?? variantCfg.colors;
  const finalNoFocus = noFocus ?? variantCfg.noFocus;

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.current.getContext('2d');

    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current.style.width = \`\${width}px\`;
    canvasRef.current.style.height = \`\${height}px\`;

    const colorsArray = finalColors.split(',');
    const pxs = [];
    for (let x = 0; x < width; x += parseInt(finalGap.toString(), 10)) {
      for (let y = 0; y < height; y += parseInt(finalGap.toString(), 10)) {
        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];

        const dx = x - width / 2;
        const dy = y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delay = reducedMotion ? 0 : distance;
        if (!ctx) return;
        pxs.push(new Pixel(canvasRef.current, ctx, x, y, color, getEffectiveSpeed(finalSpeed, reducedMotion), delay));
      }
    }
    pixelsRef.current = pxs;
  };

  const doAnimate = (fnName: keyof Pixel) => {
    animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
    const timeNow = performance.now();
    const timePassed = timeNow - timePreviousRef.current;
    const timeInterval = 1000 / 60;

    if (timePassed < timeInterval) return;
    timePreviousRef.current = timeNow - (timePassed % timeInterval);

    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !canvasRef.current) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    for (let i = 0; i < pixelsRef.current.length; i++) {
      const pixel = pixelsRef.current[i];
      // @ts-ignore
      pixel[fnName]();
      if (!pixel.isIdle) {
        allIdle = false;
      }
    }
    if (allIdle) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleAnimation = (name: keyof Pixel) => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(() => doAnimate(name));
  };

  const onMouseEnter = () => handleAnimation('appear');
  const onMouseLeave = () => handleAnimation('disappear');
  const onFocus: React.FocusEventHandler<HTMLDivElement> = e => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    handleAnimation('appear');
  };
  const onBlur: React.FocusEventHandler<HTMLDivElement> = e => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    handleAnimation('disappear');
  };

  useEffect(() => {
    initPixels();
    const observer = new ResizeObserver(() => {
      initPixels();
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalGap, finalSpeed, finalColors, finalNoFocus]);

  return (
    <div
      ref={containerRef}
      className={\`pixel-card \${className}\`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={finalNoFocus ? undefined : onFocus}
      onBlur={finalNoFocus ? undefined : onBlur}
      tabIndex={finalNoFocus ? -1 : 0}
    >
      <canvas className="pixel-canvas" ref={canvasRef} />
      {children}
    </div>
  );
}
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