'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItem {
  title: string;
  href: string;
  isNew?: boolean;
  isUpdated?: boolean;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

interface SidebarProps {
  searchQuery: string;
}

export default function Sidebar({ searchQuery }: SidebarProps) {
  const pathname = usePathname();

  const sections: SidebarSection[] = [
    {
      title: 'GET STARTED',
      items: [
        { title: 'Introduction', href: '/docs/getstarted/introduction' },
        { title: 'Installation', href: '/docs/getstarted/installation' },
        // { title: 'MCP', href: '/docs/getstarted/mcp' },
        { title: 'Index', href: '/docs/getstarted/index' },
      ],
    },
    {
      title: 'TEXT ANIMATIONS',
      items: [
        { title: 'Split Text', href: '/docs/text-animations/split-text' },
        { title: 'Blur Text', href: '/docs/text-animations/blur-text' },
        { title: 'Circular Text', href: '/docs/text-animations/circular-text' },
        { title: 'Text Type', href: '/docs/text-animations/text-type' },
        { title: 'Shuffle', href: '/docs/text-animations/shuffle', isNew: true },
        { title: 'Shiny Text', href: '/docs/text-animations/shiny-text' },
        { title: 'Text Pressure', href: '/docs/text-animations/text-pressure' },
        { title: 'Curved Loop', href: '/docs/text-animations/curved-loop' },
        { title: 'Fuzzy Text', href: '/docs/text-animations/fuzzy-text' },
        { title: 'Gradient Text', href: '/docs/text-animations/gradient-text' },
        { title: 'Falling Text', href: '/docs/text-animations/falling-text' },
        // { title: 'Text Cursor', href: '/docs/text-animations/text-cursor' },
        // { title: 'Decrypted Text', href: '/docs/text-animations/decrypted-text' },
        { title: 'True Focus', href: '/docs/text-animations/true-focus' },
        { title: 'Scroll Float', href: '/docs/text-animations/scroll-float' },
        // { title: 'Scroll Reveal', href: '/docs/text-animations/scroll-reveal' },
        { title: 'Ascii Text', href: '/docs/text-animations/ascii-text' },
        { title: 'Scrambled Text', href: '/docs/text-animations/scrambled-text' },
        { title: 'Rotating Text', href: '/docs/text-animations/rotating-text' },
        { title: 'Glitch Text', href: '/docs/text-animations/glitch-text' },
        // { title: 'Scroll Velocity', href: '/docs/text-animations/scroll-velocity' },
        { title: 'Variable Proximity', href: '/docs/text-animations/variable-proximity' },
        { title: 'Count Up', href: '/docs/text-animations/count-up' },
      ],
    },
    {
      title: 'ANIMATIONS',
      items: [
        { title: 'Animated Content', href: '/docs/Animations/animated-Content' },
        { title: 'Fade Content', href: '/docs/Animations/fade-content' },
        // { title: 'Electric Border', href: '/docs/Animations/electric-border', isNew: true },
        // { title: 'Pixel Transition', href: '/docs/Animations/pixel-transition' },
        // { title: 'Glare Hover', href: '/docs/Animations/glare-hover' },
        // { title: 'Logo Loop', href: '/docs/Animations/logo-loop' },
        { title: 'Target Cursor', href: '/docs/Animations/target-cursor' },
        // { title: 'Laser Flow', href: '/docs/Animations/laser-flow' },
        // { title: 'Magnet Lines', href: '/docs/Animations/magnet-lines' },
        { title: 'Ghost Cursor', href: '/docs/Animations/ghost-cursor' },
        { title: 'Gradual Blur', href: '/docs/Animations/gradual-blur', isNew: true },
        { title: 'Click Spark', href: '/docs/Animations/click-spark' },
        // { title: 'Magnet', href: '/docs/Animations/magnet' },
        { title: 'Sticker Peel', href: '/docs/Animations/sticker-peel' },
        { title: 'Pixel Trail', href: '/docs/Animations/pixel-trail' },
        // { title: 'Cubes', href: '/docs/Animations/cubes' },
        // { title: 'Metallic Paint', href: '/docs/Animations/metallic-paint' },
        { title: 'Noise', href: '/docs/Animations/noise' },
        { title: 'Shape Blur', href: '/docs/Animations/shape-blur' },
        { title: 'Crosshair', href: '/docs/Animations/crosshair' },
        { title: 'Image Trail', href: '/docs/Animations/image-trail' },
        { title: 'Ribbons', href: '/docs/Animations/ribbons' },
        { title: 'Splash Cursor', href: '/docs/Animations/splash-cursor' },
        { title: 'Meta Balls', href: '/docs/Animations/meta-balls' },
        // { title: 'Blob Cursor', href: '/docs/Animations/blob-cursor' },
        { title: 'Star Border', href: '/docs/Animations/star-border' },
      ],
    },
    {
      title: 'COMPONENTS',
      items: [
        { title: 'Animated List', href: '/docs/components/animated-list' },
        // { title: 'Bounce Cards', href: '/docs/components/bounce-cards' },
        // { title: 'Bubble Menu', href: '/docs/components/bubble-menu' },
        // { title: 'Card Nav', href: '/docs/components/card-nav' },
        { title: 'Card Swap', href: '/docs/components/card-swap' },
        { title: 'Carousel', href: '/docs/components/carousel' },
        { title: 'Chroma Grid', href: '/docs/components/chroma-grid' },
        { title: 'Circular Gallery', href: '/docs/components/circular-gallery' },
        // { title: 'Counter', href: '/docs/components/counter' },
        // { title: 'Decay Card', href: '/docs/components/decay-card' },
        { title: 'Dock', href: '/docs/components/dock' },
        // { title: 'Dome Gallery', href: '/docs/components/dome-gallery' },
        // { title: 'Elastic Slider', href: '/docs/components/elastic-slider' },
        // { title: 'Flowing Menu', href: '/docs/components/flowing-menu' },
        // { title: 'Fluid Glass', href: '/docs/components/fluid-glass' },
        { title: 'Flying Posters', href: '/docs/components/flying-posters' },
        { title: 'Folder', href: '/docs/components/folder' },
        { title: 'Glass Icons', href: '/docs/components/glass-icons' },
        // { title: 'Glass Surface', href: '/docs/components/glass-surface' },
        { title: 'Gooey Nav', href: '/docs/components/gooey-nav' },
        // { title: 'Infinite Menu', href: '/docs/components/infinite-menu' },
        // { title: 'Lanyard', href: '/docs/components/lanyard' },
        // { title: 'Magic Bento', href: '/docs/components/magic-bento' },
        // { title: 'Masonry', href: '/docs/components/masonry' },
        { title: 'Model Viewer', href: '/docs/components/model-viewer' },
        // { title: 'Pill Nav', href: '/docs/components/pill-nav' },
        { title: 'Pixel Card', href: '/docs/components/pixel-card' },
        { title: 'Profile Card', href: '/docs/components/profile-card' },
        // { title: 'Reflective Card', href: '/docs/components/reflective-card' },
        // { title: 'Scroll Stack', href: '/docs/components/scroll-stack' },
        { title: 'Spotlight Card', href: '/docs/components/spotlight-card' },
        { title: 'Stack', href: '/docs/components/stack' },
        // { title: 'Staggered Menu', href: '/docs/components/staggered-menu' },
        // { title: 'Stepper', href: '/docs/components/stepper' },
        { title: 'Tilted Card', href: '/docs/components/tilted-card' },
      ],
    },
    {
      title: 'BACKGROUNDS',
      items: [
        { title: 'Aurora', href: '/docs/backgrounds/aurora' },
        // { title: 'Balatro', href: '/docs/backgrounds/balatro' },
        { title: 'Ballpit', href: '/docs/backgrounds/ballpit' },
        { title: 'Beams', href: '/docs/backgrounds/beams' },
        { title: 'Color Bends', href: '/docs/backgrounds/color-bends' },
        { title: 'Dark Veil', href: '/docs/backgrounds/dark-veil' },
        { title: 'Dither', href: '/docs/backgrounds/dither' },
        { title: 'Dot Grid', href: '/docs/backgrounds/dot-grid' },
        { title: 'Faulty Terminal', href: '/docs/backgrounds/faulty-terminal' },
        { title: 'Floating Lines', href: '/docs/backgrounds/floating-lines' },
        { title: 'Galaxy', href: '/docs/backgrounds/galaxy' },
        { title: 'Gradient Blinds', href: '/docs/backgrounds/gradient-blinds' },
        { title: 'Grid Distortion', href: '/docs/backgrounds/grid-distortion' },
        // { title: 'Grid Motion', href: '/docs/backgrounds/grid-motion' },
        { title: 'Grid Scan', href: '/docs/backgrounds/grid-scan' },
        // { title: 'Hyper Speed', href: '/docs/backgrounds/hyperspeed' },
        { title: 'Iridescence', href: '/docs/backgrounds/iridescence' },
        { title: 'Letter Glitch', href: '/docs/backgrounds/letter-glitch' },
        // { title: 'Light Pillar', href: '/docs/backgrounds/light-pillar' },
        // { title: 'Light Rays', href: '/docs/backgrounds/light-rays' },
        { title: 'Lightning', href: '/docs/backgrounds/lightning' },
        // { title: 'Liquid Chrome', href: '/docs/backgrounds/liquid-chrome' },
        { title: 'Liquid Ether', href: '/docs/backgrounds/liquid-ether' },
        { title: 'Orb', href: '/docs/backgrounds/orb' },
        { title: 'Particles', href: '/docs/backgrounds/particles' },
        { title: 'Pixel Blast', href: '/docs/backgrounds/pixel-blast' },
        // { title: 'Pixel Snow', href: '/docs/backgrounds/pixel-snow' },
        // { title: 'Plasma', href: '/docs/backgrounds/plasma' },
        { title: 'Prism', href: '/docs/backgrounds/prism' },
        { title: 'Prismatic Burst', href: '/docs/backgrounds/prismatic-burst' },
        // { title: 'Ripple Grid', href: '/docs/backgrounds/ripple-grid' },
        { title: 'Silk', href: '/docs/backgrounds/silk' },
        // { title: 'Squares', href: '/docs/backgrounds/squares' },
        { title: 'Threads', href: '/docs/backgrounds/threads' },
        { title: 'Waves', href: '/docs/backgrounds/waves' },
      ],
    }
  ];

  // Flatten all items for search
  const allItems = sections.flatMap(section => 
    section.items.map(item => ({
      ...item,
      sectionTitle: section.title
    }))
  );

  // Filter items based on search query
  const filteredItems = searchQuery
    ? allItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.href.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  if (filteredItems) {
    // Filter sections based on search query
    const filteredSections = sections
      .map(section => ({
        ...section,
        items: section.items.filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }))
      .filter(section => section.items.length > 0);

    return (
      <div className="fixed top-0 left-0 h-screen w-64 bg-[#0f172a] border-r border-white/5 overflow-y-auto z-10 pt-24">
        <div className="px-4">
          {searchQuery && (
            <div className="text-xs text-gray-400 mb-4 px-2">
              {filteredSections.reduce((acc, section) => acc + section.items.length, 0)} results found
            </div>
          )}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white/80">Search Results</h3>
            <div className="space-y-1">
              {filteredItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`group flex items-center py-2 px-3 -ml-3 rounded-md transition-colors duration-200 ${
                      pathname === item.href ? 'bg-white/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="relative w-full">
                      <div className="text-xs text-gray-400">{item.sectionTitle}</div>
                      <div className="flex items-center">
                        <div 
                          className={`absolute -left-3 w-0.5 h-6 bg-purple-500 rounded-full transition-opacity duration-200 ${
                            pathname === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`} 
                        />
                        <span className={`text-sm transition-colors duration-200 ${
                          pathname === item.href ? 'text-white' : 'text-gray-300'
                        }`}>
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
              {filteredItems.length === 0 && (
                <div className="text-sm text-gray-400 py-2 px-3">No results found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Filter sections based on search query
  const filteredSections = sections
    .map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(section => section.items.length > 0);

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 overflow-y-auto bg-[#030712] p-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="space-y-8 pt-4">
        {filteredSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-3">
            <h3 className={`font-bold uppercase tracking-wider ${
              section.title === 'GET STARTED' 
                ? 'text-xl text-white/90' 
                : 'text-lg text-white/80'
            }`}>
              {section.title}
            </h3>
            <div className="space-y-1 pl-4 border-l-2 border-white/10">
              {section.items.map((item, itemIndex) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className={`group flex items-center py-2 px-3 -ml-3 rounded-md transition-colors duration-200 ${
                      isActive 
                        ? 'bg-white/10' 
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="relative w-full flex items-center">
                      <div 
                        className={`absolute -left-3 w-0.5 h-6 bg-purple-500 rounded-full transition-opacity duration-200 ${
                          isActive || pathname.startsWith(item.href) 
                            ? 'opacity-100' 
                            : 'opacity-0 group-hover:opacity-100'
                        }`} 
                      />
                      <span className={`text-sm transition-colors duration-200 ${
                        isActive || pathname.startsWith(item.href)
                          ? 'text-white font-medium'
                          : 'text-white/60 group-hover:text-white/90'
                      }`}>
                        {item.title}
                      </span>
                      {item.isNew && (
                        <span className="ml-2 px-1.5 py-0.5 text-[10px] font-medium bg-purple-500/20 text-purple-300 rounded">
                          New
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}