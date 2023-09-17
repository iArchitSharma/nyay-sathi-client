import React from "react";
import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Link from "next/link";

const SearchProfile = ({ user }) => {
  const yellowStars = Math.min(5, Math.floor(user.rating));
  const silverStars = 5 - yellowStars;

  const generateStars = (count, colorClass) => {
    return Array.from({ length: count }, (_, index) => (
      <FaStar key={index} className={colorClass} />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-row items-center">
      {/* Left side (Profile Image) */}
      <div className="w-1/5 p-2">
        <img
          src={user.profileImage}
          alt={`${user.fullName}'s Profile`}
          className="w-44 h-44 rounded-full"
        />
      </div>

      {/* Right side (User Info) */}
      <div className="w-4/5 p-2">
        <div className="md:flex md:items-center md:justify-between md:mt-2">
          <h2 className="text-xl font-semibold mb-2 md:mb-0">
            {user.fullName}
          </h2>
          <span className="bg-green-500 text-white font-semibold px-2 py-1 rounded-full mb-2 md:mb-0">
            {user.type}
          </span>
        </div>
        <p className="text-gray-600 mb-2">@{user.username}</p>
        {user.type === "Advocate" && (
          <div className="md:flex md:items-center md:mt-2">
            <div className="flex space-x-1">
              {generateStars(yellowStars, "text-yellow-500")}
              {generateStars(silverStars, "text-gray-500")}
            </div>
            <p className="ml-2">{user.rating}/5</p>
          </div>
        )}
        <div className="flex mt-2">
          <p className="text-gray-600">
            <FaClock className="mr-1 text-blue-500 inline-block" />
            {`${user.experience} years of experience`}
          </p>
          <p className="text-gray-600 ml-4">
            <FaMapMarkerAlt className="mr-1 text-red-500 inline-block" />
            {user.location}
          </p>
        </div>
        <p className="mt-4">{user.bio}</p>
        <Link
          href={user.portfolioLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4 ml-0 md:ml-4 inline-block hover:bg-blue-600 hover:text-white hover:underline"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default SearchProfile;
