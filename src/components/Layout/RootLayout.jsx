import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function RootLayout() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="min-h-screen  bg-black">
          <div className="max-w-[1280px] mx-auto py-8">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
