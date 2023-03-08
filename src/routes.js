import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import AdminLayout from "./layout/AdminLayout";
import AdminHome from "./pages/admin/home/AdminHome";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import DetailFood from "./pages/detail-food/DetailFood";
import CategoryProduct from "./pages/category-product/CategoryProduct";
import Login from "./pages/admin/login/Login";
import Products from "./pages/admin/products/Products";
import Categories from "./pages/admin/categories/Categories";
import AddProduct from "./pages/admin/add-product/AddProduct";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route path="menu/:productId" element={<DetailFood />}></Route>
          <Route
            path="menu/categories/:category_id"
            element={<CategoryProduct />}
          ></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="categories" element={<Categories />}></Route>
          <Route path="products/add" element={<AddProduct />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
