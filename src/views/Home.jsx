import React from "react";
import AboutBook from "../components/AboutBook";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <AboutBook />
    </div>
  );
};

export default Home;
