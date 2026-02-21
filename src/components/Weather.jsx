import React from "react";
import { useState, useEffect } from "react";
import setImage from "../functions/setImage";

function Weather () {
    const [val, setVal] = useState('');
    const [inpVal, setInpVal] = useState('');
    const [weather, setWeather] = useState(null);
    // const [touchButton, setTouchButton] = useState(null);
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const d = new Date();
   
    return (
        <div className='weatherApp'>
            <div className="inp">
                <input className="input" value={val} onChange={(e) => setVal(e.target.value)} type="text" autoComplete="off"/>
                <img onClick={async () => {
                    setInpVal(val);
                    // setTouchButton(1);
                    const data = await fetch(`https://goweather.herokuapp.com/weather/${inpVal}`).then(res => res.json())
                    const data1 = await data;
                    setWeather(data1);
                }} className="search-icon" src="./src/photo/search.png" height="31px" width="31px"/>
            </div>
            {weather ? setImage(weather) : <div className="temp">
                <img className="weathPhoto" src="./src/photo/download3.gif" height="94px" width="122px"/>
                <p className="grad">FF ° C</p>  
            </div>}
            <p className="weatherName"></p>
            <div>
                <p className="day">{weather ? '21th Jan 26' : 'FFth Jun FF'}</p> 
            </div>
            
            <div className="data">
                <p className="dayWeek">{weather ? days[d.getDay() - 1] : 'Unknown'}</p>
                <p className="time">{weather ? `${d.getHours()}:${d.getMinutes() ?? `0${d.getMinutes}`}` : 'FF am'}</p>
            </div>
            <div className="param">
                <div className="wind">
                    <img src="./src/photo/wind-icon.png" height="20px" width="20px"/>
                    <p className="speedWind">{weather ? `Wind: ${weather.wind}`: 'Wind: FF'}</p>
                </div>
                <div className="hum">
                    <img src="./src/photo/hum-icon.png" height="20px" width="20px"/>
                    <p className="humproc">{weather ? `Hum: ${Math.trunc(Math.random()*100)}% `: 'Hum: FF%'}</p>
                </div>
            </div>
        </div>
    )
}

export default Weather;