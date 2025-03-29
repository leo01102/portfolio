/* src/layouts/Layout.tsx */

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-content">
        <Outlet /> {/* This is where the page content will be injected */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
