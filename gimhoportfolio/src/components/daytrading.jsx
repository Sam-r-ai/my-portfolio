"use client";

export default function DayTrading() {
  return (
    <div className="px-6 py-20 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Day Trading Journey</h1>
      <p className="text-lg text-gray-600 mb-4">
        I document my trades, strategies, and lessons learned on my YouTube channel.
        Check it out for insights and breakdowns of real trades!
      </p>

      <a
        href="https://www.youtube.com/@gimhotrades"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-8 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
      >
        📺 Visit My YouTube Channel
      </a>

      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/GLNwCIGb5Wk
"
          title="Day Trading Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}