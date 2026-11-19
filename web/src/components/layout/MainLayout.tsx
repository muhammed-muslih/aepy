import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "../ui/FloatingWhatsApp";

function MainLayout() {
  return (
    <div className="min-h-screen bg-aepy-cream">
      <Navbar />
      <Outlet />
      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}

export default MainLayout;
