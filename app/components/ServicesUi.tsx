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
    <section className="relative overflow-hidden bg-[#050014] 
                        py-20 sm:py-24 md:py-28">

      {/* AMBIENT BLOBS */}
      <div className="absolute -top-32 -left-32 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-purple-600/30 blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-blue-600/30 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="text-center mb-14 sm:mb-18">

          <span className="inline-block mb-3 px-4 py-1 rounded-full 
                           bg-white/10 text-purple-400 
                           text-xs sm:text-sm font-semibold">
            Our Services
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl 
                         font-extrabold text-white leading-tight">
            What We{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 
                             bg-clip-text text-transparent">
              Create
            </span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto 
                        text-sm sm:text-base md:text-lg 
                        text-gray-400">
            Powerful digital solutions built to elevate brands and creators.
          </p>

        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          centeredSlides
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          spaceBetween={18}
          breakpoints={{
            0: { slidesPerView: 1.15 },
            480: { slidesPerView: 1.4 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <SwiperSlide key={i} className="flex justify-center">

                {/* CARD */}
                <div
                  className="group relative 
                             w-52 h-52 sm:w-56 sm:h-56 md:w-60 md:h-60 
                             rounded-3xl
                             bg-white/5 backdrop-blur-xl
                             border border-white/10
                             flex flex-col items-center justify-center
                             text-center
                             transition-all duration-500
                             hover:-translate-y-3
                             hover:border-purple-500/40"
                >

                  {/* INNER SOFT BORDER */}
                  <div className="absolute inset-[1px] rounded-3xl 
                                  bg-gradient-to-br from-white/10 to-transparent opacity-40" />

                  {/* ICON */}
                  <div className="relative z-10 mb-5 
                                  flex h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 
                                  items-center justify-center
                                  rounded-full
                                  bg-gradient-to-r from-purple-500 to-blue-500
                                  shadow-xl
                                  group-hover:scale-110 transition">
                    <Icon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white" />
                  </div>

                  {/* TITLE */}
                  <h3 className="relative z-10 
                                 text-base sm:text-lg md:text-xl 
                                 font-semibold text-white px-3">
                    {service.title}
                  </h3>

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 rounded-3xl 
                                  opacity-0 group-hover:opacity-100 transition
                                  bg-gradient-to-r from-purple-500/10 to-blue-500/10" />

                </div>

              </SwiperSlide>
            );
          })}

        </Swiper>

        {/* CTA */}
        <div className="mt-14 sm:mt-18 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 
                       px-8 sm:px-10 py-3 sm:py-4
                       rounded-full
                       bg-gradient-to-r from-purple-600 to-blue-600
                       text-white font-semibold
                       shadow-xl
                       hover:scale-105 transition"
          >
            View All Services →
          </a>
        </div>

      </div>
    </section>
  );
}
