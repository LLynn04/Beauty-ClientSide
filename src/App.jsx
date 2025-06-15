import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout.jsx";

import Home from "./pages/Home.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";

const App = () => {
  return (
    <Routes>
      {/* Define the root route with the RootLayout component */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
