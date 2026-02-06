"use client";

import { Socials } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return;

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    // URL se hash hata do taaki refresh par hamesha Home dikhai de
    window.history.replaceState(null, "", "/");
  };

  return (
    <div className="w-full h-[60px] sm:h-[65px] fixed top-0 left-0 right-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014]/98 backdrop-blur-md z-[100] px-3 sm:px-4 md:px-8 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2 sm:px-3 md:px-[10px] relative gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => scrollToSection("about-me")}
          className="h-auto w-auto flex flex-row items-center z-10 min-w-fit cursor-pointer bg-transparent border-none p-1 flex-shrink-0"
        >
          <div className="relative w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin object-contain w-full h-full"
              style={{ display: 'block', visibility: 'visible' }}
              priority
            />
          </div>

          <span className="font-bold ml-[8px] sm:ml-[10px] hidden md:block text-gray-300 whitespace-nowrap text-sm lg:text-base">
            Deepak Chauhan
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[15px] sm:px-[20px] py-[8px] sm:py-[10px] rounded-full text-gray-200 text-sm sm:text-base">
            <button
              type="button"
              onClick={() => scrollToSection("about-me")}
              className="cursor-pointer bg-transparent border-none p-0 text-gray-200"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="cursor-pointer bg-transparent border-none p-0 text-gray-200"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("skills")}
              className="cursor-pointer bg-transparent border-none p-0 text-gray-200"
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("experience")}
              className="cursor-pointer bg-transparent border-none p-0 text-gray-200"
            >
              Experience
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("project-showcase")}
              className="cursor-pointer bg-transparent border-none p-0 text-gray-200"
            >
              Portfolio
            </button>
          </div>
        </div>

        {/* Mobile: Icons Center, Desktop: Icons Right */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none flex flex-row gap-1.5 sm:gap-2 md:gap-5 items-center flex-shrink-0 max-w-[200px] md:max-w-none pointer-events-auto z-[50]">
          {Socials.map((social) => (
            social.name === 'Email' ? (
              <motion.a
                key={social.name}
                href={social.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-1.5 px-2 sm:py-2 sm:px-3 md:px-4 rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer text-[10px] sm:text-xs md:text-sm whitespace-nowrap flex-shrink-0"
                title="Hire Me"
              >
                <span className="flex items-center">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-0.5 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                  <span className="hidden xs:inline">Hire Me</span>
                </span>
              </motion.a>
            ) : (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-110 transition-transform duration-200 p-1.5 rounded-full hover:bg-gray-800/50 flex-shrink-0 min-w-[32px] min-h-[32px] flex items-center justify-center bg-white/5"
                title={social.name}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain transition-all duration-200 hover:opacity-100"
                  style={{ 
                    display: 'block',
                    filter: 'brightness(0) invert(1)',
                    opacity: 1
                  }}
                />
              </a>
            )
          ))}
        </div>

        {/* Mobile Menu Button - Right Side */}
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="md:hidden flex flex-col items-center justify-center w-9 h-9 sm:w-9 sm:h-9 space-y-1.5 flex-shrink-0 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 hover:from-purple-400 hover:to-cyan-400 border border-white/30 rounded-lg p-2 min-w-[36px] min-h-[36px] z-[102] transition-all duration-200 shadow-lg"
          aria-label="Toggle mobile menu"
        >
          <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed top-[60px] sm:top-[65px] left-0 right-0 w-full bg-[#030014]/98 border-t border-[#7042f861] backdrop-blur-md z-[99] shadow-lg"
        >
          <div className="flex flex-col space-y-4 p-6">
            <button
              type="button"
              className="text-left text-gray-300 hover:text-white transition-colors duration-200 py-2 bg-transparent border-none"
              onClick={() => {
                scrollToSection("about-me");
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </button>
            <button
              type="button"
              className="text-left text-gray-300 hover:text-white transition-colors duration-200 py-2 bg-transparent border-none"
              onClick={() => {
                scrollToSection("about");
                setIsMobileMenuOpen(false);
              }}
            >
              About
            </button>
            <button
              type="button"
              className="text-left text-gray-300 hover:text-white transition-colors duration-200 py-2 bg-transparent border-none"
              onClick={() => {
                scrollToSection("skills");
                setIsMobileMenuOpen(false);
              }}
            >
              Skills
            </button>
            <button
              type="button"
              className="text-left text-gray-300 hover:text-white transition-colors duration-200 py-2 bg-transparent border-none"
              onClick={() => {
                scrollToSection("experience");
                setIsMobileMenuOpen(false);
              }}
            >
              Experience
            </button>
            <button
              type="button"
              className="text-left text-gray-300 hover:text-white transition-colors duration-200 py-2 bg-transparent border-none"
              onClick={() => {
                scrollToSection("project-showcase");
                setIsMobileMenuOpen(false);
              }}
            >
              Portfolio
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
