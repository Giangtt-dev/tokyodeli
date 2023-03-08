import { NavLink } from "react-router-dom";
import DetailFood from "../../../detail-food/DetailFood";
const DetailMenu = () => {
  return (
    <div className="detailMenu">
      <div className="nameCategory">Grand Menu</div>
      <div className="foodMenu">
        <div className="cardMenu">
          <NavLink to="1">
            <div className="img">
              <img src="/images/p3.jpg" alt="" />
            </div>
            <div className="nameId">
              <p>P3</p>
            </div>
            <div className="nameFood">
              <p>CUỐN CÁ HỒI PHÔ MAI</p>
            </div>
            <div class="price">
              <p> 125.000</p>
            </div>
          </NavLink>
        </div>
        <div className="cardMenu">
          <NavLink to="2">
            <div className="img">
              <img src="/images/p4.jpg" alt="" />
            </div>
            <div className="nameId">
              <p>P4</p>
            </div>
            <div className="nameFood">
              <p>TÔ CƠM LƯƠN NHỎ</p>
            </div>
            <div class="price">
              <p> 100.000</p>
            </div>
          </NavLink>
        </div>
        <div className="cardMenu">
          <div className="img">
            <img src="/images/p5.jpg" alt="" />
          </div>
          <div className="nameId">
            <p>P5</p>
          </div>
          <div className="nameFood">
            <p>TÔ CƠM ĐẶC BIỆT</p>
          </div>
          <div class="price">
            <p> 79.000</p>
          </div>
        </div>
        <div className="cardMenu">
          <div className="img">
            <img src="/images/p6.jpg" alt="" />
          </div>
          <div className="nameId">
            <p>P6</p>
          </div>
          <div className="nameFood">
            <p>TÔ CƠM RAU CỦ</p>
          </div>
          <div class="price">
            <p> 65.000</p>
          </div>
        </div>
        <div className="cardMenu">
          <div className="img">
            <img src="/images/p7.jpg" alt="" />
          </div>
          <div className="nameId">
            {" "}
            <p>P7</p>
          </div>
          <div className="nameFood">
            <p>CƠM SỐT THỊT KIỂU OKINAWA</p>
          </div>
          <div class="price">
            <p> 75.000</p>
          </div>
        </div>
        <div className="cardMenu">
          <div className="img">
            <img src="/images/p8.jpg" alt="" />
          </div>
          <div className="nameId">
            <p>P8</p>
          </div>
          <div className="nameFood">
            {" "}
            <p>MĂNG TÂY XÀO THỊT BÒ CHAY</p>
          </div>
          <div class="price">
            <p> 65.000</p>
          </div>
        </div>
        <div className="cardMenu">
          <div className="img">
            {" "}
            <img src="/images/p9.jpg" alt="" />
          </div>
          <div className="nameId">
            {" "}
            <p>P9</p>
          </div>
          <div className="nameFood">
            {" "}
            <p>ĐẬU HỦ VÀ RONG BIỂN TRỘN MÈ</p>
          </div>
          <div class="price">
            <p> 39.000</p>
          </div>
        </div>
        <div className="cardMenu">
          <div className="img">
            {" "}
            <img src="/images/st1.jpg" alt="" />
          </div>
          <div className="nameId">
            <p>ST1</p>
          </div>
          <div className="nameFood">
            <p>TRỨNG HẤP KIỂU NHẬT & TRỨNG CÁ HỒI</p>
          </div>
          <div class="price">
            <p> 69.000</p>
          </div>
        </div>
        <div className="cardMenu">
          <div className="img">
            {" "}
            <img src="/images/st2.jpg" alt="" />
          </div>
          <div className="nameId">
            {" "}
            <p>ST2</p>
          </div>
          <div className="nameFood">
            {" "}
            <p>TRỨNG HẤP KIỂU NHẬT</p>
          </div>
          <div class="price">
            <p> 32.000</p>
          </div>
        </div>
        <div className="cardMenu">
          <div className="img">
            {" "}
            <img src="/images/st3.png" alt="" />
          </div>
          <div className="nameId">
            {" "}
            <p>ST3</p>
          </div>
          <div className="nameFood">
            {" "}
            <p>TRỨNG CÁ HỒI</p>
          </div>
          <div class="price">
            <p> 109.000</p>
          </div>
        </div>
        <div className="cardMenu">
          <div className="img">
            {" "}
            <img src="/images/st4.png" alt="" />
          </div>
          <div className="nameId">
            {" "}
            <p>ST4</p>
          </div>
          <div className="nameFood">
            {" "}
            <p>TRỨNG CÁ CHUỒN</p>
          </div>
          <div class="price">
            <p> 65.000</p>
          </div>
        </div>{" "}
        <div className="cardMenu">
          <div className="img">
            {" "}
            <img src="/images/st5.png" alt="" />
          </div>
          <div className="nameId">
            {" "}
            <p>ST5</p>
          </div>
          <div className="nameFood">
            {" "}
            <p>RONG BIỂN TRỘN MÈ</p>
          </div>
          <div class="price">
            <p> 39.000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailMenu;
