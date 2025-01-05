import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="m-0 p-0 flex flex-col items-center justify-center pb-80 pt-2"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
        My Projects
      </h1>
    
      <p className="text-lg text-white text-center px-5 mb-10 py-20">
        Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </p>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Mindly.png"
          title="Mindly: AI-Powered Mental Health Companion"
          description=" Mindly is an AI-powered mental health assistant that promotes emotional well-being through personalized features like Chatbot that respond according to your emotions, Diagonis test, Resources(video and blog), and Report of mood. With a user-friendly interface and secure data handling, it provides a safe, adaptive, and holistic space for mental wellness."
          link="https://github.com/Umanginigam/Mindly"
        />
        <ProjectCard
          src="/Aerospectra.png"
          title="AeroSpectra: AI-Powered Fine Spatial Resolution Air Quality Mapping"
          description="AeroSpectra is an AI/ML-driven platform that generates high-resolution air quality maps, focusing on NO₂ concentrations, while overcoming cloud cover challenges. Using machine learning models like Random Forest and TensorFlow, it achieves 84% accuracy, improving predictions by 20% in cloudy regions, providing real-time insights for better environmental decision-making."
          link="https://github.com/Umanginigam/Aerospectra"
        />
        <ProjectCard
          src="/Agritech.png"
          title="Agritech: Smart Crop Prediction and Disease Analysis Platform"
          description="Agritech is an AI-driven platform that empowers farmers with 85% accurate crop yield predictions and 80% precise disease detection. Using technologies like Flask ,Streamlite and TensorFlow it bridges the gap between technology and agriculture, promoting smarter and sustainable farming practices."
          link="https://github.com/Tusharedith/Agritech"
         />
        <ProjectCard
          src="/Pinterest.png"
          title="Pinterest Clone"
          description="A fully functional Pinterest clone built using React.js,tailwind css allowing users to create, save, and share images in a visually appealing grid layout. The app features dynamic boards, seamless image uploads, and interactive pins for an immersive user experience. It incorporates modern web technologies to provide smooth navigation and responsive design."
          link="https://github.com/Umanginigam/Pinterest"
        />
      </div>
    </div>
  );
};

export default Projects;