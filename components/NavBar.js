// components/NavBar.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiBell, FiMessageCircle, FiUser } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";

const NavBar = ({ user }) => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // To manage dropdown state

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Validate the token on the server-side if needed
      setIsLoggedIn(true);
    }
  }, []);

  const isAdvocate = user && user.type === "Advocate";

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing token, resetting state)
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    localStorage.removeItem("token");
    // Redirect to the home page or login page as needed
    router.push("/");
  };

  return (
    <header className="bg-white shadow-lg mb-8">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/">
              <div className="text-xl font-semibold text-gray-800 mr-4">
                <Image
                  src="/nyay-sathi.svg"
                  alt="Your Logo"
                  width={60}
                  height={12}
                />
              </div>
            </Link>
            {/* Navigation Links */}
            <nav className="space-x-4 flex items-center">
              <Link href={isAdvocate ? "/projects" : "/users"}>
                <div className="text-gray-600 hover:text-gray-800 transition duration-300">
                  {isAdvocate ? "Find a Project" : "Find Advocate"}
                </div>
              </Link>
              {/* Manage Link */}
              <Link href="/manage">
                <div className="text-gray-600 hover:text-gray-800 transition duration-300 ml-4">
                  Manage
                </div>{" "}
                {/* Add ml-4 for spacing */}
              </Link>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Notification Icon */}
            <div className="relative group">
              <FiBell className="text-gray-600 group-hover:text-gray-800 text-xl cursor-pointer transition duration-300" />
            </div>
            {/* Message Icon */}
            <Link href="/messages">
              <div>
                <FiMessageCircle className="text-gray-600 hover:text-gray-800 text-xl cursor-pointer transition duration-300" />
              </div>
            </Link>
            {/* Post a Legal Project Button */}
            {isAdvocate ? (
              <div></div>
            ) : (
              <Link href="/post">
                <div className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold transition duration-300">
                  Post a Legal Project
                </div>
              </Link>
            )}
            {/* Conditionally render profile icon or login/signup buttons */}
            {isLoggedIn ? (
              // Show profile icon when user is logged in
              <div className="relative group">
                <FiUser
                  onClick={handleProfileClick}
                  className="text-gray-600 hover:text-gray-800 text-xl cursor-pointer transition duration-300"
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                    <ul className="py-2">
                      <li className="text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href="/profile">View Profile</Link>
                      </li>
                      <li
                        className="text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={handleLogout}
                      >
                        Log Out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              // Show login/signup buttons when user is not logged in
              <>
                <Link href="/login">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Log In
                  </button>
                </Link>
                <Link href="/register">
                  <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
