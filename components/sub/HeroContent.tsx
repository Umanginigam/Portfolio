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

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-white">
            Software Engineer 
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          I&apos;m 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Umangi{" "}
            </span>
            Nigam
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Detail-oriented and enthusiastic Computer Science student with expertise in web development, AI/ML, and data analysis. Seeking a role to apply my technical and problem-solving skills in building innovative solutions that deliver real-world impact.
        </motion.p>
      <motion.a 
        variants={slideInFromLeft(1)}
        href="/umangi_resume-8.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="py-2 button-primary text-center bg-blue-900 text-white cursor-pointer rounded-lg max-w-[200px]">
        Resume!
      </motion.a>

      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center">
            <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
            ></Image>
        </motion.div>

        
    
    </motion.div>
  );
};

export default HeroContent;
