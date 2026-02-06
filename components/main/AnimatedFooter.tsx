"use client";

import React from "react";
import { motion } from "framer-motion";
import { Socials } from "@/constants";
import Image from "next/image";

const AnimatedFooter = () => {
  return (
    <footer className="relative w-full border-t border-white/10 bg-gradient-to-t from-black/80 via-[#030014]/90 to-transparent mt-10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col gap-6 sm:gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-purple-300/80 mb-1">
              Portfolio of Deepak Chauhan
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Building fast, scalable{" "}
              <span className="text-cyan-400 font-medium">Shopify</span>,{" "}
              <span className="text-cyan-400 font-medium">WordPress</span> &amp;{" "}
              <span className="text-cyan-400 font-medium">Node.js / Next.js (AWS)</span>{" "}
              experiences.
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {Socials.map((social) =>
              social.name === "Email" ? null : (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/60 transition-colors duration-200"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </motion.a>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Deepak Chauhan. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for freelance & full-time opportunities.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;
