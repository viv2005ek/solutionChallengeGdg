import React from "react";

// Define props for profile cards
interface Highlight {
  imgSrc: string;
  name: string;
  description: string;
}

const highlights: Highlight[] = [
  { imgSrc: "./src/assets/Sanika.jpg", name: "Sanika", description: "Co-Founder of Spoon Share - India" },
  { imgSrc: "./src/assets/Madhu.jpg", name: "Madhu", description: "Co-Founder of Saheli - India" },
  { imgSrc: "./src/assets/Zain.jpg", name: "Zain", description: "Co-Founder of ExoHeal - Germany" },
  { imgSrc: "./src/assets/Pranav.jpg", name: "Pranav", description: "Co-Founder of Therapute - United States" },
];

const EventHighlights: React.FC = () => {
  return (
    <section className="py-10 text-center bg-gray-100">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Last Year Winners</h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition"
          >
            <img
              src={highlight.imgSrc}
              alt={highlight.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 "
            />
            <h3 className="text-xl font-semibold text-gray-900">{highlight.name}</h3>
            <p className="text-gray-600 mt-2">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventHighlights;
