import React from "react";

function setImage (weath) {
        const sunny = ['clear', 'overcast' , 'sunny'];
        const cloudy = ['cloudy' , 'partly cloudy'];
        const rainy = ['patchy rain nearby', 'light drizzle', 'light rain', 'moderate rain', 'light freezing rain', 'light rain shower', 'rain'];
        const foggy = ['haze', 'mist', 'freezing fog'];
        const snow = ['heavy snow', 'moderate snow', 'light snow', 'freezing drizzle', 'snow', 'light snow shower', 'blowing snow', 'snow shower'];
        if (sunny.includes(weath.description.toLowerCase())) {
            return (
                <div className="temp">
                    <img className="weathPhoto" src="./src/photo/icons/Sunny.png" height="94px" width="94px"/>
                    <p className="grad">{weath.temperature}</p>
                </div>
                
            )
        }
        else if (cloudy.includes(weath.description.toLowerCase())) {
            return (
                <div className="temp">
                    <img className="weathPhoto" src="./src/photo/icons/Cloudy.png" height="94px" width="122px"/>
                    <p className="grad">{weath.temperature}</p>
                </div>
            )
        }
        else if (rainy.includes(weath.description.toLowerCase())) {
            return (
                <div className="temp">
                    <img className="weathPhoto" src="./src/photo/icons/Rainy1.png" height="94px" width="122px"/>
                    <p className="grad">{weath.temperature}</p>
                </div>
            )
        }
        else if (foggy.includes(weath.description.toLowerCase())) {
            return (
                <div className="temp">
                    <img className="weathPhoto" src="./src/photo/icons/Fog.png" height="94px" width="122px"/>
                    <p className="grad">{weath.temperature}</p>
                </div>
            )
        }
        else if (snow.includes(weath.description.toLowerCase())) {
            return (
                <div className="temp">
                    <img className="weathPhoto" src="./src/photo/icons/Snow.png" height="94px" width="122px"/>
                    <p className="grad">{weath.temperature}</p>
                </div>
            )
        }
        else {
            return (
                <div className="temp">
                    <img className="weathPhoto" src="./src/photo/error.png" height="94px" width="122px"/>
                    <p className="grad">Unknown</p>
                </div>
            )
        }
    }

export default setImage;