"use client";

import { useState } from "react";
import { MagicBento } from "@cybershoora/shoora-ui";

export default function View() {
  const [textAutoHide, setTextAutoHide] = useState(true);
  const [enableStars, setEnableStars] = useState(true);
  const [enableSpotlight, setEnableSpotlight] = useState(true);
  const [enableBorderGlow, setEnableBorderGlow] = useState(true);
  const [enableTilt, setEnableTilt] = useState(true);
  const [enableMagnetism, setEnableMagnetism] = useState(true);
  const [clickEffect, setClickEffect] = useState(true);
  const [spotlightRadius, setSpotlightRadius] = useState(300);
  const [particleCount, setParticleCount] = useState(12);
  const [glowColor, setGlowColor] = useState('132, 0, 255');

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex items-center justify-center">
        <MagicBento 
          textAutoHide={textAutoHide}
          enableStars={enableStars}
          enableSpotlight={enableSpotlight}
          enableBorderGlow={enableBorderGlow}
          enableTilt={enableTilt}
          enableMagnetism={enableMagnetism}
          clickEffect={clickEffect}
          spotlightRadius={spotlightRadius}
          particleCount={particleCount}
          glowColor={glowColor}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Magic Bento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={textAutoHide}
                onChange={event => setTextAutoHide(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Text Auto Hide</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableStars}
                onChange={event => setEnableStars(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Stars</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableSpotlight}
                onChange={event => setEnableSpotlight(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Spotlight</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableBorderGlow}
                onChange={event => setEnableBorderGlow(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Border Glow</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableTilt}
                onChange={event => setEnableTilt(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Tilt</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={enableMagnetism}
                onChange={event => setEnableMagnetism(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Enable Magnetism</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={clickEffect}
                onChange={event => setClickEffect(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Click Effect</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Spotlight Radius</span>
              <span className="text-purple-300 font-medium">{spotlightRadius}px</span>
            </div>
            <input
              type="range"
              min="100"
              max="500"
              step="10"
              value={spotlightRadius}
              onChange={event => setSpotlightRadius(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Particle Count</span>
              <span className="text-purple-300 font-medium">{particleCount}</span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={particleCount}
              onChange={event => setParticleCount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Glow Color (RGB values)</label>
            <input
              type="text"
              value={glowColor}
              onChange={event => setGlowColor(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="132, 0, 255"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
