import React from "react";
import SearchProfile from "@/components/SearchProfile";
import { useAuth } from '../contexts/AuthContext';

const user = {
  profileImage: "/test/profile.jpg",
  fullName: "John Doe",
  firstName: "John",
  username: "johndoe",
  location: "Gaya, Bihar",
  experience: 5,
  rating: 3,
  bio: "Web Developer with a passion for coding.",
  portfolioLink: "https://example.com/johndoe-portfolio",
  type: "Advocate",
  enrollment: "AP/00107/2020",
  link: "/u/xyz",
};

export default function Users() {

  const { isLoggedIn, setIsLoggedIn } = useAuth();

  if(!(isLoggedIn)){
    return <p>Error</p>
  }


  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-800 w-full p-4 mb-4 mt-4">
        {/* Search Bar */}
        <input
          type="text"
          className="w-3/4 p-3 shadow-md text-lg text-gray-800 bg-gray-200 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
          placeholder="Search for Advocate..."
        />
      </div>

      <div className="flex w-full">
        {/* Filters Section (Left Side) */}
        <div className="w-1/4 p-4 bg-white rounded-l-lg mr-2 sticky top-0">
          <h2 className="text-2xl font-semibold mb-4">Filters</h2>
          {/* Add your filter options here */}
        </div>

        {/* Top Results Section (Right Side) */}
        <div className="w-3/4 p-4 bg-white rounded-r-lg sticky top-0">
          <h2 className="text-2xl font-semibold mb-4">Top Results</h2>
          <hr className="border-t-2 border-gray-300 mb-4" />
          {/* Scrollable container for profile listings */}
          <div style={{ maxHeight: "calc(100vh - 240px)", overflowY: "auto" }}>
            <SearchProfile user={user} />
            <SearchProfile user={user} />
            <SearchProfile user={user} />
            <SearchProfile user={user} />
            <SearchProfile user={user} />
            <SearchProfile user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
