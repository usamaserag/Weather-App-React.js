import React from "react";
import styled from "styled-components";
import moment from "moment";
import { ButtonStyle } from "../ChooseCity";
import { FaMapMarkerAlt } from "react-icons/fa";

const WeatherDataWrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const WeatherImgBoxStyle = styled.div`
  position: relative;
  height: 100%;
  border-radius: 25px;
  background-image: url("https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80");
  width: 300px;
  transition: transform 300ms ease;
  transform: scale(1);
  &:hover {
    transform: scale(1.02);
  }
`;

const WeatherImgInfoStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 30px 20px;
  top: 0;
  left: 0;
  background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
  border-radius: 25px;
  opacity: 0.8;
  color: white;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LeftSideStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DayLargeStyle = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

const RightSideStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 20px;
  width: calc(100% - 300px);
`;

const WeatherRightDataStyle = styled.p`
  font-size: 18px;
  margin-bottom: 6px;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WeatherDisplay = ({ weatherData, setWeatherData }) => {
  const getDayName = (timeStamp) => {
    return moment.unix(timeStamp).format("D MMMM YYYY");
  };

  const getDayDate = (timeStamp) => {
    return moment.unix(timeStamp).format("dddd");
  };

  const getTemperature = (fahrenheit) => {
    return `${Math.floor(fahrenheit - 273)}°C`;
  };

  const getTempMaxDegree = (fahrenheit) => {
    return Math.floor(fahrenheit - 273);
  };

  const getTempMinDegree = (fahrenheit) => {
    return Math.floor(fahrenheit - 273);
  };

  const getSunrise = (timeStamp) => {
    return `${moment.unix(timeStamp).format("H:MM a")}`;
  };

  const getSunset = (timeStamp) => {
    return `${moment.unix(timeStamp).format("h:mm a")}`;
  };

  const getWindSpeed = (speed) => {
    return `${Math.floor(speed * 3.6)} Km/h`;
  };

  const weatherDataDisplay = [
    { name: "humidity", value: weatherData.main.humidity },
    {
      name: "air pressure",
      value: weatherData.main.pressure,
    },
    {
      name: "wind",
      value: getWindSpeed(weatherData.wind.speed),
    },
    {
      name: "max temp",
      value: getTempMaxDegree(weatherData.main.temp_max),
    },
    {
      name: "min temp",
      value: getTempMinDegree(weatherData.main.temp_min),
    },
    {
      name: "sunrise",
      value: getSunrise(weatherData.sys.sunrise),
    },
    {
      name: "sunset",
      value: getSunset(weatherData.sys.sunset),
    },
  ];

  return (
    <WeatherDataWrapperStyle>
      <WeatherImgBoxStyle>
        <WeatherImgInfoStyle>
          <LeftSideStyle>
            <div>
              <DayLargeStyle>
                {getDayDate(weatherData.sys.sunset)}
              </DayLargeStyle>
              <p>{getDayName(weatherData.sys.sunset)}</p>
              <p>
                <FaMapMarkerAlt /> {weatherData.name}, {weatherData.sys.country}
              </p>
            </div>
            <div>
              <div style={{ height: "100px", width: "100px" }}>
                <img
                  style={{ height: "100%", width: "100%", filter: "invert(1)" }}
                  alt=""
                  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                />
              </div>
              <DayLargeStyle>
                {getTemperature(weatherData.main.temp)}
              </DayLargeStyle>
              <p style={{ textTransform: "capitalize", fontSize: "20px" }}>
                {weatherData.weather[0].description}
              </p>
            </div>
          </LeftSideStyle>
        </WeatherImgInfoStyle>
      </WeatherImgBoxStyle>
      <RightSideStyle>
        <div>
          {weatherDataDisplay.map((item, index) => {
            return (
              <WeatherRightDataStyle key={index}>
                {item.name}
                <span>{item.value}</span>
              </WeatherRightDataStyle>
            );
          })}
        </div>
        <ButtonStyle onClick={() => setWeatherData(null)}>
          <FaMapMarkerAlt /> Change Location
        </ButtonStyle>
      </RightSideStyle>
    </WeatherDataWrapperStyle>
  );
};

export default WeatherDisplay;
