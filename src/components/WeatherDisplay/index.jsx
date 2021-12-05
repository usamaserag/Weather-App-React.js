import React from "react";
import styled from "styled-components";

const WeatherDataWrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const WeatherImgBoxStyle = styled.div`
  position: relative;
  height: 100%;
  border-radius: 25px;
  background-image: url("./photo1");
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const WeatherDisplay = () => {
  const weatherData = [
    { name: "humidity" },
    { name: "air pressure" },
    { name: "wind" },
    { name: "max temp" },
    { name: "min temp" },
    { name: "sunrise" },
    { name: "sunset" },
  ];

  return (
    <WeatherDataWrapperStyle>
      <WeatherImgBoxStyle>
        <WeatherImgInfoStyle>
          <LeftSideStyle>
            <div>
              <p>xx</p>
              <p>xx</p>
              <p>xx</p>
            </div>
            <div>
              <div>icon Weather</div>
              <p>xx°C</p>
              <p>xx</p>
            </div>
          </LeftSideStyle>
        </WeatherImgInfoStyle>
      </WeatherImgBoxStyle>
      <RightSideStyle>
        <div>
          {weatherData.map((item, index) => {
            return <WeatherRightDataStyle key={index}>{item.name}</WeatherRightDataStyle>;
          })}
        </div>
      </RightSideStyle>
    </WeatherDataWrapperStyle>
  );
};

export default WeatherDisplay;