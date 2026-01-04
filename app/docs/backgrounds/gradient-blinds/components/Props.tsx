import React from 'react';

export default function Props() {
  const props = [
    {
      name: "gradientColors",
      type: "string[]",
      default: ["#FF9FFC", "#5227FF"],
      description: "Array of gradient colors (minimum 2 colors)"
    },
    {
      name: "angle",
      type: "number",
      default: 0,
      description: "Angle of gradient blinds in degrees (0-360)"
    },
    {
      name: "noise",
      type: "number",
      default: 0.3,
      description: "Noise intensity for texture effect (0-1)"
    },
    {
      name: "blindCount",
      type: "number",
      default: 12,
      description: "Number of gradient blinds (1-50)"
    },
    {
      name: "blindMinWidth",
      type: "number",
      default: 50,
      description: "Minimum width of each blind in pixels (10-200)"
    },
    {
      name: "spotlightRadius",
      type: "number",
      default: 0.5,
      description: "Radius of spotlight effect (0-2)"
    },
    {
      name: "spotlightSoftness",
      type: "number",
      default: 1,
      description: "Softness of spotlight edges (0.1-5)"
    },
    {
      name: "spotlightOpacity",
      type: "number",
      default: 1,
      description: "Opacity of spotlight effect (0-2)"
    },
    {
      name: "mouseDampening",
      type: "number",
      default: 0.15,
      description: "Mouse interaction dampening factor (0-1)"
    },
    {
      name: "distortAmount",
      type: "number",
      default: 0,
      description: "Distortion amount for visual effects (0-5)"
    },
    {
      name: "shineDirection",
      type: "string",
      default: "left",
      description: "Direction of shine effect - 'left' or 'right'"
    },
    {
      name: "mixBlendMode",
      type: "string",
      default: "lighten",
      description: "CSS blend mode for mixing effects"
    },
    {
      name: "mirrorGradient",
      type: "boolean",
      default: false,
      description: "Enable or disable gradient mirroring"
    },
    {
      name: "paused",
      type: "boolean",
      default: false,
      description: "Pause or resume animations"
    },
    {
      name: "className",
      type: "string",
      default: "custom-gradient-blinds",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the gradient blinds container"
    },
    {
      name: "height",
      type: "string",
      default: "600px",
      description: "Height of the gradient blinds container"
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