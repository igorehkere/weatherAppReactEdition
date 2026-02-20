import React from "react";
import { useState, useEffect } from "react";

function Weather () {
    const [val, setVal] = useState('');
    const [inpVal, setInpVal] = useState('');
    const [weather, setWeather] = useState(null);

    console.log(weather)
    return (
        <div className='weatherApp'>
            <div className="inp">
                <input className="input" value={val} onChange={(e) => setVal(e.target.value)} type="text" autoComplete="off"/>
                <img onClick={() => {
                    setInpVal(val);
                    fetch(`https://goweather.herokuapp.com/weather/${inpVal}`).then(res => res.json()).then(js => setWeather(js))
                }} className="search-icon" src="./src/photo/search.png" height="31px" width="31px"/>
            </div>
            <div className="temp">
                <img className="weathPhoto" src={weather ? "./src/photo/cloudy.png" : "./src/photo/download3.gif"} height="94px" width="122px"/>
                <p className="grad">FF ° C</p>
                
            </div>
            <p className="weatherName"></p>
            <div>
                <p className="day">FFth Jun FF</p> 
            </div>
            
            <div className="data">
                <p className="dayWeek">Thurday</p>
                <p className="time">FF am</p>
            </div>
            <div className="param">
                <div className="wind">
                    <img src="./src/photo/wind-icon.png" height="20px" width="20px"/>
                    <p className="speedWind">Wind: FF km/h</p>
                </div>
                <div className="hum">
                    <img src="./src/photo/hum-icon.png" height="20px" width="20px"/>
                    <p className="humproc">Hum: FF%</p>
                </div>
            </div>
        </div>
    )
}

export default Weather;