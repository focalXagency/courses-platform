import Nav from "./../Nav/Nav";
import Hero from "./../Hero/Hero";
import Learn from "./../Learn/Learn";
import Descover from "./../Descover/Descover";

import What from "../../modules/Courses/What/What";
import Training from "../../modules/Courses/Training/Training";
import Promotion from "../Promotion/Promotion";
import OurStudent from "../OurStudent/OurStudent";
import RealCreators from "../RealCreators/RealCreators";
import NotFind from "../NotFind/NotFind";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Learn />
      <Descover />
      <What />
      <Training />
      <Promotion />
      <OurStudent />
      <RealCreators />
      <NotFind />
      <FAQ />
    </div>
  );
};

export default Home;
