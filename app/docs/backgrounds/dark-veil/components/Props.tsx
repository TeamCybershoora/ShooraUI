import React from 'react';

export default function Props() {
  const props = [
    {
      name: "hueShift",
      type: "number",
      default: 0,
      description: "Hue shift amount for color manipulation (0-360 degrees)"
    },
    {
      name: "noiseIntensity",
      type: "number",
      default: 0,
      description: "Intensity of noise effect overlay (0-0.1)"
    },
    {
      name: "scanlineIntensity",
      type: "number",
      default: 0,
      description: "Intensity of scanline effect (0-1)"
    },
    {
      name: "speed",
      type: "number",
      default: 0.5,
      description: "Animation speed for dynamic effects (0-2)"
    },
    {
      name: "scanlineFrequency",
      type: "number",
      default: 0,
      description: "Frequency of scanlines (0-10)"
    },
    {
      name: "warpAmount",
      type: "number",
      default: 0,
      description: "Amount of screen warp distortion (0-1)"
    },
    {
      name: "resolutionScale",
      type: "number",
      default: 1,
      description: "Resolution scaling factor (0.5-2)"
    },
    {
      name: "className",
      type: "string",
      default: "custom-dark-veil",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the dark veil container"
    },
    {
      name: "height",
      type: "string",
      default: "600px",
      description: "Height of the dark veil container"
    },
    {
      name: "enableAnimation",
      type: "boolean",
      default: true,
      description: "Enable or disable animation effects"
    },
    {
      name: "opacity",
      type: "number",
      default: 1,
      description: "Overall opacity of the dark veil effect (0-1)"
    },
    {
      name: "blendMode",
      type: "string",
      default: "multiply",
      description: "CSS blend mode for the dark veil effect"
    },
    {
      name: "enableNoise",
      type: "boolean",
      default: true,
      description: "Enable or disable noise effect"
    },
    {
      name: "enableScanlines",
      type: "boolean",
      default: true,
      description: "Enable or disable scanline effect"
    },
    {
      name: "enableWarp",
      type: "boolean",
      default: true,
      description: "Enable or disable warp distortion effect"
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