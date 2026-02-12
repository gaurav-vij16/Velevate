"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Services", "About", "Portfolio", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Glass Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 px-5 sm:px-6 py-3 shadow-lg">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-extrabold">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Velevate
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 text-white">
            {links.map((item, i) => (
              <Link
                key={i}
                href={`/${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="text-gray-200 group-hover:text-white transition">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA DESKTOP */}
          <Link
            href="/contact"
            className="hidden md:block px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:scale-105 transition"
          >
            Let’s Talk
          </Link>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-4 sm:mx-6 mt-2 rounded-2xl bg-[#050014]/95 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col divide-y divide-white/10">

              {links.map((item, i) => (
                <Link
                  key={i}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 text-gray-200 hover:text-white hover:bg-white/5 transition"
                >
                  {item}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-center bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium"
              >
                Let’s Talk
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}
