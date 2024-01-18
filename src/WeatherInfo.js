import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="data">
        <div>
          <h1 className="city">{props.data.city}</h1>
          <p className="details">
            <span className="date">
              <FormattedDate date={props.data.date} />
            </span>
            <br />
            <span className="description"></span>
            {props.data.description}
            <br />
            humidity: <strong> {props.data.humidity}% </strong>
            wind: <strong> {props.data.wind}km/hr </strong>
          </p>
        </div>
        <div className="temperature-container">
          <WeatherIcon code={props.data.icon} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <div className="forecast"></div>
    </div>
  );
}
