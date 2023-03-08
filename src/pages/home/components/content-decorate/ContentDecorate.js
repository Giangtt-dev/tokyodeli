import Slider from "react-slick";

const ContentDecorate = () => {
  const settings1 = {
    dots: true,
    infinite: true,
    autoplay: false, // testing
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <div className="decorateTokyoDeli">
      <div>
        <h1>Tinh thần TOKYO DELI</h1>
        <p>
          <strong>Tokyo Deli</strong> lấy cảm hứng từ không gian truyền thống
          của người Nhật Bản đó là một cách sắp xếp nội thất đơn giản, dễ chịu,
          mang lại bầu không khí bù đắp sự căng thẳng khiến bạn cảm thấy thư
          giãn hơn.
        </p>
      </div>
      <div className="moraleTokyoDeli">
        <div className="decorateSlide">
          <Slider {...settings1}>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div className="decorate-image" key={item + index}>
                <img src={`/images/decorate-${item}.jpg`} alt="" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="tokyoDeli">
          <h3>Tokyo Deli</h3>
          <p>
            Với tông màu chủ đạo là màu nâu vàng, từ ánh đèn cho đến nội thất gỗ
            đều mang đến không gian thoáng đãng với sự bài trí, kết hợp giữa
            hiện đại và truyền thống mang hơi thở Nhật Bản đầy ấn tượng.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContentDecorate;
