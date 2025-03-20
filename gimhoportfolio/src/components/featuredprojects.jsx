"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Lofi Mars Automation",
    description: "AI-powered music uploads with OpenAI & Selenium.",
    image: "/projectimages/lofimars.png",
    link: "https://app.chartmetric.com/artist/4993860",
  },
  {
    title: "Odd Jobs App",
    description: "A gig-finding app built with Flutter & Firebase.",
    image: "/projectimages/moon.png",
    link: "https://github.com/Sam-r-ai/Oddjobs",
  },
  {
    title: "Shorts Reupload Automation",
    description: "A React-based scheduling tool for student collaboration.",
    image: "/projectimages/clubmars.png",
    link: "https://github.com/Sam-r-ai",
  },
];

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="relative w-full max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center mb-6">Featured Projects</h2>
      <div className="relative flex items-center justify-center overflow-hidden">
        
        {/* Left Button */}
        <button onClick={goToPrev} className="absolute left-2 z-10 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700">
          <FaChevronLeft size={20} />
        </button>

        {/* Project Display */}
        <div className="w-100 h-100 flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden relative">
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              isAnimating ? "transform translate-x-[-100%]" : ""
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-100 flex-shrink-0">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={320}
                    height={320}
                    className="w-full h-2/3 object-cover"
                  />
                </a>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button onClick={goToNext} className="absolute right-2 z-10 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700">
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
