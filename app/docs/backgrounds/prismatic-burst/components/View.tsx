"use client";

import { useState } from "react";
import { PrismaticBurst } from "@cybershoora/shoora-ui"

export default function View() {
  const [animationType, setAnimationType] = useState<'rotate' | 'rotate3d' | 'hover'>('rotate3d');
  const [intensity, setIntensity] = useState(2);
  const [speed, setSpeed] = useState(0.5);
  const [distort, setDistort] = useState(1.0);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hoverDampness, setHoverDampness] = useState(0.25);
  const [rayCount, setRayCount] = useState(24);
  const [mixBlendMode, setMixBlendMode] = useState<React.CSSProperties['mixBlendMode'] | 'none'>('lighten');
  const [colors, setColors] = useState(['#ff007a', '#4d3dff', '#ffffff']);

  return (
    <div className="p-0">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300">
        <PrismaticBurst
          animationType={animationType}
          intensity={intensity}
          speed={speed}
          distort={distort}
          paused={paused}
          offset={offset}
          hoverDampness={hoverDampness}
          rayCount={rayCount}
          mixBlendMode={mixBlendMode}
          colors={colors}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize PrismaticBurst
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Animation Type</label>
            <select
              value={animationType}
              onChange={event => setAnimationType(event.target.value as 'rotate' | 'rotate3d' | 'hover')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="rotate">Rotate</option>
              <option value="rotate3d">Rotate 3D</option>
              <option value="hover">Hover</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Intensity</span>
              <span className="text-purple-300 font-medium">{intensity.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={intensity}
              onChange={event => setIntensity(Number(event.target.value))}
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
              min="0.1"
              max="2"
              step="0.05"
              value={speed}
              onChange={event => setSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Distort</span>
              <span className="text-purple-300 font-medium">{distort.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="0.5"
              value={distort}
              onChange={event => setDistort(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={paused}
                onChange={event => setPaused(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Paused</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Offset X</span>
              <span className="text-purple-300 font-medium">{offset.x}</span>
            </div>
            <input
              type="range"
              min="-100"
              max="100"
              step="1"
              value={offset.x}
              onChange={event => setOffset({ ...offset, x: Number(event.target.value) })}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Offset Y</span>
              <span className="text-purple-300 font-medium">{offset.y}</span>
            </div>
            <input
              type="range"
              min="-100"
              max="100"
              step="1"
              value={offset.y}
              onChange={event => setOffset({ ...offset, y: Number(event.target.value) })}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Hover Dampness</span>
              <span className="text-purple-300 font-medium">{hoverDampness.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={hoverDampness}
              onChange={event => setHoverDampness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Ray Count</span>
              <span className="text-purple-300 font-medium">{rayCount}</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={rayCount}
              onChange={event => setRayCount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Mix Blend Mode</label>
            <select
              value={mixBlendMode}
              onChange={event => setMixBlendMode(event.target.value as React.CSSProperties['mixBlendMode'] | 'none')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="none">None</option>
              <option value="normal">Normal</option>
              <option value="multiply">Multiply</option>
              <option value="screen">Screen</option>
              <option value="overlay">Overlay</option>
              <option value="darken">Darken</option>
              <option value="lighten">Lighten</option>
              <option value="color-dodge">Color Dodge</option>
              <option value="color-burn">Color Burn</option>
              <option value="hard-light">Hard Light</option>
              <option value="soft-light">Soft Light</option>
              <option value="difference">Difference</option>
              <option value="exclusion">Exclusion</option>
            </select>
          </div>

          <div className="space-y-2 col-span-3">
            <label className="block text-sm font-medium text-gray-300">Colors</label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="color"
                value={colors[0] || '#ff007a'}
                onChange={event => {
                  const newColors = [...colors];
                  newColors[0] = event.target.value;
                  setColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
              <input
                type="color"
                value={colors[1] || '#4d3dff'}
                onChange={event => {
                  const newColors = [...colors];
                  newColors[1] = event.target.value;
                  setColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
              <input
                type="color"
                value={colors[2] || '#ffffff'}
                onChange={event => {
                  const newColors = [...colors];
                  newColors[2] = event.target.value;
                  setColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
