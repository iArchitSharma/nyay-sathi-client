import React from 'react';
import { FiUser } from 'react-icons/fi'; // Assuming FiUser is the icon you want to use
import { useAuth } from '../contexts/AuthContext';

const post = {
  title: "VPN application that connects with SSH connection",
  date: "10-09-2023",
  time: "8:30 PM",
  description: "Full description of the project goes here.",
  legalService: "Legal Service",
  subService: "Sub Service",
  budget: "€750-€1500",
  proposals: "16",
  name: "Donald Raj",
  location: "Gaya, Bihar"
};

const postView = () => {

  const { isLoggedIn, setIsLoggedIn } = useAuth();

  if(!(isLoggedIn)){
    return <p>Error</p>
  }

  return (
    <div className="flex flex-col lg:flex-row mt-6 lg:mt-24 ml-4 lg:ml-32">
      {/* Left Section */}
      <div className="bg-white border rounded-md shadow-md p-4 w-full lg:w-3/5 flex justify-between">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold mb-2">
            {post.title}
          </h1>
          <div className="text-sm text-gray-500 mb-2">
            {post.time} <br /> {post.date}
          </div>
          <p className="mb-4">
            {post.description}
          </p>
          <div className="flex items-center mb-2">
            <span className="bg-indigo-500 text-white py-1 px-2 rounded-full text-xs mr-2">
              {post.legalService}
            </span>
            <span className="bg-gray-300 text-white py-1 px-2 rounded-full text-xs">
              {post.subService}
            </span>
          </div>
          <h2 className="text-lg lg:text-xl font-bold mb-2">
            About the project
          </h2>
          <div className="flex items-center">
            <FiUser className="mr-2" />
            <span>{post.proposals} proposals</span>
          </div>
        </div>
        <div className="text-2xl lg:text-3xl font-bold text-green-500 mt-4 lg:mt-0">
          {post.budget}
        </div>
      </div>

      {/* Right Section */}
      <div className="ml-0 mt-4 lg:ml-4">
        <button className="bg-blue-400 hover:bg-blue-500 text-white py-3 px-6 lg:px-40 rounded-md text-xl font-semibold transition duration-300 mb-4">
          Post a Proposal
        </button>
        <h2 className="text-lg font-bold mb-2">
          About the client
        </h2>
        <div className="mb-2">
          <a href="#" className="text-blue-500 hover:text-blue-600 text-lg lg:text-xl">
            {post.name}
          </a>
        </div>
        <div className="text-lg lg:text-xl text-gray-500">
          {post.location}
        </div>
      </div>
    </div>
  );
};

export default postView;
