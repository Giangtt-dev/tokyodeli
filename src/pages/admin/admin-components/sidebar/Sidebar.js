import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faCreditCard,
  faFolderTree,
  faUserTag,
  faFileLines
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#" title="Dashboard">
            <FontAwesomeIcon icon={faStore} />
          </a>
          Dashboard
        </li>
        <li className="dropdown-manage">
          <a href="#" title="Manage">
            <FontAwesomeIcon icon={faFolderTree} />
          </a>
          <p>Manage</p>
          <div className="dropdown-list">
            <ul>
              <li>
                <NavLink to="products">
                  <a href="#" title="Products">
                    Products
                  </a>
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="categories">
                  <a href="#" title="Categories">
                    Categories
                  </a>
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#" title="Billing">
            <FontAwesomeIcon icon={faCreditCard} />
          </a>
          Billing
        </li>
        <li>ACCOUNT PAGES</li>
        <li>
          <a href="#" title="Profile">
            <FontAwesomeIcon icon={faUserTag} />
          </a>
          Profile
        </li>
        <li>
          <a href="#" title="Sign out">
            <FontAwesomeIcon icon={faFileLines} />
          </a>
          Sign out
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
