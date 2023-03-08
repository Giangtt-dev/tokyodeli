import "./MenuTop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faBell,
  faGear,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const MenuTop = () => {
  return (
    <header>
      <div className="Nav-bar">
        <div className="logo">
          <img src="/images/logotokyo.png" alt="" />
        </div>
        <div className="top-menu">
          <ul>
            <li>
              <input placeholder="Type here..." />
              {/* <a href="#" title="Search">
                <FontAwesomeIcon icon={faSearch} />
              </a> */}
            </li>
            <li>
              <a href="#" title="User">
                <FontAwesomeIcon icon={faCircleUser} />
              </a>
            </li>
            <li>
              <a href="#" title="Style">
                <FontAwesomeIcon icon={faGear} />
              </a>
            </li>
            <li>
              <a href="#" title="Notification">
                <FontAwesomeIcon icon={faBell} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default MenuTop;
