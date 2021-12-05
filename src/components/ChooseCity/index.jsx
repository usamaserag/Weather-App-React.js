import React from "react";
import styled from "styled-components";
import { fetchWeather } from "../../utils/apiCalls"

const SearchInputStyle = styled.input`
  width: 100%;
  outline: none;
  border-radius: 25px;
  border: none;
  padding: 10px;
`;

const ButtonStyle = styled.input`
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

const ChooseCity = ({city, setCity, setWeatherData}) => {

  return (
    <>
      <form style={{margin: "auto"}} onSubmit={(e) => fetchWeather(e, city, setCity, setWeatherData)}>
        <SearchInputStyle
          type="search"
          placeholder="Search for location..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <ButtonStyle type="submit" value="SEARCH" />
      </form>
    </>
  );
};

export default ChooseCity;
