import React from "react";

const DashboardView = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-violet-400 mb-8">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="1,200" />
        <StatCard title="Active Products" value="350" />
        <StatCard title="Sales" value="$24,000" />
        <StatCard title="New Signups" value="98" />
      </div>
    </>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border border-white/10">
    <h2 className="text-sm text-gray-300">{title}</h2>
    <p className="text-2xl font-bold text-violet-300">{value}</p>
  </div>
);

export default DashboardView;
