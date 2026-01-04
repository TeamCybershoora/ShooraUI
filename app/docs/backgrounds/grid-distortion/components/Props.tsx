import React from 'react';

export default function Props() {
  const props = [
    {
      name: "gridSize",
      type: "number",
      default: 20,
      description: "Size of the distortion grid (5-50)"
    },
    {
      name: "distortionAmount",
      type: "number",
      default: 0.5,
      description: "Amount of distortion effect (0-2)"
    },
    {
      name: "distortionSpeed",
      type: "number",
      default: 1,
      description: "Speed of distortion animation (0-5)"
    },
    {
      name: "waveAmplitude",
      type: "number",
      default: 0.1,
      description: "Amplitude of wave distortion (0-1)"
    },
    {
      name: "waveFrequency",
      type: "number",
      default: 2,
      description: "Frequency of wave distortion (0.1-10)"
    },
    {
      name: "mouseRadius",
      type: "number",
      default: 100,
      description: "Radius of mouse interaction effect (50-300)"
    },
    {
      name: "mouseStrength",
      type: "number",
      default: 0.5,
      description: "Strength of mouse interaction (0-2)"
    },
    {
      name: "color",
      type: "string",
      default: "#ffffff",
      description: "Color of the grid distortion effect"
    },
    {
      name: "opacity",
      type: "number",
      default: 0.8,
      description: "Opacity of the distortion effect (0-1)"
    },
    {
      name: "enableMouse",
      type: "boolean",
      default: true,
      description: "Enable or disable mouse interaction"
    },
    {
      name: "enableAnimation",
      type: "boolean",
      default: true,
      description: "Enable or disable animations"
    },
    {
      name: "gridType",
      type: "string",
      default: "square",
      description: "Type of grid - 'square', 'hexagon', or 'triangle'"
    },
    {
      name: "rotation",
      type: "number",
      default: 0,
      description: "Rotation angle of the grid (0-360)"
    },
    {
      name: "scale",
      type: "number",
      default: 1,
      description: "Scale factor for the grid (0.5-3)"
    },
    {
      name: "className",
      type: "string",
      default: "custom-grid-distortion",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the grid distortion container"
    },
    {
      name: "height",
      type: "string",
      default: "600px",
      description: "Height of the grid distortion container"
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