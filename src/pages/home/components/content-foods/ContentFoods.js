const ContentFoods = () => {
  return (
    <div className="foods">
      <div className="title">
        <h1>Tinh hoa ẩm thực Nhật Bản</h1>
      </div>
      <div class="japanFoods">
        <div class="column-left">
          <div class="image1">
            <img src="/images/japan-foods-1.jpg" alt="" />
          </div>
        </div>
        <div className="column-center">
          <div class="descriptionFoods">
            <p>
              Chuỗi nhà hàng <strong>TOKYO Deli </strong> ra đời với tham vọng
              mong muốn giới thiệu nền ẩm thực Nhật Bản đích thực trở nên “Thân
              quen” đến với người Việt, đồng thời là nơi trải nghiệm nền ẩm thực
              Nhật mới mẻ, thú vị bên gia đình bạn bè và đồng nghiệp.
            </p>
            <div className="btnViewMore">
              <a href="#" title="Tinh hoa ẩm thực Nhật Bản">
                XEM THÊM
              </a>
            </div>
          </div>
        </div>
        <div class="column-right">
          <div class="image234">
            <div className="row-upper">
              <div class="image-container">
                <img src="/images/japan-foods-3.jpg" alt="" />
              </div>
              <div class="image-container">
                <img src="/images/japan-foods-2.jpg" alt="" />
              </div>
            </div>
            <div className="row-bottom">
              <img src="/images/japan-foods-4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentFoods;
