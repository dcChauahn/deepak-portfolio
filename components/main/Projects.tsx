import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Featured Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="VIP Number Application"
          description="Full-stack e-commerce platform for VIP number sales. Built with Node.js, React.js, Next.js, and PostgreSQL. Features secure payment processing and user management."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Doorloop Property Management"
          description="Comprehensive property management platform. Developed with Node.js, React.js, and MongoDB. Includes tenant management, rent collection, and maintenance tracking."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Shopify Apps Portfolio"
          description="Multiple Shopify apps including Checkout Switcher, EGiftify, and Checkout Upsell. Built with React, Node.js, and Shopify APIs for enhanced e-commerce functionality."
        />
      </div>
    </div>
  );
};

export default Projects;
