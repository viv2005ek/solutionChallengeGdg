import React from "react";

const Registration: React.FC = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <h2 className="text-4xl font-extrabold mb-4">Join the Solution Challenge!</h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Be part of an incredible journey! Register now and bring your ideas to life using Google Developer Technologies.
      </p>

      {/* Registration Button */}
      <a
        href="https://your-registration-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full text-lg shadow-lg hover:bg-gray-200 transition"
      >
        Register Now 🚀
      </a>
    </section>
  );
};

export default Registration;
