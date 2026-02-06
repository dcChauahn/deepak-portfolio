import About from "@/components/main/About";
import AnimatedFooter from "@/components/main/AnimatedFooter";
import Encryption from "@/components/main/Encryption";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import LetsWorkTogether from "@/components/main/LetsWorkTogether";
import ProjectShowcase from "@/components/main/ProjectShowcase";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Encryption />
        <ProjectShowcase />
        <LetsWorkTogether />
      </div>
      <AnimatedFooter />
    </main>
  );
}
