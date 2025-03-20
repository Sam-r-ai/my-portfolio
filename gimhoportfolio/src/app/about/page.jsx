"use client";
import { useState } from "react";
import MovieTicketStub from "@/components/MovieTicketStub";
import FavoriteBooks from "@/components/bookshelf";
export default function AboutMe() {
  // Track flipped state for each game
  const [flipped, setFlipped] = useState({});

  // Toggle flip for a specific game
  const handleFlip = (gameName) => {
    setFlipped((prev) => ({
      ...prev,
      [gameName]: !prev[gameName],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-20 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-center">About Me</h1>

      {/* Introduction */}
      <section className="mt-8 text-lg text-gray-700">
        <p>
          Hello! My name is <span className="font-semibold">Gim Ho (Justin)</span>, and I am a 
          <span className="font-semibold"> Computer Science major </span> with a 
          <span className="font-semibold"> minor in Cybersecurity </span> at 
          <span className="text-blue-500 font-semibold"> California State University, Chico</span>. 
          I am also obtaining certificates in <span className="font-semibold">Data Science</span> and 
          <span className="font-semibold"> Sales</span>.
        </p>
        <p className="mt-4">
          I love <span className="font-semibold">creating things, selling things, and learning new things.</span>
        </p>
      </section>

      {/* Background in Computer Science */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold">How I Got Into Computer Science</h2>
        <p className="mt-4 text-lg text-gray-700">
          Ever since I was a kid, I have been interested in <span className="font-semibold">computer science</span> 
          because of my love for playing <span className="text-red-500 font-semibold">Roblox</span>. I always wanted 
          to build my own world where I could have access to all the cool weapons for free.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          My favorite games were <span className="italic">Ninjas vs. Samurai Pagoda Battle, Tycoon Games, 
          Murder Mystery, Minigames, and Deathruns.</span>
        </p>
      </section>

      {/* Digital Marketing */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold">Digital Marketing</h2>
        <p className="mt-4 text-lg text-gray-700">
          I have always been passionate about <span className="font-semibold">content creation</span> and 
          <span className="font-semibold"> digital marketing</span>. Since childhood, I wanted to make 
          YouTube videos. I believe digital marketing is an essential skill, and I’m actively learning by 
          using <span className="text-blue-500 font-semibold">Google Ads</span> to optimize outreach.
        </p>
      </section>

      {/* Sales Experience */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold">Sales Experience</h2>
        <p className="mt-4 text-lg text-gray-700">
          I’ve been selling things since high school, and my sales experience includes:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
          <li>🚪 Door-to-door coupon sales (High School)</li>
          <li>👞 Shoe shine business outside Westfield San Francisco</li>
          <li>🛍 Membership sales</li>
          <li>☀️ Door-to-door solar sales</li>
          <li>📝 Currently learning <span className="font-semibold">Insurance Sales</span></li>
        </ul>
        <p className="mt-4 text-lg text-gray-700">
          I am a part of the <span className="text-blue-500 font-semibold">Seufferlein Sales Program</span> at 
          CSU Chico and have participated in <span className="font-semibold">three</span> sales competitions.
        </p>
      </section>

      {/* Future Goals */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold">My Next Steps</h2>
        <p className="mt-4 text-lg text-gray-700">
          Right now, I’m trying to get into <span className="font-semibold">Internet Sales</span> and expand 
          my skills in **tech, business, and digital marketing**. Learning never stops, and I’m excited 
          about what’s next!
        </p>
      </section>
      <h2 className="text-3xl font-semibold mt-15">More About Me</h2>
      {/* Favorite Artists */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold">🎵 Favorite Artists</h2>
        <p className="text-lg text-gray-600">Click on an artist to listen to my favorite song by them!</p>

        <div className="flex justify-center gap-8 mt-6 flex-wrap">
          {[
            { name: "Halsey", image: "/projectimages/halsey.png", song: "https://open.spotify.com/track/1TnUURhehaoMWKAqQtirm6" },
            { name: "Chainsmokers", image: "/projectimages/thechainsmokers.png", song: "https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw" },
            { name: "The Weeknd", image: "/projectimages/theweeknd.png", song: "https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB" },
            { name: "Kanye West", image: "/projectimages/kanye.png", song: "https://open.spotify.com/track/2gZUPNdnz5Y45eiGxpHGSc" },
          ].map((artist) => (
            <a key={artist.name} href={artist.song} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src={artist.image} alt={artist.name} className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-lg hover:scale-105 transition-transform"/>
              <p className="mt-2 text-lg font-medium">{artist.name}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Favorite Games - Flipping Square Cards */}
      <section className="mt-12 text-center">
        <h3 className="text-2xl font-semibold">🎮 Favorite Games Growing Up</h3>
        <p className="text-lg text-gray-600">Click on a game to see my favorite character!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {[
            { name: "Roblox", front: "/projectimages/roblox.png", back: "/projectimages/r2d.png", character: "Reason 2 Die" },
            { name: "Battlefield 4", front: "/projectimages/battlefield.png", back: "/projectimages/scout.png", character: "Recon" },
            { name: "Battlefront 2", front: "/projectimages/battlefront.png", back: "/projectimages/maul.png", character: "Darth Maul" },
            { name: "Call of Duty Black Ops", front: "/projectimages/blackops.png", back: "/projectimages/zombies.png", character: "Zombies" },
            { name: "Halo 4", front: "/projectimages/halo.png", back: "/projectimages/masterchief.png", character: "Master Chief" },
            { name: "League of Legends", front: "/projectimages/league.png", back: "/projectimages/yasuo.png", character: "Yasuo" },
          ].map((game) => (
            <div 
              key={game.name} 
              className="relative w-50 h-50 cursor-pointer perspective"
              onClick={() => handleFlip(game.name)}
            >
              <div className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${flipped[game.name] ? "rotate-y-180" : ""}`}>
                
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden">
                  <img src={game.front} alt={game.name} className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <img src={game.back} alt={game.character} className="w-full h-full object-cover rounded-lg shadow-lg" />
                  <h4 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded-md">
                    {game.character}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Favorite Movies - Ticket Stubs */}
    <MovieTicketStub />
    <FavoriteBooks />
    </div>
  );
}
