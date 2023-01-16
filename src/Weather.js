import React, { useState } from "react";
import axios from "axios";


export default function Weather() {
const [weather, setWeather] = useState("")
const [city, setCity] = useState (" ")
const [loaded, setLoaded] = useState(false)
   

function displayTemperature(response){
    setLoaded(true)
    setWeather({
        name: response.data.name,
        temperature: Math.round(response.data.main.temp)
    });
    }
function handleSubmit(event){
    event.preventDefault();
    let apiKey = "e6c22e88e17dc0b9791382f83f4b3a8f"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayTemperature);}

function updateCity(event) {
    setCity(event.target.value)
}

let form = (
    <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} /> <button type="submit" >Search</button>
    </form>
)

if (loaded)  {
    return (
        <div>
        
    {form}
    <p>The temperature in {weather.name} is {weather.temperature}°C</p>
    </div>
)
} else {
    return form
        
}

}