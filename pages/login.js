import Link from 'next/link';
import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'; // Import axios
import { useAuth } from '../contexts/AuthContext';
import { login } from '../services/authService';

const Login = () => {
  const router = useRouter();
  const registrationSuccess = router.query.registrationSuccess === 'true';

  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    // Check if the user is already logged in
    if (isLoggedIn) {
      // Redirect to the new-client page
      router.push('/new-client');
    }
  }, [isLoggedIn, router]);

console.log(isLoggedIn);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = await login(formData);
      // Set isLoggedIn to true if needed
      setIsLoggedIn(true);
      // Redirect the user to the desired page
      router.push('/new-client');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded shadow-lg">
      {registrationSuccess && (
        <p className="bg-green-100 text-green-800 p-4 rounded-md my-4">
          Please login with your email and password that you just created.
        </p>
      )}
      <h1 className="text-3xl font-semibold mb-6">Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Log In
          </button>
        </div>
      </form>
      <p className="mt-4 text-gray-600 text-center">
        Don't have an account?{' '}
        <Link href="/register">
          <span className="text-blue-500">Create one here</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
