import "./Home.css";
import BannerHome from "./components/banner-home/BannerHome";
import ContentFoods from "./components/content-foods/ContentFoods";
import ContentDecorate from "./components/content-decorate/ContentDecorate";
import ContentPromotion from "./components/content-promotions/ContentPromotion";
import ContentQuality from "./components/content-quality/ContentQuality";

const Home = () => {
  return (
    <div>
      <BannerHome />
      <ContentFoods />
      <ContentDecorate />
      <ContentPromotion />
      <ContentQuality />
    </div>
  );
};
export default Home;
