import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast  from "./WeatherForecast"
import axios from "axios";


import "./WeatherSearch.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'


export default function WeatherSearch(props) {
  const [weather, setWeather] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);
  const locationIcon = <FontAwesomeIcon icon={faLocationCrosshairs} />
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />
  console.log(`https://api.shecodes.io/weather/v1/current?lat=38.71667&lon=-9.13333&key=59a2t7f1c9c6e6ee3b75o1dda2249107&units=metric`)
  function handleResponse(response) {

    setWeather({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
    });
 
  }
function setGeolocation(position) {
  const lon = position.coordinates.longitude;
  const lat = position.coordinates.latitude;
  console.log(lon)
  const apiKey = "59a2t7f1c9c6e6ee3b75o1dda2249107";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}`
  axios.get(apiUrl).then(handleResponse);
}

  function handleGeolocation(event) {
    event.preventDefault();
navigator.geolocation.getCurrentPosition(setGeolocation);

  }

  function handleSubmit(event) {
    event.preventDefault();
  
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
  const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  }

 



let form =
 (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8 search-bar-input">
        <input
         onChange={handleCityChange}
          type="search"
          placeholder="Search City..."
          autoFocus
          autoComplete="off"
          className="form-control"
        />
        </div>
        <div className="col-1 search-button-div">
        <button className="search-button btn btn-primary" type="submit">
        {searchIcon}
        </button>
        </div>
        <div className="col-1">
        <button className="search-button btn btn-primary" type="submit" onClick={handleGeolocation} >
          {locationIcon}
          </button>
        </div>
    </div>
      </form>
      </div>
  );


if (weather.ready) {
  
  return (
  <div className="WeatherSearch">
    {form}
<WeatherInfo data={weather} />
<WeatherForecast data={weather.city}/>
  </div>)
}
else {
  search()
  return "Loading..."
}
            
}

