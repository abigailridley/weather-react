import './App.css';
import Weather from "./Weather"
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search</h1>
        <Weather/>

      </header>
    </div>
  );
}

export default App;
