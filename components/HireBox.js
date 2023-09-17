import React from "react";

const HireBox = ({ user }) => {
  return (
    <div className="absolute right-6 p-4 bg-blue-950 text-white w-4/12 h-32 flex flex-col justify-center items-center rounded-md">
      <h2 className="text-lg font-semibold mb-4 border-b w-full text-center pb-2">
        Contact {user.fullName} for Legal Advice
      </h2>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-16 rounded font-bold w-70 text-lg">
        Hire {user.firstName}
      </button>
    </div>
  );
};

export default HireBox;
