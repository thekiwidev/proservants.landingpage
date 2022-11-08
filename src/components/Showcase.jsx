import React from "react";
import "./Showcase.scss";
import { famasiImg, footCityImg } from "../assets";
import { Text } from "./utils";

const Showcase = () => {
  return (
    <section className="showcase-container">
      <div className="img-container img-one">
        <img src={footCityImg} alt="foot city" />
      </div>
      <Text>
        It's not the size of the company, it's the size of the ambition.
        Ambitious businesses of all sizes count on <b>ProServants</b> to grow
        their business everywhere.
      </Text>
      <div className="img-container img-two">
        <img src={famasiImg} alt="foot city" />
      </div>
    </section>
  );
};

export default Showcase;
