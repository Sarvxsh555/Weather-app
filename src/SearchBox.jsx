import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let[error,setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "37e9e91b9dcfdcd6b1b63e9f97046103";

    let getWeatherInfo = async ()=>{
            let response  = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json(); 
        console.log(jsonResponse);
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    };

    let handleInput = (evt)=>{
       setCity(evt.target.value);
    }
    let handleSubmit = async (evt)=>{
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo(); 
        updateInfo(newInfo);
        }catch{
            setError(true);
        }
    }
    return <div className="SearchBox">
    <form onSubmit={handleSubmit}>
        <h4>Search Weather Report</h4>
        <TextField id="outlined-basic" label="City" variant="outlined" name="city" value={city} onChange={handleInput}/>
        <br /><br />
        <Button variant="contained" type="submit">Click to Search!</Button>
        {error && <p style={{color:"red"}}>No such place exits</p>}
    </form>
    </div>
}