"use client"
import React from "react"
import {motion} from "framer-motion"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion"
import { SparklesIcon } from "@heroicons/react/24/solid"

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Powering products with Node.js, Next.js & AWS
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-xl sm:text-2xl lg:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] px-4"
        >
            Modern full-stack development, from backend APIs to cloud
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-base sm:text-lg lg:text-[20px] text-gray-200 mb-6 sm:mb-8 lg:mb-10 mt-[10px] text-center px-4"
        >
            Clean, scalable and well-tested code for real-world products
        </motion.div>
    </div>
  )
}

export default SkillText