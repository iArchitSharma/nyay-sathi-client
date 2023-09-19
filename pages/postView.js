import React from 'react';
import { FiUser } from 'react-icons/fi'; // Assuming FiUser is the icon you want to use

const postView = () => {
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="bg-white border p-4">
        <h1 className="text-xl font-bold mb-2">
          VPN application that connects with SSH connection
        </h1>
        <div className="text-3xl font-bold text-green-500 mb-2">
          €750-€1500
        </div>
        <div className="text-sm text-gray-500 mb-2">
          Date and Time
        </div>
        <p className="mb-4">
          Full description of the project goes here.
        </p>
        <div className="flex items-center mb-2">
          <span className="bg-blue-200 text-blue-700 py-1 px-2 rounded-full text-xs mr-2">
            Legal Service
          </span>
          <span className="bg-blue-200 text-blue-700 py-1 px-2 rounded-full text-xs">
            Sub Service
          </span>
        </div>
        <h2 className="text-lg font-bold mb-2">
          About the project
        </h2>
        <div className="flex items-center">
          <FiUser className="mr-2" />
          <span>16 proposals</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="ml-4">
        <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold transition duration-300 mb-4">
          Post a Proposal
        </button>
        <h2 className="text-lg font-bold mb-2">
          About the client
        </h2>
        <div className="mb-2">
          <a href="#">Client Name</a>
        </div>
        <div>
          City, State
        </div>
      </div>
    </div>
  );
};

export default postView;
