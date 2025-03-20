"use client";
import { useState } from "react";

const movies = [
  {
    title: "The Godfather",
    poster: "/projectimages/godfather.png",
    summary: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    quote: "I'm gonna make him an offer he can't refuse."
  },
  {
    title: "The Wolf of Wall Street",
    poster: "/projectimages/wolfofwallstreet.png",
    summary: "Based on the true story of Jordan Belfort's rise and fall on Wall Street.",
    quote: "The only thing standing between you and your goal is the story you keep telling yourself."
  },
  {
    title: "The Greatest Showman",
    poster: "/projectimages/greatestshowman.png",
    summary: "Celebrates the birth of show business and tells of a visionary who created a spectacle.",
    quote: "The noblest art is that of making others happy."
  },
  {
    title: "Star Wars",
    poster: "/projectimages/starwars.png",
    summary: "A young farmer discovers his destiny and joins the fight against the evil Galactic Empire.",
    quote: "The Force will be with you, always."
  }
];

export default function MovieTicketStub() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="mt-12 text-center">
      <h2 className="text-3xl font-bold">🎟️ Favorite Movies</h2>
      <p className="text-lg text-gray-600">Hover over a ticket to see more details!</p>
      
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="relative w-72 h-28 bg-yellow-300 rounded-lg shadow-md p-4 cursor-pointer transform transition-all duration-500 hover:h-64"
            onMouseEnter={() => setExpanded(index)}
            onMouseLeave={() => setExpanded(null)}
          >
            <h3 className="text-xl font-semibold text-gray-900">{movie.title}</h3>
            <div className={`overflow-hidden transition-all duration-500 ${expanded === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <img src={movie.poster} alt={movie.title} className="w-full h-40 object-cover rounded-md mt-2" />
              <p className="text-gray-700 text-sm mt-2">{movie.summary}</p>
              <p className="italic text-gray-900 mt-2">“{movie.quote}”</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
