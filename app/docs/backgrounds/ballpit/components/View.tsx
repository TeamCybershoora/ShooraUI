"use client";

import { useState } from "react";
import { Ballpit } from "@cybershoora/shoora-ui"

export default function View() {
  const [count, setCount] = useState(200);
  const [gravity, setGravity] = useState(0.7);
  const [friction, setFriction] = useState(0.8);
  const [wallBounce, setWallBounce] = useState(0.95);
  const [followCursor, setFollowCursor] = useState(true);
  const [maxVelocity, setMaxVelocity] = useState(0.15);
  const [minSize, setMinSize] = useState(0.5);
  const [maxSize, setMaxSize] = useState(1);
  const [size0, setSize0] = useState(1);

  return (
    <div className="space-y-8 p-4">
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <Ballpit
          count={count}
          gravity={gravity}
          friction={friction}
          wallBounce={wallBounce}
          followCursor={followCursor}
          maxVelocity={maxVelocity}
          minSize={minSize}
          maxSize={maxSize}
          size0={size0}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Ballpit
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Ball Count</span>
              <span className="text-purple-300 font-medium">{count}</span>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={count}
              onChange={event => setCount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Gravity</span>
              <span className="text-purple-300 font-medium">{gravity.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={gravity}
              onChange={event => setGravity(Number(event.target.value))}
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
              <span>Wall Bounce</span>
              <span className="text-purple-300 font-medium">{wallBounce.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="1"
              step="0.05"
              value={wallBounce}
              onChange={event => setWallBounce(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Max Velocity</span>
              <span className="text-purple-300 font-medium">{maxVelocity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="0.5"
              step="0.05"
              value={maxVelocity}
              onChange={event => setMaxVelocity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Min Size</span>
              <span className="text-purple-300 font-medium">{minSize.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={minSize}
              onChange={event => setMinSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Max Size</span>
              <span className="text-purple-300 font-medium">{maxSize.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={maxSize}
              onChange={event => setMaxSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Control Ball Size</span>
              <span className="text-purple-300 font-medium">{size0.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={size0}
              onChange={event => setSize0(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={followCursor}
                onChange={event => setFollowCursor(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Follow Cursor</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
