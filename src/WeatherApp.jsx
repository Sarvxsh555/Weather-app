import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
export default function WeatherApp(){
            const [weatherInfo, setWeatherInfo] = useState({
            city : "Delhi",
            feelsLike : 29.15,
            humidity : 15,
            temp : 31.25,
            tempMax : 31.25,
            tempMin : 31.25,
            weather : "clear sky"
    });
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}