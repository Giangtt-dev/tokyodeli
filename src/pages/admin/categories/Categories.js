import { useEffect, useState } from "react";
import "./Categories.css";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://iv6wjs.sse.codesandbox.io/categories")
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);

  console.log("category", category);

  return (
    <div className="categoriesInfo">
      <h2>Categories</h2>
      <div>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
          {category.map((category, index) => (
            <tr key={category.id} className="categoriesTable">
              <td>{category.id}</td>
              <td>{category.name}</td>
            </tr>
          ))}
          ;
        </table>
      </div>
    </div>
  );
};
export default Categories;
