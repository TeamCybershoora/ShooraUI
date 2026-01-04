"use client";

import { useState } from "react";
import { FaultyTerminal } from "@cybershoora/shoora-ui"

export default function View() {
  const [scale, setScale] = useState(1.5);
  const [gridMul, setGridMul] = useState<[number, number]>([2, 1]);
  const [digitSize, setDigitSize] = useState(1.2);
  const [timeScale, setTimeScale] = useState(1);
  const [pause, setPause] = useState(false);
  const [scanlineIntensity, setScanlineIntensity] = useState(1);
  const [glitchAmount, setGlitchAmount] = useState(1);
  const [flickerAmount, setFlickerAmount] = useState(1);
  const [noiseAmp, setNoiseAmp] = useState(1);
  const [chromaticAberration, setChromaticAberration] = useState(0);
  const [dither, setDither] = useState(0);
  const [curvature, setCurvature] = useState(0);
  const [tint, setTint] = useState("#3fe6e9");
  const [mouseReact, setMouseReact] = useState(true);
  const [mouseStrength, setMouseStrength] = useState(0.5);
  const [pageLoadAnimation, setPageLoadAnimation] = useState(false);
  const [brightness, setBrightness] = useState(1);

  return (
    <div className="space-y-8 p-4">
      <div style={{ width: '100%', height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <FaultyTerminal
          scale={scale}
          gridMul={gridMul}
          digitSize={digitSize}
          timeScale={timeScale}
          pause={pause}
          scanlineIntensity={scanlineIntensity}
          glitchAmount={glitchAmount}
          flickerAmount={flickerAmount}
          noiseAmp={noiseAmp}
          chromaticAberration={chromaticAberration}
          dither={dither}
          curvature={curvature}
          tint={tint}
          mouseReact={mouseReact}
          mouseStrength={mouseStrength}
          pageLoadAnimation={pageLoadAnimation}
          brightness={brightness}
          className=""
          style={{}}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Faulty Terminal
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Tint Color</label>
            <input
              type="color"
              value={tint}
              onChange={event => setTint(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scale</span>
              <span className="text-purple-300 font-medium">{scale.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={scale}
              onChange={event => setScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Grid Multiplier X</span>
              <span className="text-purple-300 font-medium">{gridMul[0]}</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={gridMul[0]}
              onChange={event => setGridMul([Number(event.target.value), gridMul[1]])}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Grid Multiplier Y</span>
              <span className="text-purple-300 font-medium">{gridMul[1]}</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={gridMul[1]}
              onChange={event => setGridMul([gridMul[0], Number(event.target.value)])}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Digit Size</span>
              <span className="text-purple-300 font-medium">{digitSize.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={digitSize}
              onChange={event => setDigitSize(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Time Scale</span>
              <span className="text-purple-300 font-medium">{timeScale.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={timeScale}
              onChange={event => setTimeScale(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Scanline Intensity</span>
              <span className="text-purple-300 font-medium">{scanlineIntensity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={scanlineIntensity}
              onChange={event => setScanlineIntensity(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Glitch Amount</span>
              <span className="text-purple-300 font-medium">{glitchAmount.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={glitchAmount}
              onChange={event => setGlitchAmount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Flicker Amount</span>
              <span className="text-purple-300 font-medium">{flickerAmount.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={flickerAmount}
              onChange={event => setFlickerAmount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Noise Amplitude</span>
              <span className="text-purple-300 font-medium">{noiseAmp.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={noiseAmp}
              onChange={event => setNoiseAmp(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Chromatic Aberration</span>
              <span className="text-purple-300 font-medium">{chromaticAberration.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.01"
              step="0.001"
              value={chromaticAberration}
              onChange={event => setChromaticAberration(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Dither</span>
              <span className="text-purple-300 font-medium">{dither.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={dither}
              onChange={event => setDither(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Curvature</span>
              <span className="text-purple-300 font-medium">{curvature.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.5"
              step="0.05"
              value={curvature}
              onChange={event => setCurvature(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Mouse Strength</span>
              <span className="text-purple-300 font-medium">{mouseStrength.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={mouseStrength}
              onChange={event => setMouseStrength(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Brightness</span>
              <span className="text-purple-300 font-medium">{brightness.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={brightness}
              onChange={event => setBrightness(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={pause}
                onChange={event => setPause(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Pause Animation</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={mouseReact}
                onChange={event => setMouseReact(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Mouse Reaction</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={pageLoadAnimation}
                onChange={event => setPageLoadAnimation(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Page Load Animation</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
