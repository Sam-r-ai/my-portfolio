"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Howl } from "howler";

const cars = [
  {
    name: "BMW 325i (2003)",
    image: "/projectimages/bmw325i.png",
    before: "/projectimages/bmw_before.png",
    after: "/projectimages/bmw_after.png",
    parts: ["Expansion Tank", "Coolant Hoses", "Thermostat", "Fan Clutch", "Starter", "Vacuum Lines", "Rear Struts", "Brake Pads", "Oil Change"],
    purchase: "$2000",
    cost: "$1,800",
    timeSpent: "3 Months",
    lessons: "Learned about BMW cooling systems and proper OEM parts sourcing.",
    sound: "/sounds/bmw_start.mp3",
  },
  {
    name: "Pontiac Grand Prix GT (1999)",
    image: "/projectimages/pontiac.png",
    before: "/projectimages/corolla_before.png",
    after: "/projectimages/corolla_after.png",
    parts: ["Thermostat", "Alternator", "Transmission Shifting Cable", "Replaced Radio", "Battery", "New Tires"],
    purchase: "1100",
    cost: "$800",
    timeSpent: "2 Months",
    lessons: "Gained experience in general maintenance and electrical diagnostics.",
    sound: "/sounds/corolla_start.mp3",
  },
];

export default function Garage() {
  const [selectedCar, setSelectedCar] = useState(null);

  const playEngineSound = (soundFile) => {
    const sound = new Howl({ src: [soundFile] });
    sound.play();
  };

  return (
    <div className="px-6 py-20 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-8">My Virtual Garage</h1>
      <p className="text-lg text-gray-600 mb-6">Click a car to view its repair log!</p>

      {/* Garage Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cars.map((car) => (
          <div
            key={car.name}
            className="relative bg-gray-800 text-white p-6 rounded-lg shadow-lg h-72 cursor-pointer transition hover:scale-105"
            onClick={() => setSelectedCar(car)}
          >
            <img src={car.image} alt={car.name} className="w-full h-52 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-2">{car.name}</h3>
          </div>
        ))}
      </div>

      {/* Car Modal */}
      <Dialog open={!!selectedCar} onClose={() => setSelectedCar(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
            <Dialog.Title className="text-2xl font-bold mb-2">{selectedCar?.name}</Dialog.Title>
            <div className="grid grid-cols-2 gap-4">
              <img src={selectedCar?.before} alt="Before" className="w-full rounded-md" />
              <img src={selectedCar?.after} alt="After" className="w-full rounded-md" />
            </div>
            <p className="mt-4 text-gray-700"><strong>Parts Replaced:</strong> {selectedCar?.parts.join(", ")}</p>
            <p className="text-gray-700"><strong>Car Purchase:</strong> {selectedCar?.purchase}</p>
            <p className="text-gray-700"><strong>Cost:</strong> {selectedCar?.cost}</p>
            <p className="text-gray-700"><strong>Time Spent:</strong> {selectedCar?.timeSpent}</p>
            <p className="text-gray-700"><strong>Lessons Learned:</strong> {selectedCar?.lessons}</p>

            {/* Engine Start Button */}
            <button
              onClick={() => playEngineSound(selectedCar?.sound)}
              className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 transition"
            >
              🔊 Start Engine
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
