import React from "react";
import UserProfile from "@/components/UserProfile";
import HireBox from "@/components/HireBox";
import BarCode from "@/components/BarCode";
import History from "@/components/History";

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
};

const ProfileViewPage = () => {
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
            <HireBox user={user} />
          </div>
          <div className="w-1/2 mt-40">
            <BarCode user={user} />
          </div>
        </div>
        {/* Your main content below image here */}
        <History user={user}/>
      </div>
    </div>
  );
};

export default ProfileViewPage;
