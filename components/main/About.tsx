"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center py-10 sm:py-16 lg:py-20"
      id="about"
    >
      {/* Soft animated glow in the background */}
      <motion.div
        className="pointer-events-none absolute -inset-x-10 top-24 h-64 bg-gradient-to-r from-purple-500/15 via-cyan-500/10 to-transparent blur-3xl opacity-60"
        animate={{ x: [-40, 40, -40] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] z-10"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          About Me
        </h1>
      </motion.div>

      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-16 lg:py-20 text-center z-10"
      >
        Professional Profile
      </motion.h1>

      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Side - Profile Summary */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="p-4 sm:p-6 lg:p-8 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Profile Summary
              </h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Full Stack Developer with <span className="text-cyan-400 font-semibold">5+ years of experience</span> in building and maintaining scalable web applications. 
                Specialized in <span className="text-purple-400 font-semibold">Shopify Theme & App Development</span> and 
                <span className="text-purple-400 font-semibold"> WordPress/WooCommerce websites</span>.
              </p>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mt-3 sm:mt-4">
                Expertise in React.js, <span className="text-cyan-300 font-semibold">Node.js</span>,{" "}
                <span className="text-cyan-300 font-semibold">Next.js</span>, PHP, and modern databases. Proven track record of optimizing applications for performance, SEO, and conversions. 
                Hands-on experience deploying and scaling apps on <span className="text-cyan-300 font-semibold">AWS</span>, implementing secure API integrations, and collaborating with cross-functional teams to deliver user-focused web solutions.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={slideInFromLeft(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="p-4 sm:p-5 lg:p-6 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-3">📍</span>
                  <span>Chandigarh, India</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-3">✉️</span>
                  <a 
                    href="mailto:deepakchauhan143143143@gmail.com"
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    deepakchauhan143143143@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-3">📞</span>
                  <a 
                    href="tel:+918394980003"
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    +91 8394980003
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Key Highlights */}
          <motion.div
            variants={slideInFromRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="p-4 sm:p-5 lg:p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Key Expertise</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <motion.div
                    className="w-3 h-3 bg-cyan-400 rounded-full mr-3"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="text-gray-300">Shopify Theme & App Development</span>
                </div>
                <div className="flex items-center">
                  <motion.div
                    className="w-3 h-3 bg-purple-400 rounded-full mr-3"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  />
                  <span className="text-gray-300">WordPress/WooCommerce Solutions</span>
                </div>
                <div className="flex items-center">
                  <motion.div
                    className="w-3 h-3 bg-cyan-400 rounded-full mr-3"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  />
                  <span className="text-gray-300">React.js, Node.js & Next.js Applications</span>
                </div>
                <div className="flex items-center">
                  <motion.div
                    className="w-3 h-3 bg-purple-400 rounded-full mr-3"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  />
                  <span className="text-gray-300">E-commerce Platform Development</span>
                </div>
                <div className="flex items-center">
                  <motion.div
                    className="w-3 h-3 bg-cyan-400 rounded-full mr-3"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  />
                  <span className="text-gray-300">API Integration & AWS Cloud Deployment</span>
                </div>
                <div className="flex items-center">
                  <motion.div
                    className="w-3 h-3 bg-purple-400 rounded-full mr-3"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <span className="text-gray-300">Performance Optimization & SEO</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="p-6 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Education</h3>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-cyan-400">Bachelor&apos;s in Computer Applications</h4>
                <p className="text-gray-300">Shri Guru Ram Rai University, Dehradun</p>
                <p className="text-gray-400 text-sm">2015 – 2019</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="p-4 sm:p-5 lg:p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Languages</h3>
              <div className="flex space-x-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">English</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Hindi</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
