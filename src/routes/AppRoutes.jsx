// src/routes/AppRoutes.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Layout from "../components/layout/Layout";

// Pages
import Home from "../pages/Home";
import Learn from "../pages/Learn";
import Volunteer from "../pages/Volunteer";
import Impact from "../pages/Impact";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* 404 Page (Temporary) */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-2xl font-semibold">
              404 | Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;