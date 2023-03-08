const ContentPromotion = () => {
  return (
    <div className="promotions">
      <h1>Khuyến mãi</h1>
      <div className="columnPromotion-1">
        <img src="/images/promotion-1.jpg" alt="" />
        <div className="promotion-1">
          <a href="#" title="Tặng 01 phần nước ép Yuzu">
            Tặng Ngay 01 Phần Nước Ép Yuzu
          </a>
          <div className="viewMore">
            <a href="#">XEM THÊM</a>
          </div>
        </div>
      </div>
      <div className="columnPromotion-2">
        <div className="row-upper">
          <div className="containerUp">
            <img src="/images/promotion-2.jpg" alt="" />
          </div>
          <div className="containerUp">
            <a href="#" title="Cực phẩm Hoya sâm biển">
              Cực phẩm Hoya sâm biển - Giảm đến 20%
            </a>
            <div className="viewMore">
              <a href="#">XEM THÊM</a>
            </div>
          </div>
        </div>
        <div className="row-lower">
          <div className="containerLow">
            <a href="#" title="10 Voucher 200k Siêu Hot">
              10 Voucher 200k Siêu Hot Từ Tokyo Deli
            </a>
            <div className="viewMore">
              <a href="#">XEM THÊM</a>
            </div>
          </div>
          <div className="containerLow">
            <img src="/images/promotion-3.png" alt="" />
          </div>
        </div>
      </div>
      <div className="clearBox" />
    </div>
  );
};
export default ContentPromotion;
