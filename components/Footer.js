import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white rounded-sm py-8 mt-40">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Left Section with Logo */}
        <div className="w-full md:w-1/4 mx-auto text-center">
          <img src="/nyay-sathi.svg" alt="Logo" className="w-24 h-24 mb-4 mx-auto" />
          <p className="text-gray-400">Connecting India with legal experts.</p>
        </div>
        
        {/* About Section */}
        <div className="w-full md:w-1/4 mt-6 md:mt-0 mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="list-none">
            <li><a href="/about-us" className="hover:text-blue-500">About Us</a></li>
            <li><a href="/our-team" className="hover:text-blue-500">Our Team</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
        
        {/* Terms Section */}
        <div className="w-full md:w-1/4 mt-6 md:mt-0 mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">Terms</h3>
          <ul className="list-none">
            <li><a href="/terms-of-service" className="hover:text-blue-500">Terms of Service</a></li>
            <li><a href="/privacy-policy" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="/cookie-policy" className="hover:text-blue-500">Cookie Policy</a></li>
          </ul>
        </div>
        
        {/* Partners Section */}
        <div className="w-full md:w-1/4 mt-6 md:mt-0 mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">Partners</h3>
          <ul className="list-none">
            <li><a href="/partnership-1" className="hover:text-blue-500">Partner 1</a></li>
            <li><a href="/partnership-2" className="hover:text-blue-500">Partner 2</a></li>
            <li><a href="/partnership-3" className="hover:text-blue-500">Partner 3</a></li>
          </ul>
        </div>
      </div>

      {/* Random Links Below Sections */}
      <div className="container mx-auto mt-8">
        <ul className="flex flex-wrap list-none justify-center">
          <li className="mr-6"><a href="/link-1" className="hover:text-blue-500">Random Link 1</a></li>
          <li className="mr-6"><a href="/link-2" className="hover:text-blue-500">Random Link 2</a></li>
          <li className="mr-6"><a href="/link-3" className="hover:text-blue-500">Random Link 3</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
