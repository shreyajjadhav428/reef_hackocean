import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "../common/Loader";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Every time the site reloads, open from the Home page ("/")
  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation");
    const isReload = (navEntries.length > 0 && navEntries[0].type === "reload") || !sessionStorage.getItem("app_initialized");
    
    sessionStorage.setItem("app_initialized", "true");

    if (isReload && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, []);

  // 2. Whenever navigating between pages, always load from top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;