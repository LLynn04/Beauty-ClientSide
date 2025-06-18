import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";

import Dashboard from "./pages/admin/Dashboard.jsx";
import DashboardView from "./pages/admin/page/DashboardView.jsx";
import AddProducts from "./pages/admin/page/AddProducts.jsx";
import Products from "./pages/admin/page/Products.jsx";
import Users from "./pages/admin/page/Users.jsx";
import Setting from "./pages/admin/page/Setting.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route path="sign-up" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />

      <Route path="admin" element={<Dashboard />}>
        <Route index element={<DashboardView />} />
        <Route path="AddProducts" element={<AddProducts />} />
        <Route path="products" element={<Products />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Setting />} />
      </Route>
    </Routes>
  );
};

export default App;