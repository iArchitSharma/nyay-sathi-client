import React, {useEffect} from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {

  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Validate the token on the server-side if needed
      setIsLoggedIn(true);
    }
  }, []);



  if(!(isLoggedIn)){
    return <p>Error</p>
  }

  return (
    <div className="flex h-screen">
      {/* Left Side (Image) */}
      <div className="w-1/2 bg-cover bg-center hidden md:block" style={{ backgroundImage: 'url("/nyay-sathi.svg")' }}></div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-6 md:p-12 font-sans">
        {/* Logo */}
        <img src="/nyay-sathi.svg" alt="Logo" className="w-24 mb-4 mx-auto md:mx-0" />

        {/* Text: Let’s get started */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center md:text-left">Let’s get started</h1>

        {/* Buttons */}
        <div className="grid grid-cols-1 gap-4">
          {/* Box 1 */}
          <Link href="/browse-advocates">
            <div className="bg-blue-400 p-6 rounded-lg text-white flex items-center hover:bg-blue-300 hover:text-gray-700 transition duration-300">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Browse Advocates profile</h2>
                <p className="text-gray-700">Find the perfect advocate for your needs</p>
              </div>
              <div className="ml-auto">
                <FaArrowRight className="text-white text-4xl" /> {/* Add the arrow icon with ml-auto class */}
              </div>
            </div>
          </Link>

          {/* Box 2 */}
          <Link href="/dashboard">
            <div className="bg-green-400 p-6 rounded-lg text-white flex items-center hover:bg-green-300 hover:text-gray-700 transition duration-300">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
                <p className="text-gray-700">Go to your dashboard</p>
              </div>
              <div className="ml-auto">
                <FaArrowRight className="text-white text-4xl" /> {/* Add the arrow icon with ml-auto class */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
