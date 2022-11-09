// import Billboard from "./components/Billboard";
import {
  Billboard,
  Header,
  Payments,
  Showcase,
  Tools,
  Trustees,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Billboard />
      <Showcase />
      <Trustees />
      <Payments />
      <Tools />
    </div>
  );
}

export default App;
