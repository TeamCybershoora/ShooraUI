import React from 'react';

export default function Props() {
  const props = [
    {
      name: "beamWidth",
      type: "number",
      default: 2,
      description: "Width of each beam (0.5-10)"
    },
    {
      name: "beamHeight",
      type: "number",
      default: 15,
      description: "Height of each beam (5-50)"
    },
    {
      name: "beamNumber",
      type: "number",
      default: 12,
      description: "Number of beams to display (1-50)"
    },
    {
      name: "lightColor",
      type: "string",
      default: "#ffffff",
      description: "Color of the beam light in hex format"
    },
    {
      name: "speed",
      type: "number",
      default: 2,
      description: "Animation speed of the beams (0.1-10)"
    },
    {
      name: "noiseIntensity",
      type: "number",
      default: 1.75,
      description: "Intensity of the noise effect (0-5)"
    },
    {
      name: "scale",
      type: "number",
      default: 0.2,
      description: "Scale factor for the beams (0.01-2)"
    },
    {
      name: "rotation",
      type: "number",
      default: 0,
      description: "Rotation angle of the beams in degrees (0-360)"
    },
    {
      name: "className",
      type: "string",
      default: "custom-beams",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the beams container"
    },
    {
      name: "height",
      type: "string",
      default: "600px",
      description: "Height of the beams container"
    },
    {
      name: "enableAnimation",
      type: "boolean",
      default: true,
      description: "Enable or disable beam animation"
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
      default: 0.8,
      description: "Opacity of the beams (0-1)"
    },
    {
      name: "blurAmount",
      type: "number",
      default: 0,
      description: "Blur effect amount for the beams (0-10)"
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