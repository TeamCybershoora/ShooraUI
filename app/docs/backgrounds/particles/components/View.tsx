"use client";

import { useState } from "react";
import { Particles } from "@cybershoora/shoora-ui"

export default function View() {
  const [particleColors, setParticleColors] = useState(['#ffffff', '#ffffff']);
  const [particleCount, setParticleCount] = useState(200);
  const [particleSpread, setParticleSpread] = useState(10);
  const [speed, setSpeed] = useState(0.1);
  const [particleBaseSize, setParticleBaseSize] = useState(100);
  const [moveParticlesOnHover, setMoveParticlesOnHover] = useState(true);
  const [alphaParticles, setAlphaParticles] = useState(false);
  const [disableRotation, setDisableRotation] = useState(false);
  const [particleHoverFactor, setParticleHoverFactor] = useState(1);
  const [sizeRandomness, setSizeRandomness] = useState(1);
  const [cameraDistance, setCameraDistance] = useState(20);

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <Particles
          particleColors={particleColors}
          particleCount={particleCount}
          particleSpread={particleSpread}
          speed={speed}
          particleBaseSize={particleBaseSize}
          moveParticlesOnHover={moveParticlesOnHover}
          alphaParticles={alphaParticles}
          disableRotation={disableRotation}
          particleHoverFactor={particleHoverFactor}
          sizeRandomness={sizeRandomness}
          cameraDistance={cameraDistance}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Particles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 md:col-span-3">
            <label className="block text-sm font-medium text-gray-300">Particle Colors</label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="color"
                value={particleColors[0] || '#df2626'}
                onChange={event => {
                  const newColors = [...particleColors];
                  newColors[0] = event.target.value;
                  setParticleColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
              <input
                type="color"
                value={particleColors[1] || '#2762ec'}
                onChange={event => {
                  const newColors = [...particleColors];
                  newColors[1] = event.target.value;
                  setParticleColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
              <input
                type="color"
                value={particleColors[2] || '#e916cd'}
                onChange={event => {
                  const newColors = [...particleColors];
                  newColors[2] = event.target.value;
                  setParticleColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Particle Count</span>
              <span className="text-purple-300 font-medium">{particleCount}</span>
            </div>
            <input
              type="range"
              min="10"
              max="1000"
              step="10"
              value={particleCount}
              onChange={event => setParticleCount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Particle Spread</span>
              <span className="text-purple-300 font-medium">{particleSpread}</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={particleSpread}
              onChange={event => setParticleSpread(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Speed</span>
              <span className="text-purple-300 font-medium">{speed.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="2"
              step="0.01"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Particle Base Size</span>
              <span className="text-purple-300 font-medium">{particleBaseSize}px</span>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={particleBaseSize}
              onChange={event => setParticleBaseSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={moveParticlesOnHover}
                onChange={event => setMoveParticlesOnHover(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Move Particles on Hover</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={alphaParticles}
                onChange={event => setAlphaParticles(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Alpha Particles</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={disableRotation}
                onChange={event => setDisableRotation(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Disable Rotation</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Particle Hover Factor</span>
              <span className="text-purple-300 font-medium">{particleHoverFactor.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={particleHoverFactor}
              onChange={event => setParticleHoverFactor(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Size Randomness</span>
              <span className="text-purple-300 font-medium">{sizeRandomness.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={sizeRandomness}
              onChange={event => setSizeRandomness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Camera Distance</span>
              <span className="text-purple-300 font-medium">{cameraDistance}</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={cameraDistance}
              onChange={event => setCameraDistance(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
