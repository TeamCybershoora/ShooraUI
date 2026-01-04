import React from 'react';

export default function Props() {
  const props = [
    {
      name: "children",
      type: "React.ReactNode",
      default: "Required",
      description: "Content to display inside the tilted card"
    },
    {
      name: "tiltAngle",
      type: "number",
      default: 15,
      description: "Maximum tilt angle in degrees"
    },
    {
      name: "perspective",
      type: "number",
      default: 1000,
      description: "Perspective value for 3D effect"
    },
    {
      name: "scale",
      type: "number",
      default: 1.05,
      description: "Scale factor on hover"
    },
    {
      name: "transitionSpeed",
      type: "number",
      default: 400,
      description: "Transition speed in milliseconds"
    },
    {
      name: "glowIntensity",
      type: "number",
      default: 0.5,
      description: "Intensity of glow effect (0-1)"
    },
    {
      name: "glowColor",
      type: "string",
      default: "rgba(139, 92, 246, 0.3)",
      description: "Color of the glow effect"
    },
    {
      name: "enableGlow",
      type: "boolean",
      default: true,
      description: "Enable or disable glow effect"
    },
    {
      name: "enableShadow",
      type: "boolean",
      default: true,
      description: "Enable or disable shadow effect"
    },
    {
      name: "shadowColor",
      type: "string",
      default: "rgba(0, 0, 0, 0.3)",
      description: "Color of the shadow effect"
    },
    {
      name: "className",
      type: "string",
      default: "custom-tilted-card",
      description: "Additional CSS class names for styling"
    },
    {
      name: "onTilt",
      type: "function",
      default: "() => {}",
      description: "Callback function when card is tilted"
    },
    {
      name: "onHover",
      type: "function",
      default: "() => {}",
      description: "Callback function when card is hovered"
    },
    {
      name: "onLeave",
      type: "function",
      default: "() => {}",
      description: "Callback function when mouse leaves card"
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