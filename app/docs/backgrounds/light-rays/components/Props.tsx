import React from 'react';

export default function Props() {
  const props = [
    {
      name: "raysOrigin",
      type: "string",
      default: "top-center",
      description: "Origin point for light rays - 'top-center', 'top-left', 'top-right', 'left', 'right', 'bottom-center', 'bottom-left', 'bottom-right'"
    },
    {
      name: "raysColor",
      type: "string",
      default: "#00ffff",
      description: "Color of the light rays in hex format"
    },
    {
      name: "raysSpeed",
      type: "number",
      default: 1.5,
      description: "Animation speed of the light rays (0.1-5)"
    },
    {
      name: "lightSpread",
      type: "number",
      default: 0.8,
      description: "Spread of the light rays (0.1-3)"
    },
    {
      name: "rayLength",
      type: "number",
      default: 1.2,
      description: "Length of the light rays (0.5-5)"
    },
    {
      name: "followMouse",
      type: "boolean",
      default: true,
      description: "Enable or disable mouse following for light rays"
    },
    {
      name: "mouseInfluence",
      type: "number",
      default: 0.1,
      description: "Influence of mouse movement on light rays (0-1)"
    },
    {
      name: "noiseAmount",
      type: "number",
      default: 0.1,
      description: "Amount of noise effect in light rays (0-0.5)"
    },
    {
      name: "distortion",
      type: "number",
      default: 0.05,
      description: "Distortion amount for light rays (0-0.2)"
    },
    {
      name: "pulsating",
      type: "boolean",
      default: false,
      description: "Enable or disable pulsating effect"
    },
    {
      name: "fadeDistance",
      type: "number",
      default: 1.0,
      description: "Distance at which light rays fade out (0.1-3)"
    },
    {
      name: "saturation",
      type: "number",
      default: 1.0,
      description: "Color saturation of light rays (0-2)"
    },
    {
      name: "className",
      type: "string",
      default: "custom-rays",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of light rays container"
    },
    {
      name: "height",
      type: "string",
      default: "600px",
      description: "Height of light rays container"
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