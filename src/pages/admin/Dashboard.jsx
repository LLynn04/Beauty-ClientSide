import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUsers,
  FaBoxOpen,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardOverview />;
      case "users":
        return <h2 className="text-2xl text-white">User Management</h2>;
      case "products":
        return <h2 className="text-2xl text-white">Product Listings</h2>;
      case "Add Products":
        return <h2 className="text-2xl text-white">Product Listings</h2>;
      case "settings":
        return <h2 className="text-2xl text-white">Settings</h2>;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gray-950 text-white duration-300 flex flex-col shadow-2xl`}
      >
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
          <span className="text-2xl font-bold">
            {sidebarOpen ? "SBeauty" : "S"}
          </span>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-6 text-sm">
          <NavItem
            icon={<FaChartBar />}
            label="Dashboard"
            open={sidebarOpen}
            active={activePage === "dashboard"}
            onClick={() => setActivePage("dashboard")}
          />
          <NavItem
            icon={<FaUsers />}
            label="Users"
            open={sidebarOpen}
            active={activePage === "users"}
            onClick={() => setActivePage("users")}
          />
          <NavItem
            icon={<FaBoxOpen />}
            label="Products"
            open={sidebarOpen}
            active={activePage === "products"}
            onClick={() => setActivePage("products")}
          />
          <NavItem
            icon={<FaBoxOpen />}
            label="Add Products"
            open={sidebarOpen}
            active={activePage === "Add Products"}
            onClick={() => setActivePage("Add Products")}
          />
          <NavItem
            icon={<FaCog />}
            label="Settings"
            open={sidebarOpen}
            active={activePage === "settings"}
            onClick={() => setActivePage("settings")}
          />
        </nav>

        <div className="px-4 py-4 border-t border-gray-800">
          <button className="flex items-center gap-3 hover:text-red-400">
            <FaSignOutAlt />
            {sidebarOpen && "Logout"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-10">{renderContent()}</main>
    </div>
  );
};

const NavItem = ({ icon, label, open, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-4 p-2 rounded-lg transition w-full text-left ${
      active ? "bg-violet-600 text-white" : "hover:bg-gray-800"
    }`}
  >
    {icon}
    {open && <span>{label}</span>}
  </button>
);

const DashboardOverview = () => (
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

const StatCard = ({ title, value }) => (
  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border border-white/10">
    <h2 className="text-sm text-gray-300">{title}</h2>
    <p className="text-2xl font-bold text-violet-300">{value}</p>
  </div>
);

export default Dashboard;
