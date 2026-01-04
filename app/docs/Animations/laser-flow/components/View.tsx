"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { LaserFlow } from "@cybershoora/shoora-ui";

export default function View() {
  const [key, setKey] = useState(0);
  const [color, setColor] = useState("#FF79C6");
  const [wispDensity, setWispDensity] = useState(1);
  const [mouseSmoothTime, setMouseSmoothTime] = useState(0.1);
  const [mouseTiltStrength, setMouseTiltStrength] = useState(0.03);
  const [horizontalBeamOffset, setHorizontalBeamOffset] = useState(0.1);
  const [verticalBeamOffset, setVerticalBeamOffset] = useState(0);
  const [flowSpeed, setFlowSpeed] = useState(0.35);
  const [verticalSizing, setVerticalSizing] = useState(2.0);
  const [horizontalSizing, setHorizontalSizing] = useState(0.5);
  const [fogIntensity, setFogIntensity] = useState(0.45);
  const [fogScale, setFogScale] = useState(0.3);
  const [wispSpeed, setWispSpeed] = useState(15);
  const [wispIntensity, setWispIntensity] = useState(5);
  const [flowStrength, setFlowStrength] = useState(0.25);
  const [decay, setDecay] = useState(1.1);
  const [falloffStart, setFalloffStart] = useState(1.2);
  const [fogFallSpeed, setFogFallSpeed] = useState(0.6);

  const revealImgRef = useRef<HTMLImageElement | null>(null);

  const handleRevealMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const el = revealImgRef.current;
    if (!el) return;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
  }, []);

  const revealImageBaseStyle = useMemo(() => {
    const style: React.CSSProperties & Record<string, string> = {
      WebkitMaskImage:
        "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
      maskImage:
        "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      "--mx": "-9999px",
      "--my": "-9999px"
    };

    return style;
  }, []);

  const handleRevealLeave = useCallback(() => {
    const el = revealImgRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "-9999px");
    el.style.setProperty("--my", "-9999px");
  }, []);

  return (
    <div className="space-y-12 p-4">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative min-h-[24rem] rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#0c0724] via-[#120b33] to-[#050312] p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-purple-200/70">Basic usage</p>
              <h3 className="text-xl font-semibold text-white">LaserFlow Scene</h3>
            </div>
            <button
              onClick={() => setKey(prev => prev + 1)}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-white/20 hover:bg-white/10"
              aria-label="Re-initialize Laser Flow"
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
              >
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
                <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
              </svg>
            </button>
          </div>
          <div className="relative h-[20rem] overflow-hidden rounded-xl bg-[#05040d]">
            <div key={key} className="absolute inset-0">
              <LaserFlow
                color={color}
                wispDensity={wispDensity}
                mouseSmoothTime={mouseSmoothTime}
                mouseTiltStrength={mouseTiltStrength}
                horizontalBeamOffset={horizontalBeamOffset}
                verticalBeamOffset={verticalBeamOffset}
                flowSpeed={flowSpeed}
                verticalSizing={verticalSizing}
                horizontalSizing={horizontalSizing}
                fogIntensity={fogIntensity}
                fogScale={fogScale}
                wispSpeed={wispSpeed}
                wispIntensity={wispIntensity}
                flowStrength={flowStrength}
                decay={decay}
                falloffStart={falloffStart}
                fogFallSpeed={fogFallSpeed}
              />
            </div>
          </div>
        </div>

        <div
          className="relative min-h-[24rem] overflow-hidden rounded-2xl border border-pink-500/40 bg-[#060010] p-6"
          onMouseMove={handleRevealMove}
          onMouseLeave={handleRevealLeave}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-pink-200/70">Interactive Reveal</p>
              <h3 className="text-xl font-semibold text-white">LaserFlow Showcase Box</h3>
            </div>
          </div>

          <div className="relative h-[22rem] overflow-hidden rounded-xl">
            <LaserFlow
              color={color}
              horizontalBeamOffset={horizontalBeamOffset}
              verticalBeamOffset={verticalBeamOffset}
              flowSpeed={flowSpeed}
              fogIntensity={fogIntensity}
              fogScale={fogScale}
              wispDensity={wispDensity}
              wispIntensity={wispIntensity}
              flowStrength={flowStrength}
              wispSpeed={wispSpeed}
              falloffStart={falloffStart}
              fogFallSpeed={fogFallSpeed}
              verticalSizing={verticalSizing}
              horizontalSizing={horizontalSizing}
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="pointer-events-auto flex h-[60%] w-[86%] -translate-y-6 transform items-center justify-center rounded-2xl border border-pink-400/70 bg-[#060010] text-center text-white shadow-[0_20px_120px_rgba(255,121,198,0.45)]">
                <div className="px-10">
                  <p className="text-sm uppercase tracking-[0.4em] text-pink-200/70">Hover Spotlight</p>
                  <h4 className="mt-3 text-2xl font-semibold">Reveal your content with volumetric beams</h4>
                  <p className="mt-2 text-sm text-pink-100/70">
                    LaserFlow can mask imagery using CSS variables updated from pointer motion.
                  </p>
                </div>
              </div>
            </div>

            <img
              ref={revealImgRef}
              src="https://images.unsplash.com/photo-1520350094750-0d0d52b26a2b?auto=format&fit=crop&w=1600&q=80"
              alt="Reveal effect"
              className="pointer-events-none absolute inset-x-0 -top-1/2 w-full opacity-40 mix-blend-screen"
              style={revealImageBaseStyle}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 flex items-center text-xl font-semibold text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize LaserFlow
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Beam Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={color}
                onChange={event => setColor(event.target.value)}
                className="h-10 w-14 rounded-md border border-white/20 bg-transparent"
              />
              <input
                type="text"
                value={color}
                onChange={event => setColor(event.target.value)}
                className="flex-1 rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Wisp Density</span>
              <span className="font-medium text-purple-300">{wispDensity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.3}
              max={2}
              step={0.05}
              value={wispDensity}
              onChange={event => setWispDensity(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Mouse Smooth Time</span>
              <span className="font-medium text-purple-300">{mouseSmoothTime.toFixed(2)}s</span>
            </div>
            <input
              type="range"
              min={0}
              max={0.6}
              step={0.05}
              value={mouseSmoothTime}
              onChange={event => setMouseSmoothTime(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Tilt Strength</span>
              <span className="font-medium text-purple-300">{mouseTiltStrength.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={0.1}
              step={0.005}
              value={mouseTiltStrength}
              onChange={event => setMouseTiltStrength(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Horizontal Offset</span>
              <span className="font-medium text-purple-300">{horizontalBeamOffset.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={-0.5}
              max={0.5}
              step={0.02}
              value={horizontalBeamOffset}
              onChange={event => setHorizontalBeamOffset(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Vertical Offset</span>
              <span className="font-medium text-purple-300">{verticalBeamOffset.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={-0.3}
              max={0.3}
              step={0.02}
              value={verticalBeamOffset}
              onChange={event => setVerticalBeamOffset(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Flow Speed</span>
              <span className="font-medium text-purple-300">{flowSpeed.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.1}
              max={0.8}
              step={0.05}
              value={flowSpeed}
              onChange={event => setFlowSpeed(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Vertical Sizing</span>
              <span className="font-medium text-purple-300">{verticalSizing.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={1}
              max={3.5}
              step={0.1}
              value={verticalSizing}
              onChange={event => setVerticalSizing(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Horizontal Sizing</span>
              <span className="font-medium text-purple-300">{horizontalSizing.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.2}
              max={1.5}
              step={0.05}
              value={horizontalSizing}
              onChange={event => setHorizontalSizing(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Fog Intensity</span>
              <span className="font-medium text-purple-300">{fogIntensity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={fogIntensity}
              onChange={event => setFogIntensity(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Fog Scale</span>
              <span className="font-medium text-purple-300">{fogScale.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.1}
              max={1}
              step={0.05}
              value={fogScale}
              onChange={event => setFogScale(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Wisp Speed</span>
              <span className="font-medium text-purple-300">{wispSpeed.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min={5}
              max={40}
              step={1}
              value={wispSpeed}
              onChange={event => setWispSpeed(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Wisp Intensity</span>
              <span className="font-medium text-purple-300">{wispIntensity.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={0.5}
              value={wispIntensity}
              onChange={event => setWispIntensity(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Flow Strength</span>
              <span className="font-medium text-purple-300">{flowStrength.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={flowStrength}
              onChange={event => setFlowStrength(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Decay</span>
              <span className="font-medium text-purple-300">{decay.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={2.5}
              step={0.05}
              value={decay}
              onChange={event => setDecay(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Falloff Start</span>
              <span className="font-medium text-purple-300">{falloffStart.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={2}
              step={0.05}
              value={falloffStart}
              onChange={event => setFalloffStart(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Fog Fall Speed</span>
              <span className="font-medium text-purple-300">{fogFallSpeed.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.1}
              max={1.2}
              step={0.05}
              value={fogFallSpeed}
              onChange={event => setFogFallSpeed(Number(event.target.value))}
              className="accent-purple-500 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
