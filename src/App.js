import {
  Billboard,
  Header,
  DeliverWithUs,
  Showcase,
  Trustees,
  ShopNow,
  SellNow,
  MarketPlace,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Billboard />
      <Showcase />
      <Trustees />
      <ShopNow />
      <SellNow />
      <DeliverWithUs />
      <MarketPlace />
    </div>
  );
}

export default App;
