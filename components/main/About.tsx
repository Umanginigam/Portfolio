"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full h-screen bg-pu text-white flex items-center justify-center py-20" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Description */}
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[60px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            About Me
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Hi, I'm <span className="text-blue-500 font-semibold">Umangi Nigam</span>, a passionate 
            Computer Science student specializing in web development, AI/ML, and data analysis. 
            I have developed projects ranging from AI-driven applications to full-stack web solutions.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4">
            My expertise includes technologies like <span className="text-blue-500">React, 
            Flask, TensorFlow,</span> and <span className="text-blue-500">Scikit-learn</span>. 
            I am constantly driven to learn, innovate, and deliver impactful solutions.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4">
            When I'm not coding, I enjoy exploring new tech, mentoring peers, and contributing to 
            open-source projects.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-70 h-70 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/formal photo.jpg" // Replace with the actual path to your image
              alt="Umangi Nigam"
              width={390}
              height={390}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
