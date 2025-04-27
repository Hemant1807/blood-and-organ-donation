import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 via-blue-600 to-white text-center py-24 min-h-screen flex flex-col items-center justify-center">
      <img src="/assets/logo.png" alt="Blood and Organ Donation" className="mx-auto mb-6 w-32" />
      <h1 className="text-4xl text-white font-bold">Blood and Organ Donation</h1>
      <p className="text-lg text-white mt-4">Donate Life, Save Life</p>
      <button className="bg-red-700 text-white px-8 py-3 mt-6 rounded-full text-lg">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
