"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Glass Container */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-lg">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-extrabold">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Velevate
            </span>
          </Link>

          {/* LINKS */}
          <div className="hidden md:flex items-center gap-8 text-white">

            {["Home", "Services", "About", "Portfolio", "Contact"].map(
              (item, i) => (
                <Link
                  key={i}
                  href={`/${item.toLowerCase()}`}
                  className="relative group"
                >
                  <span className="text-gray-200 group-hover:text-white transition">
                    {item}
                  </span>

                  {/* Underline Animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            )}

          </div>

          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:scale-105 transition"
          >
            Let’s Talk
          </Link>

        </div>
      </div>
    </motion.nav>
  );
}
