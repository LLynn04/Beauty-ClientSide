import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-violet-400 mb-6 text-center">Create Account</h2>
        <p className="text-gray-400 text-sm mb-8 text-center">Join us and glow with confidence!</p>
        <form>
          <div className="mb-4">
            <label className="text-gray-300 block mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full px-4 py-3 bg-black border border-violet-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-300 block mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-black border border-violet-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div className="mb-6">
            <label className="text-gray-300 block mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-black border border-violet-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-500 hover:bg-violet-600 transition text-white font-semibold py-3 rounded-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-violet-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
