import React from 'react';

export default function Props() {
  const props = [
    {
      name: "mouseRepulsion",
      type: "boolean",
      default: true,
      description: "Enable or disable mouse repulsion effect on stars"
    },
    {
      name: "mouseInteraction",
      type: "boolean",
      default: true,
      description: "Enable or disable mouse interaction with the galaxy"
    },
    {
      name: "density",
      type: "number",
      default: 1.5,
      description: "Star density multiplier (0.5-3)"
    },
    {
      name: "glowIntensity",
      type: "number",
      default: 0.5,
      description: "Intensity of star glow effect (0-2)"
    },
    {
      name: "saturation",
      type: "number",
      default: 0.8,
      description: "Color saturation of the galaxy (0-2)"
    },
    {
      name: "hueShift",
      type: "number",
      default: 240,
      description: "Hue shift for color adjustment in degrees (0-360)"
    },
    {
      name: "starSpeed",
      type: "number",
      default: 0.5,
      description: "Speed of star movement (0-2)"
    },
    {
      name: "speed",
      type: "number",
      default: 1.0,
      description: "Overall animation speed multiplier (0-3)"
    },
    {
      name: "twinkleIntensity",
      type: "number",
      default: 0.3,
      description: "Intensity of star twinkling effect (0-1)"
    },
    {
      name: "rotationSpeed",
      type: "number",
      default: 0.1,
      description: "Speed of galaxy rotation (0-0.5)"
    },
    {
      name: "repulsionStrength",
      type: "number",
      default: 2,
      description: "Strength of mouse repulsion effect (0-10)"
    },
    {
      name: "autoCenterRepulsion",
      type: "number",
      default: 0,
      description: "Auto center repulsion strength (0-5)"
    },
    {
      name: "transparent",
      type: "boolean",
      default: true,
      description: "Enable or disable transparency in the galaxy"
    },
    {
      name: "disableAnimation",
      type: "boolean",
      default: false,
      description: "Disable all animations for static display"
    },
    {
      name: "focal",
      type: "number[]",
      default: [0.5, 0.5],
      description: "Focal point coordinates [x, y] (0-1 for each axis)"
    },
    {
      name: "rotation",
      type: "number[]",
      default: [1.0, 0.0],
      description: "Rotation angles [x, y] in radians (-2 to 2 for each axis)"
    },
    {
      name: "className",
      type: "string",
      default: "custom-galaxy",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the galaxy container"
    },
    {
      name: "height",
      type: "string",
      default: "600px",
      description: "Height of the galaxy container"
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