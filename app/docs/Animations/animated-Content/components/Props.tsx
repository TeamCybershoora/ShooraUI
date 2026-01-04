import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'children',
      type: 'React.ReactNode',
      default: '-',
      description: 'The content to animate when scrolled into view.',
    },
    {
      name: 'container',
      type: 'Element | string | null',
      default: 'null',
      description: 'The scroll container element. If null, uses the viewport.',
    },
    {
      name: 'distance',
      type: 'number',
      default: '100',
      description: 'The distance the element moves from when animating in.',
    },
    {
      name: 'direction',
      type: 'vertical | horizontal',
      default: 'vertical',
      description: 'The direction of the animation movement.',
    },
    {
      name: 'reverse',
      type: 'boolean',
      default: 'false',
      description: 'Whether to reverse the animation direction.',
    },
    {
      name: 'duration',
      type: 'number',
      default: '0.8',
      description: 'The duration of the animation in seconds.',
    },
    {
      name: 'ease',
      type: 'string',
      default: 'power3.out',
      description: 'The easing function for the animation.',
    },
    {
      name: 'initialOpacity',
      type: 'number',
      default: '0',
      description: 'The initial opacity of the element before animation.',
    },
    {
      name: 'animateOpacity',
      type: 'boolean',
      default: 'true',
      description: 'Whether to animate the opacity along with movement.',
    },
    {
      name: 'scale',
      type: 'number',
      default: '1',
      description: 'The scale factor for the element during animation.',
    },
    {
      name: 'threshold',
      type: 'number',
      default: '0.1',
      description: 'The visibility threshold to trigger the animation (0-1).',
    },
    {
      name: 'delay',
      type: 'number',
      default: '0',
      description: 'The delay before the animation starts in seconds.',
    },
    {
      name: 'disappearAfter',
      type: 'number',
      default: '0',
      description: 'Time after which the element disappears (0 to disable).',
    },
    {
      name: 'disappearDuration',
      type: 'number',
      default: '0.5',
      description: 'Duration of the disappearance animation.',
    },
    {
      name: 'disappearEase',
      type: 'string',
      default: 'power3.in',
      description: 'Easing function for the disappearance animation.',
    },
    {
      name: 'onComplete',
      type: '() => void',
      default: '-',
      description: 'Callback function triggered when animation completes.',
    },
    {
      name: 'onDisappearanceComplete',
      type: '() => void',
      default: '-',
      description: 'Callback function triggered when disappearance completes.',
    },
    {
      name: 'className',
      type: 'string',
      default: '""',
      description: 'Additional CSS classes for the component.',
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
            gsap
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