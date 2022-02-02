import React from "react";
import styled from "styled-components";
import { fetchWeather } from "../../utils/apiCalls";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/round-borders.css";

export const ButtonStyle = styled.button`
  outline: none;
  width: 100%;
  border: none;
  border-radius: 25px;
  padding: 10px;
  background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: transform 200ms ease;
  margin-top: 10px;
  &:hover {
    transform: scale(0.97);
  }
`;

const ChooseCity = ({
  setWeatherData,
  selectedLocation,
  setSelectedLocation,
  setLoading,
}) => {
  const onPlaceSelect = (value) => {
    const { city, country_code } = value.properties;
    setSelectedLocation({
      city,
      country_code,
    });
    console.log("properties", value.properties);
  };

  const onSuggestionChange = (value) => {
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!selectedLocation.city) return;
    fetchWeather(selectedLocation, setWeatherData, setLoading);
  };

  return (
    <form style={{ margin: "auto" }} onSubmit={handleSubmit}>
      <GeoapifyContext apiKey={process.env.REACT_APP_PLACES_KEY}>
        <GeoapifyGeocoderAutocomplete
          placeSelect={onPlaceSelect}
          suggestionsChange={onSuggestionChange}
          placeholder="Search for location..."
        />
      </GeoapifyContext>
      <ButtonStyle>SEARCH</ButtonStyle>
    </form>
  );
};

export default ChooseCity;
