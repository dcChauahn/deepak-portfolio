"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const ProjectShowcase = () => {
  const allProjects = [
    // E-Commerce Applications
    {
      name: "VIP Number Application",
      url: "https://www.vipnumbershop.com",
      tech: "Node.js, React.js, Next.js, PostgreSQL",
      description: "Full-stack e-commerce platform for VIP number sales with secure payment processing",
      image: "/Projects photos/vipnumbershop.jpg",
      category: "E-Commerce"
    },
    {
      name: "Doorloop",
      url: "https://www.doorloop.com",
      tech: "Node.js, React.js, MongoDB",
      description: "Property management platform with tenant and rent management features",
      image: "/Projects photos/Doorloop.png",
      category: "E-Commerce"
    },
    {
      name: "Rentberry",
      url: "https://rentberry.com",
      tech: "Node.js, React.js, MongoDB",
      description: "Rental platform connecting tenants and landlords",
      image: "/Projects photos/rentberry.png",
      category: "E-Commerce"
    },
    {
      name: "Prorevv",
      url: "https://www.prorevv.com",
      tech: "Node.js, React.js, Redux, Next.js, Tailwind CSS, PostgreSQL",
      description: "Modern web application with state management and responsive design",
      image: "/Projects photos/prorevv.png",
      category: "E-Commerce"
    },
    
    // Shopify Websites
    {
      name: "Drinkbev",
      url: "https://www.drinkbev.com",
      tech: "Shopify, Liquid, JavaScript",
      description: "E-commerce website for beverage products with custom Shopify theme",
      image: "/Projects photos/drinkbev.jpg",
      category: "Shopify"
    },
    {
      name: "Wearedip",
      url: "https://www.wearedip.co.uk",
      tech: "Shopify, Liquid, CSS",
      description: "Fashion e-commerce store with custom design and functionality",
      image: "/Projects photos/dip.png",
      category: "Shopify"
    },
    {
      name: "Gleefulsupps",
      url: "https://www.gleefullsupps.com",
      tech: "Shopify, Liquid, JavaScript",
      description: "Health supplements e-commerce platform",
      image: "/Projects photos/gleefullsupps.webp",
      category: "Shopify"
    },
    {
      name: "Tapt.io",
      url: "https://shop.tapt.io",
      tech: "Shopify, Liquid, React",
      description: "Technology products e-commerce store",
      image: "/Projects photos/tapt.webp",
      category: "Shopify"
    },
    {
      name: "Miracle Brand",
      url: "https://www.miraclebrand.co",
      tech: "Shopify, Liquid, JavaScript",
      description: "Brand-focused e-commerce website with custom features",
      image: "/Projects photos/miraclebrand.webp",
      category: "Shopify"
    },
    {
      name: "Warley Food Service",
      url: "https://warleyfoodservice.com/",
      tech: "Shopify, Liquid, CSS",
      description: "Food service e-commerce platform",
      image: "/deliveroo1.jpg",
      category: "Shopify"
    },
    
    // Shopify Apps
    {
      name: "Checkout Switcher App",
      url: "https://apps.shopify.com/checkout-switcher",
      tech: "React, Node.js, Shopify APIs",
      description: "Shopify app for checkout customization and switching",
      image: "/Projects photos/checkout-switcher.webp",
      category: "Shopify Apps"
    },
    {
      name: "EGiftify App",
      url: "https://apps.shopify.com/egiftify",
      tech: "React, Node.js, Shopify APIs",
      description: "E-gift card management app for Shopify stores",
      image: "/Projects photos/egiftify.webp",
      category: "Shopify Apps"
    },
    {
      name: "Checkout Upsell",
      url: "https://apps.shopify.com/upsellpluscheckout",
      tech: "React, Node.js, Shopify APIs",
      description: "Upsell products during checkout process",
      image: "/Projects photos/upsellpluscheckout.webp",
      category: "Shopify Apps"
    },
    {
      name: "Protect Package Protection",
      url: "https://apps.shopify.com/protect-package-protection",
      tech: "React, Node.js, Shopify APIs",
      description: "Package protection and insurance app",
      image: "/Projects photos/protect-package-protection.webp",
      category: "Shopify Apps"
    },
    {
      name: "Dashboard Bots",
      url: "https://apps.shopify.com/crobots-dashboard-bot",
      tech: "React, Node.js, Shopify APIs",
      description: "Automated dashboard management bot",
      image: "/Projects photos/crobots-dashboard-bot.webp",
      category: "Shopify Apps"
    },
    
    // WordPress Portfolio
    {
      name: "VisLearning",
      url: "https://www.vislearning.com/",
      tech: "WordPress, PHP, MySQL",
      description: "Educational platform with custom WordPress development",
      image: "/Projects photos/vislearning.png",
      category: "WordPress"
    },
    {
      name: "Astora Travels",
      url: "https://astoratravels.com/",
      tech: "WordPress, WooCommerce, PHP",
      description: "Travel agency website with booking functionality",
      image: "/Projects photos/astoratravels.jpg",
      category: "WordPress"
    },
    {
      name: "SaddleBrown",
      url: "https://saddlebrown-magpie-652048.hostingersite.com/",
      tech: "WordPress, Elementor, PHP",
      description: "Creative agency website with Elementor page builder",
      image: "/Projects photos/saddlebrown-magpie.webp",
      category: "WordPress"
    },
    {
      name: "Revenel",
      url: "https://revenel.com/",
      tech: "WordPress, Custom Theme, PHP",
      description: "Business website with custom WordPress theme",
      image: "/Projects photos/revenel.webp",
      category: "WordPress"
    },
    {
      name: "Driftport Export",
      url: "https://driftportexport.com/",
      tech: "WordPress, WooCommerce, PHP",
      description: "Export business website with e-commerce functionality",
      image: "/Projects photos/driftportexport.jpg",
      category: "WordPress"
    },
    {
      name: "FA Digital",
      url: "https://fadigital.com.au/",
      tech: "WordPress, Custom Development, PHP",
      description: "Digital agency website with custom features",
      image: "/Projects photos/fadigital.jpg",
      category: "WordPress"
    },
    {
      name: "Rank Me Now",
      url: "https://rankmenow.ai/",
      tech: "WordPress, AI Integration, PHP",
      description: "AI-powered SEO and ranking platform",
      image: "/Projects photos/rankmenow.webp",
      category: "WordPress"
    },
    {
      name: "Siox Global",
      url: "https://sioxglobal.com/",
      tech: "WordPress, Global Business Theme, PHP",
      description: "Global business website with multi-language support",
      image: "/Projects photos/sioxglobal.png",
      category: "WordPress"
    }
  ];

  // Get projects by category
  const ecommerceProjects = allProjects.filter(p => p.category === "E-Commerce");
  const shopifyProjects = allProjects.filter(p => p.category === "Shopify");
  const shopifyAppsProjects = allProjects.filter(p => p.category === "Shopify Apps");
  const wordpressProjects = allProjects.filter(p => p.category === "WordPress");

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 flex flex-col h-[450px] sm:h-[500px]"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
          {project.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mb-3 font-medium">
          {project.tech}
        </p>
        <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>
        
        {/* Button aligned to bottom */}
        <div className="mt-auto">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("Opening project:", project.name, "URL:", project.url);
              // Open in new tab
              window.open(project.url, "_blank", "noopener,noreferrer");
            }}
            className="w-full bg-transparent border-2 border-cyan-500/30 hover:bg-cyan-500 hover:border-cyan-400 text-cyan-400 hover:text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 cursor-pointer relative z-50 active:scale-95 text-sm sm:text-base"
            style={{ pointerEvents: "auto", zIndex: 999 }}
          >
            <span className="flex items-center justify-center">
              View Project
              <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="flex flex-col items-center justify-center py-10 sm:py-16 lg:py-20"
      id="project-showcase"
    >

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-16 lg:py-20 text-center px-4">
        All Projects
      </h1>

      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* E-Commerce Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center px-4">
            E-Commerce Applications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {ecommerceProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Shopify Websites Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center px-4">
            Shopify Websites
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {shopifyProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Shopify Apps Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center px-4">
            Shopify Apps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {shopifyAppsProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* WordPress Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center px-4">
            WordPress Portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {wordpressProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
