import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <>
      <div className="min-h-screen bg-aepy-cream">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
