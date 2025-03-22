"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

const allProjects = [
  {
    title: "Lofi Mars",
    category: "Automation",
    summary: "AI-powered music uploads using Python, Selenium, and OpenAI.",
    image: "/projectimages/lofimars400.png",
    github: "https://github.com/Sam-r-ai/Automated_Distrokid_Uploader",
    tools: ["Python", "Selenium", "OpenAI"]
  },
  {
    title: "Club Mars",
    category: "Automation",
    summary: "Automated Shorts Re-uploader using YouTube API and scheduling.",
    image: "/projectimages/clubmars.png",
    github: "https://github.com/Sam-r-ai/Automated-Shorts-Uploader",
    tools: ["React", "Node.js", "YouTube API"]
  },
  {
    title: "Portfolio Website",
    category: "Web",
    summary: "This interactive portfolio website built with Next.js and Tailwind.",
    image: "/projectimages/portfoliosite.png",
    github: "https://github.com/Sam-r-ai/my-portfolio",
    tools: ["React", "Next.js", "Tailwind"]
  },
  {
    title: "Odd Jobs App",
    category: "Web",
    summary: "Gig marketplace built using Flutter and Firebase.",
    image: "/projectimages/moon.png",
    github: "https://github.com/Sam-r-ai/Odd-Jobs",
    tools: ["Flutter", "Firebase"]
  },
  {
    title: "Heatmap Tool",
    category: "Web",
    summary: "Student availability heatmap built using React and Docker.",
    image: "/projectimages/heatmap.png",
    github: "https://github.com/Sam-r-ai/StudentMeetingHeatMap",
    tools: ["React", "Docker", "Github"]
  },
  {
    title: "JAIMES",
    category: "IoT",
    summary: "Voice AI assistant on Raspberry Pi with Python and OpenAI.",
    image: "/projectimages/jaimes.png",
    github: "https://github.com/Sam-r-ai/JAIMES",
    tools: ["Python", "Raspberry Pi", "OpenAI"]
  },
  {
    title: "Dino Game",
    category: "Games",
    summary: "Dino themed rhythm tapping game built using Godot.",
    image: "/projectimages/dinogame.png",
    github: "https://github.com/Sam-r-ai/DinosaurGame",
    tools: ["Godot", "GDScript"]
  },
  {
    title: "Worldle Clone",
    category: "School",
    summary: "Wordle clone built using C++ as a class project.",
    image: "/projectimages/worldle.png",
    github: "https://github.com/Sam-r-ai/worldle-clone",
    tools: ["C++"]
  }
];

export default function TechProjects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filteredProjects =
    filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <div className="px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Tech Projects</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {[
          "All",
          "Automation",
          "Web",
          "IoT",
          "Games",
          "School"
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition hover:bg-black hover:text-white ${
              filter === cat ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.title}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition transform hover:scale-105"
            onClick={() => setSelected(proj)}
          >
            <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{proj.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{proj.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selected} onClose={() => setSelected(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
            <Dialog.Title className="text-2xl font-bold mb-2">{selected?.title}</Dialog.Title>
            <img
              src={selected?.image}
              alt={selected?.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-2">{selected?.summary}</p>
            <p className="text-gray-800 font-semibold">Tools:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              {selected?.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
            <a
              href={selected?.github}
              target="_blank"
              className="text-blue-600 hover:underline"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
