"use client";
import { useEffect, useRef } from "react";
import { FaReact, FaDocker, FaPython, FaJs, FaGithub, FaJava } from "react-icons/fa";
import { SiFirebase, SiGooglecloud, SiMysql, SiNextdotjs, SiFlutter, SiTailwindcss, SiPython, SiC, SiCplusplus } from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-blue-500 text-5xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-5xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-600 text-5xl" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400 text-5xl" /> },
  { name: "Java", icon: <FaJava className="text-red-600 text-5xl" /> },
  { name: "C", icon: <SiC className="text-blue-500 text-5xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700 text-5xl" /> },
  { name: "Github", icon: <FaGithub className="text-gray-900 text-5xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-5xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 text-5xl" /> },
  { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-500 text-5xl" /> },
];

export default function TechStack() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1; // Adjust speed here
      }
    };
    const interval = setInterval(scroll, 20); // Controls smoothness
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
      <div className="w-full overflow-hidden relative">
        <div ref={scrollRef} className="flex space-x-10 overflow-x-scroll no-scrollbar">
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex flex-col items-center min-w-[120px]">
              {tech.icon}
              <span className="mt-2 text-gray-700 text-lg font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
