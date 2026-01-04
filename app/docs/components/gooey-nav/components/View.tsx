"use client";

import { useState } from "react";
import { GooeyNav, type GooeyNavItem } from "@cybershoora/shoora-ui";

export default function View() {
  const [items, setItems] = useState<GooeyNavItem[]>([
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ]);
  const [particleCount, setParticleCount] = useState(15);
  const [particleDistances, setParticleDistances] = useState<[number, number]>([90, 10]);
  const [particleR, setParticleR] = useState(100);
  const [initialActiveIndex, setInitialActiveIndex] = useState(0);
  const [animationTime, setAnimationTime] = useState(600);
  const [timeVariance, setTimeVariance] = useState(300);
  const [colors, setColors] = useState([1, 2, 3, 1, 2, 3, 1, 4]);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8 flex items-center justify-center">
        <GooeyNav
          items={items}
          particleCount={particleCount}
          particleDistances={particleDistances}
          particleR={particleR}
          initialActiveIndex={initialActiveIndex}
          animationTime={animationTime}
          timeVariance={timeVariance}
          colors={colors}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Gooey Nav
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Nav Items (comma-separated)</label>
            <input
              type="text"
              value={items.map(item => item.label).join(',')}
              onChange={event => {
                const labels = event.target.value.split(',').map(l => l.trim());
                setItems(labels.map(label => ({ label, href: '#' })));
              }}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Home,About,Contact,Services"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Particle Count</span>
              <span className="text-purple-300 font-medium">{particleCount}</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={particleCount}
              onChange={event => setParticleCount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Particle Radius</span>
              <span className="text-purple-300 font-medium">{particleR}</span>
            </div>
            <input
              type="range"
              min="50"
              max="200"
              step="5"
              value={particleR}
              onChange={event => setParticleR(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Animation Time</span>
              <span className="text-purple-300 font-medium">{animationTime}ms</span>
            </div>
            <input
              type="range"
              min="200"
              max="2000"
              step="100"
              value={animationTime}
              onChange={event => setAnimationTime(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Time Variance</span>
              <span className="text-purple-300 font-medium">{timeVariance}ms</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              step="50"
              value={timeVariance}
              onChange={event => setTimeVariance(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Initial Active Index</span>
              <span className="text-purple-300 font-medium">{initialActiveIndex}</span>
            </div>
            <input
              type="range"
              min="0"
              max={Math.max(0, items.length - 1)}
              step="1"
              value={initialActiveIndex}
              onChange={event => setInitialActiveIndex(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Colors (comma-separated numbers)</label>
            <input
              type="text"
              value={colors.join(',')}
              onChange={event => {
                const colorValues = event.target.value.split(',').map(c => parseInt(c.trim())).filter(n => !isNaN(n));
                if (colorValues.length > 0) {
                  setColors(colorValues);
                }
              }}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="1,2,3,1,2,3,1,4"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Particle Distances</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={particleDistances[0]}
                onChange={event => setParticleDistances([Number(event.target.value), particleDistances[1]])}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="90"
              />
              <input
                type="number"
                value={particleDistances[1]}
                onChange={event => setParticleDistances([particleDistances[0], Number(event.target.value)])}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
