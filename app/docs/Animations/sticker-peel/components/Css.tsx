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
  --sticker-rotate: 30deg;
  --sticker-p: 10px;
  --sticker-peelback-hover: 30%;
  --sticker-peelback-active: 40%;
  --sticker-peel-easing: power3.out;
  --sticker-peel-hover-easing: power2.out;
  --sticker-start: calc(-1 * var(--sticker-p));
  --sticker-end: calc(100% + var(--sticker-p));
  --sticker-shadow-opacity: 0.6;
  --sticker-lighting-constant: 0.1;
  --peel-direction: 0deg;
}

.sticker-container {
  position: relative;
  transform: rotate(var(--peel-direction));
  transform-origin: center;
}

.sticker-container * {
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

.sticker-main {
  clip-path: polygon(
    var(--sticker-start) var(--sticker-start),
    var(--sticker-end) var(--sticker-start),
    var(--sticker-end) var(--sticker-end),
    var(--sticker-start) var(--sticker-end)
  );
  transition: clip-path 0.6s ease-out;
  filter: url(#dropShadow);
}

.sticker-main > * {
  transform: rotate(calc(-1 * var(--peel-direction)));
}

.sticker-lighting {
  filter: url(#pointLight);
}

.sticker-container:hover .sticker-main,
.sticker-container.touch-active .sticker-main {
  clip-path: polygon(
    var(--sticker-start) var(--sticker-peelback-hover),
    var(--sticker-end) var(--sticker-peelback-hover),
    var(--sticker-end) var(--sticker-end),
    var(--sticker-start) var(--sticker-end)
  );
}

.sticker-container:active .sticker-main {
  clip-path: polygon(
    var(--sticker-start) var(--sticker-peelback-active),
    var(--sticker-end) var(--sticker-peelback-active),
    var(--sticker-end) var(--sticker-end),
    var(--sticker-start) var(--sticker-end)
  );
}

.sticker-image {
  transform: rotate(var(--sticker-rotate));
}

.flap {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: calc(-100% - var(--sticker-p) - var(--sticker-p));
  clip-path: polygon(
    var(--sticker-start) var(--sticker-start),
    var(--sticker-end) var(--sticker-start),
    var(--sticker-end) var(--sticker-start),
    var(--sticker-start) var(--sticker-start)
  );
  transform: scaleY(-1);
  transition: all 0.6s ease-out;
}

.flap > * {
  transform: rotate(calc(-1 * var(--peel-direction)));
}

.sticker-container:hover .flap,
.sticker-container.touch-active .flap {
  clip-path: polygon(
    var(--sticker-start) var(--sticker-start),
    var(--sticker-end) var(--sticker-start),
    var(--sticker-end) var(--sticker-peelback-hover),
    var(--sticker-start) var(--sticker-peelback-hover)
  );
  top: calc(-100% + 2 * var(--sticker-peelback-hover) - 1px);
}

.sticker-container:active .flap {
  clip-path: polygon(
    var(--sticker-start) var(--sticker-start),
    var(--sticker-end) var(--sticker-start),
    var(--sticker-end) var(--sticker-peelback-active),
    var(--sticker-start) var(--sticker-peelback-active)
  );
  top: calc(-100% + 2 * var(--sticker-peelback-active) - 1px);
}

.flap-lighting {
  filter: url(#pointLightFlipped);
}

.flap-image {
  transform: rotate(var(--sticker-rotate));
  filter: url(#expandAndFill);
}

.draggable {
  position: absolute;
  cursor: grab;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.draggable:active {
  cursor: grabbing;
}

/* Mobile-specific optimizations */
@media (hover: none) and (pointer: coarse) {
  .draggable {
    cursor: default;
  }

  .sticker-container {
    touch-action: none;
  }
}

.sticker-image,
.flap-image {
  width: var(--sticker-width, 200px);
}

.sticker-main,
.flap {
  will-change: clip-path, transform;
}

.sticker-ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  pointer-events: none;
  z-index: 10;
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