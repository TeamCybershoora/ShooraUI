"use client";

import { useState } from "react";
import { Ribbons, DomeGallery } from "@cybershoora/shoora-ui"

const images = [
  'https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1755497595318-7e5e3523854f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

export default function View() {
  const [key, setKey] = useState(0);
  
  // Ribbons state
  const [baseThickness, setBaseThickness] = useState(30);
  const [colors, setColors] = useState(['#5227FF']);
  const [speedMultiplier, setSpeedMultiplier] = useState(0.5);
  const [maxAge, setMaxAge] = useState(500);
  const [enableFade, setEnableFade] = useState(false);
  const [enableShaderEffect, setEnableShaderEffect] = useState(true);
  
  // DomeGallery state
  const [fit, setFit] = useState(0.5);
  const [minRadius, setMinRadius] = useState(600);
  const [maxRadius, setMaxRadius] = useState(1200);
  const [segments, setSegments] = useState(35);
  const [dragSensitivity, setDragSensitivity] = useState(20);
  const [grayscale, setGrayscale] = useState(true);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Components"
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
        <div key={key} className="relative w-full h-full">
          <Ribbons
            baseThickness={baseThickness}
            colors={colors}
            speedMultiplier={speedMultiplier}
            maxAge={maxAge}
            enableFade={enableFade}
            enableShaderEffect={enableShaderEffect}
          />
          <div className="absolute inset-0">
            <DomeGallery 
              images={images}
              fit={fit}
              minRadius={minRadius}
              maxRadius={maxRadius}
              segments={segments}
              dragSensitivity={dragSensitivity}
              grayscale={grayscale}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Components
        </h2>

        <div className="space-y-8">
          {/* Ribbons Controls */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Ribbons Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-300">Colors (comma-separated)</label>
                <input
                  type="text"
                  value={colors.join(',')}
                  onChange={event => setColors(event.target.value.split(',').map(c => c.trim()))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="#ffffff,#ff9346,#7cff67"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Base Thickness</span>
                  <span className="text-purple-300 font-medium">{baseThickness}px</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={baseThickness}
                  onChange={event => setBaseThickness(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Speed Multiplier</span>
                  <span className="text-purple-300 font-medium">{speedMultiplier}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={speedMultiplier}
                  onChange={event => setSpeedMultiplier(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Max Age</span>
                  <span className="text-purple-300 font-medium">{maxAge}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={maxAge}
                  onChange={event => setMaxAge(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    checked={enableFade}
                    onChange={event => setEnableFade(event.target.checked)}
                    className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
                  />
                  <span>Enable Fade</span>
                </label>
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    checked={enableShaderEffect}
                    onChange={event => setEnableShaderEffect(event.target.checked)}
                    className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
                  />
                  <span>Enable Shader Effect</span>
                </label>
              </div>
            </div>
          </div>

          {/* DomeGallery Controls */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">DomeGallery Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Fit</span>
                  <span className="text-purple-300 font-medium">{fit}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={fit}
                  onChange={event => setFit(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Min Radius</span>
                  <span className="text-purple-300 font-medium">{minRadius}px</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="800"
                  step="50"
                  value={minRadius}
                  onChange={event => setMinRadius(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Max Radius</span>
                  <span className="text-purple-300 font-medium">{maxRadius}px</span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="2000"
                  step="100"
                  value={maxRadius}
                  onChange={event => setMaxRadius(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Segments</span>
                  <span className="text-purple-300 font-medium">{segments}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="50"
                  step="5"
                  value={segments}
                  onChange={event => setSegments(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Drag Sensitivity</span>
                  <span className="text-purple-300 font-medium">{dragSensitivity}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={dragSensitivity}
                  onChange={event => setDragSensitivity(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    checked={grayscale}
                    onChange={event => setGrayscale(event.target.checked)}
                    className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
                  />
                  <span>Grayscale</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
