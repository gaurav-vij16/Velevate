"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  Camera,
  Megaphone,
  Search,
  MonitorSmartphone,
  Mail,
  Users,
} from "lucide-react";

const services = [
  { title: "Social Media Marketing", icon: Megaphone },
  { title: "Affiliate Marketing", icon: Users },
  { title: "SEO Optimization", icon: Search },
  { title: "Branding & Design", icon: Camera },
  { title: "Paid Advertising", icon: MonitorSmartphone },
  { title: "Email Marketing", icon: Mail },
  { title: "Content Production", icon: Camera },
];

export default function ServicesCircleSlider() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="relative overflow-hidden py-28 bg-[#050014]">

      {/* PURPLE / BLUE GLOWS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 blur-[180px]" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-blue-600/30 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-20">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-semibold">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            What We
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Create
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
            Powerful digital solutions built to elevate brands and creators.
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          centeredSlides
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <SwiperSlide key={i} className="flex justify-center">
                <div className="group relative w-56 h-56 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/40">

                  {/* ICON */}
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg group-hover:scale-110 transition">
                    <Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition"
          >
            View All Services →
          </a>
        </div>

      </div>
    </section>
  );
}
