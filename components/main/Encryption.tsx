"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen w-full h-full py-8 sm:py-12 md:py-0">
      <div className="absolute w-auto h-auto top-4 sm:top-8 md:top-0 z-[5] px-4">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl md:text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-20px] sm:translate-y-[-30px] md:translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[35px] sm:w-[45px] md:w-[50px] translate-y-3 sm:translate-y-4 md:translate-y-5 transition-all duration-200 group-hover:translate-y-6 sm:group-hover:translate-y-8 md:group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="w-[50px] sm:w-[60px] md:w-[70px] z-10"
          />
        </div>

        <div className="Welcome-box px-[12px] sm:px-[15px] py-[3px] sm:py-[4px] z-[20] brder my-[12px] sm:my-[16px] md:my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[10px] sm:text-[11px] md:text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-4 sm:bottom-6 md:bottom-[10px] px-3 sm:px-4 md:px-[5px]">
        <div className="cursive text-sm sm:text-base md:text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
