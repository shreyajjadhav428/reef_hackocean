// src/routes/AppRoutes.jsx

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout (keep this synchronous as it's the shell)
import Layout from "../components/layout/Layout";

// Lazy-loaded Pages
const Home = React.lazy(() => import("../pages/Home"));
const Learn = React.lazy(() => import("../pages/Learn"));
const Volunteer = React.lazy(() => import("../pages/Volunteer"));
const Impact = React.lazy(() => import("../pages/Impact"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));
const SupportReef = React.lazy(() => import("../pages/SupportReef"));

// Simple Loader for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#040810] text-slate-100">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-cyan-400 font-serif italic">Exploring the depths...</p>
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<SupportReef />} />
            <Route path="/support" element={<SupportReef />} />
          </Route>

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-[#040810] text-white text-2xl font-semibold font-serif">
                404 | Uncharted Waters
              </div>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;