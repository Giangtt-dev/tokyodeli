import "./styles.css";
import { useState } from "react";
import Router from "./routes";
import DetailFood from "./pages/detail-food/DetailFood.js";
import CategoryProduct from "./pages/category-product/CategoryProduct.js";
import AddProduct from "./pages/admin/add-product/AddProduct";
import { UserContext } from "/services/contexts/UserContext";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <div className="App">
        <Router />
      </div>
    </UserContext.Provider>
  );
}
