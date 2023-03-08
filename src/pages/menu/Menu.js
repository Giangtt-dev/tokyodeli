import Banner from "./components/banner/Banner";
import DetailMenu from "./components/detail-menu/DetailMenu";
import SideMenu from "./components/side-menu/SideMenu";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-page">
      <Banner />
      <h1>Khu vực Hà Nội</h1>
      <SideMenu />
      <DetailMenu />
      <div className="clearBox" />
    </div>
  );
};
export default Menu;
