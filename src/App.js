import './App.css';
import WeatherSearch from "./WeatherSearch"
import React from 'react';
import Footer from './Footer';




function App() {
  return (
    <div className="App">
      
        <h1>Weather</h1>
      
        <WeatherSearch />
   
 <Footer />
    </div>
  );
}

export default App;
