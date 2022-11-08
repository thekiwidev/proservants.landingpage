import "./Trustees.scss";
import { Text } from "./utils";
import {
  mtnImg,
  piggyvestImg,
  microsoftImg,
  wiseImg,
  uberImg,
  chipperImg,
} from "../assets";

const Trustees = () => {
  return (
    <section className="trustees-section">
      <Text>
        We are trusted by <strong>1 Million+</strong> businesses{" "}
      </Text>
      <div className="businesses">
        <img src={mtnImg} alt="" className="mtn" />
        <img src={piggyvestImg} alt="" className="piggyvest" />
        <img src={microsoftImg} alt="" className="microsoft" />
        <img src={wiseImg} alt="" className="wise" />
        <img src={uberImg} alt="" className="uber" />
        <img src={chipperImg} alt="" className="chipper" />
      </div>
    </section>
  );
};

export default Trustees;
