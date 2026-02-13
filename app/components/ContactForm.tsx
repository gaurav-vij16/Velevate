"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const servicesList = [
  "Performance Marketing",
  "Social Media Marketing",
  "Influencer Marketing",
  "Branding & Content",
  "SEO",
  "Web & Design",
  "Email Marketing",
  "Content Production",
];

export default function ContactForm() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section className="relative min-h-screen w-full bg-[#05050b] text-white overflow-hidden py-28">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 blur-[180px]" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-blue-600/30 blur-[180px]" />

      <div className="max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Let’s Grow Your{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Brand
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-400">
            Performance driven marketing strategies built for scale.
          </p>
        </motion.div>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl border border-white/10"
        >

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* FIRST NAME */}
            <div>
              <label className="block mb-2 text-lg text-gray-300">
                First Name *
              </label>
              <input
                type="text"
                placeholder="Your first name"
                className="inputStyle"
              />
            </div>

            {/* LAST NAME */}
            <div>
              <label className="block mb-2 text-lg text-gray-300">
                Last Name *
              </label>
              <input
                type="text"
                placeholder="Your last name"
                className="inputStyle"
              />
            </div>

            {/* EMAIL */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-lg text-gray-300">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="inputStyle"
              />
            </div>

            {/* MESSAGE */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-lg text-gray-300">
                Message *
              </label>
              <textarea
                rows={6}
                placeholder="Tell us about your goals..."
                className="inputStyle resize-none"
              />
            </div>

            {/* SERVICES */}
            <div className="md:col-span-2">
              <p className="mb-4 text-lg text-gray-300">
                Services you're interested in
              </p>

              <div className="flex flex-wrap gap-4">
                {servicesList.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`px-6 py-3 rounded-full border text-sm md:text-base transition
                    ${
                      selected.includes(service)
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent"
                        : "border-white/20 text-gray-300 hover:border-purple-500"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* SUBMIT */}
            <div className="md:col-span-2 pt-6">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold shadow-xl hover:opacity-90"
              >
                Get Started →
              </motion.button>
            </div>

          </form>
        </motion.div>

      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .inputStyle {
          width: 100%;
          padding: 16px 18px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
          font-size: 18px;
          outline: none;
          transition: 0.3s ease;
        }

        .inputStyle::placeholder {
          color: #9ca3af;
        }

        .inputStyle:focus {
          border-color: #8b5cf6;
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.3);
        }
      `}</style>

    </section>
  );
}
