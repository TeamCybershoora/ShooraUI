import React from 'react';

export default function Props() {
  const props = [
    {
      name: "waveColor",
      type: "number[]",
      default: [0.5, 0.5, 0.5],
      description: "RGB color values for the wave effect (0-1 range for each channel)"
    },
    {
      name: "disableAnimation",
      type: "boolean",
      default: false,
      description: "Disable or enable the wave animation"
    },
    {
      name: "enableMouseInteraction",
      type: "boolean",
      default: true,
      description: "Enable or disable mouse interaction with the dither effect"
    },
    {
      name: "mouseRadius",
      type: "number",
      default: 0.3,
      description: "Radius of mouse interaction effect (0.1-2)"
    },
    {
      name: "colorNum",
      type: "number",
      default: 4,
      description: "Number of colors in the dither palette (2-16)"
    },
    {
      name: "waveAmplitude",
      type: "number",
      default: 0.3,
      description: "Amplitude of the wave effect (0-1)"
    },
    {
      name: "waveFrequency",
      type: "number",
      default: 3,
      description: "Frequency of the wave pattern (0.1-10)"
    },
    {
      name: "waveSpeed",
      type: "number",
      default: 0.05,
      description: "Speed of the wave animation (0-0.5)"
    },
    {
      name: "pixelSize",
      type: "number",
      default: 2,
      description: "Size of individual pixels in the dither effect (1-10)"
    },
    {
      name: "className",
      type: "string",
      default: "custom-dither",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the dither container"
    },
    {
      name: "height",
      type: "string",
      default: "600px",
      description: "Height of the dither container"
    },
    {
      name: "ditherType",
      type: "string",
      default: "ordered",
      description: "Type of dithering - 'ordered', 'floyd-steinberg', or 'random'"
    },
    {
      name: "opacity",
      type: "number",
      default: 1,
      description: "Overall opacity of the dither effect (0-1)"
    },
    {
      name: "blendMode",
      type: "string",
      default: "normal",
      description: "CSS blend mode for the dither effect"
    },
    {
      name: "enableGradient",
      type: "boolean",
      default: true,
      description: "Enable or disable gradient overlay"
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
                      ? `[${prop.default.map(c => c).join(', ')}]`
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
            three
          </span>
          <span className="px-5 py-3 text-xs font-medium rounded-full bg-purple-900/50 text-purple-300 border border-purple-700">
            @react-three/fiber
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