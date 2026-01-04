"use client";

import { useState } from "react";
import { GhostCursor } from "@cybershoora/shoora-ui";

export default function View() {
  const [key, setKey] = useState(0);
  const [color, setColor] = useState("#B19EEF");
  const [brightness, setBrightness] = useState(1);
  const [edgeIntensity, setEdgeIntensity] = useState(0);
  const [trailLength, setTrailLength] = useState(50);
  const [inertia, setInertia] = useState(0.5);
  const [grainIntensity, setGrainIntensity] = useState(0.05);
  const [bloomStrength, setBloomStrength] = useState(0.1);
  const [bloomRadius, setBloomRadius] = useState(1);
  const [bloomThreshold, setBloomThreshold] = useState(0.025);
  const [fadeDelay, setFadeDelay] = useState(1000);
  const [fadeDuration, setFadeDuration] = useState(1500);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gradient-to-br from-[#120a26] via-[#1f1839] to-[#06050f] rounded-2xl p-8 border-2 border-purple-400/40 mt-8 flex items-center justify-center shadow-2xl shadow-purple-900/20 overflow-hidden">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-20"
          aria-label="Re-initialize Ghost Cursor"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
            <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
          </svg>
        </button>

        <section
          key={key}
          className="relative w-full h-[30rem] max-w-5xl rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(178,113,255,0.18),transparent_55%)]" />

          <GhostCursor
            color={color}
            brightness={brightness}
            edgeIntensity={edgeIntensity}
            trailLength={trailLength}
            inertia={inertia}
            grainIntensity={grainIntensity}
            bloomStrength={bloomStrength}
            bloomRadius={bloomRadius}
            bloomThreshold={bloomThreshold}
            fadeDelayMs={fadeDelay}
            fadeDurationMs={fadeDuration}
          />
        </section>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Ghost Cursor
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Glow Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={color}
                onChange={event => setColor(event.target.value)}
                className="h-10 w-14 rounded-md border border-white/20 bg-transparent"
              />
              <input
                type="text"
                value={color}
                onChange={event => setColor(event.target.value)}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Brightness</span>
              <span className="text-purple-300 font-medium">{brightness.toFixed(2)}x</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="2"
              step="0.05"
              value={brightness}
              onChange={event => setBrightness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Edge Intensity</span>
              <span className="text-purple-300 font-medium">{edgeIntensity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={edgeIntensity}
              onChange={event => setEdgeIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Trail Length</span>
              <span className="text-purple-300 font-medium">{trailLength}</span>
            </div>
            <input
              type="range"
              min="10"
              max="150"
              step="5"
              value={trailLength}
              onChange={event => setTrailLength(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Inertia</span>
              <span className="text-purple-300 font-medium">{inertia.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={inertia}
              onChange={event => setInertia(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Grain Intensity</span>
              <span className="text-purple-300 font-medium">{grainIntensity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.2"
              step="0.01"
              value={grainIntensity}
              onChange={event => setGrainIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Bloom Strength</span>
              <span className="text-purple-300 font-medium">{bloomStrength.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={bloomStrength}
              onChange={event => setBloomStrength(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Bloom Radius</span>
              <span className="text-purple-300 font-medium">{bloomRadius.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.05"
              value={bloomRadius}
              onChange={event => setBloomRadius(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Bloom Threshold</span>
              <span className="text-purple-300 font-medium">{bloomThreshold.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.1"
              step="0.005"
              value={bloomThreshold}
              onChange={event => setBloomThreshold(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Fade Delay</span>
              <span className="text-purple-300 font-medium">{fadeDelay} ms</span>
            </div>
            <input
              type="range"
              min="0"
              max="3000"
              step="100"
              value={fadeDelay}
              onChange={event => setFadeDelay(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Fade Duration</span>
              <span className="text-purple-300 font-medium">{fadeDuration} ms</span>
            </div>
            <input
              type="range"
              min="500"
              max="4000"
              step="100"
              value={fadeDuration}
              onChange={event => setFadeDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
