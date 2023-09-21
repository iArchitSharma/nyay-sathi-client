import React, { useEffect, useState } from "react";
import UserProfile from "@/components/UserProfile";
import HireBox from "@/components/HireBox";
import BarCode from "@/components/BarCode";
import History from "@/components/History";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import EditProfile from "@/components/EditProfile";



const ProfileViewPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <p>Error</p>;
  }

    // Access the stored username from local storage
    const storedUsername = localStorage.getItem("username");
    const userType = localStorage.getItem("type");

    const user = {
      profileImage: "/test/profile.jpg",
      fullName: "John Doe",
      firstName: "John",
      username: storedUsername,
      location: "Gaya, Bihar",
      experience: 5,
      rating: 3,
      bio: "Default bio",
      portfolioLink: "https://example.com/johndoe-portfolio",
      type: userType,
      enrollment: "AP/00107/2020",
    };

  const [userData, setUserData] = useState(null);


  useEffect(() => {
    if (storedUsername) {
      // Fetch user data from the server based on the username
      fetch(`http://localhost:8081/user/${storedUsername}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Log the data received from the server
          console.log("User Data:", data);
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [storedUsername]);

  console.log(userData);

  return (
    <div>
      <div className="min-h-screen bg-gray-200">
        {/* Banner image as background */}
        <div
          className="h-80 bg-cover bg-center relative flex" // Added 'flex' class here
          style={{
            backgroundImage: `url("/images/banner-img.jpg")`,
          }}
        >
          {/* Content on image here */}
          <div className="w-screen mt-12 ml-12">
            {" "}
            {/* Added this container */}
            <UserProfile user={user} />
          </div>
          <div className="w-1/2 mt-5">
            {" "}
            {/* Added this container */}
            <EditProfile />
          </div>
          <div className="w-1/2 mt-40">
            <BarCode user={user} />
          </div>
        </div>
        {/* Your main content below image here */}
        <History user={user} />
      </div>
    </div>
  );
};

export default ProfileViewPage;
