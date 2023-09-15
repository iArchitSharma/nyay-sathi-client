import React from 'react';

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side (Image) */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("/path_to_your_image.jpg")' }}></div>

      {/* Right Side */}
      <div className="w-1/2 p-12">
        {/* Logo */}
        <img src="/path_to_your_logo.png" alt="Logo" className="w-16 mb-4" />

        {/* Text: Let’s get started */}
        <h1 className="text-4xl font-bold mb-8">Let’s get started</h1>

        {/* Buttons */}
        <div className="grid grid-cols-1 gap-4">
          {/* Box 1 */}
          <div className="bg-blue-500 p-6 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-2">Browse Advocates profile</h2>
            <p>Find the perfect advocate for your needs</p>
          </div>

          {/* Box 2 */}
          <div className="bg-green-500 p-6 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
            <p>Go to your dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
