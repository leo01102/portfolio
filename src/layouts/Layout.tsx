import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet /> {/* This is where the page content will be injected */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
