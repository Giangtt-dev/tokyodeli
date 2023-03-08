import MenuTop from "../pages/admin/admin-components/menu-top/MenuTop";
import Sidebar from "../pages/admin/admin-components/sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "../../services/contexts/UserContext";

const AdminLayout = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user.email) {
      navigate("/admin/login");
    } else {
      navigate("/admin");
    }
  }, []);

  console.log("adminlayout, user =", user);

  return (
    <div className="adminLayout">
      {user && user.email && <MenuTop />}
      <div>
        {user && user.email && <Sidebar />}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
