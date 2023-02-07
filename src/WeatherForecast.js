
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false)
  }, [props.data]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load(){
    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f"
    let city = props.data;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&units=metric&key=${apiKey}`

  axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
  
    return (
      <div className="WeatherForecast">
        <div className="row">
            {forecast.map((dailyForecast, index) => {
                
              if (index < 5) {
                
                  return (
                      <div className="col" key={index}>
                          <WeatherForecastDay data={dailyForecast} />
                      </div>
                  );
              } else {
                return null
              }        
            })}
          
        </div>
      </div>
    );
  } else {
    load()
    

    return null;
  }
}


