import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp(){
  const [weatherInfo , setWeatherInfo ] = useState({
    city:"delhi",
    feelsLike: 17.56,
    humidity: 63,
    temp:18.05,
    tempMax: 18.05,
    tempMin: 18.05,
    weather:"smoke",
  })

let updateInfo =(newInfo)=>{
    setWeatherInfo(newInfo);
}

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
             <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox> 
        </div>
    )
}