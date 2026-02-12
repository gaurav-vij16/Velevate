"use client";

import Image from "next/image";
import heroImg from "../../public/HeroSection.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#06001a] via-[#0b0635] to-[#120045]">

      {/* BLOBS */}
      <div className="absolute -top-40 -left-40 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-600/30 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-600/30 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 pt-28 pb-20 sm:pt-32 sm:pb-28
                      grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-7 text-center lg:text-left"
        >

          <span className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white/10 text-purple-300 text-sm">
            Digital Growth Agency
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                         font-extrabold leading-tight text-white">
            We{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Elevate
            </span>{" "}
            Influencers & Businesses
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg">
            Helping creators and brands scale faster using powerful digital
            marketing, influencer strategies, and creative solutions.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
              View Services
            </button>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >

          {/* RING */}
          <div className="absolute 
                          w-[260px] h-[260px] 
                          sm:w-[360px] sm:h-[360px] 
                          lg:w-[420px] lg:h-[420px] 
                          rounded-full border border-purple-500/40 animate-spin-slow" />

          {/* GLOW */}
          <div className="absolute 
                          w-[220px] h-[220px] 
                          sm:w-[320px] sm:h-[320px] 
                          lg:w-[350px] lg:h-[350px] 
                          bg-gradient-to-r from-purple-500 to-blue-500 
                          rounded-full blur-[110px] opacity-60" />

          {/* FLOATING IMAGE */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="relative rotate-[-4deg] hover:rotate-0 transition duration-500"
          >
            <Image
              src={heroImg}
              alt="Hero Graphic"
              priority
              className="w-[240px] sm:w-[320px] md:w-[380px] lg:w-[420px] 
                         rounded-2xl shadow-2xl"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
