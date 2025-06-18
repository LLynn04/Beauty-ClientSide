import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path) => {
    navigate(`/admin/${path}`);
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
            active={location.pathname === "/admin"}
            onClick={() => navigate("/admin")}
          />
          <NavItem
            icon={<FaUsers />}
            label="Users"
            open={sidebarOpen}
            active={location.pathname === "/admin/users"}
            onClick={() => goTo("users")}
          />
          <NavItem
            icon={<FaBoxOpen />}
            label="Products"
            open={sidebarOpen}
            active={location.pathname === "/admin/products"}
            onClick={() => goTo("products")}
          />
          <NavItem
            icon={<FaBoxOpen />}
            label="Add Products"
            open={sidebarOpen}
            active={location.pathname === "/admin/AddProducts"}
            onClick={() => goTo("AddProducts")}
          />
          <NavItem
            icon={<FaCog />}
            label="Settings"
            open={sidebarOpen}
            active={location.pathname === "/admin/settings"}
            onClick={() => goTo("settings")}
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
      <main className="flex-1 p-6 sm:p-10">
        <Outlet />
      </main>
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