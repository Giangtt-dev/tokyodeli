import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="homeLayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
