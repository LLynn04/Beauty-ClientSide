import React from "react";
import { FaUsers, FaBoxOpen, FaChartBar, FaCog } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-violet-900 text-white shadow-xl flex flex-col">
        <div className="text-3xl font-bold px-6 py-6 border-b border-violet-700">
          Admin
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <a href="#" className="flex items-center gap-3 hover:text-violet-300">
            <FaChartBar /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-violet-300">
            <FaUsers /> Users
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-violet-300">
            <FaBoxOpen /> Products
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-violet-300">
            <FaCog /> Settings
          </a>
        </nav>
        <div className="px-4 py-4 border-t border-violet-700">
          <button className="w-full text-left hover:text-red-300">Logout</button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-violet-800 mb-6">Dashboard Overview</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
            <p className="text-3xl font-bold text-violet-700">1,200</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Active Products</h2>
            <p className="text-3xl font-bold text-violet-700">350</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Sales</h2>
            <p className="text-3xl font-bold text-violet-700">$24,000</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">New Signups</h2>
            <p className="text-3xl font-bold text-violet-700">98</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
