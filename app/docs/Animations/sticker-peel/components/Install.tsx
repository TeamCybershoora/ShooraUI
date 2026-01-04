import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism-tomorrow.css';

const packageManagers = [
  { id: 'pnpm', name: 'pnpm', command: 'pnpm add @cybershoora/shoora-ui' },
  { id: 'npm', name: 'npm', command: 'npm install @cybershoora/shoora-ui' },
  { id: 'yarn', name: 'yarn', command: 'yarn add @cybershoora/shoora-ui' },
  { id: 'bun', name: 'bun', command: 'bun add @cybershoora/shoora-ui' },
];

export default function Install() {
  const [activeManager, setActiveManager] = useState(packageManagers[0]);
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    // Format the command with proper syntax highlighting
    const command = activeManager.command;
    const code = Prism.highlight(
      command,
      Prism.languages.bash,
      'bash'
    );
    setHighlightedCode(code);
  }, [activeManager]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activeManager.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Installation</h2>
      
      <div className="flex space-x-2 mt-2">
        {packageManagers.map((manager) => (
          <button
            key={manager.id}
            onClick={() => setActiveManager(manager)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              activeManager.id === manager.id
                ? 'bg-purple-300/10 text-white border border-purple-300/30'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {manager.name}
          </button>
        ))}
      </div>
      
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
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-lg" />
              <div className="relative flex">
                {/* Code content */}
                <div className="flex-1 overflow-hidden">
                  <pre 
                    className="h-full p-4 overflow-x-auto text-sm font-mono leading-5 bg-transparent"
                    style={{ margin: 0 }}
                  >
                    <code 
                      className="language-bash block"
                      style={{ 
                        display: 'block',
                        whiteSpace: 'pre',
                        fontFamily: 'inherit',
                        lineHeight: '1.25rem',
                        margin: 0,
                        padding: 0
                      }}
                      dangerouslySetInnerHTML={{ __html: highlightedCode }}
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