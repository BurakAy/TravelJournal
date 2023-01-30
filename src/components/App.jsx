import "../styles/App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import cardData from "../data/data";

const App = () => {
  const data = cardData.map((info) => {
    return <Card key={info.id} {...info} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section className="cards-container">{data}</section>
    </div>
  );
};

export default App;
