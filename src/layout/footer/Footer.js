import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="addressAndContact">
          <h4>TRỤ SỞ CHÍNH</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              26 C - D - E Lê Quốc Hưng, Phường 12, Quận 4, TP.HCM
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              1900 234504
            </li>
          </ul>
        </div>
        <div className="useAndPrivacy">
          <h4>THÔNG TIN ĐIỀU KHOẢN</h4>
          <ul>
            <li>Điều khoản sử dụng</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>
        <div className="socialNetwork">
          <h4>MẠNG XÃ HỘI</h4>
          <ul>
            <li>
              <a href="#">facebook</a>
              <span className="facebook"></span>
            </li>
            <li>
              <a href="#">instagram</a>
              <span className="instagram"></span>
            </li>
          </ul>
          <div className="notification">
            <img src="/images/notification.png" alt="" />
          </div>
        </div>
      </div>
      <div className="policy">
        <ul>
          <li>
            <a href="#">Mã số thuế: 0306340691 |</a>
          </li>
          <li>
            <a href="#">Ngày cấp: 04/12/2008 |</a>
          </li>
          <li>
            <a href="#">Nơi cấp: Chi Cục Thuế Quận 1 </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
