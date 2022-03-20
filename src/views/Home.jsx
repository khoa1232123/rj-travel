import React from "react";
import {
  AboutBook,
  BannerOne,
  Destinations,
  OptionIcons,
  Packages,
  Slider,
} from "../components";
import BannerTwo from "../components/BannerTwo";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Destinations />
      <AboutBook />
      <BannerOne />
      <OptionIcons />
      <BannerTwo />
      <Packages />
    </div>
  );
};

export default Home;
