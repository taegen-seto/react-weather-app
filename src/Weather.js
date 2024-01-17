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
    <div className="weather-app">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
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
