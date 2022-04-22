import BestDeal from "./BestDeal/BestDeal";
import BestSeller from "./BestSeller/BestSeller";
import FourDevice from "./FourDevice/FourDevice";
import Nav from "./Nav/Nav";
import Recently from "./Recently/Recently";
import Slider from "./Slider/Slider";
import SpecialOffer from "./SpecialOffer/SpecialOffer";

const Home = () => {
  return (
    <>
      <Nav />
      <Slider />
      <FourDevice />
      <SpecialOffer />
      <BestDeal />
      <BestSeller />
      <Recently />
    </>
  );
};

export default Home;
