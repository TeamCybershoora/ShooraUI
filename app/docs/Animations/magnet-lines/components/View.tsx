"use client";

import { useState } from "react";
import {MagnetLines} from "@cybershoora/shoora-ui";

export default function View() {
  const [key, setKey] = useState(0);
  const [rows, setRows] = useState(9);
  const [columns, setColumns] = useState(9);
  const [containerSize, setContainerSize] = useState("60vmin");
  const [lineColor, setLineColor] = useState("tomato");
  const [lineWidth, setLineWidth] = useState("0.8vmin");
  const [lineHeight, setLineHeight] = useState("5vmin");
  const [baseAngle, setBaseAngle] = useState(0);
  const [styleMargin, setStyleMargin] = useState("2rem auto");

  return (
    <div className="space-y-8 p-4">
      <div className="relative min-h-[25rem] bg-gradient-to-br from-[#0f1024] via-[#14163a] to-[#05040f] rounded-2xl p-8 border border-purple-500/30 mt-8 flex items-center justify-center">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-3 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Magnet Lines"
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
        <div key={key} className="relative flex items-center justify-center w-full h-full min-h-[18rem]">
          <MagnetLines
            rows={rows}
            columns={columns}
            containerSize={containerSize}
            lineColor={lineColor}
            lineWidth={lineWidth}
            lineHeight={lineHeight}
            baseAngle={baseAngle}
            style={{ margin: styleMargin }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Magnet Lines
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Rows</label>
            <input
              type="number"
              min={3}
              max={24}
              value={rows}
              onChange={event => setRows(Number(event.target.value))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Columns</label>
            <input
              type="number"
              min={3}
              max={24}
              value={columns}
              onChange={event => setColumns(Number(event.target.value))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Container Size</label>
            <input
              type="text"
              value={containerSize}
              onChange={event => setContainerSize(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="60vmin"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Line Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={lineColor}
                onChange={event => setLineColor(event.target.value)}
                className="h-10 w-14 rounded-md border border-white/20 bg-transparent"
              />
              <input
                type="text"
                value={lineColor}
                onChange={event => setLineColor(event.target.value)}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Line Width</label>
            <input
              type="text"
              value={lineWidth}
              onChange={event => setLineWidth(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="0.8vmin"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Line Height</label>
            <input
              type="text"
              value={lineHeight}
              onChange={event => setLineHeight(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="5vmin"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Base Angle</span>
              <span className="text-purple-300 font-medium">{baseAngle}°</span>
            </div>
            <input
              type="range"
              min={-90}
              max={90}
              step={1}
              value={baseAngle}
              onChange={event => setBaseAngle(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Style Margin</label>
            <input
              type="text"
              value={styleMargin}
              onChange={event => setStyleMargin(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="2rem auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
