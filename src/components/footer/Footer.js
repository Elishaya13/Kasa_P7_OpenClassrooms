import React from "react";
import "./footer.scss";
import { STRINGS } from "../../strings/constants";
import { IMAGES } from "../../assets/images/images";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={IMAGES.BLACK_LOGO} alt="black logo"></img>
      <p>{STRINGS.COPYRIGHT}</p>
    </footer>
  );
};

export default Footer;
