import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://iv6wjs.sse.codesandbox.io/products")
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);

  console.log("product", product);

  return (
    <div className="productsInfo">
      <h2>Products</h2>
      <div className="buttonContainer">
        <Link to="add">
          <button>Add product</button>
        </Link>
        <button>Delete</button>
      </div>
      <div>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Code</th>
            <th>Category</th>
          </tr>
          {product.map((product, index) => (
            <tr key={product.id} className="productsTable">
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td className="imgContainer">
                <img src={product.image_url} alt="" />
              </td>
              <td>{product.price}</td>
              <td>{product.code}</td>
              <td>{product.category_id}</td>
            </tr>
          ))}
          ;
        </table>
      </div>
    </div>
  );
};
export default Products;
