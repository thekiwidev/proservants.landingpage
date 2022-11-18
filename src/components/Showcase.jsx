import React from "react";
import "./Showcase.scss";
import { sellEverywhere } from "../assets";
// import { Text } from "./utils";
import TextContent from "./TextContent";
import { BannerText, Button, Text } from "./utils";

const Showcase = () => {
  return (
    <section className="showcase-container">
      <div className="container">
        <div className="contents">
          <div className="img-container img-one">
            <img src={sellEverywhere} alt="foot city" />
          </div>
          <TextContent
            headText={
              <BannerText>
                <span>Sell everywhere,</span> painlessly.
              </BannerText>
            }
            paraText={
              <Text>
                Everything You Need To Run And Grow Your <br />{" "}
                <b>
                  <span>E-Commerce</span>
                </b>{" "}
                Business.
              </Text>
            }
            btnText={<Button className="btn-orange">Get Started</Button>}
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
