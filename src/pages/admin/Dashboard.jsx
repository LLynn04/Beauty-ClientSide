import React, { useState } from "react";
import DashboardView from "../admin/page/DashboardView";
import Products from "../admin/page/Products";
import AddProducts from "../admin/page/AddProducts";
import Users from "./page/Users";

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
        return <DashboardView />;
      case "users":
        return (
          <h2 className="text-2xl text-white">
            <Users />
          </h2>
        );
      case "products":
        return (
          <h2 className="text-2xl text-white">
            <Products />
          </h2>
        );
      case "Add Products":
        return (
          <h2 className="text-2xl text-white">
            <AddProducts />
          </h2>
        );
      case "settings":
        return <h2 className="text-2xl text-white">Settings</h2>;
      default:
        return <DashboardView />;
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
          <span className="text-2xl text-violet-700 font-bold">
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

        <div className="px-4 py-4 border-t border-gray-800 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="https://ui-avatars.com/api/?name=Admin&background=6D28D9&color=fff"
              alt="Admin"
              className="w-8 h-8 rounded-full"
            />
            {sidebarOpen && (
              <div className="leading-tight">
                <p className="text-sm font-bold">Admin</p>
                <p className="text-xs text-gray-400">Administrator</p>
              </div>
            )}
          </div>
          <button className="flex ps-2 items-center gap-3 hover:text-red-400">
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

export default Dashboard;
