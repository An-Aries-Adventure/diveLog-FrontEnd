import React, {useSate} from 'react'
import Redux from 'redux'
import "../components/configs/default.json"
import "../../client/app.css"


const apiBase = "https://api.openweathermap.org/data/2.5";



function Weather() {
const [query, setQuery] = useState('');
const [weather, setWeather] = useState({});

const search = evt => {
 if (evt.key==="Enter"){
     fetch(`${apiBase}weather?q=${query}&units=imperial&APPID=${weather_API_KEY}`)
     .then(res => res.json())
     .then(result => 
        setWeather(result),
        setQuery(''));
        console.log(result)
 }
}

const dateBuilder = (d) =>{
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
}

    return (
 <div className = {(typeof weather.main != "undefined") ? ((weather.main.temp > 22) ? 'weatherApp warm' : 'weatherApp') : 'weatherApp'}>
     <main>
         <div className ="search-box">
            <input 
                type = "text"
                className = "search-bar"
                placeholder = "Search"
                onChange ={e => setQuery(e.target.value)}
                value ={query}
                onKeyPress={search}
                /> 
         </div>
         {(typeof weather.main != "undefined") ? (
        <div>
                     <div className ="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
         </div>
         <div className ="weather-box">
            <div className ="temp"> 
                  {Math.round(weather.main.temp)}°f
            </div>
            <div className = "weather">
                {weather.weather[0].main}
            </div>
        </div> 
        </div>
        ) : ('')}
     </main>
 </div>
    )
}







export default Weather


























