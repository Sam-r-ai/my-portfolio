"use client";
import Garage from "@/components/Garage"; // Adjust path based on your project structure
import DayTrading from "@/components/daytrading";

export default function ProjectsBeyondCode() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Projects Beyond Code</h1>

      {/* Automobile Projects Section */}
      <section className="w-full">
        <h2 className="text-3xl font-semibold mb-6">🚗 Automobile Projects</h2>
        <Garage />
      </section>

      {/* Day Trading Section (Placeholder for Future Implementation) */}
      <section className="w-full mt-12">
        <h2 className="text-3xl font-semibold mb-6">📈 Day Trading</h2>
        <DayTrading />
      </section>
    </div>
  );
}
