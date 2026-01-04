import React from 'react';

export default function Props() {
  const props = [
    {
      name: "lineCount",
      type: "number",
      default: 50,
      description: "Number of floating lines (10-200)"
    },
    {
      name: "lineWidth",
      type: "number",
      default: 2,
      description: "Width of each line in pixels (0.5-10)"
    },
    {
      name: "lineLength",
      type: "number",
      default: 100,
      description: "Maximum length of lines in pixels (20-500)"
    },
    {
      name: "speed",
      type: "number",
      default: 1,
      description: "Animation speed multiplier (0.1-5)"
    },
    {
      name: "opacity",
      type: "number",
      default: 0.6,
      description: "Base opacity of lines (0.1-1)"
    },
    {
      name: "color",
      type: "string",
      default: "#ffffff",
      description: "Color of the floating lines"
    },
    {
      name: "gradient",
      type: "boolean",
      default: true,
      description: "Enable or disable gradient effect on lines"
    },
    {
      name: "gradientColors",
      type: "string[]",
      default: ["#ffffff", "#000000"],
      description: "Colors for gradient effect when enabled"
    },
    {
      name: "direction",
      type: "string",
      default: "random",
      description: "Direction of line movement - 'horizontal', 'vertical', 'diagonal', or 'random'"
    },
    {
      name: "waveAmplitude",
      type: "number",
      default: 20,
      description: "Amplitude of wave motion (0-100)"
    },
    {
      name: "waveFrequency",
      type: "number",
      default: 0.01,
      description: "Frequency of wave motion (0.001-0.1)"
    },
    {
      name: "mouseInteraction",
      type: "boolean",
      default: true,
      description: "Enable or disable mouse interaction effects"
    },
    {
      name: "mouseRadius",
      type: "number",
      default: 150,
      description: "Radius of mouse interaction effect in pixels (50-300)"
    },
    {
      name: "mouseForce",
      type: "number",
      default: 0.5,
      description: "Strength of mouse interaction force (0-2)"
    },
    {
      name: "fadeEdges",
      type: "boolean",
      default: true,
      description: "Enable or disable edge fading effect"
    },
    {
      name: "fadeDistance",
      type: "number",
      default: 50,
      description: "Distance from edges to start fading (0-200)"
    },
    {
      name: "pulse",
      type: "boolean",
      default: false,
      description: "Enable or disable pulsing animation"
    },
    {
      name: "pulseSpeed",
      type: "number",
      default: 1,
      description: "Speed of pulse animation (0.1-3)"
    },
    {
      name: "className",
      type: "string",
      default: "custom-floating-lines",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the floating lines container"
    },
    {
      name: "height",
      type: "string",
      default: "600px",
      description: "Height of the floating lines container"
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
                    {Array.isArray(prop.default) 
                      ? `[${prop.default.map(c => `"${c}"`).join(', ')}]`
                      : prop.default
                    }
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