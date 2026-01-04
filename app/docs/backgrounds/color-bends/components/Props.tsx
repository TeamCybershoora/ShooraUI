import React from 'react';

export default function Props() {
  const props = [
    {
      name: "colors",
      type: "string[]",
      default: ["#ff5c7a", "#8a5cff", "#00ffd1"],
      description: "Array of colors for the gradient effect (1-8 colors)"
    },
    {
      name: "rotation",
      type: "number",
      default: 30,
      description: "Rotation angle of the gradient in degrees (0-360)"
    },
    {
      name: "speed",
      type: "number",
      default: 0.3,
      description: "Animation speed of the color blends (0-2)"
    },
    {
      name: "scale",
      type: "number",
      default: 1.2,
      description: "Scale factor for the gradient (0.1-3)"
    },
    {
      name: "frequency",
      type: "number",
      default: 2.8,
      description: "Frequency of the color blending pattern (0.1-5)"
    },
    {
      name: "warpStrength",
      type: "number",
      default: 1.2,
      description: "Strength of the warp effect (0-3)"
    },
    {
      name: "mouseInfluence",
      type: "number",
      default: 0.8,
      description: "How much mouse movement affects the gradient (0-2)"
    },
    {
      name: "parallax",
      type: "number",
      default: 0.6,
      description: "Parallax effect intensity (0-2)"
    },
    {
      name: "noise",
      type: "number",
      default: 0.08,
      description: "Noise effect intensity (0-0.5)"
    },
    {
      name: "transparent",
      type: "boolean",
      default: true,
      description: "Enable or disable transparency in the gradient"
    },
    {
      name: "className",
      type: "string",
      default: "custom-color-bends",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the color blends container"
    },
    {
      name: "height",
      type: "string",
      default: "500px",
      description: "Height of the color blends container"
    },
    {
      name: "enableAnimation",
      type: "boolean",
      default: true,
      description: "Enable or disable gradient animation"
    },
    {
      name: "animationType",
      type: "string",
      default: "continuous",
      description: "Type of animation - 'continuous', 'pulse', or 'wave'"
    },
    {
      name: "opacity",
      type: "number",
      default: 1,
      description: "Opacity of the gradient (0-1)"
    },
    {
      name: "blendMode",
      type: "string",
      default: "normal",
      description: "CSS blend mode for the gradient effect"
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