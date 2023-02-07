import React from "react";

export default function WeatherForecastDay(props){
  
function  maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum)
    return `${temperature}°`;
}
function minTemperature(){
    let temperature = Math.round(props.data.temperature.minimum)
    return `${temperature}°`;
}
function day() {
    let date = new Date (props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return days[day];
}

    return (
      <div className="WeatherForecastDay">
        <div>{day()} </div>
   <span> <img alt={props.data.condition.icon} src={props.data.condition.icon_url} /></span>
  <div className="WeatherForecast-temps">
    <span className="WeatherForecast-temp-max">
        {maxTemperature()}
    </span>
    <span className="WeatherForecast-temp-min">
       {minTemperature()}
    </span>
</div>  
</div>
    )
}