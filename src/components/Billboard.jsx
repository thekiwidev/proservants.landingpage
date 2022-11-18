import { BannerText, Button, Text } from "./utils";
import "./Billboard.scss";
import { billboardImg } from "../assets";

const Billboard = () => {
  return (
    <section className="billboard-container">
      <div className="container">
        <div className="content">
          <div className="billboard-image">
            <img src={billboardImg} alt="" />
          </div>
          <div className="text-contents">
            <BannerText>
              Access more than variety, experience the <span>UNIQUENESS</span>.
            </BannerText>
            <Text>
              Now you own an online store in only 3 simple steps. 1. Create a
              free account 2. Get verified 3. Add products and access our tools.
              We can get to set up if you need help. It is that simple and easy
            </Text>
            <div className="call-to-action">
              <Button className="btn btn-orange">Shop Now</Button>
              <Button className="btn btn-green-outline">Deliver Now</Button>
              <Button className="btn btn-orange-outline">Sell Online</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billboard;
