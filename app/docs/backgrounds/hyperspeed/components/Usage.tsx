"use client";
import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';
import { Hyperspeed } from "@cybershoora/shoora-ui";

export default function Usage() {
  const codeLines = [
    '"use client";',
    'import { Hyperspeed } from "@cybershoora/shoora-ui";',
    '',
    '// component will fill height/width of its parent container, edit CSS to change this',
    '// options below are the default values',
    '',
    'export default function Page() {',
    '  return (',
    '    <Hyperspeed',
    '      effectOptions={{',
    '        onSpeedUp: () => { },',
    '        onSlowDown: () => { },',
    '        distortion: \'turbulentDistortion\',',
    '        length: 400,',
    '        roadWidth: 10,',
    '        islandWidth: 2,',
    '        lanesPerRoad: 4,',
    '        fov: 90,',
    '        fovSpeedUp: 150,',
    '        speedUp: 2,',
    '        carLightsFade: 0.4,',
    '        totalSideLightSticks: 20,',
    '        lightPairsPerRoadWay: 40,',
    '        shoulderLinesWidthPercentage: 0.05,',
    '        brokenLinesWidthPercentage: 0.1,',
    '        brokenLinesLengthPercentage: 0.5,',
    '        lightStickWidth: [0.12, 0.5],',
    '        lightStickHeight: [1.3, 1.7],',
    '        movingAwaySpeed: [60, 80],',
    '        movingCloserSpeed: [-120, -160],',
    '        carLightsLength: [400 * 0.03, 400 * 0.2],',
    '        carLightsRadius: [0.05, 0.14],',
    '        carWidthPercentage: [0.3, 0.5],',
    '        carShiftX: [-0.8, 0.8],',
    '        carFloorSeparation: [0, 5],',
    '        colors: {',
    '          roadColor: 0x080808,',
    '          islandColor: 0x0a0a0a,',
    '          background: 0x000000,',
    '          shoulderLines: 0xFFFFFF,',
    '          brokenLines: 0xFFFFFF,',
    '          leftCars: [0xD856BF, 0x6750A2, 0xC247AC],',
    '          rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],',
    '          sticks: 0x03B3C3,',
    '        }',
    '      }}',
    '    />',
    '  );',
    '}',
  ];

  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    // Format code with proper indentation
    const formattedCode = codeLines.join('\n');
    // Highlight code using Prism
    const code = Prism.highlight(
      formattedCode,
      Prism.languages.jsx,
      'jsx'
    );
    setHighlightedCode(code);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeLines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Usage</h2>
      <div className="relative">
        <div className="bg-gray-900/20 rounded-lg overflow-hidden border border-purple-300">
          <div className="relative">
            <div className="absolute right-2 top-2 z-10">
              <button
                onClick={copyToClipboard}
                className="p-1.5 rounded-md hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
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
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-[#1e1e1e] rounded-lg" />
              <div className="relative flex" style={{ maxHeight: '500px', overflow: 'hidden' }}>
                {/* Fade effect at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1e1e1e] to-transparent z-10 pointer-events-none" />
                {/* Line numbers */}
                <div 
                  className="text-[#ccc] select-none py-4 text-right"
                  style={{ 
                    width: '50px',
                    flexShrink: 0,
                    backgroundColor: 'rgba(30, 30, 30, 0.2)',
                    paddingLeft: '12px',
                    paddingRight: '16px'
                  }}
                >
                  {codeLines.map((_, i) => (
                    <div 
                      key={i} 
                      className="h-5 flex items-center justify-end"
                      style={{ lineHeight: '1.25rem' }}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                
                {/* Code content */}
                <div className="flex-1 overflow-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(139, 92, 246, 0.5) transparent' }}>
                  <pre 
                    className="p-4 text-sm font-mono leading-5 bg-transparent"
                    style={{ margin: 0, minHeight: '100%' }}
                  >
                    <code 
                      className="language-jsx block"
                      style={{ 
                        display: 'block', 
                        whiteSpace: 'pre',
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        lineHeight: '1.25rem',
                        margin: 0,
                        padding: 0,
                        color: '#e5e7eb'
                      }}
                      dangerouslySetInnerHTML={{ 
                        __html: highlightedCode
                          .replace(/&lt;/g, '<')
                          .replace(/&gt;/g, '>')
                          .replace(/&amp;/g, '&')
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