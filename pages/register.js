import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "",
    otp: "",
    username: '',
  });

  const [isVerified, setIsVerified] = useState(false); // To track verification status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleVerifyClick = async () => {
    try {
      // Send a request to fetch OTP
      const response = await fetch("http://localhost:8081/otp/send-otp/", {
        method: "POST",
        body: JSON.stringify({ email: formData.email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsVerified(true); // OTP sent successfully, update verification status
      } else {
        setIsVerified(false);
        alert("Failed to send OTP. Please check your email.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e) => {
    e.preventDefault();

    //random four digit generator
    const randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);

    try {
      const username = `${formData.firstName}${randomFourDigitNumber}`;

      // Add the generated username to the formData
      const updatedFormData = {
        ...formData,
        username: username,
      };

      console.log(updatedFormData)

      // to handle form submission
      const response = await fetch("http://localhost:8081/auth/register", {
        method: "POST",
        body: JSON.stringify(updatedFormData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Registration successful
        alert("Registration successful!");

        // Redirect to the login page
        router.push({
          pathname: "/login",
          query: { registrationSuccess: true },
        });
      } else {
        // Registration failed
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
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
        <div className="mb-4 relative">
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
          {!isVerified && (
            <button
              type="button"
              className="absolute right-4 top-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              onClick={handleVerifyClick}
            >
              Verify
            </button>
          )}
        </div>
        {isVerified && (
          <div className="mb-4">
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="OTP"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
        )}
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
                name="type"
                value="Advocate"
                checked={formData.type === "Advocate"}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-500"
              />
              <span className="ml-2 text-gray-700">Advocate</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="type"
                value="Client"
                checked={formData.type === "Client"}
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
        Already have an account?{" "}
        <Link href="/login">
          <span className="text-blue-500">Log in</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
