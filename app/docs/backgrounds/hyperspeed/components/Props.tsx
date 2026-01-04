import React from 'react';

export default function Props() {
  const props = [
    {
      name: "distortion",
      type: "string",
      default: "turbulentDistortion",
      description: "Type of distortion effect - 'turbulentDistortion', 'mountainDistortion', 'xyDistortion', 'LongRaceDistortion', or 'deepDistortion'"
    },
    {
      name: "length",
      type: "number",
      default: 400,
      description: "Length of the road effect (100-1000)"
    },
    {
      name: "roadWidth",
      type: "number",
      default: 10,
      description: "Width of the road (5-20)"
    },
    {
      name: "islandWidth",
      type: "number",
      default: 2,
      description: "Width of road islands (1-10)"
    },
    {
      name: "lanesPerRoad",
      type: "number",
      default: 4,
      description: "Number of lanes per road (1-8)"
    },
    {
      name: "fov",
      type: "number",
      default: 90,
      description: "Field of view angle in degrees (60-120)"
    },
    {
      name: "fovSpeedUp",
      type: "number",
      default: 150,
      description: "FOV speed up value (100-200)"
    },
    {
      name: "speedUp",
      type: "number",
      default: 2,
      description: "Speed up multiplier (1-5)"
    },
    {
      name: "carLightsFade",
      type: "number",
      default: 0.4,
      description: "Fade factor for car lights (0.1-1)"
    },
    {
      name: "totalSideLightSticks",
      type: "number",
      default: 20,
      description: "Total number of side light sticks (10-50)"
    },
    {
      name: "lightPairsPerRoadWay",
      type: "number",
      default: 40,
      description: "Number of light pairs per roadway (20-100)"
    },
    {
      name: "shoulderLinesWidthPercentage",
      type: "number",
      default: 0.05,
      description: "Width percentage for shoulder lines (0.01-0.2)"
    },
    {
      name: "brokenLinesWidthPercentage",
      type: "number",
      default: 0.1,
      description: "Width percentage for broken lines (0.05-0.3)"
    },
    {
      name: "brokenLinesLengthPercentage",
      type: "number",
      default: 0.5,
      description: "Length percentage for broken lines (0.2-0.8)"
    },
    {
      name: "lightStickWidth",
      type: "number[]",
      default: "[0.12, 0.5]",
      description: "Width range for light sticks [min, max]"
    },
    {
      name: "lightStickHeight",
      type: "number[]",
      default: "[1.3, 1.7]",
      description: "Height range for light sticks [min, max]"
    },
    {
      name: "movingAwaySpeed",
      type: "number[]",
      default: "[60, 80]",
      description: "Speed range for objects moving away [min, max]"
    },
    {
      name: "movingCloserSpeed",
      type: "number[]",
      default: "[-120, -160]",
      description: "Speed range for objects moving closer [min, max]"
    },
    {
      name: "carLightsLength",
      type: "number[]",
      default: "[12, 80]",
      description: "Length range for car lights [min, max]"
    },
    {
      name: "carLightsRadius",
      type: "number[]",
      default: "[0.05, 0.14]",
      description: "Radius range for car lights [min, max]"
    },
    {
      name: "carWidthPercentage",
      type: "number[]",
      default: "[0.3, 0.5]",
      description: "Width percentage range for cars [min, max]"
    },
    {
      name: "carShiftX",
      type: "number[]",
      default: "[-0.8, 0.8]",
      description: "Horizontal shift range for cars [min, max]"
    },
    {
      name: "carFloorSeparation",
      type: "number[]",
      default: "[0, 5]",
      description: "Floor separation range for cars [min, max]"
    },
    {
      name: "roadColor",
      type: "string",
      default: "#080808",
      description: "Color of the road surface"
    },
    {
      name: "islandColor",
      type: "string",
      default: "#0a0a0a",
      description: "Color of road islands"
    },
    {
      name: "backgroundColor",
      type: "string",
      default: "#000000",
      description: "Background color of the scene"
    },
    {
      name: "shoulderLines",
      type: "string",
      default: "#FFFFFF",
      description: "Color of shoulder lines"
    },
    {
      name: "brokenLines",
      type: "string",
      default: "#FFFFFF",
      description: "Color of broken lines"
    },
    {
      name: "leftCars",
      type: "string[]",
      default: ["#D856BF", "#6750A2", "#C247AC"],
      description: "Array of colors for left-going cars"
    },
    {
      name: "rightCars",
      type: "string[]",
      default: ["#03B3C3", "#0E5EA5", "#324555"],
      description: "Array of colors for right-going cars"
    },
    {
      name: "sticks",
      type: "string",
      default: "#03B3C3",
      description: "Color of light sticks"
    },
    {
      name: "onSpeedUp",
      type: "function",
      default: "() => {}",
      description: "Callback function when speed up event occurs"
    },
    {
      name: "onSlowDown",
      type: "function",
      default: "() => {}",
      description: "Callback function when slow down event occurs"
    },
    {
      name: "className",
      type: "string",
      default: "custom-hyperspeed",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the hyperspeed container"
    },
    {
      name: "height",
      type: "string",
      default: "600px",
      description: "Height of the hyperspeed container"
    },
    {
      name: "quality",
      type: "string",
      default: "high",
      description: "Rendering quality - 'low', 'medium', or 'high'"
    }
  ];

  return (
    <>
      <h3 className="text-lg font-medium text-white mb-4">Props</h3>
      <div className="overflow-hidden border border-purple-300 rounded-lg bg-transparent">
        <table className="min-w-full divide-y divide-purple-300 bg-transparent">
          <thead className="bg-transparent">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-purple-300">
                Property
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-purple-300">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-purple-300">
                Default
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-purple-300">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-300 bg-transparent">
            {props.map((prop, index) => (
              <tr key={index} className="hover:bg-purple-300/10">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white border-r border-purple-300">
                  {prop.name}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300 border-r border-purple-300">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-500/20 text-purple-300">
                    {prop.type}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300 border-r border-purple-300">
                  <code className="bg-gray-800 px-2 py-1 rounded text-xs text-purple-300">
                    {prop.default}
                  </code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-300">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Dependencies Section */}
      <div className="mt-8">
        <h3 className="text-xl font-medium text-white mb-4">Dependencies</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-5 py-3 text-xs font-medium rounded-full bg-purple-900/50 text-purple-300 border border-purple-700">
            ogl
          </span>
          <span className="px-5 py-3 text-xs font-medium rounded-full bg-purple-900/50 text-purple-300 border border-purple-700">
            react
          </span>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-purple-300/20 pb-16">
        <p className="text-lg text-gray-400 text-center">
          Created with ❤️ by Cybershoora
        </p>
      </div>
    </>
  );
}