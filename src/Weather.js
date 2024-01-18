import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import "./App.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header className="search-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  required
                  className="search-form-input"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="search-form-button"
                />
              </div>
            </div>
          </form>
        </header>
        <main>
          <div className="weather-app-data">
            <div>
              <h1 className="weather-app-city">{weatherData.city}</h1>
              <p className="weather-app-details">
                <span className="weather-app-date">
                  <FormattedDate date={weatherData.date} />
                </span>
                <br />
                <span className="weather-description"></span>
                {weatherData.description}
                <br />
                humidity: <strong> {weatherData.humidity}% </strong>
                wind: <strong> {weatherData.wind}km/hr </strong>
              </p>
            </div>

            <div className="weather-app-temperature-container">
              <div></div>
              <div className="weather-app-temperature">
                {Math.round(weatherData.temperature)}
              </div>
              <div className="weather-app-unit">°C</div>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </main>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
