"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";

const LetsWorkTogether = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-16 sm:py-20 pb-10 px-4"
      id="contact"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <h1 className="Welcome-text text-[13px]">
          Ready to Collaborate
        </h1>
      </motion.div>

      <h1 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-14 text-center">
        Let&apos;s Work Together
      </h1>

      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 p-8 sm:p-10 md:p-12"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            {/* Text side */}
            <motion.div
              variants={slideInFromLeft(0.3)}
              className="flex-1 text-center lg:text-left"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Ready to build your next Shopify, WordPress or Node.js / Next.js experience?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0">
                From high-converting e-commerce stores to custom web applications, I help brands
                launch fast, look professional, and scale with confidence. Share your idea and
                I&apos;ll turn it into a clean, performant, and maintainable product.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => window.open("mailto:deepakchauhan143143143@gmail.com", "_blank")}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl shadow-lg shadow-purple-500/30 text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Schedule a Call</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => window.open("https://wa.me/918394980003?text=Hi%20Deepak,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.", "_blank")}
                  className="border border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-300 font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Highlight cards */}
            <motion.div
              variants={slideInFromRight(0.4)}
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
            >
              <div className="rounded-xl bg-black/30 border border-white/10 p-4 sm:p-5 text-left">
                <p className="text-xs text-cyan-400 uppercase tracking-[0.18em] mb-2">
                  Services
                </p>
                <ul className="space-y-2 text-gray-200 text-sm sm:text-base">
                  <li>🚀 Shopify theme &amp; app development</li>
                  <li>🛒 WordPress / WooCommerce stores</li>
                  <li>⚙️ Node.js &amp; Next.js full stack web applications</li>
                  <li>☁️ AWS‑hosted, scalable architectures</li>
                </ul>
              </div>

              <div className="rounded-xl bg-black/30 border border-white/10 p-4 sm:p-5 text-left">
                <p className="text-xs text-purple-400 uppercase tracking-[0.18em] mb-2">
                  Collaboration
                </p>
                <ul className="space-y-2 text-gray-200 text-sm sm:text-base">
                  <li>🌍 Remote-friendly worldwide</li>
                  <li>🤝 Long-term & one-off projects</li>
                  <li>📍 Based in Chandigarh, India</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LetsWorkTogether;
