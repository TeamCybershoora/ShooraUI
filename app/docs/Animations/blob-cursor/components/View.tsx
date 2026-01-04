"use client";

import { useState, useEffect } from "react";
import { BlobCursor } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [blobType, setBlobType] = useState<"circle" | "square">("circle");
  const [fillColor, setFillColor] = useState("#5227FF");
  const [trailCount, setTrailCount] = useState(3);
  const [sizes, setSizes] = useState("60, 125, 75");
  const [innerSizes, setInnerSizes] = useState("20, 35, 25");
  const [innerColor, setInnerColor] = useState("rgba(255,255,255,0.8)");
  const [opacities, setOpacities] = useState("0.6, 0.6, 0.6");
  const [shadowColor, setShadowColor] = useState("rgba(0,0,0,0.75)");
  const [shadowBlur, setShadowBlur] = useState(5);
  const [shadowOffsetX, setShadowOffsetX] = useState(10);
  const [shadowOffsetY, setShadowOffsetY] = useState(10);
  const [filterStdDeviation, setFilterStdDeviation] = useState(30);
  const [useFilter, setUseFilter] = useState(true);
  const [fastDuration, setFastDuration] = useState(0.1);
  const [slowDuration, setSlowDuration] = useState(0.5);
  const [zIndex, setZIndex] = useState(100);

  useEffect(() => {
    console.log('Rendering BlobCursor with:', {
      blobType,
      fillColor,
      trailCount,
      sizes: sizes.split(',').map(s => Number(s.trim())),
      innerSizes: innerSizes.split(',').map(s => Number(s.trim())),
      opacities: opacities.split(',').map(s => Number(s.trim()))
    });
  }, [blobType, fillColor, trailCount, sizes, innerSizes, opacities]);

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gray-900/30 rounded-lg p-8 border-2 border-purple-300 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Blob Cursor"
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
        <div key={key} className="relative w-full h-full min-h-[18rem] overflow-hidden cursor-crosshair">
          <BlobCursor
            blobType={blobType}
            fillColor={fillColor}
            trailCount={trailCount}
            sizes={sizes.split(',').map(s => Number(s.trim()))}
            innerSizes={innerSizes.split(',').map(s => Number(s.trim()))}
            innerColor={innerColor}
            opacities={opacities.split(',').map(s => Number(s.trim()))}
            shadowColor={shadowColor}
            shadowBlur={shadowBlur}
            shadowOffsetX={shadowOffsetX}
            shadowOffsetY={shadowOffsetY}
            filterStdDeviation={filterStdDeviation}
            useFilter={useFilter}
            fastDuration={fastDuration}
            slowDuration={slowDuration}
            zIndex={zIndex}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Blob Cursor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Blob Type</label>
            <select
              value={blobType}
              onChange={event => setBlobType(event.target.value as "circle" | "square")}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="circle">Circle</option>
              <option value="square">Square</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Fill Color</label>
            <input
              type="color"
              value={fillColor}
              onChange={event => setFillColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Trail Count</span>
              <span className="text-purple-300 font-medium">{trailCount}</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={trailCount}
              onChange={event => setTrailCount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Sizes (comma separated)</label>
            <input
              type="text"
              value={sizes}
              onChange={event => setSizes(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="60, 125, 75"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Inner Sizes (comma separated)</label>
            <input
              type="text"
              value={innerSizes}
              onChange={event => setInnerSizes(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="20, 35, 25"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Inner Color</label>
            <input
              type="color"
              value={innerColor}
              onChange={event => setInnerColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Opacities (comma separated)</label>
            <input
              type="text"
              value={opacities}
              onChange={event => setOpacities(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="0.6, 0.6, 0.6"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Shadow Color</label>
            <input
              type="color"
              value={shadowColor}
              onChange={event => setShadowColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Shadow Blur</span>
              <span className="text-purple-300 font-medium">{shadowBlur}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={shadowBlur}
              onChange={event => setShadowBlur(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Shadow Offset X</span>
              <span className="text-purple-300 font-medium">{shadowOffsetX}px</span>
            </div>
            <input
              type="range"
              min="-20"
              max="20"
              step="1"
              value={shadowOffsetX}
              onChange={event => setShadowOffsetX(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Shadow Offset Y</span>
              <span className="text-purple-300 font-medium">{shadowOffsetY}px</span>
            </div>
            <input
              type="range"
              min="-20"
              max="20"
              step="1"
              value={shadowOffsetY}
              onChange={event => setShadowOffsetY(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Filter Std Deviation</span>
              <span className="text-purple-300 font-medium">{filterStdDeviation}</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={filterStdDeviation}
              onChange={event => setFilterStdDeviation(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              <input
                type="checkbox"
                checked={useFilter}
                onChange={event => setUseFilter(event.target.checked)}
                className="mr-2"
              />
              Use Filter
            </label>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Fast Duration</span>
              <span className="text-purple-300 font-medium">{fastDuration}s</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="0.5"
              step="0.05"
              value={fastDuration}
              onChange={event => setFastDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Slow Duration</span>
              <span className="text-purple-300 font-medium">{slowDuration}s</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={slowDuration}
              onChange={event => setSlowDuration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Z Index</span>
              <span className="text-purple-300 font-medium">{zIndex}</span>
            </div>
            <input
              type="range"
              min="1"
              max="1000"
              step="10"
              value={zIndex}
              onChange={event => setZIndex(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
