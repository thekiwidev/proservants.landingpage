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
            Start Selling Now With <span>ProServants</span>.
          </BannerText>
        }
        paraText={
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
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
