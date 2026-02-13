"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Instagram, Linkedin } from "lucide-react";
import Logo from "../../public/VelevateLogo.png";

export default function FooterContact() {
  return (
    <footer className="relative bg-white overflow-hidden">

      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#f3e8ff,transparent_40%),radial-gradient(circle_at_bottom_right,#e0f2fe,transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* BRAND */}
          <div className="space-y-6">
            <Image
              src={Logo}
              alt="Velevate"
              width={200}
              height={80}
              className="object-contain"
            />

            <p className="text-gray-600 leading-relaxed max-w-sm">
              Velevate drives growth with creativity, innovation, and
              performance-driven digital strategies built for modern brands.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center
                text-gray-700 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all"
              >
                <Instagram size={20} />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center
                text-gray-700 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-700">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-purple-600 transition"
                  >
                    <Link href="/">{item}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-6">
              Our Services
            </h4>
            <ul className="space-y-4 text-gray-700">
              {[
                "Social Media Marketing",
                "Influencer Marketing",
                "SEO Optimization",
                "Paid Advertising",
                "Email Marketing",
                "Content Production",
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-purple-600 transition"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* GET CONNECTED CARD */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

            <h3 className="text-2xl font-bold text-purple-600 mb-3">
              Get Connected
            </h3>

            <p className="text-gray-600 italic mb-6">
              Over a cup of hot or cold brew, maybe?
            </p>

            <p className="text-gray-700 mb-8">
              Have an idea or want to scale your brand? Let’s talk growth.
            </p>

            <div className="flex gap-4 mb-8">
              <button
                className="px-6 py-3 rounded-full bg-purple-600 text-white
                hover:bg-purple-700 transition"
              >
                Brand
              </button>

              <button
                className="px-6 py-3 rounded-full border border-purple-600 text-purple-600
                hover:bg-purple-600 hover:text-white transition"
              >
                Influencer
              </button>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Mail size={18} />
              <span>info@velevate.com</span>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 border-t pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Velevate. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
