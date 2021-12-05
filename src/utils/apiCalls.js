import axios from "axios";

export const fetchWeather = async (e, city, setCity, setWeatherData) => {
  e.preventDefault();
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  );
  console.log(response.data);
  setCity("");
  if (city || city.trim().length !== 0) {
    setWeatherData(response.data);
  }
};
