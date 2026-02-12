"use client";

import Image from "next/image";
import heroImg from "../../public/HeroSection.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#06001a] via-[#0b0635] to-[#120045]">

      {/* Animated Blobs */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-purple-300 text-sm">
             Digital Growth Agency
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            We{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Elevate
            </span>{" "}
            Influencers & Businesses
          </h1>

          <p className="text-gray-300 max-w-xl">
            Helping creators and brands scale faster using powerful digital
            marketing, influencer strategies, and creative solutions.
          </p>

          <div className="flex gap-5">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
              View Services
            </button>
          </div>
        </motion.div>

        {/* RIGHT FUN IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >

          {/* Rotating Gradient Ring */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-purple-500/40 animate-spin-slow" />

          {/* Glow Orb */}
          <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-[120px] opacity-60" />

          {/* Tilted Floating Image */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="relative rotate-[-6deg] hover:rotate-0 transition duration-500"
          >
            <Image
              src={heroImg}
              alt="Hero Graphic"
              className="w-[420px] rounded-2xl shadow-2xl"
              priority
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
