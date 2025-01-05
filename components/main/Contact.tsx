"use client";

import React from "react";
import { motion } from "framer-motion";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden" id="contact">
      {/* Background video */}
      <video 
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="contact.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[1000px] mx-auto flex flex-col justify-center items-center h-full px-4">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h1>

        {/* Contact Form */}
        <motion.form
          action="https://formspree.io/f/your_form_id"
          method="POST"
          className="w-full md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex flex-col mb-4">
            <label
              htmlFor="name"
              className="text-lg font-semibold transition-all duration-200"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className="text-lg font-semibold transition-all duration-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your Email"
              className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="message"
              className="text-lg font-semibold transition-all duration-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Your Message"
              className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex flex-row justify-center items-center mt-8 space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href="mailto:nigamumangi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 text-2xl"
          >
            <HiOutlineMail />
          </a>
          <a
            href="https://github.com/umanginigam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 text-2xl"
          >
            <RxGithubLogo />
          </a>
          <a
            href="https://www.linkedin.com/in/umanginigam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 text-2xl"
          >
            <RxLinkedinLogo />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
