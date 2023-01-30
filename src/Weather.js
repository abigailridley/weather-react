import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Weather() {
  const [city, setCity] = useState("Brighton");
 const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
 
    setWeather({
        name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
   
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

 



let form =
 (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
        <input
         onChange={updateCity}
          type="search"
          placeholder="Search City..."
          autoFocus
          autoComplete="off"
className="form-control"
        />
        </div>
        <div className="col-3">
        <button className="search-button btn btn-primary w-100" type="submit">
        {searchIcon}
        </button>
        </div>
    </div>
      </form>
      </div>
  );


 
    return (
      <div className="Weather">
        {form}
       
            <h2>Brighton</h2>
          <p>Wednesday 07:00</p>
              
        <div className="row">
          <div className="col-6">
           <div className="clearfix">
               <img  className="float-start" src= "http://openweathermap.org/img/wn/01d@2x.png" alt={weather.description}  />
   
     <span className="float-start"> <span className="temperature">9</span><span className="unit">°C</span></span> 
       
      </div>
      
       <div className="description">Clear Sky</div>
      </div>
       <div className="col-6">
        <ul className="weather-info">
       
       <li>Humidity: 65%</li> 
          <li>Wind: 3.6km/h</li>
            </ul>
            </div>
        </div>
      
      </div>
    );

}
