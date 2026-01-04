"use client";

import { useRef, useState, RefObject } from "react";
import { Crosshair } from "@cybershoora/shoora-ui";

export default function View() {
  const [key, setKey] = useState(0);
  const [color, setColor] = useState("#ffffff");
  const [useContainer, setUseContainer] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleReset = () => setKey(previous => previous + 1);

  const activeRef = useContainer ? containerRef : undefined;

  return (
    <div className="space-y-8 p-4">
      <div className="relative bg-slate-900/50 rounded-lg border border-purple-400/40 mt-8">
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3">
          <p className="text-sm text-gray-300/80">
            {useContainer ? "Crosshair is scoped to this card." : "Crosshair follows the entire window."}
          </p>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-1.5 text-xs font-medium text-purple-100 transition hover:border-purple-300/60 hover:bg-white/5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-200"
            >
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
              <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
            </svg>
            Restart
          </button>
        </div>

        <div
          ref={useContainer ? containerRef : null}
          className="relative mt-14 grid min-h-[22rem] place-items-center overflow-hidden rounded-b-lg"
          style={{ background: "radial-gradient(circle at center, rgba(139,92,246,0.15), rgba(15,23,42,0.95)" }}
        >
          <div className="text-center space-y-2">
            <span className="inline-flex rounded-full border border-purple-400/40 bg-purple-400/10 px-3 py-1 text-xs uppercase tracking-widest text-purple-200">
              Hover inside to activate
            </span>
            <h3 className="text-3xl font-semibold text-white">Magnetic Crosshair</h3>
            <p className="max-w-md text-sm text-purple-100/80">
              Smoothly interpolated guide lines that react to pointer movement.
              Links inside the container trigger a subtle distortion burst.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-purple-300/60 hover:bg-white/5"
            >
              Explore Docs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 6.75L6.75 17.25M17.25 6.75H8.25M17.25 6.75V15.75" />
              </svg>
            </a>
          </div>

          <Crosshair key={key} containerRef={useContainer ? containerRef as RefObject<HTMLElement | HTMLDivElement> : undefined} color={color} />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z"
              clipRule="evenodd"
            />
          </svg>
          Customize Crosshair
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Line Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={color}
                onChange={event => setColor(event.target.value)}
                className="h-10 w-14 cursor-pointer rounded-md border border-white/10 bg-transparent"
                aria-label="Pick crosshair color"
              />
              <input
                type="text"
                value={color}
                onChange={event => setColor(event.target.value)}
                className="flex-1 rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                placeholder="#ffffff"
              />
            </div>
            <p className="text-xs text-gray-400">Supply any valid CSS color. Hex, rgb(), or CSS variables all work.</p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Tracking Mode</label>
            <div className="flex items-center justify-between rounded-md border border-gray-700 bg-gray-900 px-4 py-3">
              <div>
                <p className="text-sm font-medium text-white/90">{useContainer ? "Scoped to container" : "Uses window as container"}</p>
                <p className="text-xs text-gray-400">
                  Toggle to switch between card-scoped tracking and full screen behaviour.
                </p>
              </div>
              <button
                onClick={() => setUseContainer(previous => !previous)}
                className={`relative inline-flex h-9 w-16 items-center rounded-full transition ${
                  useContainer ? "bg-purple-500/90" : "bg-gray-600"
                }`}
                role="switch"
                aria-checked={useContainer}
              >
                <span
                  className={`inline-block h-7 w-7 transform rounded-full bg-white shadow transition ${
                    useContainer ? "translate-x-8" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
