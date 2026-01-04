"use client";

import { useState } from "react";
import { Stack } from "@cybershoora/shoora-ui";

export default function View() {
  const [randomRotation, setRandomRotation] = useState(true);
  const [sensitivity, setSensitivity] = useState(180);
  const [sendToBackOnClick, setSendToBackOnClick] = useState(true);
  const [stiffness, setStiffness] = useState(260);
  const [damping, setDamping] = useState(20);
  const [autoplay, setAutoplay] = useState(false);
  const [autoplayDelay, setAutoplayDelay] = useState(3000);
  const [pauseOnHover, setPauseOnHover] = useState(true);
  const [mobileClickOnly, setMobileClickOnly] = useState(false);
  const [mobileBreakpoint, setMobileBreakpoint] = useState(768);
  const [stackWidth, setStackWidth] = useState(208);
  const [stackHeight, setStackHeight] = useState(208);
  
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
  ]);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex items-center justify-center">
        <div style={{ width: stackWidth, height: stackHeight }}>
          <Stack
            randomRotation={randomRotation}
            sensitivity={sensitivity}
            sendToBackOnClick={sendToBackOnClick}
            animationConfig={{ stiffness, damping }}
            autoplay={autoplay}
            autoplayDelay={autoplayDelay}
            pauseOnHover={pauseOnHover}
            mobileClickOnly={mobileClickOnly}
            mobileBreakpoint={mobileBreakpoint}
            cards={images.map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt={`card-${i + 1}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            )) as React.ReactNode[]}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={randomRotation}
                onChange={event => setRandomRotation(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Random Rotation</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Sensitivity</span>
              <span className="text-purple-300 font-medium">{sensitivity}</span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              step="10"
              value={sensitivity}
              onChange={event => setSensitivity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={sendToBackOnClick}
                onChange={event => setSendToBackOnClick(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Send to Back on Click</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Animation Stiffness</span>
              <span className="text-purple-300 font-medium">{stiffness}</span>
            </div>
            <input
              type="range"
              min="100"
              max="500"
              step="10"
              value={stiffness}
              onChange={event => setStiffness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Animation Damping</span>
              <span className="text-purple-300 font-medium">{damping}</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={damping}
              onChange={event => setDamping(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={autoplay}
                onChange={event => setAutoplay(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Autoplay</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Autoplay Delay (ms)</span>
              <span className="text-purple-300 font-medium">{autoplayDelay}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="10000"
              step="500"
              value={autoplayDelay}
              onChange={event => setAutoplayDelay(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={pauseOnHover}
                onChange={event => setPauseOnHover(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Pause on Hover</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={mobileClickOnly}
                onChange={event => setMobileClickOnly(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Mobile Click Only</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Mobile Breakpoint</span>
              <span className="text-purple-300 font-medium">{mobileBreakpoint}px</span>
            </div>
            <input
              type="range"
              min="500"
              max="1200"
              step="50"
              value={mobileBreakpoint}
              onChange={event => setMobileBreakpoint(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Stack Width</span>
              <span className="text-purple-300 font-medium">{stackWidth}px</span>
            </div>
            <input
              type="range"
              min="100"
              max="400"
              step="8"
              value={stackWidth}
              onChange={event => setStackWidth(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Stack Height</span>
              <span className="text-purple-300 font-medium">{stackHeight}px</span>
            </div>
            <input
              type="range"
              min="100"
              max="400"
              step="8"
              value={stackHeight}
              onChange={event => setStackHeight(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Image URLs (comma-separated)</label>
            <textarea
              value={images.join('\n')}
              onChange={event => setImages(event.target.value.split('\n').map(url => url.trim()).filter(url => url))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
              rows={6}
              placeholder="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
