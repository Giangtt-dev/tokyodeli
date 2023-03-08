import "./AddProduct.css";
import { useState, useEffect } from "react";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState([]);

  const [inputName, setInputName] = useState("");
  const [inputImageUrl, setInputImageUrl] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputCode, setInputCode] = useState("");

  const [inputCategoryId, setInputCategoryId] = useState("");

  const submitNewProduct = (e) => {
    e.preventDefault();
    fetch("https://l87en4.sse.codesandbox.io/products", {
      method: "POST",
      body: JSON.stringify({
        name: inputName,
        image_url: inputImageUrl,
        price: inputPrice,
        code: inputCode,
        category_id: inputCategoryId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    fetch("https://l87en4.sse.codesandbox.io/products")
      .then((res) => res.json())
      .then((res) => setAddProduct(res));
  }, []);

  const handleInputName = (e) => {
    console.log(e.target.value);
    setInputName(e.target.value);
  };

  const handleInputImageUrl = (e) => {
    console.log(e.target.value);
    setInputImageUrl(e.target.value);
  };

  const handleInputPrice = (e) => {
    console.log(e.target.value);
    setInputPrice(e.target.value);
  };

  const handleInputCode = (e) => {
    console.log(e.target.value);
    setInputCode(e.target.value);
  };

  const handleInputCategoryId = (e) => {
    console.log(e.target.value);
    setInputCategoryId(e.target.value);
  };

  return (
    <div className="addForm">
      <h2>Add New Product</h2>
      <p>Please enter information of product into this form</p>
      <form>
        <p>
          <label> Name</label>
          <br></br>
          <input
            type="text"
            placeholder="Name"
            value={inputName}
            onChange={handleInputName}
          />
        </p>
        <p>
          <label>Image url</label>
          <br></br>
          <input
            type="text"
            placeholder="Image url"
            value={inputImageUrl}
            onChange={handleInputImageUrl}
          />
        </p>
        <p>
          <label>Price</label>
          <br></br>
          <input
            type="cur"
            placeholder="Price"
            value={inputPrice}
            onChange={handleInputPrice}
          />
        </p>
        <p>
          <label>Code</label>
          <br></br>
          <input
            type="text"
            placeholder="Code"
            value={inputCode}
            onChange={handleInputCode}
          />
        </p>
        <p>
          <label>Category Id</label>
          <br></br>
          <input
            type="text"
            placeholder="Category Id"
            value={inputCategoryId}
            onChange={handleInputCategoryId}
          />
        </p>

        <div className="submitProduct">
          <button type="submit" onClick={submitNewProduct}>
            Add product
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddProduct;
