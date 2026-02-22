import React from "react";
import { useState, useEffect } from "react";
import setImage from "../functions/setImage";

function Weather () {
    const [val, setVal] = useState('');
    const [inpVal, setInpVal] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const d = new Date();

    async function fetchWeath(city) {
        if (!city.trim()) return
        setLoading(true);
        setErr(null);
        try {
            const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error(`Город "${city}" не найден. Проверьте название.`);
                } else {
                    throw new Error(`Ошибка сервера: ${response.status}`);
                }
            }
            const data = await response.json();

            if (data && Object.keys(data).length > 0) {
                setWeather(data);
            } else {
                throw new Error('Получены пустые данные от сервера');
            }

        } catch (e) {
            setErr(e.message);
            setWeather(null);
        } finally {
            setLoading(false);
        }
    }
    function searchBut () {
        fetchWeath(val)
    }
    function searchEnt (e) {
        if (e.key === 'Enter') {
            fetchWeath(val)
        }
    }
    return (
        <div className='weatherApp'>
            <div className="inp">
                <input onKeyPress={searchEnt} className="input" value={val} onChange={(e) => setVal(e.target.value)} type="text" autoComplete="off" placeholder="Введите город..."/>
                <img onClick={searchBut} className="search-icon" src="./src/photo/search.png" height="31px" width="31px"/>
            </div>
            {/* {Загрузка} */}
            {loading && (
                <div className="temp">
                    <img className="weathPhoto" src="./src/photo/download3.gif" height="94px" width="94px"/>
                    <p className="grad">Loading</p>
                </div>
            )}
            {/* {Ошибка} */}
            {err && (
                <div className="temp">
                    <img className="weathPhoto" src="./src/photo/error.png" height="94px" width="115px"/>
                    <p style={{ color: 'red', fontWeight: 'bold', fontSize: 20}}>{err}</p>
                </div>
            )}
            {!loading && !err && weather && (
                <>
                    {setImage(weather)}
                </>)}
            <p className="weatherName"></p>
            <div>
                <p className="day">{weather ? `${d.getDate()}.${d.getMonth() + 1 > 9 ? d.getMonth() + 1 : `0${d.getMonth() + 1}`}.${d.getFullYear()}` : 'FFth Jun FF'}</p> 
            </div>
            
            <div className="data">
                <p className="dayWeek">{weather ? days[d.getDay() - 1] : 'Unknown'}</p>
                <p className="time">{weather ? `${d.getHours()}:${d.getMinutes() > 9 ? d.getMinutes() : `0${d.getMinutes()}`}` : 'FF am'}</p>
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