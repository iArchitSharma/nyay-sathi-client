import Link from 'next/link';
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: '', // Added userType field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission (e.g., send data to server)
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-semibold mb-6">Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
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
        <div className="mb-6">
          <label className="block text-gray-700">User Type:</label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="userType"
                value="Advocate"
                checked={formData.userType === 'Advocate'}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-500"
              />
              <span className="ml-2 text-gray-700">Advocate</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="userType"
                value="Client"
                checked={formData.userType === 'Client'}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-500"
              />
              <span className="ml-2 text-gray-700">Client</span>
            </label>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </div>
      </form>
      <p className="mt-4 text-gray-600 text-center">
        Already have an account?{' '}
        <Link href="/login">
          <span className="text-blue-500">Log in</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
