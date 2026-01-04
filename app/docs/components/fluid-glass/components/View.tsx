// "use client";

// import { useState } from "react";
// import { FluidGlass } from "@cybershoora/shoora-ui"

// export default function View() {
//   // FluidGlass state
//   const [mode, setMode] = useState<'lens' | 'bar' | 'cube'>('lens');
//   const [scale, setScale] = useState(0.25);
//   const [ior, setIor] = useState(1.15);
//   const [thickness, setThickness] = useState(5);
//   const [chromaticAberration, setChromaticAberration] = useState(0.1);
//   const [anisotropy, setAnisotropy] = useState(0.01);

//   const lensProps = {
//     scale,
//     ior,
//     thickness,
//     chromaticAberration,
//     anisotropy
//   };

//   return (
//     <div className="space-y-8 p-4">
//       <div style={{ height: '600px', position: 'relative' }} className="relative bg-gray-900/30 rounded-lg border-2 border-purple-300 mt-8">
//         <div className="absolute inset-0">
//           <FluidGlass 
//             mode={mode}
//             lensProps={lensProps}
//             barProps={{}}
//             cubeProps={{}}
//           />
//         </div>
//       </div>

//       <div>
//         <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M10 18a8 8 0 1 0-5.293-14.293l-1.71-.977a.5.5 0 0 0-.741.439v3.9a.5.5 0 0 0 .5.5h3.9a.5.5 0 0 0 .439-.741l-.933-1.634A5.5 5.5 0 1 1 15.5 10a.75.75 0 0 0 1.5 0A7 7 0 0 0 7.053 3.53l-.679-1.19A8 8 0 0 0 10 18z" clipRule="evenodd" />
//           </svg>
//           Customize FluidGlass
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-300">Mode</label>
//             <select
//               value={mode}
//               onChange={event => setMode(event.target.value as 'lens' | 'bar' | 'cube')}
//               className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//             >
//               <option value="lens">Lens</option>
//               <option value="bar">Bar</option>
//               <option value="cube">Cube</option>
//             </select>
//           </div>

//           <div className="space-y-2">
//             <div className="flex justify-between text-sm text-gray-300">
//               <span>Scale</span>
//               <span className="text-purple-300 font-medium">{scale}</span>
//             </div>
//             <input
//               type="range"
//               min="0.1"
//               max="0.5"
//               step="0.05"
//               value={scale}
//               onChange={event => setScale(Number(event.target.value))}
//               className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
//             />
//           </div>

//           <div className="space-y-2">
//             <div className="flex justify-between text-sm text-gray-300">
//               <span>IOR (Index of Refraction)</span>
//               <span className="text-purple-300 font-medium">{ior}</span>
//             </div>
//             <input
//               type="range"
//               min="1.0"
//               max="2.0"
//               step="0.05"
//               value={ior}
//               onChange={event => setIor(Number(event.target.value))}
//               className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
//             />
//           </div>

//           <div className="space-y-2">
//             <div className="flex justify-between text-sm text-gray-300">
//               <span>Thickness</span>
//               <span className="text-purple-300 font-medium">{thickness}</span>
//             </div>
//             <input
//               type="range"
//               min="1"
//               max="20"
//               step="1"
//               value={thickness}
//               onChange={event => setThickness(Number(event.target.value))}
//               className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
//             />
//           </div>

//           <div className="space-y-2">
//             <div className="flex justify-between text-sm text-gray-300">
//               <span>Chromatic Aberration</span>
//               <span className="text-purple-300 font-medium">{chromaticAberration}</span>
//             </div>
//             <input
//               type="range"
//               min="0"
//               max="0.5"
//               step="0.05"
//               value={chromaticAberration}
//               onChange={event => setChromaticAberration(Number(event.target.value))}
//               className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
//             />
//           </div>

//           <div className="space-y-2">
//             <div className="flex justify-between text-sm text-gray-300">
//               <span>Anisotropy</span>
//               <span className="text-purple-300 font-medium">{anisotropy}</span>
//             </div>
//             <input
//               type="range"
//               min="0"
//               max="0.1"
//               step="0.01"
//               value={anisotropy}
//               onChange={event => setAnisotropy(Number(event.target.value))}
//               className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
