import { useEffect, useState } from "react";
import "./CategoryProduct.css";
import Banner from "../menu/components/banner/Banner";
import SideMenu from "../menu/components/side-menu/SideMenu";

const CategoryProduct = () => {
  const [CategoryProduct, setCategoryProduct] = useState([]);

  useEffect(() => {
    fetch("https://l87en4.sse.codesandbox.io/products")
      .then((res) => res.json())
      .then((res) => setCategoryProduct(res));
  }, []);

  return (
    <div className="menu-page">
      <Banner />
      <h1>Khu vực Hà Nội</h1>
      <SideMenu />
      <div className="clearBox" />
      {CategoryProduct.map((CategoryProduct, index) => (
        <div key={CategoryProduct.id} className="cardMenu">
          <div className="img">
            <img src={CategoryProduct.image_url} alt="" />
          </div>
          <div className="nameId">
            <p>{CategoryProduct.code}</p>
          </div>
          <div className="nameFood">
            <p>{CategoryProduct.name}</p>
          </div>
          <div class="price">
            <p> {CategoryProduct.price}</p>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
export default CategoryProduct;
