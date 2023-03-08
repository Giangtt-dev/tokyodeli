import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const [sideMenu, setSideMenu] = useState([]);
  const [isCollapsed, setCollapsed] = useState(false);

  useEffect(() => {
    fetch("https://l87en4.sse.codesandbox.io/categories")
      .then((res) => res.json())
      .then((res) => setSideMenu(res));
  }, []);

  const handleCollapse = () => {
    setCollapsed((oldCollapsed) => !oldCollapsed);
  };

  return (
    <div className="menu">
      <div>
        <div className="h2">
          <h2>Thực đơn</h2>
        </div>
        <div className="listMenu" onClick={handleCollapse}>
          <p>Grand Menu</p>
          <FontAwesomeIcon icon={isCollapsed ? faChevronUp : faChevronDown} />
        </div>
        {!isCollapsed && (
          <div className="collapsible-menu">
            {sideMenu.map((sideMenu, index) => (
              <div key={sideMenu.id} className="grandMenu">
                <ul>
                  {/* <NavLink to="{sideMenu.name}"> */}
                  <li>{sideMenu.name}</li>
                  {/* </NavLink> */}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default SideMenu;
