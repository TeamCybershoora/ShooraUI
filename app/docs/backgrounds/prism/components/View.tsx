"use client";

import React, { useState } from "react";
import { Prism } from "@cybershoora/shoora-ui"

export default function View() {
  const [animationType, setAnimationType] = useState<'rotate' | 'hover' | '3drotate'>('rotate');
  const [timeScale, setTimeScale] = useState(0.5);
  const [height, setHeight] = useState(3.5);
  const [baseWidth, setBaseWidth] = useState(5.5);
  const [scale, setScale] = useState(3.6);
  const [hueShift, setHueShift] = useState(0);
  const [colorFrequency, setColorFrequency] = useState(1);
  const [noise, setNoise] = useState(0.5);
  const [glow, setGlow] = useState(1);
  const [transparent, setTransparent] = useState(true);
  const [hoverStrength, setHoverStrength] = useState(2);
  const [inertia, setInertia] = useState(0.05);
  const [bloom, setBloom] = useState(1);
  const [suspendWhenOffscreen, setSuspendWhenOffscreen] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <div className="p-0">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300">
        <Prism
          animationType={animationType}
          timeScale={timeScale}
          height={height}
          baseWidth={baseWidth}
          scale={scale}
          hueShift={hueShift}
          colorFrequency={colorFrequency}
          noise={noise}
          glow={glow}
          transparent={transparent}
          hoverStrength={hoverStrength}
          inertia={inertia}
          bloom={bloom}
          suspendWhenOffscreen={suspendWhenOffscreen}
          offset={offset}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Prism
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Animation Type</label>
            <select
              value={animationType}
              onChange={event => setAnimationType(event.target.value as 'rotate' | 'hover' | '3drotate')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="rotate">Rotate</option>
              <option value="hover">Hover</option>
              <option value="3drotate">3D Rotate</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Time Scale</span>
              <span className="text-purple-300 font-medium">{timeScale.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={timeScale}
              onChange={event => setTimeScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Height</span>
              <span className="text-purple-300 font-medium">{height.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.1"
              value={height}
              onChange={event => setHeight(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Base Width</span>
              <span className="text-purple-300 font-medium">{baseWidth.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.1"
              value={baseWidth}
              onChange={event => setBaseWidth(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scale</span>
              <span className="text-purple-300 font-medium">{scale.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.1"
              value={scale}
              onChange={event => setScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Hue Shift</span>
              <span className="text-purple-300 font-medium">{hueShift.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={hueShift}
              onChange={event => setHueShift(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Color Frequency</span>
              <span className="text-purple-300 font-medium">{colorFrequency.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={colorFrequency}
              onChange={event => setColorFrequency(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Noise</span>
              <span className="text-purple-300 font-medium">{noise.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={noise}
              onChange={event => setNoise(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Glow</span>
              <span className="text-purple-300 font-medium">{glow.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={glow}
              onChange={event => setGlow(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={transparent}
                onChange={event => setTransparent(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Transparent</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Hover Strength</span>
              <span className="text-purple-300 font-medium">{hoverStrength.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={hoverStrength}
              onChange={event => setHoverStrength(Number(event.target.value))}
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
              min="0.01"
              max="1"
              step="0.01"
              value={inertia}
              onChange={event => setInertia(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Bloom</span>
              <span className="text-purple-300 font-medium">{bloom.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={bloom}
              onChange={event => setBloom(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={suspendWhenOffscreen}
                onChange={event => setSuspendWhenOffscreen(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Suspend When Offscreen</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Offset X</span>
              <span className="text-purple-300 font-medium">{offset.x.toFixed(1)}</span>
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
              <span className="text-purple-300 font-medium">{offset.y.toFixed(1)}</span>
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
        </div>
      </div>
    </div>
  );
}
