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
    <div className="Weather container">
      <form onSubmit={handleSubmit}>
        <input
         onChange={updateCity}
          type="search"
          placeholder="Search City..."
          autoFocus
          autoComplete="off"
className="form-control"
        />
        <button className="search-button btn btn-primary" type="submit">
        {searchIcon}
        </button>
      </form>
    </div>
  );


 
    return (
      <div className="Weather">
        {form}
       
            <h2>{weather.name}</h2>
       <span className="temperature">{Math.round(weather.temperature)}°C</span>
       <span>            <img src={weather.icon} alt={weather.description} /></span>
       <div className="description">{weather.description}</div>
        <ul className="weather-info">
       
       <li>Humidity: {weather.humidity}%</li> 
          <li>Wind: {weather.wind}km/h</li>
            </ul>
          

        
      
      </div>
    );

}
