"use client";

import { useState } from "react";
import { LiquidEther } from "@cybershoora/shoora-ui"

export default function View() {
  const [colors, setColors] = useState(['#5227FF', '#FF9FFC', '#B19EEF']);
  const [mouseForce, setMouseForce] = useState(20);
  const [cursorSize, setCursorSize] = useState(100);
  const [isViscous, setIsViscous] = useState(false);
  const [viscous, setViscous] = useState(30);
  const [iterationsViscous, setIterationsViscous] = useState(32);
  const [iterationsPoisson, setIterationsPoisson] = useState(32);
  const [resolution, setResolution] = useState(0.5);
  const [isBounce, setIsBounce] = useState(false);
  const [autoDemo, setAutoDemo] = useState(true);
  const [autoSpeed, setAutoSpeed] = useState(0.5);
  const [autoIntensity, setAutoIntensity] = useState(2.2);
  const [takeoverDuration, setTakeoverDuration] = useState(0.25);
  const [autoResumeDelay, setAutoResumeDelay] = useState(3000);
  const [autoRampDuration, setAutoRampDuration] = useState(0.6);

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: 600, position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <LiquidEther
          colors={colors}
          mouseForce={mouseForce}
          cursorSize={cursorSize}
          isViscous={isViscous}
          viscous={viscous}
          iterationsViscous={iterationsViscous}
          iterationsPoisson={iterationsPoisson}
          resolution={resolution}
          isBounce={isBounce}
          autoDemo={autoDemo}
          autoSpeed={autoSpeed}
          autoIntensity={autoIntensity}
          takeoverDuration={takeoverDuration}
          autoResumeDelay={autoResumeDelay}
          autoRampDuration={autoRampDuration}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize LiquidEther
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Colors</label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="color"
                value={colors[0] || '#5227FF'}
                onChange={event => {
                  const newColors = [...colors];
                  newColors[0] = event.target.value;
                  setColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
              <input
                type="color"
                value={colors[1] || '#FF9FFC'}
                onChange={event => {
                  const newColors = [...colors];
                  newColors[1] = event.target.value;
                  setColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
              <input
                type="color"
                value={colors[2] || '#B19EEF'}
                onChange={event => {
                  const newColors = [...colors];
                  newColors[2] = event.target.value;
                  setColors(newColors);
                }}
                className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Mouse Force</span>
              <span className="text-purple-300 font-medium">{mouseForce}</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={mouseForce}
              onChange={event => setMouseForce(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Cursor Size</span>
              <span className="text-purple-300 font-medium">{cursorSize}px</span>
            </div>
            <input
              type="range"
              min="10"
              max="300"
              step="10"
              value={cursorSize}
              onChange={event => setCursorSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={isViscous}
                onChange={event => setIsViscous(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Is Viscous</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Viscous</span>
              <span className="text-purple-300 font-medium">{viscous}</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={viscous}
              onChange={event => setViscous(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Iterations Viscous</span>
              <span className="text-purple-300 font-medium">{iterationsViscous}</span>
            </div>
            <input
              type="range"
              min="1"
              max="64"
              step="1"
              value={iterationsViscous}
              onChange={event => setIterationsViscous(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Iterations Poisson</span>
              <span className="text-purple-300 font-medium">{iterationsPoisson}</span>
            </div>
            <input
              type="range"
              min="1"
              max="64"
              step="1"
              value={iterationsPoisson}
              onChange={event => setIterationsPoisson(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Resolution</span>
              <span className="text-purple-300 font-medium">{resolution.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={resolution}
              onChange={event => setResolution(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={isBounce}
                onChange={event => setIsBounce(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Is Bounce</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={autoDemo}
                onChange={event => setAutoDemo(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Auto Demo</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Auto Speed</span>
              <span className="text-purple-300 font-medium">{autoSpeed.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={autoSpeed}
              onChange={event => setAutoSpeed(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Auto Intensity</span>
              <span className="text-purple-300 font-medium">{autoIntensity.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={autoIntensity}
              onChange={event => setAutoIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Takeover Duration</span>
              <span className="text-purple-300 font-medium">{takeoverDuration.toFixed(2)}s</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={takeoverDuration}
              onChange={event => setTakeoverDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Auto Resume Delay</span>
              <span className="text-purple-300 font-medium">{autoResumeDelay}ms</span>
            </div>
            <input
              type="range"
              min="1000"
              max="10000"
              step="500"
              value={autoResumeDelay}
              onChange={event => setAutoResumeDelay(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Auto Ramp Duration</span>
              <span className="text-purple-300 font-medium">{autoRampDuration.toFixed(1)}s</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={autoRampDuration}
              onChange={event => setAutoRampDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
