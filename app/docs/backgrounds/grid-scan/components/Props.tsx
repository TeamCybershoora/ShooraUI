import React from 'react';

export default function Props() {
  const props = [
    {
      name: "sensitivity",
      type: "number",
      default: 0.55,
      description: "Sensitivity of the grid scan effect (0-1)"
    },
    {
      name: "lineThickness",
      type: "number",
      default: 1,
      description: "Thickness of grid lines (0.1-5)"
    },
    {
      name: "linesColor",
      type: "string",
      default: "#392e4e",
      description: "Color of the grid lines"
    },
    {
      name: "gridScale",
      type: "number",
      default: 0.1,
      description: "Scale factor for the grid (0.01-1)"
    },
    {
      name: "scanColor",
      type: "string",
      default: "#FF9FFC",
      description: "Color of the scanning effect"
    },
    {
      name: "scanOpacity",
      type: "number",
      default: 0.4,
      description: "Opacity of the scanning effect (0-1)"
    },
    {
      name: "enablePost",
      type: "boolean",
      default: true,
      description: "Enable or disable post-processing effects"
    },
    {
      name: "bloomIntensity",
      type: "number",
      default: 0.6,
      description: "Intensity of bloom effect (0-2)"
    },
    {
      name: "chromaticAberration",
      type: "number",
      default: 0.002,
      description: "Chromatic aberration intensity (0-0.01)"
    },
    {
      name: "noiseIntensity",
      type: "number",
      default: 0.01,
      description: "Noise intensity for texture effect (0-0.1)"
    },
    {
      name: "lineStyle",
      type: "string",
      default: "solid",
      description: "Style of grid lines - 'solid', 'dashed', or 'dotted'"
    },
    {
      name: "lineJitter",
      type: "number",
      default: 0.1,
      description: "Amount of line jitter effect (0-1)"
    },
    {
      name: "scanDirection",
      type: "string",
      default: "pingpong",
      description: "Direction of scan - 'forward', 'backward', or 'pingpong'"
    },
    {
      name: "scanGlow",
      type: "number",
      default: 0.5,
      description: "Intensity of scan glow effect (0.1-2)"
    },
    {
      name: "scanSoftness",
      type: "number",
      default: 2,
      description: "Softness of scan edges (0.1-5)"
    },
    {
      name: "scanPhaseTaper",
      type: "number",
      default: 0.9,
      description: "Phase tapering for scan effect (0-1)"
    },
    {
      name: "scanDuration",
      type: "number",
      default: 2.0,
      description: "Duration of one scan cycle in seconds (0.05-5)"
    },
    {
      name: "scanDelay",
      type: "number",
      default: 2.0,
      description: "Delay between scan cycles in seconds (0-5)"
    },
    {
      name: "bloomThreshold",
      type: "number",
      default: 0,
      description: "Threshold for bloom effect activation (0-1)"
    },
    {
      name: "bloomSmoothing",
      type: "number",
      default: 0,
      description: "Smoothing factor for bloom effect (0-1)"
    },
    {
      name: "enableWebcam",
      type: "boolean",
      default: false,
      description: "Enable or disable webcam input"
    },
    {
      name: "showPreview",
      type: "boolean",
      default: false,
      description: "Show or hide preview window"
    },
    {
      name: "enableGyro",
      type: "boolean",
      default: false,
      description: "Enable or disable gyroscope input"
    },
    {
      name: "scanOnClick",
      type: "boolean",
      default: false,
      description: "Trigger scan on mouse click"
    },
    {
      name: "snapBackDelay",
      type: "number",
      default: 250,
      description: "Delay before snap back in milliseconds (0-2000)"
    },
    {
      name: "className",
      type: "string",
      default: "custom-grid-scan",
      description: "Additional CSS class names for styling"
    },
    {
      name: "width",
      type: "string",
      default: "100%",
      description: "Width of the grid scan container"
    },
    {
      name: "height",
      type: "string",
      default: "600px",
      description: "Height of the grid scan container"
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