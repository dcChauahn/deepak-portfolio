"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      duration: "Jan 2023 – Present",
      description: [
        "Developed and customized Shopify themes and apps for global clients",
        "Designed & built WordPress/WooCommerce websites from scratch",
        "Built Node.js / Next.js based e-commerce solutions with third-party API integrations",
        "Optimized websites for SEO, performance, and conversion rate",
        "Delivered custom React.js-based business applications deployed on AWS"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Snowflakes Software Pvt Ltd",
      duration: "Jan 2020 – Nov 2023",
      description: [
        "Designed and implemented RESTful APIs to boost application performance",
        "Managed software development lifecycle for major projects",
        "Built scalable web services ensuring smooth front-end & back-end communication",
        "Implemented Single Sign-On (SSO) authentication (OAuth)",
        "Deployed applications across multiple cloud environments",
        "Worked with UX designers to deliver responsive, user-friendly UIs",
        "Integrated third-party RESTful APIs to expand system functionality"
      ]
    }
  ];

  return (
    <div
      className="relative flex flex-col items-center justify-center py-20"
      id="experience"
    >
      {/* subtle animated glow behind section */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-24 h-72 bg-gradient-to-b from-cyan-500/15 via-purple-500/10 to-transparent blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] z-10"
      >
        <h1 className="Welcome-text text-[13px]">
          Professional Experience
        </h1>
      </motion.div>

      <motion.h1
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 z-10"
      >
        Work Experience
      </motion.h1>

      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-10 relative z-10">
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-2 sm:left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.25 }}
              className="relative mb-12 ml-8 sm:ml-12 md:ml-16"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-6 sm:-left-8 md:-left-12 top-6 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-2 sm:border-4 border-gray-900 shadow-lg"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              />
              
              {/* Experience card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Card header */}
                <div className="p-4 sm:p-5 md:p-6 border-b border-gray-700/50">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-cyan-400 font-semibold mb-2">{exp.company}</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 lg:mt-0">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium bg-gray-800/50 px-2 sm:px-3 py-1 rounded-full border border-gray-600/50">
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="grid gap-3">
                    {exp.description.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.35, delay: index * 0.25 + itemIndex * 0.08 }}
                        className="flex items-start group/item"
                      >
                        <motion.div
                          className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: itemIndex * 0.12 }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                        </motion.div>
                        <p className="text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
