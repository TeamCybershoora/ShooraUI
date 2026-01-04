"use client";

import { useState } from "react";
import { Dock } from "@cybershoora/shoora-ui"
import * as VscIcons from "react-icons/vsc";

const items = [
  { icon: <VscIcons.VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
  { icon: <VscIcons.VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
  { icon: <VscIcons.VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
  { icon: <VscIcons.VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
];

export default function View() {
  const [key, setKey] = useState(0);
  
  // Dock state
  const [panelHeight, setPanelHeight] = useState(68);
  const [baseItemSize, setBaseItemSize] = useState(50);
  const [magnification, setMagnification] = useState(70);
  const [distance, setDistance] = useState(200);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize Components"
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
        <div key={key} className="relative w-full h-full flex items-end justify-center pb-8">
          <Dock 
            items={items}
            panelHeight={panelHeight}
            baseItemSize={baseItemSize}
            magnification={magnification}
            distance={distance}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Components
        </h2>

        <div className="space-y-8">
          {/* Dock Controls */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Dock Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Panel Height</span>
                  <span className="text-purple-300 font-medium">{panelHeight}px</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="100"
                  step="4"
                  value={panelHeight}
                  onChange={event => setPanelHeight(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Base Item Size</span>
                  <span className="text-purple-300 font-medium">{baseItemSize}px</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="80"
                  step="5"
                  value={baseItemSize}
                  onChange={event => setBaseItemSize(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Magnification</span>
                  <span className="text-purple-300 font-medium">{magnification}px</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="120"
                  step="5"
                  value={magnification}
                  onChange={event => setMagnification(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Distance</span>
                  <span className="text-purple-300 font-medium">{distance}px</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="400"
                  step="20"
                  value={distance}
                  onChange={event => setDistance(Number(event.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
