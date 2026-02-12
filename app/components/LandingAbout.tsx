"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../../public/about-circle.png";

export default function LandingAbout() {
  return (
    <section className="relative w-full bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />

      {/* BLOBS */}
      <div className="absolute -top-40 -left-40 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-purple-400/20 blur-[160px]" />
      <div className="absolute bottom-0 -right-40 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-400/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >

          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
            About Velevate
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Built to Elevate
            <span className="block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            We help creators and brands grow faster with smart strategy,
            bold creativity, and performance-driven digital experiences.
          </p>

          {/* FEATURES */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">

            {[
              "Influencer Marketing",
              "Performance Campaigns",
              "Branding & Content",
              "Web & Design",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center lg:justify-start gap-3 text-gray-800 font-medium"
              >
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
                {item}
              </div>
            ))}

          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10 sm:mt-12 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            Explore Our Work →
          </motion.button>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* GLOW */}
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute w-[320px] sm:w-[420px] md:w-[520px] lg:w-[620px]
                       h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px]
                       rounded-full bg-gradient-to-r from-purple-400/30 to-blue-400/30 blur-3xl"
          />

          <Image
            src={aboutImg}
            alt="Velevate Services"
            priority
            className="relative z-10 w-[260px] sm:w-[320px] md:w-[400px] lg:w-[520px]"
          />

        </motion.div>

      </div>
    </section>
  );
}
