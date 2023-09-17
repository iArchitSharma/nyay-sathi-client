import React from "react";
import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Link from "next/link";

const UserProfile = ({ user }) => {
  const yellowStars = Math.min(5, Math.floor(user.rating));
  const silverStars = 5 - yellowStars;

  const generateStars = (count, colorClass) => {
    return Array.from({ length: count }, (_, index) => (
      <FaStar key={index} className={colorClass} />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row md:space-x-8">
      {/* Left side (Profile Image, Location, and Experience) */}
      <div className="md:w-1/4 md:text-center md:mb-0">
        <img
          src={user.profileImage}
          alt={`${user.fullName}'s Profile`}
          className="w-32 h-32 rounded-full mb-2 mx-auto md:mb-2"
        />
        <div className="text-gray-600">
          <FaMapMarkerAlt className="mr-1 text-red-500 inline-block" />
          {user.location}
        </div>
        {user.type === "Advocate" && (
          <div className="text-gray-600">
            <FaClock className="mr-1 text-blue-500 inline-block" />
            {`${user.experience} years of experience`}
          </div>
        )}
      </div>

      {/* Right side (User Info) */}
      <div className="flex-1">
        <div className="md:flex md:items-center md:justify-between md:mt-2">
          <h2 className="text-xl font-semibold mr-3 mb-2 md:mb-0">
            {user.fullName}
          </h2>
          {user.type === "Advocate" ? (
            <span className="bg-green-500 text-white font-semibold px-2 py-1 rounded-full mb-2 md:mb-0">
              Advocate
            </span>
          ) : (
            <span className="bg-blue-500 text-white font-semibold px-2 py-1 rounded-full mb-2 md:mb-0">
              Client
            </span>
          )}
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

export default UserProfile;
