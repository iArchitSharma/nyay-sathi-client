import React from "react";
import Projects from "@/components/SearchProjects";

const proj = {
  title: "Hello World",
  description:
    "To create a new component using Next.js and Tailwind CSS that goes inside the Top Results section and includes a heading, description (not more than 50 words), a tag for legal service, and a tag for sub-service, you can follow these steps: To create a new component using Next.js and Tailwind CSS that goes inside the Top Results section and includes a heading, description (not more than 50 words), a tag for legal service, and a tag for sub-service, you can fol",
  legalService: "Civil Law Services",
  subService: "Contract Disputes",
  link: "/work/asdfsd",
  time: "5 hours ago"
};

export default function projects() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-800 w-full p-4 mb-4 mt-4">
        {/* Search Bar */}
        <input
          type="text"
          className="w-3/4 p-3 shadow-md text-lg text-gray-800 bg-gray-200 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
          placeholder="Search for Projects..."
        />
      </div>

      <div className="flex w-full">
        {/* Filters Section (Left Side) */}
        <div className="w-1/4 p-4 bg-white rounded-l-lg mr-2 sticky top-0">
          <h2 className="text-2xl font-semibold mb-4">Filters</h2>
          {/* Add your filter options here */}
        </div>

        {/* Top Results Section (Right Side) */}
        <div className="w-3/4 p-4 bg-white rounded-r-lg sticky top-0">
          <h2 className="text-2xl font-semibold mb-4">Top Results</h2>
          <hr className="border-t-2 border-gray-300 mb-4" />
          {/* Scrollable container for listings */}
          <div style={{ maxHeight: "calc(100vh - 240px)", overflowY: "auto" }}>
            <Projects proj={proj} />
            <Projects proj={proj} />
            <Projects proj={proj} />
            <Projects proj={proj} />
            <Projects proj={proj} />
            <Projects proj={proj} />
          </div>
        </div>
      </div>
    </div>
  );
}
