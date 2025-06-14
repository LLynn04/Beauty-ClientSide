import React from "react";

const Navbar = () => (
 <nav className=" bg-black/60 backdrop-blur-md shadow-lg w-full">
  <div className="w-full max-w-screen-xl sticky top-4 bg-white mx-auto px-6 py-4 flex items-center rounded-full justify-between ">
      {/* Logo */}
      <div className="flex-shrink-0">
        <span className="text-2xl font-bold text-violet-500 tracking-wide">
          SBeauty
        </span>
      </div>
      {/* Links */}
      <div className="flex space-x-8">
        <a
          href="#"
          className="text-white hover:text-violet-400 transition-colors duration-200 font-semibold"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white hover:text-violet-400 transition-colors duration-200 font-semibold"
        >
          About
        </a>
        <a
          href="#"
          className="text-white hover:text-violet-400 transition-colors duration-200 font-semibold"
        >
          Services
        </a>
        <a
          href="#"
          className="text-white hover:text-violet-400 transition-colors duration-200 font-semibold"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;