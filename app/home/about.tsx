"use client";
import { motion } from "framer-motion";
import { SpotlightCard } from "@cybershoora/shoora-ui";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleBrowseComponents = () => {
    router.push('/docs/getstarted/index');
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Shoora UI Features
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Discover amazing components and animations
          </p>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* First Column - 2 Cards Stacked */}
          <div className="space-y-8">
            
            {/* Card 1 - Text Animations */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SpotlightCard
                spotlightColor="rgba(168, 85, 247, 0.3)"
                className="h-64 cursor-pointer"
              >
                <div className="p-8 h-full flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Text Animations</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    20+ stunning text effects including glitch, scramble, gradient, and more
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Glitch Text</span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Split Text</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Count Up</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Card 2 - Background Effects */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <SpotlightCard
                spotlightColor="rgba(59, 130, 246, 0.3)"
                className="h-64 cursor-pointer"
              >
                <div className="p-8 h-full flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🌌</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Background Effects</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Interactive backgrounds with galaxy, lightning, threads, and particle effects
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Galaxy</span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Lightning</span>
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Threads</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
            {/* Browse Components Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleBrowseComponents}
                className="px-6 py-3 bg-[#7f5af0] rounded-full text-white font-medium shadow-lg hover:shadow-[#7f5af0]/50 transition-all"
              >
                wait for what click me →
              </motion.button>
            </motion.div>
          </div>

          {/* Second Column - 1 Card with Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="h-full"
          >
            <SpotlightCard
              spotlightColor="rgba(34, 197, 94, 0.3)"
              className="h-full min-h-[520px] cursor-pointer"
            >
              <div className="p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Interactive Components</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-6">
                  Cutting-edge components with glass morphism, 3D effects, and smooth animations
                </p>
                
                {/* Online Image */}
                <div className="flex-1 relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
                    alt="Shoora UI Components"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                </div>
                
                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Glass Icons</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">Stack Cards</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Spotlight Card</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">3D Effects</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}