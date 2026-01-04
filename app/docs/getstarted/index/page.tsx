'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiFileText} from "react-icons/fi";
import { SplitText, TextPressure,DotGrid, ASCIIText, ShapeBlur, GhostCursor, StarBorder, Threads, GlassIcons, Lightning, Galaxy, Stack } from '@cybershoora/shoora-ui';
const items = [
  { icon: <FiFileText />, color: "blue", label: "Files" },
  
];
const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
];
export default function Page() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const router = useRouter();
  

  return (
    <div className="space-y-8 p-6 rounded-lg bg-[#030712]  ">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">Welcome to Shoora UI</h1>
        <p className="text-lg text-gray-300">
          A collection of React components, patterns and techniques for modern web applications.
        </p>
      </div>
      
      <div className="flex gap-4 w-full mt-8 flex-wrap justify-center">
        {/* Card 1 */}
        <div
          className="w-[350px] rounded-lg border border-purple-300/20 p-4 bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-300/40 cursor-pointer"
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/docs/text-animations/split-text')}
        >
          <h3 className="text-lg font-medium text-purple-200 mb-1">Split text</h3>
          <p className="text-sm text-purple-200/60 mb-4">Smooth text animations</p>
          <div className="h-28 bg-black/30 rounded flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center ml-30">
              <SplitText 
                text="Hello" 
                splitType="chars"
                className="text-white text-xl"
                key={hoveredCard === 1 ? 'hover-1' : 'idle-1'}
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="w-[350px] rounded-lg border border-purple-300/20 p-4 bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-300/40 cursor-pointer"
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/docs/text-animations/text-pressure')}
        >
          <h3 className="text-lg font-medium text-purple-200 mb-1">Text Pressure</h3>
          <p className="text-sm text-purple-200/60 mb-4">Dynamic word transitions</p>
          <div className="h-28 bg-black/30 rounded flex items-center justify-center">
            <div className="w-full flex justify-center">
              <TextPressure
                text="Hello!"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
                key={hoveredCard === 2 ? 'hover-2' : 'idle-2'}
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="w-[350px] rounded-lg border border-purple-300/20 p-4 bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-300/40 cursor-pointer"
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/docs/text-animations/ascii-text')}
        >
          <h3 className="text-lg font-medium text-purple-200 mb-1">ASCII Text</h3>
          <p className="text-sm text-purple-200/60 mb-4">Multi-line animations</p>
          <div className="h-28 bg-black/30 rounded flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <ASCIIText
                text="Hii"
                enableWaves
                asciiFontSize={8}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 w-full mt-8 flex-wrap justify-center">
        {/* Card 4 */}
        <div
          className="w-[350px] rounded-lg border border-purple-300/20 p-4 bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-300/40 cursor-pointer"
          onMouseEnter={() => setHoveredCard(4)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/docs/Animations/ghost-cursor')}
        >
          <h3 className="text-lg font-medium text-purple-200 mb-1">Ghost Cursor</h3>
          <p className="text-sm text-purple-200/60 mb-4">Hover me</p>
          <div className="h-28 bg-black/30 rounded flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center ">
             
  <GhostCursor
    // Visuals
                color="#B19EEF"
                brightness={1}
                edgeIntensity={0}

                // Trail and motion
                trailLength={50}
                inertia={0.5}

                // Post-processing
                grainIntensity={0.05}
                bloomStrength={0.1}
                bloomRadius={1.0}
                bloomThreshold={0.025}

                // Fade-out behavior
                fadeDelayMs={1000}
                fadeDurationMs={1500}
              />
          </div>
          </div>
        </div>

        {/* Card 5 */}
        <div
          className="w-[350px] rounded-lg border border-purple-300/20 p-4 bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-300/40 cursor-pointer"
          onMouseEnter={() => setHoveredCard(5)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/docs/Animations/shape-blur')}
        >
          <h3 className="text-lg font-medium text-purple-200 mb-1">Shape Blur</h3>
          <p className="text-sm text-purple-200/60 mb-4">Blur on hover</p>
          <div className="h-28 bg-black/30 rounded flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <ShapeBlur
                  variation={0}
                  pixelRatioProp={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
                  shapeSize={0.5}
                  roundness={0.5}
                  borderSize={0.05}
                  circleSize={0.5}
                  circleEdge={1}
                />
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div
          className="w-[350px] rounded-lg border border-purple-300/20 p-4 bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-300/40 cursor-pointer"
          onMouseEnter={() => setHoveredCard(6)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/docs/Animations/star-border')}
        >
          <h3 className="text-lg font-medium text-purple-200 mb-1">Star Border</h3>
          <p className="text-sm text-purple-200/60 mb-4">An attractive border</p>
          <div className="h-28 bg-black/30 rounded flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center ml-25">
             <StarBorder
        as="button"
        className="custom-class"
        color="cyan"
        speed="5s"
      >
        Click Me!
      </StarBorder>
            </div>
          </div>
        </div>
      </div>
            <div className="flex gap-4 w-full mt-8 flex-wrap justify-center">
        {/* Card 7 */}
        <div
          className="w-[350px] rounded-lg border border-purple-300/20 p-4 bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-300/40 cursor-pointer"
          onMouseEnter={() => setHoveredCard(4)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/docs/components/dot-grid')}
        >
          <h3 className="text-lg font-medium text-purple-200 mb-1">Dot Grid</h3>
          <p className="text-sm text-purple-200/60 mb-4">Interactive dot grid animation</p>
          <div className="h-28 bg-black/30 rounded flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center ">
             <DotGrid
        dotSize={10}
        gap={15}
        baseColor="#5227FF"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div
          className="w-[350px] rounded-lg border border-purple-300/20 p-4 bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-300/40 cursor-pointer"
          onMouseEnter={() => setHoveredCard(5)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/docs/components/glass-icons')}
        >
          <h3 className="text-lg font-medium text-purple-200 mb-1">Glass Icons</h3>
          <p className="text-sm text-purple-200/60 mb-4">Check with hover </p>
          <div className="h-28 bg-black/30 rounded flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center ml-25 mb-10">
             <GlassIcons items={items} className="custom-class"/>
            </div>
          </div>
        </div>

        {/* Card 9 */}
        <div
          className="w-[350px] rounded-lg border border-purple-300/20 p-4 bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-300/40 cursor-pointer"
          onMouseEnter={() => setHoveredCard(6)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/docs/components/stack')}
        >
          <h3 className="text-lg font-medium text-purple-200 mb-1">Stack</h3>
          <p className="text-sm text-purple-200/60 mb-4">Stack of cards with 3D effect</p>
          <div className="h-28 bg-black/30 rounded flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center ">
             <Stack
        randomRotation={true}
        sensitivity={180}
        sendToBackOnClick={true}
        cards={images.map((src, i) => (
          <img 
            key={i} 
            src={src} 
            alt={`card-${i + 1}`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        ))}
      />
            </div>
          </div>
        </div>
      </div>
            <div className="flex gap-4 w-full mt-8 flex-wrap justify-center">
        {/* Card 10 */}
        <div
          className="w-[350px] rounded-lg border border-purple-300/20 p-4 bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-300/40 cursor-pointer"
          onMouseEnter={() => setHoveredCard(4)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/docs/backgrounds/galaxy')}
        >
          <h3 className="text-lg font-medium text-purple-200 mb-1">Galaxy</h3>
          <p className="text-sm text-purple-200/60 mb-4">Interactive galaxy effect</p>
          <div className="h-28 bg-black/30 rounded flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center ">
             <Galaxy 
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
      />
            </div>
          </div>
        </div>

        {/* Card 11 */}
        <div
          className="w-[350px] rounded-lg border border-purple-300/20 p-4 bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-300/40 cursor-pointer"
          onMouseEnter={() => setHoveredCard(5)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/docs/backgrounds/lightning')}
        >
          <h3 className="text-lg font-medium text-purple-200 mb-1">Lightning</h3>
          <p className="text-sm text-purple-200/60 mb-4">Dynamic lightning effect</p>
          <div className="h-28 bg-black/30 rounded flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <Lightning
        hue={220}
        xOffset={0}
        speed={1}
        intensity={1}
        size={1}
      />
            </div>
          </div>
        </div>

        {/* Card 12 */}
        <div
          className="w-[350px] rounded-lg border border-purple-300/20 p-4 bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-300/40 cursor-pointer"
          onMouseEnter={() => setHoveredCard(6)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/docs/backgrounds/threads')}
        >
          <h3 className="text-lg font-medium text-purple-200 mb-1">Threads</h3>
          <p className="text-sm text-purple-200/60 mb-4">Interactive thread visualization</p>
          <div className="h-28 bg-black/30 rounded flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center ">
             <Threads
  amplitude={1}
  distance={0}
  enableMouseInteraction={true}
  color={[1, 1, 1]}
/>

            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}