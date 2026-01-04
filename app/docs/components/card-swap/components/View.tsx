"use client";

import { useState } from "react";
import { CardSwap, Card } from "@cybershoora/shoora-ui"

export default function View() {
  const [key, setKey] = useState(0);
  const [cardDistance, setCardDistance] = useState(60);
  const [verticalDistance, setVerticalDistance] = useState(70);
  const [delay, setDelay] = useState(5000);
  const [pauseOnHover, setPauseOnHover] = useState(false);
  const [skewAmount, setSkewAmount] = useState(6);
  const [easing, setEasing] = useState<'linear' | 'elastic'>('elastic');
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(400);

  return (
    <div className="space-y-8 p-4">
      <div style={{ height: '600px', position: 'relative', overflow: 'hidden' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
        <button
          onClick={() => setKey(prev => prev + 1)}
          className="absolute top-2 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors z-10"
          aria-label="Re-initialize CardSwap"
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
        <div key={key} className="relative w-full h-full flex items-center justify-center">
          <div style={{ transform: 'translate(-50%, 80%) scale(0.8)' , marginTop: "15rem", marginLeft: "15rem"}} className="absolute ">
            <CardSwap
              width={width}
              height={height}
              cardDistance={cardDistance}
              verticalDistance={verticalDistance}
              delay={delay}
              pauseOnHover={pauseOnHover}
              skewAmount={skewAmount}
              easing={easing}
            >
            <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6 rounded-xl border border-purple-400">
              <div className="flex flex-col items-center space-y-4">
                <img src="https://picsum.photos/seed/card1/300/200.jpg" alt="Card 1" className="w-full h-32 object-cover rounded-lg mb-3" />
                <h3 className="text-xl font-bold">Beautiful Landscapes</h3>
                <p className="text-sm opacity-90 text-center">Stunning natural scenery with breathtaking views and serene environments</p>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-green-600 to-teal-600 text-white p-6 rounded-xl border border-green-400">
              <div className="flex flex-col items-center space-y-4">
                <img src="https://picsum.photos/seed/card2/300/200.jpg" alt="Card 2" className="w-full h-32 object-cover rounded-lg mb-3" />
                <h3 className="text-xl font-bold">Modern Architecture</h3>
                <p className="text-sm opacity-90 text-center">Contemporary building designs with innovative structural concepts</p>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-6 rounded-xl border border-orange-400">
              <div className="flex flex-col items-center space-y-4">
                <img src="https://picsum.photos/seed/card3/300/200.jpg" alt="Card 3" className="w-full h-32 object-cover rounded-lg mb-3" />
                <h3 className="text-xl font-bold">Urban City Life</h3>
                <p className="text-sm opacity-90 text-center">Vibrant cityscapes with dynamic urban environments and modern living</p>
              </div>
            </Card>
          </CardSwap>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize CardSwap
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Card Distance</span>
              <span className="text-purple-300 font-medium">{cardDistance}px</span>
            </div>
            <input
              type="range"
              min="20"
              max="120"
              step="10"
              value={cardDistance}
              onChange={event => setCardDistance(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Vertical Distance</span>
              <span className="text-purple-300 font-medium">{verticalDistance}px</span>
            </div>
            <input
              type="range"
              min="20"
              max="120"
              step="10"
              value={verticalDistance}
              onChange={event => setVerticalDistance(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Delay</span>
              <span className="text-purple-300 font-medium">{delay}ms</span>
            </div>
            <input
              type="range"
              min="1000"
              max="10000"
              step="500"
              value={delay}
              onChange={event => setDelay(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Skew Amount</span>
              <span className="text-purple-300 font-medium">{skewAmount}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={skewAmount}
              onChange={event => setSkewAmount(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Width</span>
              <span className="text-purple-300 font-medium">{width}px</span>
            </div>
            <input
              type="range"
              min="300"
              max="600"
              step="50"
              value={width}
              onChange={event => setWidth(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Height</span>
              <span className="text-purple-300 font-medium">{height}px</span>
            </div>
            <input
              type="range"
              min="200"
              max="500"
              step="50"
              value={height}
              onChange={event => setHeight(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={pauseOnHover}
                onChange={event => setPauseOnHover(event.target.checked)}
                className="rounded bg-gray-800 border-gray-600 text-purple-500 focus:ring-purple-500"
              />
              <span>Pause on Hover</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Easing</label>
            <select
              value={easing}
              onChange={event => setEasing(event.target.value as 'linear' | 'elastic')}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="elastic">Elastic</option>
              <option value="linear">Linear</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
