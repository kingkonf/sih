import React, { useState, useEffect } from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";
import Card from "../Card/Card";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

const Cards = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});
  const { co, no, o3, no2, so2, pm2_5, pm10, nh3 } = tempInfo;

  const getWeatherInfo = async () => {
    try {
      let url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=1&appid=8afcbcecc3e6a5b2c968130085915917`;
      let res = await fetch(url);
      let data = await res.json();
      const lat = data[0].lat;
      const lon = data[0].lon;

      let url2 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=8afcbcecc3e6a5b2c968130085915917`;
      let res2 = await fetch(url2);
      let data2 = await res2.json();
      setTempInfo(data2.list[0].components);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Remove this line if you don't want to fetch data when the component mounts
    getWeatherInfo();
  }, []);

  const cardsData = [
    {
      title: "oxygen",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: o3,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "co2",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: co,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [
            112.63,
            93.57,
            100,
            89.1,
            66.23,
            78.93,
            87.77,
            77.83
            
          ],
        },
      ],
    },
    {
      title: "Nitrogen",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: no,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
    {
      title: "nh3",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: nh3,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [
            112.63,
            93.57,
            100,
            89.1,
            66.23,
            78.93,
            87.77,
            77.83
            
          ],
        },
      ],
    },
    {
      title: "so2",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: so2,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [
            112.63,
            93.57,
            100,
            89.1,
            66.23,
            78.93,
            87.77,
            77.83
            
          ],
        },
      ],
    },
    {
      title: "no2",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: no2,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [
            112.63,
            93.57,
            100,
            89.1,
            66.23,
            78.93,
            87.77,
            77.83
            
          ],
        },
      ],
    },
  ];

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
          <button className="searchButton" type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
     
        <div className="Cards">
     
      {cardsData.map((card, id) => {
         const status = card.barValue > 100 ? "Bad" : "Good";
          // Add the dynamic CSS class based on the status
          
    // Define the background color based on the status
    const backgroundColor = status === "Good" ? "#77dd77" : "#ff0040";

     // Define the text color based on the status
     

     // Create an inline style object with background and text color
     const containerStyle = {
       backgroundColor,
      //  color: textColor,
     };

    // Create an inline style object with the background color
   

        return (
          <div className="parentContainer" style={containerStyle} key={id}>
            <Card
              title={card.title}
              color={containerStyle.backgroundColor}
              barValue={card.barValue}
              value={status}
              png={card.png}
              series={card.series}
            />
            
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Cards;
