import React from "react";
import { creatorImg, yangaBeautyImg } from "../assets";
import { BannerText, Button, Text } from "./utils";
import "./Tools.scss";

const Tools = () => {
  return (
    <section className="tools-container">
      <BannerText>
        Build a successful online business with our <span>Commerce tools.</span>
      </BannerText>
      <div className="texts">
        <h3>Store</h3>
        <Text>
          Create a free ecommerce website and start selling worldwide with just
          a few clicks.
        </Text>
        <Button type="primary" text="Start Selling" />
      </div>
      <div className="img-container">
        <img src={yangaBeautyImg} alt="" />
      </div>
      <div className="payments-features">
        <div className="feature">
          <h3>Invoices</h3>
          <Text>
            Generate professional invoices for your customers and get paid from
            anywhere.
          </Text>
          <a href="./" className="ext-link">
            Get started
          </a>
        </div>
        <div className="feature">
          <h3>Payment links</h3>
          <Text>
            Receive one-off or recurring payments from anyone, anywhere, via
            your unique payment link.
          </Text>
          <a href="./" className="ext-link">
            Learn more
          </a>
        </div>
      </div>
      <div className="img-container">
        <img src={creatorImg} alt="" />
      </div>
      <Text className="footer-text">
        A platform for you, whether you’re a big business or a{" "}
        <span>solo artist.</span>
      </Text>
    </section>
  );
};

export default Tools;
