import React from "react";
import { sellNowImg } from "../assets";
import TextContent from "./TextContent";
import { BannerText, Button, Text } from "./utils";
import "./SellNow.scss";

const SellNow = () => {
  return (
    <section className="sell-now-section">
      <div className="img-container img-one">
        <img src={sellNowImg} alt="foot city" />
      </div>
      <TextContent
        headText={
          <BannerText>
            <span>Unlimited Possibilities</span> For All Business.
          </BannerText>
        }
        paraText={
          <Text>
            This is the part we write something about selling on ProServants,
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        }
        btnText={<Button className="btn-orange">Sell Now</Button>}
      />
    </section>
  );
};

export default SellNow;
