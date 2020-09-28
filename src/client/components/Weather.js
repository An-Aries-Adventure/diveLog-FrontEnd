import React, {useState} from 'react';
import config from "../components/configs/default.json";
import "../../client/app.css";
import Axios from 'axios';


const Weather = () =>{

    const [tempature, setTempature] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [wind, setWind] = useState("");
    const [windDir, setWindDir] = useState("");
    const [description, setDescription] = useState("");
    const [clouds, setClouds] = useState("");
    


    const getWeatherData = (city, country) => {
        const weather_KEY = config.weather_KEY;
        Axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${weather_KEY}`     
        })
        .then((res) => {
            console.log("weather data", res.data);
            setTempature(res.data.main.temp);
            setWind(res.data.wind.speed);
            setWindDir(res.data.wind.deg);
            setDescription(res.data.weather.description);
            setClouds(res.data.clouds.all);
        })
        .catch((error) => {
          console.log(error);
        });

    };



    return (
        <div className = "weather">
            <div className = "weatherCard">
                {new Date().toLocaleString()}
                <br/>
                <br/>
                Weather for: {city}, {country}
                <br/>
               <br/>
               {tempature} Degrees Fahrenheit
               <br/>
               <br/>
               Wind Speed: {wind} 
               <br/>
               <br/>
               Clouds: {clouds}%
            </div>
            <br/>
            <input type="text" name = 'city' onChange = {(e) => setCity(e.target.value)} placeholder = "Enter a City"/>
            <br/>
            <input type="text" name = 'country' onChange = {(e) => setCountry(e.target.value)} placeholder = "Enter a Country"/>
            <br/>
            <button onClick ={() => getWeatherData(city, country)}>Get Weather</button>
        </div>
        
    )
}

export default Weather;

