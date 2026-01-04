"use client";

import { useState } from "react";
import { Waves } from "@cybershoora/shoora-ui"

export default function View() {
  const [lineColor, setLineColor] = useState('#fff');
  const [backgroundColor, setBackgroundColor] = useState('rgba(255, 255, 255, 0.2)');
  const [waveSpeedX, setWaveSpeedX] = useState(0.02);
  const [waveSpeedY, setWaveSpeedY] = useState(0.01);
  const [waveAmpX, setWaveAmpX] = useState(40);
  const [waveAmpY, setWaveAmpY] = useState(20);
  const [friction, setFriction] = useState(0.9);
  const [tension, setTension] = useState(0.01);
  const [maxCursorMove, setMaxCursorMove] = useState(120);
  const [xGap, setXGap] = useState(12);
  const [yGap, setYGap] = useState(36);

  return (
    <div className="p-0">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300">
        <Waves
          lineColor={lineColor}
          backgroundColor={backgroundColor}
          waveSpeedX={waveSpeedX}
          waveSpeedY={waveSpeedY}
          waveAmpX={waveAmpX}
          waveAmpY={waveAmpY}
          friction={friction}
          tension={tension}
          maxCursorMove={maxCursorMove}
          xGap={xGap}
          yGap={yGap}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Waves
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Line Color</label>
            <input
              type="color"
              value={lineColor}
              onChange={event => setLineColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Background Color</label>
            <input
              type="color"
              value={backgroundColor.includes('rgba') ? '#ffffff' : backgroundColor}
              onChange={event => setBackgroundColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Wave Speed X</span>
              <span className="text-purple-300 font-medium">{waveSpeedX.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0.001"
              max="0.1"
              step="0.001"
              value={waveSpeedX}
              onChange={event => setWaveSpeedX(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Wave Speed Y</span>
              <span className="text-purple-300 font-medium">{waveSpeedY.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0.001"
              max="0.1"
              step="0.001"
              value={waveSpeedY}
              onChange={event => setWaveSpeedY(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Wave Amplitude X</span>
              <span className="text-purple-300 font-medium">{waveAmpX}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={waveAmpX}
              onChange={event => setWaveAmpX(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Wave Amplitude Y</span>
              <span className="text-purple-300 font-medium">{waveAmpY}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={waveAmpY}
              onChange={event => setWaveAmpY(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Friction</span>
              <span className="text-purple-300 font-medium">{friction.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="1"
              step="0.01"
              value={friction}
              onChange={event => setFriction(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Tension</span>
              <span className="text-purple-300 font-medium">{tension.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0.001"
              max="0.1"
              step="0.001"
              value={tension}
              onChange={event => setTension(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Max Cursor Move</span>
              <span className="text-purple-300 font-medium">{maxCursorMove}</span>
            </div>
            <input
              type="range"
              min="50"
              max="200"
              step="5"
              value={maxCursorMove}
              onChange={event => setMaxCursorMove(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>X Gap</span>
              <span className="text-purple-300 font-medium">{xGap}</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={xGap}
              onChange={event => setXGap(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Y Gap</span>
              <span className="text-purple-300 font-medium">{yGap}</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="1"
              value={yGap}
              onChange={event => setYGap(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
