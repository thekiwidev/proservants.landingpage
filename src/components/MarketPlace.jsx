import { marketPlaceImg } from "../assets";
import TextContent from "./TextContent";
import { BannerText, Button, Text } from "./utils";
import "./MarketPlace.scss";

const ShopNow = () => {
  return (
    <section className="market-place-section">
      <div className="img-container img-one">
        <img src={marketPlaceImg} alt="foot city" />
      </div>
      <TextContent
        headText={
          <BannerText>
            ProServants <br /> <span>Market Place</span>.
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
        btnText={
          <Button className="btn-orange">Shop Now on ProServants</Button>
        }
      />
    </section>
  );
};

export default ShopNow;
