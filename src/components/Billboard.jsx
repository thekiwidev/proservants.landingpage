// import styled from "styled-components";
// import Button from "./Button";
import { BannerText, Button, Text } from "./utils";
import React from "react";
import "./Billboard.scss";
import { billboardImg } from "../assets";

const Billboard = () => {
  return (
    <section className="billboard-container">
      <div className="billboard-image">
        <img src={billboardImg} alt="" />
      </div>
      <BannerText>
        <span>
          Unlimited possibilities
          <br />
        </span>{" "}
        for all business<span>.</span>
      </BannerText>
      <Text>
        Now you own an online store in only 3 simple steps. 1. Create a free
        account 2. Get verified 3. Add products and access our tools. We can get
        to set up if you need help. It is that simple and easy
      </Text>
      <div className="call-to-action">
        {window.innerWidth <= 500 ? (
          <Button className="btn btn-orange">Get Started</Button>
        ) : (
          <>
            <Button className="btn btn-primary-acent">Shop Now</Button>
            <Button className="btn btn-primary">Deliver Now</Button>
            <Button className="btn btn-primary-accent">Sell Online</Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Billboard;
