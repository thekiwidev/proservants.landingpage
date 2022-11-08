import React from "react";
import { phoneImg } from "../assets";
import { Button } from "./";
import "./Payments.scss";
import { BannerText, Text } from "./utils";

const Payments = () => {
  return (
    <section className="payments-option">
      <BannerText>
        With a whole lot of <span>payments options.</span>
      </BannerText>
      <div className="texts">
        <h3>Checkout</h3>
        <Text>
          Checkout features our smart payment ordering system, incredible speed,
          and beautiful simplicity. It's designed to grow your revenue and
          provide the best payment experience to your customers.
        </Text>
        <Button type="primary" text="Get Started" />
      </div>
      <div className="img-container">
        <img src={phoneImg} alt="" />
      </div>
      <div className="payments-features">
        <div className="feature">
          <h3>International payments</h3>
          <Text>Easily receive money from anyone, anywhere in the world.</Text>
          <a href="./" className="ext-link">
            Learn more
          </a>
        </div>
        <div className="feature">
          <h3>Transfers (Payout)</h3>
          <Text>
            Make single or bulk transfers to bank accounts from your Flutterwave
            dashboard.
          </Text>
          <a href="./" className="ext-link">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Payments;
