import React from "react";
import "./Weather.css";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Madrid",
    temperature: 31,
    date: "Monday 10:35am",
    description: "Rainy",
    humidity: 97,
    wind: 7,
  };

  return (
    <div className="Weather">
      <header>
        <form className="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                required
                className="search-form-input"
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
              <span className="weather-app-time">
                Last Updated: {weatherData.date}
              </span>
              <br />
              {weatherData.description}
              <br />
              humidity: {weatherData.humidity}% wind: {weatherData.wind}km/hr
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div></div>
            <div className="weather-app-temperature">
              {weatherData.temperature}
            </div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </main>
    </div>
  );
}
