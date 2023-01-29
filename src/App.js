import './App.css';
import Weather from "./Weather"
import React from 'react';
import Footer from './Footer';




function App() {
  return (
    <div className="App">
      <div className='container'>
      
        <h1>Weather</h1>
      
        <Weather />
   
 <Footer />
    </div>
    </div>
  );
}

export default App;
