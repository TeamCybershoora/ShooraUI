"use client";

import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeProps {
  className?: string;
}

export default function Code({ className = '' }: CodeProps) {
  const cssString = `.sphere-root {
  position: relative;
  width: 100%;
  height: 100%;
  --radius: 520px;
  --viewer-pad: 72px;
  --circ: calc(var(--radius) * 3.14);
  --rot-y: calc((360deg / var(--segments-x)) / 2);
  --rot-x: calc((360deg / var(--segments-y)) / 2);
  --item-width: calc(var(--circ) / var(--segments-x));
  --item-height: calc(var(--circ) / var(--segments-y));
}

.sphere-root * {
  box-sizing: border-box;
}

.sphere,
.item,
.item__image {
  transform-style: preserve-3d;
}

main.sphere-main {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  background: transparent;
}

.stage {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  perspective: calc(var(--radius) * 2);
  perspective-origin: 50% 50%;
  contain: layout paint size;
}

.sphere {
  transform: translateZ(calc(var(--radius) * -1));
  will-change: transform;
}

.overlay,
.overlay--blur {
  position: absolute;
  inset: 0;
  margin: auto;
  z-index: 3;
  pointer-events: none;
}

.overlay {
  background-image: radial-gradient(rgba(235, 235, 235, 0) 65%, var(--overlay-blur-color, #060010) 100%);
}

.overlay--blur {
  -webkit-mask-image: radial-gradient(rgba(235, 235, 235, 0) 70%, var(--overlay-blur-color, #060010) 90%);
  mask-image: radial-gradient(rgba(235, 235, 235, 0) 70%, var(--overlay-blur-color, #060010) 90%);
  backdrop-filter: blur(3px);
}

.item {
  width: calc(var(--item-width) * var(--item-size-x));
  height: calc(var(--item-height) * var(--item-size-y));
  position: absolute;
  top: -999px;
  bottom: -999px;
  left: -999px;
  right: -999px;
  margin: auto;
  transform-origin: 50% 50%;
  backface-visibility: hidden;
  transition: transform 300ms;
  transform: rotateY(calc(var(--rot-y) * (var(--offset-x) + ((var(--item-size-x) - 1) / 2)) + var(--rot-y-delta, 0deg)))
    rotateX(calc(var(--rot-x) * (var(--offset-y) - ((var(--item-size-y) - 1) / 2)) + var(--rot-x-delta, 0deg)))
    translateZ(var(--radius));
}

.item__image {
  position: absolute;
  display: block;
  inset: 10px;
  border-radius: var(--tile-radius, 12px);
  background: transparent;
  overflow: hidden;
  backface-visibility: hidden;
  transition: transform 300ms;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  pointer-events: auto;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.item__image:focus {
  outline: none;
}

.item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  backface-visibility: hidden;
  filter: var(--image-filter, none);
}

.viewer {
  position: absolute;
  inset: 0;
  z-index: 20;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--viewer-pad);
}

.viewer .frame {
  height: 100%;
  aspect-ratio: 1;
  border-radius: var(--enlarge-radius, 32px);
  display: flex;
}

@media (max-aspect-ratio: 1/1) {
  .viewer .frame {
    height: auto;
    width: 100%;
  }
}

.viewer .scrim {
  position: absolute;
  inset: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
  opacity: 0;
  transition: opacity 500ms ease;
  backdrop-filter: blur(3px);
}

.sphere-root[data-enlarging='true'] .viewer .scrim {
  opacity: 1;
  pointer-events: all;
}

.viewer .enlarge {
  position: absolute;
  z-index: 30;
  border-radius: var(--enlarge-radius, 32px);
  overflow: hidden;
  transition:
    transform 500ms ease,
    opacity 500ms ease;
  transform-origin: top left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

.viewer .enlarge img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: var(--image-filter, none);
}

.sphere-root .enlarge-closing img {
  filter: var(--image-filter, none);
}

.edge-fade {
  position: absolute;
  left: 0;
  right: 0;
  height: 120px;
  z-index: 5;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent, var(--overlay-blur-color, #060010));
}

.edge-fade--top {
  top: 0;
  transform: rotate(180deg);
}

.edge-fade--bottom {
  bottom: 0;
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