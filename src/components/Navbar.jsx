import React, { useState } from "react";
import { Menu, X, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInLoading, setIsSignInLoading] = useState(false);
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignInClick = () => {
    setIsSignInLoading(true);
    // The Link will handle navigation, we just show loading for visual feedback
    setTimeout(() => {
      setIsSignInLoading(false);
    }, 300); // Short delay for visual feedback
  };

  const handleSignUpClick = () => {
    setIsSignUpLoading(true);
    // The Link will handle navigation, we just show loading for visual feedback
    setTimeout(() => {
      setIsSignUpLoading(false);
    }, 300); // Short delay for visual feedback
  };

  return (
    <nav className="w-full sticky top-4 z-50">
      {/* Constrain navbar to exactly 1280px with no extra padding */}
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="bg-white/5 backdrop-blur-md shadow-lg shadow-violet-500/30 rounded-full px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl sm:text-2xl font-bold text-violet-500 tracking-wide">
              SBeauty
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-violet-500 transition-colors duration-200 font-semibold"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-violet-500 transition-colors duration-200 font-semibold"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-violet-500 transition-colors duration-200 font-semibold"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-violet-500 transition-colors duration-200 font-semibold"
            >
              Contact
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/sign-in"
              onClick={handleSignInClick}
              className="px-4 py-2 rounded-full text-white bg-transparent border border-violet-500 hover:bg-violet-500 hover:text-black transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSignInLoading && <Loader2 size={16} className="animate-spin" />}
              Sign In
            </Link>
            <Link
              to="/sign-up"
              onClick={handleSignUpClick}
              className="px-4 py-2 rounded-full text-white bg-violet-600 hover:bg-violet-700 transition font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSignUpLoading && <Loader2 size={16} className="animate-spin" />}
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-violet-500 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-lg shadow-violet-500/20 px-6 py-6">
              {/* Mobile Links */}
              <div className="flex flex-col space-y-4 mb-6">
                <a
                  href="#"
                  className="text-white hover:text-violet-500 transition-colors duration-200 font-semibold py-2"
                  onClick={toggleMenu}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:text-violet-500 transition-colors duration-200 font-semibold py-2"
                  onClick={toggleMenu}
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-white hover:text-violet-500 transition-colors duration-200 font-semibold py-2"
                  onClick={toggleMenu}
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-white hover:text-violet-500 transition-colors duration-200 font-semibold py-2"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </div>

              {/* Mobile Buttons - Fixed the CSS classes */}
              <div className="flex flex-col space-y-3 md:hidden">
                <Link
                  to="/sign-in"
                  onClick={() => {
                    handleSignInClick();
                    toggleMenu();
                  }}
                  className="w-full text-center px-4 py-2 rounded-full text-white bg-transparent border border-violet-500 hover:bg-violet-500 hover:text-black transition font-semibold flex items-center justify-center gap-2"
                >
                  {isSignInLoading && <Loader2 size={16} className="animate-spin" />}
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  onClick={() => {
                    handleSignUpClick();
                    toggleMenu();
                  }}
                  className="w-full text-center px-4 py-2 rounded-full text-white bg-violet-600 hover:bg-violet-700 transition font-semibold shadow flex items-center justify-center gap-2"
                >
                  {isSignUpLoading && <Loader2 size={16} className="animate-spin" />}
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;