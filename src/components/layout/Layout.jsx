import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {!isHome && <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;