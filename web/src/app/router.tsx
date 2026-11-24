import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import HomePage from "@/features/home/HomePage";
import AboutPage from "@/features/about/AboutPage";
import ContactPage from "@/features/contact/ContactPage";
import OutletsPage from "@/features/outlets/OutletsPage";
import ManufacturingPage from "@/features/manufacturing/ManufacturingPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/outlets",
        element: <OutletsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/manufacturing",
        element: <ManufacturingPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;
