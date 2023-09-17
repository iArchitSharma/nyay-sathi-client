import React from "react";

const History = ({user}) => {
  return (
    <div className="container mt-8 p-4 relative z-10">
      {/* Your main content here */}
      <div className="rounded-lg shadow-md w-9/12 bg-white p-4">
      {user.type === "Advocate" ? (
            
            <h2 className="text-2xl font-semibold mb-4">
              Work History
              </h2>
          
        ) : (
          
            
            <h2 className="text-2xl font-semibold mb-4">
            Legal Projects
              </h2>
          
        )}
        <hr className="w-full border-t-2 border-gray-300 mb-4" />
        {/* Add your work history content here */}
      </div>
    </div>
    
  );
};

export default History;
