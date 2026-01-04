"use client";

import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeProps {
  className?: string;
}

export default function Code({ className = '' }: CodeProps) {
  const cssString = `.icon-btns {
  display: grid;
  grid-gap: 5em;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  padding: 3em 0;
  overflow: visible;
}

.icon-btn {
  background-color: transparent;
  outline: none;
  position: relative;
  width: 4.5em;
  height: 4.5em;
  perspective: 24em;
  transform-style: preserve-3d;
  -webkit-tap-highlight-color: transparent;
  border: none;
  cursor: pointer;
}

.icon-btn__back,
.icon-btn__front,
.icon-btn__label {
  transition:
    opacity 0.3s cubic-bezier(0.83, 0, 0.17, 1),
    transform 0.3s cubic-bezier(0.83, 0, 0.17, 1);
}

.icon-btn__back,
.icon-btn__front {
  border-radius: 1.25em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.icon-btn__back {
  box-shadow: 0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15);
  display: block;
  transform: rotate(15deg);
  transform-origin: 100% 100%;
  will-change: transform;
}

.icon-btn__front {
  background-color: hsla(0, 0%, 100%, 0.15);
  box-shadow: 0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset;
  backdrop-filter: blur(0.75em);
  -webkit-backdrop-filter: blur(0.75em);
  -moz-backdrop-filter: blur(0.75em);
  display: flex;
  transform-origin: 80% 50%;
  will-change: transform;
}

.icon-btn__icon {
  margin: auto;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn__label {
  font-size: 1em;
  white-space: nowrap;
  text-align: center;
  line-height: 2;
  opacity: 0;
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  transform: translateY(0);
}

.icon-btn:focus-visible .icon-btn__back,
.icon-btn:hover .icon-btn__back {
  transform: rotate(25deg) translate3d(-0.5em, -0.5em, 0.5em);
}

.icon-btn:focus-visible .icon-btn__front,
.icon-btn:hover .icon-btn__front {
  transform: translate3d(0, 0, 2em);
}

.icon-btn:focus-visible .icon-btn__label,
.icon-btn:hover .icon-btn__label {
  opacity: 1;
  transform: translateY(20%);
}

@media (min-width: 768px) {
  .icon-btns {
    grid-template-columns: repeat(3, 1fr);
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