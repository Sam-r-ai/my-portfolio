"use client";
import { useState } from "react";
import Image from "next/image";

const books = [
  {
    title: "Red Rising",
    cover: "/projectimages/redrising.png",
    summary:
      "A gripping sci-fi tale of rebellion, survival, and power struggles in a futuristic society.",
    quote: "I would have lived in peace, but my enemies brought me war.",
    reason: "I love the intense world-building and character growth in this series.",
  },
  {
    title: "The Count of Monte Cristo",
    cover: "/projectimages/montecristo.png",
    summary:
      "A timeless classic about betrayal, patience, and ultimate revenge.",
    quote: "All human wisdom is summed up in these two words – ‘Wait and Hope.’",
    reason: "It’s the greatest revenge story ever written, full of intrigue and justice.",
  },
  {
    title: "The Great Gatsby",
    cover: "/projectimages/gatsby.png",
    summary:
      "A tragic story of love, wealth, and the pursuit of the American Dream.",
    quote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
    reason: "The themes of illusion vs. reality resonate deeply with me.",
  },
  {
    title: "Animal Farm",
    cover: "/projectimages/animalfarm.png",
    summary:
      "A political allegory about power, corruption, and the dangers of totalitarianism.",
    quote: "All animals are equal, but some animals are more equal than others.",
    reason: "It’s a short but powerful book that makes you think about society and leadership.",
  },
];

export default function FavoriteBooks() {
  const [selectedBook, setSelectedBook] = useState(null);

  const toggleBook = (title) => {
    setSelectedBook(selectedBook === title ? null : title);
  };

  return (
    <section className="mt-12 text-center">
      <h2 className="text-3xl font-bold">📖 Favorite Books</h2>
      <p className="text-lg text-gray-600">Click on a book to pull it out and see details!</p>

      <div className="flex justify-center items-end mt-6 relative h-52">
        {books.map((book) => (
          <div
            key={book.title}
            className={`relative transition-transform duration-500 ease-in-out cursor-pointer 
              ${selectedBook === book.title ? "translate-y-[-20px] scale-110" : "hover:translate-y-[-5px]"}`}
            onClick={() => toggleBook(book.title)}
          >
            <Image
              src={book.cover}
              alt={book.title}
              width={100}
              height={150}
              className="shadow-lg rounded-md"
            />
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto border border-gray-300">
          {books.map((book) =>
            book.title === selectedBook ? (
              <div key={book.title}>
                <h3 className="text-2xl font-bold">{book.title}</h3>
                <Image
                  src={book.cover}
                  alt={book.title}
                  width={150}
                  height={200}
                  className="my-2 mx-auto rounded-md"
                />
                <p className="text-gray-700 mt-2"><strong>Summary:</strong> {book.summary}</p>
                <p className="italic mt-2">“{book.quote}”</p>
                <p className="text-gray-700 mt-2"><strong>Why I Like It:</strong> {book.reason}</p>
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  onClick={() => setSelectedBook(null)}
                >
                  Close
                </button>
              </div>
            ) : null
          )}
        </div>
      )}
    </section>
  );
}
