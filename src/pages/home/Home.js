import React from "react";
import Banner from "../../components/banner/Banner";
import Gallery from "./gallery/Gallery";
import "./home.scss";
import { STRINGS } from "../../strings/constants";
import { IMAGES } from "../../assets/images/images";

const Home = () => {
  return (
    <main className="home">
      <Banner banner={IMAGES.BANNER_HOME} text={STRINGS.BANNER_TITLE} />
      <Gallery />
    </main>
  );
};

export default Home;
