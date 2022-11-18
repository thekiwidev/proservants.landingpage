import React from "react";
import { deliverImg } from "../assets";

import "./DeliverWithUs.scss";
import TextContent from "./TextContent";
import { BannerText, Button, Text } from "./utils";

const DeliverWithUs = () => {
  return (
    <section className="deliver-with-us-section">
      <div className="img-container img-one">
        <img src={deliverImg} alt="foot city" />
      </div>
      <TextContent
        headText={
          <BannerText>
            Deliver with <span>ProServants,</span> Now
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
        btnText={<Button>Start Now</Button>}
      />
    </section>
  );
};

export default DeliverWithUs;
