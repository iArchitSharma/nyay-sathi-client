// components/NavBar.js

import Link from 'next/link';
import { FiBell, FiMessageCircle, FiUser } from 'react-icons/fi'; // Import notification, message, and profile icons

const NavBar = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/">
              <div className="text-xl font-semibold text-gray-800 mr-4">Your Logo</div>
            </Link>
            {/* Navigation Links */}
            <nav className="space-x-4 flex items-center"> {/* Use flex to align items horizontally */}
              <Link href="/browse">
                <div className="text-gray-600 hover:text-gray-800 transition duration-300">Browse Legal Services</div>
              </Link>
              {/* Manage Link */}
              <Link href="/manage">
                <div className="text-gray-600 hover:text-gray-800 transition duration-300 ml-4">Manage</div> {/* Add ml-4 for spacing */}
              </Link>
            </nav>
          </div>
          
          {/* Right Side */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Notification Icon */}
            <div className="relative group">
              <FiBell className="text-gray-600 group-hover:text-gray-800 text-xl cursor-pointer transition duration-300" />
              <span className="bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 absolute top-0 right-0 -mt-1 -mr-1">3</span>
            </div>
            
            {/* Message Icon */}
            <Link href="/messages">
              <div>
                <FiMessageCircle className="text-gray-600 hover:text-gray-800 text-xl cursor-pointer transition duration-300" />
              </div>
            </Link>
            
            {/* Post a Legal Project Button */}
            <Link href="/post-legal-project">
              <div className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold transition duration-300">
                Post a Legal Project
              </div>
            </Link>
            
            {/* Profile Icon */}
            <Link href="/profile">
              <div>
                <FiUser className="text-gray-600 hover:text-gray-800 text-xl cursor-pointer transition duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
