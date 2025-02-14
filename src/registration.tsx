import React from "react";

const Registration: React.FC = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-br from-[#4285f4] to-white  rounded-3xl px-5">
      <h2 className="text-4xl font-extrabold mb-4 text-white">Join the Solution Challenge!</h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-800 font-semibold">
        Be part of an incredible journey! Register now and bring your ideas to life using Google Developer Technologies.
      </p>

      {/* Registration Button */}
      <a
        href="https://your-registration-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-[#ea4339] font-semibold px-6 py-3 rounded-full text-lg shadow-lg hover:bg-gray-200 transition"
      >
        Register Now 🚀
      </a>
    </section>
  );
};

export default Registration;
