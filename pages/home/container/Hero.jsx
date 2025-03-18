import React from "react";

const Hero = () => {
  return (
    <section className="relative  py-20 px-5 md:px-0 text-center">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Discover Inspiring Stories & Insights
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore a world of knowledge, ideas, and inspiration through our latest articles.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search for articles..."
            className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-r-full hover:bg-blue-600 transition-all">
            Search
          </button>
        </div>

        {/* CTA Button */}
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
