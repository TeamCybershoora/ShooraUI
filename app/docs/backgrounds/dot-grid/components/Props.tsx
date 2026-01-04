import React from 'react';

export default function Props() {
  const props = [
    {
      name: "dotSize",
      type: "number",
      default: 10,
      description: "Size of individual dots in pixels (2-50)"
    },
    {
      name: "gap",
      type: "number",
      default: 15,
      description: "Gap between dots in pixels (5-100)"
    },
    {
      name: "baseColor",
      type: "string",
      default: "#5227FF",
      description: "Base color of the dots when inactive"
    },
    {
      name: "activeColor",
      type: "string",
      default: "#5227FF",
      description: "Color of the dots when active/interacting"
    },
    {
      name: "proximity",
      type: "number",
      default: 120,
      description: "Distance for mouse proximity detection in pixels (50-300)"
    },
    {
      name: "shockRadius",
      type: "number",
      default: 250,
      description: "Radius of shock wave effect in pixels (100-500)"
    },
    {
      name: "shockStrength",
      type: "number",
      default: 5,
      description: "Strength of the shock wave effect (1-20)"
    },
    {
      name: "resistance",
      type: "number",
      default: 750,
      description: "Resistance factor for dot movement (100-2000)"
    },
    {
      name: "returnDuration",
      type: "number",
      default: 1.5,
      description: "Duration for dots to return to original position in seconds (0.5-5)"
    },
    {
      name: "speedTrigger",
      type: "number",
      default: 100,
      description: "Speed threshold for triggering effects (50-500)"
    },
    {
      name: "maxSpeed",
      type: "number",
      default: 5000,
      description: "Maximum speed for dot animations (1000-10000)"
    },
    {
      name: "className",
      type: "string",
      default: "custom-dot-grid",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the dot grid container"
    },
    {
      name: "height",
      type: "string",
      default: "600px",
      description: "Height of the dot grid container"
    },
    {
      name: "enableAnimation",
      type: "boolean",
      default: true,
      description: "Enable or disable dot animations"
    },
    {
      name: "enableMouseInteraction",
      type: "boolean",
      default: true,
      description: "Enable or disable mouse interaction effects"
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