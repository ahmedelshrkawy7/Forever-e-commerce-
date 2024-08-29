import Hero from "../components/Hero";
import Title from "../components/Title";
import BestSeller from "./BestSeller";
import LatestCollection from "./LatestCollection";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  );
};

export default Home;
