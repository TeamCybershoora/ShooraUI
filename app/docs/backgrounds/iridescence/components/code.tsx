"use client";

import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeProps {
  className?: string;
}

export default function Code({ className = '' }: CodeProps) {
  const codeString = `import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

import './Iridescence.css';

const vertexShader = \`
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}\`;

const fragmentShader = \`
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
\`;

interface IridescenceProps {
  color?: [number, number, number];
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
}

export default function Iridescence({
  color = [1, 1, 1],
  speed = 1.0,
  amplitude = 0.1,
  mouseReact = true,
  ...rest
}: IridescenceProps) {
  const ctnDom = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    const renderer = new Renderer();
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    let program: Program;

    function resize() {
      const scale = 1;
      renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }
    window.addEventListener('resize', resize, false);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
        },
        uMouse: { value: new Float32Array([mousePos.current.x, mousePos.current.y]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    let animateId: number;

    function update(t: number) {
      animateId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }
    animateId = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);

    function handleMouseMove(e: MouseEvent) {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      mousePos.current = { x, y };
      program.uniforms.uMouse.value[0] = x;
      program.uniforms.uMouse.value[1] = y;
    }
    if (mouseReact) {
      ctn.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', resize);
      if (mouseReact) {
        ctn.removeEventListener('mousemove', handleMouseMove);
      }
      ctn.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color, speed, amplitude, mouseReact]);

  return <div ref={ctnDom} className="iridescence-container" {...rest} />;
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