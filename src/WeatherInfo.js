import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
          <FormattedDate date={props.data.date} /> 
              
        <div className="row">
          <div className="col-6">
           <div className="clearfix">
               <img  className="float-start" src= {props.data.icon} alt={props.data.description}  />
   
     <span className="float-start"> <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°C</span></span> 
       
      </div>
      
       <div className="description">{props.data.description}</div>
      </div>
       <div className="col-6">
        <ul className="weather-info">
       
       <li>Humidity: <span>{props.data.humidity}</span>%</li> 
          <li>Wind: <span>{props.data.wind}</span>km/h</li>
            </ul>
            </div>
        </div>
      
      </div>)
       
    
}