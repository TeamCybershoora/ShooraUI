import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'position',
      type: `'top' | 'bottom' | 'left' | 'right'`,
      default: `'bottom'`,
      description: 'Position where the blur effect will be applied.',
    },
    {
      name: 'strength',
      type: 'number',
      default: '2',
      description: 'Intensity of the blur effect.',
    },
    {
      name: 'height',
      type: 'string',
      default: `'6rem'`,
      description: 'Height of the blur area.',
    },
    {
      name: 'width',
      type: 'string',
      default: 'undefined',
      description: 'Width of the blur area.',
    },
    {
      name: 'divCount',
      type: 'number',
      default: '5',
      description: 'Number of div layers for the blur effect.',
    },
    {
      name: 'exponential',
      type: 'boolean',
      default: 'false',
      description: 'Whether to use exponential blur calculation.',
    },
    {
      name: 'zIndex',
      type: 'number',
      default: '1000',
      description: 'CSS z-index for the blur container.',
    },
    {
      name: 'animated',
      type: 'boolean | "scroll"',
      default: 'false',
      description: 'Whether the blur effect should be animated.',
    },
    {
      name: 'duration',
      type: 'string',
      default: `'0.3s'`,
      description: 'Animation duration.',
    },
    {
      name: 'easing',
      type: 'string',
      default: `'ease-out'`,
      description: 'Animation easing function.',
    },
    {
      name: 'opacity',
      type: 'number',
      default: '1',
      description: 'Opacity of the blur effect.',
    },
    {
      name: 'curve',
      type: `'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out'`,
      default: `'linear'`,
      description: 'Curve function for blur progression.',
    },
    {
      name: 'responsive',
      type: 'boolean',
      default: 'false',
      description: 'Whether to use responsive dimensions.',
    },
    {
      name: 'mobileHeight',
      type: 'string',
      default: 'undefined',
      description: 'Height for mobile devices.',
    },
    {
      name: 'tabletHeight',
      type: 'string',
      default: 'undefined',
      description: 'Height for tablet devices.',
    },
    {
      name: 'desktopHeight',
      type: 'string',
      default: 'undefined',
      description: 'Height for desktop devices.',
    },
    {
      name: 'mobileWidth',
      type: 'string',
      default: 'undefined',
      description: 'Width for mobile devices.',
    },
    {
      name: 'tabletWidth',
      type: 'string',
      default: 'undefined',
      description: 'Width for tablet devices.',
    },
    {
      name: 'desktopWidth',
      type: 'string',
      default: 'undefined',
      description: 'Width for desktop devices.',
    },
    {
      name: 'preset',
      type: `'top' | 'bottom' | 'left' | 'right' | 'subtle' | 'intense' | 'smooth' | 'sharp' | 'header' | 'footer' | 'sidebar' | 'page-header' | 'page-footer'`,
      default: 'undefined',
      description: 'Predefined configuration preset.',
    },
    {
      name: 'gpuOptimized',
      type: 'boolean',
      default: 'undefined',
      description: 'Whether to enable GPU optimizations.',
    },
    {
      name: 'hoverIntensity',
      type: 'number',
      default: 'undefined',
      description: 'Blur intensity multiplier on hover.',
    },
    {
      name: 'target',
      type: `'parent' | 'page'`,
      default: `'parent'`,
      description: 'Target element for positioning.',
    },
    {
      name: 'onAnimationComplete',
      type: '() => void',
      default: 'undefined',
      description: 'Callback when animation completes.',
    },
    {
      name: 'className',
      type: 'string',
      default: `''`,
      description: 'Additional CSS classes.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      default: '{}',
      description: 'Inline styles for the component.',
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
            mathjs
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