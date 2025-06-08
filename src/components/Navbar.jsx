import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          HotelName
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
          <li><a href="/about" className="hover:text-blue-600">About</a></li>
          <li><a href="/rooms" className="hover:text-blue-600">Rooms</a></li>
          <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon (optional) */}
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            {/* Add a menu icon here if you want */}
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
