import React, { useState } from "react";
import styled from "styled-components";
import ChooseCity from "./components/ChooseCity";
import WeatherDisplay from "./components/WeatherDisplay";
import Loading from "./components/LoadingPage";
import "./App.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.2);
  width: 800px;
  border-radius: 25px;
  background-color: #1e232c;
  padding: 20px;
  height: 400px;
`;

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      {weatherData === null && loading === false ? (
        <ChooseCity
          city={city}
          setCity={setCity}
          setWeatherData={setWeatherData}
          setLoading={setLoading}
        />
      ) : weatherData === null && loading === true ? (
        <Loading />
      ) : weatherData !== null && loading === false ? (
        <WeatherDisplay
          weatherData={weatherData}
          setWeatherData={setWeatherData}
        />
      ) : (
        ""
      )}
    </Container>
  );
}

export default App;
