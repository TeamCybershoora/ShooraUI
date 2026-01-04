"use client";

import { useState } from "react";
import { FloatingLines } from "@cybershoora/shoora-ui"

export default function View() {
  const [enabledWaves, setEnabledWaves] = useState<Array<'top' | 'middle' | 'bottom'>>(['top', 'middle', 'bottom']);
  const [lineCount, setLineCount] = useState([10, 15, 20]);
  const [lineDistance, setLineDistance] = useState([8, 6, 4]);
  const [bendRadius, setBendRadius] = useState(5.0);
  const [bendStrength, setBendStrength] = useState(-0.5);
  const [interactive, setInteractive] = useState(true);
  const [parallax, setParallax] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [parallaxStrength, setParallaxStrength] = useState(0.2);
  const [mouseDamping, setMouseDamping] = useState(0.05);
  const [linesGradient, setLinesGradient] = useState([]);

  const toggleWave = (wave: 'top' | 'middle' | 'bottom') => {
    setEnabledWaves(prev => 
      prev.includes(wave) 
        ? prev.filter(w => w !== wave)
        : [...prev, wave]
    );
  };

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <FloatingLines 
          enabledWaves={enabledWaves}
          lineCount={lineCount}
          lineDistance={lineDistance}
          bendRadius={bendRadius}
          bendStrength={bendStrength}
          interactive={interactive}
          parallax={parallax}
          animationSpeed={animationSpeed}
          parallaxStrength={parallaxStrength}
          mouseDamping={mouseDamping}
          linesGradient={linesGradient}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Floating Lines
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Enabled Waves</label>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={enabledWaves.includes('top')}
                  onChange={() => toggleWave('top')}
                  className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
                />
                <span>Top</span>
              </label>
              <label className="flex items-center space-x-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={enabledWaves.includes('middle')}
                  onChange={() => toggleWave('middle')}
                  className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
                />
                <span>Middle</span>
              </label>
              <label className="flex items-center space-x-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={enabledWaves.includes('bottom')}
                  onChange={() => toggleWave('bottom')}
                  className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
                />
                <span>Bottom</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Line Count (comma-separated for top,middle,bottom)</label>
            <input
              type="text"
              value={lineCount.join(',')}
              onChange={event => setLineCount(event.target.value.split(',').map(c => parseInt(c.trim()) || 0))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="10,15,20"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Line Distance (comma-separated for top,middle,bottom)</label>
            <input
              type="text"
              value={lineDistance.join(',')}
              onChange={event => setLineDistance(event.target.value.split(',').map(c => parseFloat(c.trim()) || 0))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="8,6,4"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Bend Radius</span>
              <span className="text-purple-300 font-medium">{bendRadius.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={bendRadius}
              onChange={event => setBendRadius(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Bend Strength</span>
              <span className="text-purple-300 font-medium">{bendStrength.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={bendStrength}
              onChange={event => setBendStrength(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Animation Speed</span>
              <span className="text-purple-300 font-medium">{animationSpeed.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="3"
              step="0.1"
              value={animationSpeed}
              onChange={event => setAnimationSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Parallax Strength</span>
              <span className="text-purple-300 font-medium">{parallaxStrength.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={parallaxStrength}
              onChange={event => setParallaxStrength(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Mouse Damping</span>
              <span className="text-purple-300 font-medium">{mouseDamping.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.2"
              step="0.01"
              value={mouseDamping}
              onChange={event => setMouseDamping(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={interactive}
                onChange={event => setInteractive(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Interactive</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={parallax}
                onChange={event => setParallax(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Parallax</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
