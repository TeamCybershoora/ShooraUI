import React from 'react';

export default function Props() {
  const props = [
    {
      name: 'url',
      type: 'string',
      default: 'required',
      description: 'URL of the 3D model file (supports glb, gltf, fbx, obj).',
    },
    {
      name: 'width',
      type: 'number | string',
      default: '400',
      description: 'Width of the viewer container.',
    },
    {
      name: 'height',
      type: 'number | string',
      default: '400',
      description: 'Height of the viewer container.',
    },
    {
      name: 'modelXOffset',
      type: 'number',
      default: '0',
      description: 'Horizontal offset of the model.',
    },
    {
      name: 'modelYOffset',
      type: 'number',
      default: '0',
      description: 'Vertical offset of the model.',
    },
    {
      name: 'defaultRotationX',
      type: 'number',
      default: '-50',
      description: 'Default rotation angle on X axis.',
    },
    {
      name: 'defaultRotationY',
      type: 'number',
      default: '20',
      description: 'Default rotation angle on Y axis.',
    },
    {
      name: 'defaultZoom',
      type: 'number',
      default: '0.5',
      description: 'Default zoom level.',
    },
    {
      name: 'minZoomDistance',
      type: 'number',
      default: '0.5',
      description: 'Minimum zoom distance.',
    },
    {
      name: 'maxZoomDistance',
      type: 'number',
      default: '10',
      description: 'Maximum zoom distance.',
    },
    {
      name: 'enableMouseParallax',
      type: 'boolean',
      default: 'true',
      description: 'Enable mouse parallax effect.',
    },
    {
      name: 'enableManualRotation',
      type: 'boolean',
      default: 'true',
      description: 'Enable manual rotation with mouse/touch.',
    },
    {
      name: 'enableHoverRotation',
      type: 'boolean',
      default: 'true',
      description: 'Enable rotation on hover.',
    },
    {
      name: 'enableManualZoom',
      type: 'boolean',
      default: 'true',
      description: 'Enable manual zoom with mouse/touch.',
    },
    {
      name: 'ambientIntensity',
      type: 'number',
      default: '0.3',
      description: 'Intensity of ambient lighting.',
    },
    {
      name: 'keyLightIntensity',
      type: 'number',
      default: '1',
      description: 'Intensity of key lighting.',
    },
    {
      name: 'fillLightIntensity',
      type: 'number',
      default: '0.5',
      description: 'Intensity of fill lighting.',
    },
    {
      name: 'rimLightIntensity',
      type: 'number',
      default: '0.8',
      description: 'Intensity of rim lighting.',
    },
    {
      name: 'environmentPreset',
      type: 'string',
      default: '"forest"',
      description: 'Environment preset (city, sunset, night, dawn, studio, apartment, forest, park, none).',
    },
    {
      name: 'autoFrame',
      type: 'boolean',
      default: 'false',
      description: 'Auto-frame the model to fit the view.',
    },
    {
      name: 'placeholderSrc',
      type: 'string',
      default: 'undefined',
      description: 'URL of placeholder image to show during loading.',
    },
    {
      name: 'showScreenshotButton',
      type: 'boolean',
      default: 'true',
      description: 'Show screenshot capture button.',
    },
    {
      name: 'fadeIn',
      type: 'boolean',
      default: 'false',
      description: 'Enable fade-in animation when model loads.',
    },
    {
      name: 'autoRotate',
      type: 'boolean',
      default: 'false',
      description: 'Enable automatic rotation.',
    },
    {
      name: 'autoRotateSpeed',
      type: 'number',
      default: '0.35',
      description: 'Speed of automatic rotation.',
    },
    {
      name: 'onModelLoaded',
      type: '() => void',
      default: 'undefined',
      description: 'Callback function when model is loaded.',
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
            @react-three/fiber
          </span>
          <span className="px-5 py-3 text-xs font-medium rounded-full bg-purple-900/50 text-purple-300 border border-purple-700">
            @react-three/drei
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