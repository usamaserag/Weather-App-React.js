import axios from "axios";

export const fetchWeather = async (
  e,
  city,
  setCity,
  setWeatherData,
  setLoading
) => {
  e.preventDefault();
  setLoading(true);
  if (!city || city.trim().length === 0) return;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  );
  setCity("");
  setLoading(false);
  setWeatherData(response.data);
};
