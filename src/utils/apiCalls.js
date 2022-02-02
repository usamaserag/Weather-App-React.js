import axios from "axios";

export const fetchWeather = async (
  selectedLocation,
  setWeatherData,
  setLoading
) => {
  const { city, country_code } = selectedLocation;
  console.log("fetchWeather", city, country_code);
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  );
  setWeatherData(response.data);
  setLoading(false);
};
