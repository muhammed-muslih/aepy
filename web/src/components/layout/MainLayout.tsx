import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/ Navbar";

function MainLayout() {
  return (
    <>
      <div className="min-h-screen bg-aepy-cream">
        <Navbar />

        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
