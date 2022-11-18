import React from "react";
import { shopNowImg } from "../assets";
import TextContent from "./TextContent";
import { BannerText, Button, Text } from "./utils";
import "./ShopNow.scss";

const ShopNow = () => {
  return (
    <section className="shop-now-section">
      <div className="img-container img-one">
        <img src={shopNowImg} alt="foot city" />
      </div>
      <TextContent
        headText={
          <BannerText>
            Shop Now With <span>ProServants</span>.
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
        btnText={<Button className="btn-orange">Shop Now</Button>}
      />
    </section>
  );
};

export default ShopNow;
