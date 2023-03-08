import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="navigationWeb">
        <div>
          <img src="images/logotokyo.png" alt="" />
        </div>
        <div>
          <div className="website-nav">
            <ul>
              <li className="dropdown">
                <a href="#" first-clicked="0">
                  Tân Việt Nhật
                </a>
                <div className="dropdown-menu-web">
                  <ul className="list-menu">
                    <li>
                      <a href="#">Công Ty TNHH Thực Phẩm Tân Việt Nhật</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <a href="#" first-clicked="0">
                  Tokyo Deli Sushi
                </a>
                <div className="dropdown-menu-web">
                  <ul className="list-menu">
                    <li>
                      <a href="#">Dịch vụ ăn uống tại nhà hàng</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <a
                  href="https://tokyodelihome.com.vn/tokyo-deli-home/"
                  first-clicked="0"
                >
                  Tokyo Deli Home
                </a>
                <div className="dropdown-menu-web">
                  <ul className="list-menu">
                    <li>
                      <a href="https://tokyodelihome.com.vn/tokyo-deli-home/">
                        Dịch vụ giao hàng tận nơi
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <a href="https://tokyodeliexpress.com.vn/" first-clicked="0">
                  Tokyo Deli Express
                </a>
                <div className="dropdown-menu-web">
                  <ul className="list-menu">
                    <li>
                      <a href="https://tokyodeliexpress.com.vn/">
                        Dịch vụ giao hàng qua ứng dụng
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <a href="https://tokyodeliexpress.com.vn/" first-clicked="0">
                  Tokyo Deli Catering
                </a>
                <div className="dropdown-menu-web">
                  <ul className="list-menu">
                    <li>
                      <a href="https://tokyodeliexpress.com.vn/">
                        Dịch vụ suất ăn theo nhu cầu
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="selectList">
            <ul>
              <li>
                <a href="#" title="Giới thiệu">
                  GIỚI THIỆU
                </a>
              </li>
              <li>
                <NavLink to="menu">
                  <a href="#" title="Thực đơn">
                    THỰC ĐƠN{" "}
                  </a>
                </NavLink>
              </li>
              <li>
                {" "}
                <a href="#" title="Khuyến mãi">
                  KHUYẾN MÃI
                </a>
              </li>
              <li>
                {" "}
                <a href="#" title="Thẻ thành viên">
                  THẺ THÀNH VIÊN
                </a>
              </li>
              <li>
                {" "}
                <a href="#" title="Đặt bàn">
                  ĐẶT BÀN{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" title="Hệ thống cửa hàng">
                  HỆ THỐNG CỬA HÀNG
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" title="Tuyển dụng">
                  TUYỂN DỤNG
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
