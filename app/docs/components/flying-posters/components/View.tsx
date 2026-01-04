"use client";

import { useState } from "react";
import { FlyingPosters } from "@cybershoora/shoora-ui"

const items: string[] = [
  'https://picsum.photos/500/500?grayscale', 
  'https://picsum.photos/600/600?grayscale', 
  'https://picsum.photos/400/400?grayscale'
];

export default function View() {
  // FlyingPosters state
  const [planeWidth, setPlaneWidth] = useState(320);
  const [planeHeight, setPlaneHeight] = useState(320);
  const [distortion, setDistortion] = useState(3);
  const [scrollEase, setScrollEase] = useState(0.01);
  const [cameraFov, setCameraFov] = useState(45);
  const [cameraZ, setCameraZ] = useState(20);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <div className="absolute inset-0">
          <FlyingPosters 
            items={items}
            planeWidth={planeWidth}
            planeHeight={planeHeight}
            distortion={distortion}
            scrollEase={scrollEase}
            cameraFov={cameraFov}
            cameraZ={cameraZ}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize FlyingPosters
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Plane Width</span>
              <span className="text-purple-300 font-medium">{planeWidth}px</span>
            </div>
            <input
              type="range"
              min="200"
              max="500"
              step="20"
              value={planeWidth}
              onChange={event => setPlaneWidth(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Plane Height</span>
              <span className="text-purple-300 font-medium">{planeHeight}px</span>
            </div>
            <input
              type="range"
              min="200"
              max="500"
              step="20"
              value={planeHeight}
              onChange={event => setPlaneHeight(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Distortion</span>
              <span className="text-purple-300 font-medium">{distortion}</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={distortion}
              onChange={event => setDistortion(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scroll Ease</span>
              <span className="text-purple-300 font-medium">{scrollEase}</span>
            </div>
            <input
              type="range"
              min="0.001"
              max="0.05"
              step="0.001"
              value={scrollEase}
              onChange={event => setScrollEase(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Camera FOV</span>
              <span className="text-purple-300 font-medium">{cameraFov}°</span>
            </div>
            <input
              type="range"
              min="30"
              max="90"
              step="5"
              value={cameraFov}
              onChange={event => setCameraFov(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Camera Z</span>
              <span className="text-purple-300 font-medium">{cameraZ}</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={cameraZ}
              onChange={event => setCameraZ(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
