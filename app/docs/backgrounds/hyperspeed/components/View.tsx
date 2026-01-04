"use client";

import { useState } from "react";
import { Hyperspeed } from "@cybershoora/shoora-ui"

export default function View() {
  const [distortion, setDistortion] = useState('turbulentDistortion');
  const [length, setLength] = useState(400);
  const [roadWidth, setRoadWidth] = useState(10);
  const [islandWidth, setIslandWidth] = useState(2);
  const [lanesPerRoad, setLanesPerRoad] = useState(4);
  const [fov, setFov] = useState(90);
  const [fovSpeedUp, setFovSpeedUp] = useState(150);
  const [speedUp, setSpeedUp] = useState(2);
  const [carLightsFade, setCarLightsFade] = useState(0.4);
  const [totalSideLightSticks, setTotalSideLightSticks] = useState(20);
  const [lightPairsPerRoadWay, setLightPairsPerRoadWay] = useState(40);
  const [shoulderLinesWidthPercentage, setShoulderLinesWidthPercentage] = useState(0.05);
  const [brokenLinesWidthPercentage, setBrokenLinesWidthPercentage] = useState(0.1);
  const [brokenLinesLengthPercentage, setBrokenLinesLengthPercentage] = useState(0.5);
  const [lightStickWidth, setLightStickWidth] = useState([0.12, 0.5]);
  const [lightStickHeight, setLightStickHeight] = useState([1.3, 1.7]);
  const [movingAwaySpeed, setMovingAwaySpeed] = useState([60, 80]);
  const [movingCloserSpeed, setMovingCloserSpeed] = useState([-120, -160]);
  const [carLightsLength, setCarLightsLength] = useState([400 * 0.03, 400 * 0.2]);
  const [carLightsRadius, setCarLightsRadius] = useState([0.05, 0.14]);
  const [carWidthPercentage, setCarWidthPercentage] = useState([0.3, 0.5]);
  const [carShiftX, setCarShiftX] = useState([-0.8, 0.8]);
  const [carFloorSeparation, setCarFloorSeparation] = useState([0, 5]);
  const [roadColor, setRoadColor] = useState('#080808');
  const [islandColor, setIslandColor] = useState('#0a0a0a');
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [shoulderLines, setShoulderLines] = useState('#FFFFFF');
  const [brokenLines, setBrokenLines] = useState('#FFFFFF');
  const [leftCars, setLeftCars] = useState(['#D856BF', '#6750A2', '#C247AC']);
  const [rightCars, setRightCars] = useState(['#03B3C3', '#0E5EA5', '#324555']);
  const [sticks, setSticks] = useState('#03B3C3');

  return (
    <div className="space-y-8 p-4">
      <div className="w-full h-[600px] relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mb-8">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion,
            length,
            roadWidth,
            islandWidth,
            lanesPerRoad,
            fov,
            fovSpeedUp,
            speedUp,
            carLightsFade,
            totalSideLightSticks,
            lightPairsPerRoadWay,
            shoulderLinesWidthPercentage,
            brokenLinesWidthPercentage,
            brokenLinesLengthPercentage,
            colors: {
              roadColor: parseInt(roadColor.replace('#', '0x')),
              islandColor: parseInt(islandColor.replace('#', '0x')),
              background: parseInt(backgroundColor.replace('#', '0x')),
              shoulderLines: parseInt(shoulderLines.replace('#', '0x')),
              brokenLines: parseInt(brokenLines.replace('#', '0x')),
              leftCars: leftCars.map(c => parseInt(c.replace('#', '0x'))),
              rightCars: rightCars.map(c => parseInt(c.replace('#', '0x'))),
              sticks: parseInt(sticks.replace('#', '0x'))
            }
          }}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
          </svg>
          Customize Hyperspeed
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Distortion</label>
            <select
              value={distortion}
              onChange={event => setDistortion(event.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="turbulentDistortion">Turbulent</option>
              <option value="mountainDistortion">Mountain</option>
              <option value="xyDistortion">XY</option>
              <option value="LongRaceDistortion">Long Race</option>
              <option value="deepDistortion">Deep</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Length</span>
              <span className="text-purple-300 font-medium">{length}</span>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={length}
              onChange={event => setLength(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Road Width</span>
              <span className="text-purple-300 font-medium">{roadWidth}</span>
            </div>
            <input
              type="range"
              min="5"
              max="20"
              step="1"
              value={roadWidth}
              onChange={event => setRoadWidth(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Island Width</span>
              <span className="text-purple-300 font-medium">{islandWidth}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="0.5"
              value={islandWidth}
              onChange={event => setIslandWidth(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Lanes Per Road</span>
              <span className="text-purple-300 font-medium">{lanesPerRoad}</span>
            </div>
            <input
              type="range"
              min="1"
              max="8"
              step="1"
              value={lanesPerRoad}
              onChange={event => setLanesPerRoad(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Field of View</span>
              <span className="text-purple-300 font-medium">{fov}°</span>
            </div>
            <input
              type="range"
              min="60"
              max="120"
              step="5"
              value={fov}
              onChange={event => setFov(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>FOV Speed Up</span>
              <span className="text-purple-300 font-medium">{fovSpeedUp}</span>
            </div>
            <input
              type="range"
              min="100"
              max="200"
              step="10"
              value={fovSpeedUp}
              onChange={event => setFovSpeedUp(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Speed Up</span>
              <span className="text-purple-300 font-medium">{speedUp}</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="0.1"
              value={speedUp}
              onChange={event => setSpeedUp(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Car Lights Fade</span>
              <span className="text-purple-300 font-medium">{carLightsFade.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={carLightsFade}
              onChange={event => setCarLightsFade(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Total Side Light Sticks</span>
              <span className="text-purple-300 font-medium">{totalSideLightSticks}</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={totalSideLightSticks}
              onChange={event => setTotalSideLightSticks(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Light Pairs Per Road Way</span>
              <span className="text-purple-300 font-medium">{lightPairsPerRoadWay}</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              step="10"
              value={lightPairsPerRoadWay}
              onChange={event => setLightPairsPerRoadWay(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Shoulder Lines Width %</span>
              <span className="text-purple-300 font-medium">{(shoulderLinesWidthPercentage * 100).toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.2"
              step="0.01"
              value={shoulderLinesWidthPercentage}
              onChange={event => setShoulderLinesWidthPercentage(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Broken Lines Width %</span>
              <span className="text-purple-300 font-medium">{(brokenLinesWidthPercentage * 100).toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="0.3"
              step="0.01"
              value={brokenLinesWidthPercentage}
              onChange={event => setBrokenLinesWidthPercentage(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Broken Lines Length %</span>
              <span className="text-purple-300 font-medium">{(brokenLinesLengthPercentage * 100).toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="0.8"
              step="0.05"
              value={brokenLinesLengthPercentage}
              onChange={event => setBrokenLinesLengthPercentage(Number(event.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Road Color</label>
            <input
              type="color"
              value={roadColor}
              onChange={event => setRoadColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Island Color</label>
            <input
              type="color"
              value={islandColor}
              onChange={event => setIslandColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Background Color</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={event => setBackgroundColor(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Shoulder Lines Color</label>
            <input
              type="color"
              value={shoulderLines}
              onChange={event => setShoulderLines(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Broken Lines Color</label>
            <input
              type="color"
              value={brokenLines}
              onChange={event => setBrokenLines(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Left Cars (comma-separated)</label>
            <input
              type="text"
              value={leftCars.join(',')}
              onChange={event => setLeftCars(event.target.value.split(',').map(c => c.trim()))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="#D856BF,#6750A2,#C247AC"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Right Cars (comma-separated)</label>
            <input
              type="text"
              value={rightCars.join(',')}
              onChange={event => setRightCars(event.target.value.split(',').map(c => c.trim()))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="#03B3C3,#0E5EA5,#324555"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Sticks Color</label>
            <input
              type="color"
              value={sticks}
              onChange={event => setSticks(event.target.value)}
              className="w-full h-10 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
