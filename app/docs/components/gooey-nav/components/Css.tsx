"use client";

import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeProps {
  className?: string;
}

export default function Code({ className = '' }: CodeProps) {
  const cssString = `:root {
  --linear-ease: linear(
    0,
    0.068,
    0.19 2.7%,
    0.804 8.1%,
    1.037,
    1.199 13.2%,
    1.245,
    1.27 15.8%,
    1.274,
    1.272 17.4%,
    1.249 19.1%,
    0.996 28%,
    0.949,
    0.928 33.3%,
    0.926,
    0.933 36.8%,
    1.001 45.6%,
    1.013,
    1.019 50.8%,
    1.018 54.4%,
    1 63.1%,
    0.995 68%,
    1.001 85%,
    1
  );
}

.gooey-nav-container {
  position: relative;
}

.gooey-nav-container nav {
  display: flex;
  position: relative;
  transform: translate3d(0, 0, 0.01px);
}

.gooey-nav-container nav ul {
  display: flex;
  gap: 2em;
  list-style: none;
  padding: 0 1em;
  margin: 0;
  position: relative;
  z-index: 3;
  color: white;
  text-shadow: 0 1px 1px hsl(205deg 30% 10% / 0.2);
}

.gooey-nav-container nav ul li {
  border-radius: 100vw;
  position: relative;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 0 0.5px 1.5px transparent;
  color: white;
}

.gooey-nav-container nav ul li a {
  display: inline-block;
  padding: 0.6em 1em;
}

.gooey-nav-container nav ul li:focus-within:has(:focus-visible) {
  box-shadow: 0 0 0.5px 1.5px white;
}

.gooey-nav-container nav ul li::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: white;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s ease;
  z-index: -1;
}

.gooey-nav-container nav ul li.active {
  color: black;
  text-shadow: none;
}

.gooey-nav-container nav ul li.active::after {
  opacity: 1;
  transform: scale(1);
}

.gooey-nav-container .effect {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  opacity: 1;
  pointer-events: none;
  display: grid;
  place-items: center;
  z-index: 1;
}

.gooey-nav-container .effect.text {
  color: white;
  transition: color 0.3s ease;
}

.gooey-nav-container .effect.text.active {
  color: black;
}

.gooey-nav-container .effect.filter {
  filter: blur(7px) contrast(100) blur(0);
  mix-blend-mode: lighten;
}

.gooey-nav-container .effect.filter::before {
  content: '';
  position: absolute;
  inset: -75px;
  z-index: -2;
  background: black;
}

.gooey-nav-container .effect.filter::after {
  content: '';
  position: absolute;
  inset: 0;
  background: white;
  transform: scale(0);
  opacity: 0;
  z-index: -1;
  border-radius: 100vw;
}

.gooey-nav-container .effect.active::after {
  animation: pill 0.3s ease both;
}

@keyframes pill {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.particle,
.point {
  display: block;
  opacity: 0;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  transform-origin: center;
}

.particle {
  --time: 5s;
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  animation: particle calc(var(--time)) ease 1 -350ms;
}

.point {
  background: var(--color);
  opacity: 1;
  animation: point calc(var(--time)) ease 1 -350ms;
}

@keyframes particle {
  0% {
    transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
    opacity: 1;
    animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
  }

  70% {
    transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
    opacity: 1;
    animation-timing-function: ease;
  }

  85% {
    transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
    opacity: 1;
  }

  100% {
    transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
    opacity: 1;
  }
}

@keyframes point {
  0% {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
  }

  25% {
    transform: scale(calc(var(--scale) * 0.25));
  }

  38% {
    opacity: 1;
  }

  65% {
    transform: scale(var(--scale));
    opacity: 1;
    animation-timing-function: ease;
  }

  85% {
    transform: scale(var(--scale));
    opacity: 1;
  }

  100% {
    transform: scale(0);
    opacity: 0;
  }
}`;

  const codeLines = cssString.split('\n');
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
    navigator.clipboard.writeText(cssString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <h3 className="text-2xl font-medium text-white">CSS</h3>
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