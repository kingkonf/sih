import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Weathercard from "./weathercard";
// import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=1&appid=8afcbcecc3e6a5b2c968130085915917`;
      let res = await fetch(url);
      let data = await res.json();
      const lat = data[0].lat;
      const lon = data[0].lon;

      
    let url2 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=8afcbcecc3e6a5b2c968130085915917`
    let res2 = await fetch(url2);
    let data2 = await res2.json();
    console.log(data2.list[0].components);
      //   setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      
    </>
  );
};

export default Temp;