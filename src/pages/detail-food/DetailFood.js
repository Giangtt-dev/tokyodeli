import "./DetailFood.css";
import Banner from "../menu/components/banner/Banner.js";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFace } from "@fortawesome/free-solid-svg-icons";
import { faTwiter } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const settings = {
  //autoplay: true,
  autoplay: false,
  dots: false,
  //infinite: true,
  infinite: false,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 3
};

const DetailFood = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [detailFood, setDetailFood] = useState([]);

  const getProduct = () => {
    fetch("https://iv6wjs.sse.codesandbox.io/products?id=" + productId)
      .then((res) => res.json())
      .then((res) => setProduct(res.length > 0 ? res[0] : {}))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch("https://iv6wjs.sse.codesandbox.io/products")
      .then((res) => res.json())
      .then((res) => setDetailFood(res));
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

  console.log("detailFood", detailFood);

  return (
    <div className="detail-foods">
      <Banner />
      <div className="foodInfo">
        <div className="columnLeft">
          <div className="productImage">
            <img src={product.image_url} alt="" />
          </div>
        </div>
        <div className="columnRight">
          <h2>{product.name}</h2>
          <div className="price">
            <p>{product.price}</p>
          </div>
          <div className="contact">
            <a href="#" title="Liên hệ">
              Liên hệ <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="#" title="Đặt hàng">
              Đặt hàng <FontAwesomeIcon icon={faCartShopping} />
            </a>
            <a href="#" title="Xem địa chỉ gần nhất">
              Xem địa chỉ gần nhất <FontAwesomeIcon icon={faLocationDot} />
            </a>
            <a href="#" title="">
              <FontAwesomeIcon icon="fa-facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="otherFoods">
        <div className="title">
          <h2>Món ăn khác</h2>
        </div>
        <div className="slideOtherFoods">
          <Slider {...settings}>
            {detailFood.map((detailFood, index) => (
              <div key={detailFood.id} className="productWrapper">
                <div className="img">
                  <img src={detailFood.image_url} alt="" />
                </div>
                <div className="nameFood">
                  <p>{detailFood.name}</p>
                </div>
                <div class="price">
                  <p>{detailFood.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default DetailFood;
