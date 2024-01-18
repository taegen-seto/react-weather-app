import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-app-data">
        <div>
          <h1 className="weather-app-city">{props.data.city}</h1>
          <p className="weather-app-details">
            <span className="weather-app-date">
              <FormattedDate date={props.data.date} />
            </span>
            <br />
            <span className="weather-description"></span>
            {props.data.description}
            <br />
            humidity: <strong> {props.data.humidity}% </strong>
            wind: <strong> {props.data.wind}km/hr </strong>
          </p>
        </div>

        <div className="weather-app-temperature-container">
          <div></div>
          <div className="weather-app-temperature">
            {Math.round(props.data.temperature)}
          </div>
          <div className="weather-app-unit">°C</div>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
