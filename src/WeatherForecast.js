import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <img alt="Weather Icon" src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" />
                  <div className="WeatherForecast-temps">
                    <span className="WeatherForecast-temp-max">
                        10°
                    </span>
                    <span className="WeatherForecast-temp-min">
                        8°
                    </span>
                    </div>  
                </div>

            </div>

        </div>
    )
}