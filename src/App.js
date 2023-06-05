import './App.css';
import WeatherSearch from "./WeatherSearch"
import React from 'react';
import Footer from './Footer';




function App() {
  return (
    <div className="App">
      <div className='container'>
      
    
      
        <WeatherSearch defaultCity="Brighton"/>
   
 <Footer />
    </div>
    </div>
  );
}

export default App;
