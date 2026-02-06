"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { PROFILE_IMAGE } from "@/constants";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 pt-[80px] sm:pt-[90px] md:pt-[100px] lg:pt-[120px] pb-8 sm:pb-12 md:pb-16 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 sm:gap-6 mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
              animate={{
                backgroundPositionX: ["0%", "100%", "0%"],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Deepak Chauhan
            </motion.span>{" "}
            Full Stack Developer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-3 sm:my-5 max-w-[600px] leading-relaxed"
        >
          I&apos;m a passionate Full Stack Developer specializing in Shopify &amp; WordPress
          development with a strong focus on modern JavaScript stacks like{" "}
          <span className="text-cyan-300 font-semibold">Node.js</span>,{" "}
          <span className="text-cyan-300 font-semibold">Next.js</span> and{" "}
          <span className="text-cyan-300 font-semibold">AWS</span>. With 5+ years of experience,
          I create scalable web applications and e-commerce solutions that drive business growth
          and enhance user experiences.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm text-gray-300 mt-1"
        >
          {["Node.js", "Next.js", "React", "Shopify", "WordPress", "AWS"].map(
            (tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 6, scale: 0.94 }}
                animate={{
                  opacity: 1,
                  y: [0, -3, 0],
                  scale: 1,
                }}
                transition={{
                  delay: 0.9 + index * 0.1,
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-pink-500/40
                           border border-purple-400/40 text-gray-100 backdrop-blur-sm shadow-[0_0_18px_rgba(59,130,246,0.35)]
                           hover:border-cyan-300 hover:text-white hover:shadow-[0_0_26px_rgba(236,72,153,0.55)]
                           transition-all duration-200"
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>
        
        <motion.div
          variants={slideInFromLeft(1.1)}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8"
        >
          <motion.button
            onClick={() => {
              console.log("Get In Touch button clicked!");
              window.open("mailto:deepakchauhan143143143@gmail.com?subject=Let&apos;s Work Together - Portfolio Inquiry&body=Hi Deepak,%0D%0A%0D%0AI came across your portfolio and I&apos;m interested in working with you.%0D%0A%0D%0AProject Details:%0D%0A- Project Type: %0D%0A- Timeline: %0D%0A- Budget: %0D%0A- Description: %0D%0A%0D%0APlease let me know your availability and rates.%0D%0A%0D%0AThanks!", "_blank");
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer border-none outline-none flex items-center justify-center text-base sm:text-lg md:text-xl min-w-[180px] sm:min-w-[200px]"
            type="button"
          >
            <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </motion.button>
          
          <motion.button
            onClick={() => {
              console.log("LinkedIn button clicked!");
              window.open("https://www.linkedin.com/in/deepak-chauhan-7066b51a1/", "_blank", "noopener,noreferrer");
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-purple-500/50 hover:bg-purple-500 hover:border-purple-400 text-purple-400 hover:text-white font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer flex items-center justify-center text-base sm:text-lg md:text-xl min-w-[180px] sm:min-w-[200px]"
            type="button"
          >
            <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 lg:mt-0 px-4"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative group">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-purple-500 via-cyan-500 to-transparent opacity-50 group-hover:opacity-80 blur-3xl transition-all duration-700 pointer-events-none" />

          <div className="relative rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-cyan-500 to-transparent shadow-[0_0_60px_rgba(124,58,237,0.35)]">
            <div className="relative rounded-full bg-[#020617]/80 p-1 sm:p-2 overflow-hidden">
              <Image
                src={PROFILE_IMAGE}
                alt="Profile picture of Deepak Chauhan"
                height={380}
                width={380}
                className="rounded-full object-cover w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]"
                priority
              />

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[10px] sm:text-xs md:text-sm text-gray-100 flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="uppercase tracking-widest font-semibold">
                  Available for Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
