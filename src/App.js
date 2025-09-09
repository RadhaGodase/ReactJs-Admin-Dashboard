import './App.css';
import CatFacts from './Components/CatFacts';
import AgePredictor from './Components/AgePredicator';
import Datetime from './Components/Datetime';
import CatMuseum from './Components/CatMuseum';
import CryptoValue from './Components/CryptoValue';

function App() {
  return (
    <div className="App">
      <div style={{textAlign: "center"}}>
        <Datetime/>
      </div>
      <h1>Cat Museum</h1>
      <div className="component-box">
        <CatMuseum/>
      </div>
      <h1>Age Predictor</h1>
      <div className="component-box">
        <AgePredictor/>
      </div>
      <div className="single-box">
        <h1>Cat Facts</h1>
        <CatFacts/>
      </div>
      <div> Radha Godase</div>
            <div> Radha Godase</div>
      <div className="single-box">
        <h1>Bitcoin Realtime Value</h1>
        <CryptoValue/>
      </div>
    </div>
  );
}

export default App;
