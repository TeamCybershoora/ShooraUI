import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'className',
      type: 'string',
      default: "''",
      description: 'Optional class name appended to the ghost cursor container.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      default: '{}',
      description: 'Inline styles merged into the absolutely positioned canvas wrapper.',
    },
    {
      name: 'trailLength',
      type: 'number',
      default: '50',
      description: 'Number of samples in the motion trail buffer. Larger values create longer ribbons.',
    },
    {
      name: 'inertia',
      type: 'number',
      default: '0.5',
      description: 'How strongly the cursor continues drifting after pointer movement stops (0-1).',
    },
    {
      name: 'grainIntensity',
      type: 'number',
      default: '0.05',
      description: 'Post-process film grain strength applied to the rendered trail.',
    },
    {
      name: 'bloomStrength',
      type: 'number',
      default: '0.1',
      description: 'Intensity for the Unreal Bloom pass producing the glow effect.',
    },
    {
      name: 'bloomRadius',
      type: 'number',
      default: '1.0',
      description: 'Bloom kernel radius which widens or tightens the glow spread.',
    },
    {
      name: 'bloomThreshold',
      type: 'number',
      default: '0.025',
      description: 'Luminance threshold for bloom activation. Lower values bloom more pixels.',
    },
    {
      name: 'brightness',
      type: 'number',
      default: '1',
      description: 'Multiplier applied to the accumulated trail color output.',
    },
    {
      name: 'color',
      type: 'string',
      default: "'#B19EEF'",
      description: 'Base hex color used for the shader tint and bloom.',
    },
    {
      name: 'mixBlendMode',
      type: "React.CSSProperties['mixBlendMode']",
      default: "'screen'",
      description: 'CSS mix-blend-mode applied to the WebGL canvas for compositing.',
    },
    {
      name: 'edgeIntensity',
      type: 'number',
      default: '0',
      description: 'Attenuation applied near viewport edges to soften the trail.',
    },
    {
      name: 'maxDevicePixelRatio',
      type: 'number',
      default: '0.5',
      description: 'Upper bound for device pixel ratio to manage GPU workload.',
    },
    {
      name: 'targetPixels',
      type: 'number',
      default: 'undefined',
      description: 'Optional pixel budget override for adaptive resolution scaling.',
    },
    {
      name: 'fadeDelayMs',
      type: 'number',
      default: 'isTouch ? 500 : 1000',
      description: 'Delay after pointer idle before the trail begins fading out.',
    },
    {
      name: 'fadeDurationMs',
      type: 'number',
      default: 'isTouch ? 1000 : 1500',
      description: 'Duration of the fade animation once inactivity threshold is reached.',
    },
    {
      name: 'zIndex',
      type: 'number',
      default: '10',
      description: 'Stacking context for the absolutely positioned canvas element.',
    },
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
                  <code className="bg-transparent border border-purple-300 px-2 py-1 rounded text-xs text-purple-300">{prop.type}</code>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300 border-r border-purple-300">
                  {prop.default !== 'undefined' ? (
                    <code className="bg-transparent border border-purple-300 px-2 py-1 rounded text-xs text-purple-300">{prop.default}</code>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
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
            three/examples
          </span>
          <span className="px-5 py-3 text-xs font-medium rounded-full bg-purple-900/50 text-purple-300 border border-purple-700">
            postprocessing
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