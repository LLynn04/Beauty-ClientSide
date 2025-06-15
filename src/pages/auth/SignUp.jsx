import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const SignUp = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-6xl grid md:grid-cols-2 gap-12 relative overflow-hidden">
        {/* Glow circle background */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-500 rounded-full blur-2xl opacity-20 animate-pulse" />

        {/* Left side image */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src="https://media.glamourmagazine.co.uk/photos/682de1670c6763dc0163874f/1:1/pass/undefined"
            alt="Skincare visual"
            className="w-full h-full max-h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right side form */}
        <div>
          <h2 className="text-3xl font-bold text-violet-400 mb-4 text-center">Create Account</h2>
          <p className="text-gray-400 text-sm mb-6 text-center">Join us and glow with confidence!</p>

          {/* Profile image preview */}
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="User avatar preview"
              className="w-20 h-20 rounded-full object-cover border-4 border-violet-500 shadow-md"
            />
          </div>

          <form>
            <div className="mb-4 relative">
              <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-violet-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 bg-black border border-violet-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div className="mb-4 relative">
              <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-violet-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 bg-black border border-violet-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div className="mb-6 relative">
              <RiLockPasswordFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-violet-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-black border border-violet-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-violet-500 hover:bg-violet-600 transition text-white font-semibold py-3 rounded-lg shadow-lg"
            >
              Sign Up
            </button>
          </form>

          <div className="my-6 text-center text-sm text-gray-500">or sign up with</div>

          <div className="flex justify-center gap-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full">
              <FaFacebook className="text-xl" />
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full">
              <FaGoogle className="text-xl" />
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full">
              <FaPhoneAlt className="text-xl" />
            </button>
          </div>

          <p className="text-sm text-gray-400 text-center mt-6">
            Already have an account?{' '}
            <Link to="/sign-in" className="text-violet-400 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;