import React,{ useEffect, useState } from 'react';
import UserProfile from "@/components/UserProfile";
import HireBox from "@/components/HireBox";
import BarCode from "@/components/BarCode";
import History from "@/components/History";
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/AuthContext';

const UserName = () => {
  const router = useRouter();
  const { username } = router.query;
  const [userData, setUserData] = useState(null);

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (username) {
      // Fetch user data from the server based on the username
      fetch(`/api/users/${username}`) 
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

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
            <UserProfile user={userData} />
          </div>
          <div className="w-1/2 mt-5">
            {" "}
            {/* Added this container */}
            <HireBox user={userData} />
          </div>
          <div className="w-1/2 mt-40">
            <BarCode user={userData} />
          </div>
        </div>
        {/* Your main content below image here */}
        <History user={userData}/>
      </div>
    </div>
  );
};

export default UserName;
