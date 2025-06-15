import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";


import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";

import Dashboard from "./pages/admin/Dashboard.jsx";

const App = () => {
  return (
    <Routes>
      {/* Define the root route with the RootLayout component */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* Define the authentication routes */}
      <Route path="sign-up" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />

      {/* Define the admin dashboard route */}
      <Route path="admin" element={<Dashboard />}>
        {/* <Route index element={<DashboardAdmin />} /> */}
        {/* <Route path="about" element={<About />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
