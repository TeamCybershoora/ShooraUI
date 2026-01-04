import React from 'react';

export default function Props() {
  const props = [
    {
      name: "scale",
      type: "number",
      default: 1.5,
      description: "Overall scale factor for the terminal display (0.5-3)"
    },
    {
      name: "gridMul",
      type: "number[]",
      default: [2, 1],
      description: "Grid multiplier for X and Y axes (1-5 for each axis)"
    },
    {
      name: "digitSize",
      type: "number",
      default: 1.2,
      description: "Size of individual terminal digits (0.5-3)"
    },
    {
      name: "timeScale",
      type: "number",
      default: 1,
      description: "Time scale for animations and effects (0-2)"
    },
    {
      name: "pause",
      type: "boolean",
      default: false,
      description: "Pause or resume all animations"
    },
    {
      name: "scanlineIntensity",
      type: "number",
      default: 1,
      description: "Intensity of scanline effect (0-2)"
    },
    {
      name: "glitchAmount",
      type: "number",
      default: 1,
      description: "Amount of glitch distortion effect (0-2)"
    },
    {
      name: "flickerAmount",
      type: "number",
      default: 1,
      description: "Intensity of screen flicker effect (0-2)"
    },
    {
      name: "noiseAmp",
      type: "number",
      default: 1,
      description: "Amplitude of noise overlay (0-2)"
    },
    {
      name: "chromaticAberration",
      type: "number",
      default: 0,
      description: "Chromatic aberration effect strength (0-0.01)"
    },
    {
      name: "dither",
      type: "number | boolean",
      default: 0,
      description: "Dithering effect amount or boolean to enable/disable (0-1 or true/false)"
    },
    {
      name: "curvature",
      type: "number",
      default: 0,
      description: "Screen curvature effect (0-0.5)"
    },
    {
      name: "tint",
      type: "string",
      default: "#ffffff",
      description: "Color tint for the terminal display"
    },
    {
      name: "mouseReact",
      type: "boolean",
      default: true,
      description: "Enable or disable mouse interaction effects"
    },
    {
      name: "mouseStrength",
      type: "number",
      default: 0.5,
      description: "Strength of mouse interaction effects (0-2)"
    },
    {
      name: "pageLoadAnimation",
      type: "boolean",
      default: false,
      description: "Enable page load animation effect"
    },
    {
      name: "brightness",
      type: "number",
      default: 1,
      description: "Overall brightness of the display (0.5-2)"
    },
    {
      name: "className",
      type: "string",
      default: "custom-faulty-terminal",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the terminal container"
    },
    {
      name: "height",
      type: "string",
      default: "600px",
      description: "Height of the terminal container"
    },
    {
      name: "dpr",
      type: "number",
      default: window.devicePixelRatio,
      description: "Device pixel ratio for rendering quality"
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
                      : prop.default === window.devicePixelRatio
                      ? 'window.devicePixelRatio'
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