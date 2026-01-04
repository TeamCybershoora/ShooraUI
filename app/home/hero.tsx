"use client";
import { motion } from "framer-motion";
import { Hyperspeed,LiquidEther } from "@cybershoora/shoora-ui";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleBrowseComponents = () => {
    router.push('/docs/getstarted/index');
  };
  return (
    <section className="relative flex flex-col items-center justify-center text-center h-screen overflow-hidden bg-gray-950">
      {/* 🌌 HyperSpeed Background */}
      {/* <div className="absolute inset-0 w-full h-full">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            lanesPerRoad: 4,
            fov: 90,
            speedUp: 2,
            colors: {
              roadColor: 0x050510,
              islandColor: 0x050510,
              background: 0x050510, // 🖤 blackish dark blue background
              shoulderLines: 0x050510,
              brokenLines: 0x050510,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x050510,
            },
          }}
        />
      </div> */}
      <div className="absolute inset-0 w-full h-full">
      <LiquidEther
        colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>

      {/* 💫 Hero Content */}
      <div className="relative flex flex-col items-center justify-center -mt-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-14 text-white"
        >
          React Components <br /> For Creative Developers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-200 max-w-2xl mb-6"
        >
          Highly customizable animated components that make your React projects truly stand out.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleBrowseComponents}
          className="px-6 py-3 bg-[#7f5af0] rounded-full text-white font-medium shadow-lg hover:shadow-[#7f5af0]/50 transition-all"
        >
          Browse Components →
        </motion.button>
      </div>
    </section>
  );
}
