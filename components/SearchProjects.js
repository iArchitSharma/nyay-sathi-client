import React from 'react';
import Link from 'next/link';

const Projects = ({ proj }) => {
  // Function to truncate the description based on screen size
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  // Determine the word limit based on screen size (sm for small screens)
  const wordLimit = 50;
  const truncatedDescription = truncateDescription(proj.description, wordLimit);

  return (
    <Link href={proj.link}>
      <div className="mb-4 p-4 rounded-lg shadow-lg block hover:bg-gray-100 transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold text-blue-500">{proj.title}</h3>
        <p className="text-gray-600 mt-2">{truncatedDescription}</p>
        <div className="flex flex-col mt-2 sm:flex-row sm:justify-between">
          <div className="mb-2 sm:mb-0">
            <span className="bg-indigo-500 text-white py-1 px-2 rounded-lg text-sm mr-2">
              {proj.legalService}
            </span>
            <span className="bg-gray-300 py-1 px-2 rounded-lg text-sm">
              {proj.subService}
            </span>
          </div>
          <div className="text-sm text-gray-500">{proj.time}</div>
        </div>
      </div>
    </Link>
  );
};

export default Projects;
