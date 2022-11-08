// import styled from "styled-components";
import Button from "./Button";
import { BannerText, Text } from "./utils";
import React from "react";
import "./Billboard.scss";

const Billboard = () => {
  return (
    <section className="billboard-container">
      <BannerText>
        <span>
          Endless
          <br /> possibilities
        </span>{" "}
        for every business<span>.</span>
      </BannerText>
      <Text>
        Sell online, process payments, build financial products, or use business
        tools designed to grow your business.
      </Text>
      <div className="call-to-action">
        <Button type="primary" text="Create a free account" />
        <Button text="Contact sales" />
      </div>
    </section>
  );
};

export default Billboard;
