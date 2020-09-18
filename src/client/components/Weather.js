import React, {useState} from 'react';
import "../components/configs/default.json"
import "../../client/app.css"
import Axios from 'axios';
import weather_API_KEY from './configs/default.json'


// const apiBase = "https://api.openweathermap.org/data/2.5";


const Weather = () =>{

    const [tempature, setTempature] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [wind, setWind] = useState("")
    const [windDir, setWindDir] = useState("")
    const [description, setDescription] = useState("")
    const [clouds, setClouds] = useState("")
    




    const getWeatherData = (city, country) => {
         Axios({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?q="${city},${country}&units=imperial&appid=${weather_API_KEY}`     
        })
        .then((response) => {
            console.log("weather data", response.data.main.temp);
            setTempature(response.data.main.temp)
            setWind(response.data.wind.speed)
            setWind(response.data.wind.deg)
            setDescription(respnse.data.weather.description)
            setWind(response.data.clouds.all)
         


        })
        .catch((error) => {
          console.log(error);
        });

    }



    return (
        <div className = "weather">
            <div className = "weatherCard">
                {new Date().toLocaleString()}
                <br/>
                {city} Weather
               <br/>
               {tempature} - {description}
               <br/>
               Wind Speed - {wind}, {windDir}
               <br/>
               {clouds}
            </div>
            <br/>
            <input type="text" value = {city} onChange = {(e) => setCity(e.target.value)} placeholder = "Enter a City"/>
            <br/>
            <input type="text" value = {country} onChange = {(e) => setCountry(e.target.value)} placeholder = "Enter a Country"/>
            <br/>
            <button onClick ={() => getWeatherData(city, country)}>Get Weather</button>
        </div>
        
    )
}

export default Weather




// function Weather() {
// const [query, setQuery] = useState('');
// const [weather, setWeather] = useState({});

// const search = evt => {
//  if (evt.key==="Enter"){
//      fetch(`${apiBase}weather?q=${query}&units=imperial&APPID=${weather_API_KEY}`)
//      .then(res => res.json())
//      .then(result => 
//         setWeather(result),
//         setQuery(''));
//         console.log(result)
//  }
// }

// const dateBuilder = (d) =>{
//     let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()]
//     let year = d.getFullYear()

//     return `${day} ${date} ${month} ${year}`
// }

//     return (
//         <div>
//             Weather App
//         </div>

//  <div className = {(typeof weather.main != "undefined") ? ((weather.main.temp > 22) ? 'weatherApp warm' : 'weatherApp') : 'weatherApp'}>
//      {/* <main>
//          <div className ="search-box">
//             <input 
//                 type = "text"
//                 className = "search-bar"
//                 placeholder = "Search"
//                 onChange ={e => setQuery(e.target.value)}
//                 value ={query}
//                 onKeyPress={search}
//                 /> 
//          </div>
//          {(typeof weather.main != "undefined") ? (
//         <div>
//                      <div className ="location-box">
//             <div className="location">{weather.name}, {weather.sys.country}</div>
//             <div className="date">{dateBuilder(new Date())}</div>
//          </div>
//          <div className ="weather-box">
//             <div className ="temp"> 
//                   {Math.round(weather.main.temp)}°f
//             </div>
//             <div className = "weather">
//                 {weather.weather[0].main}
//             </div>
//         </div> 
//         </div>
//         ) : ('')}
//      </main> */}
// //  </div>
//     )
// }



























