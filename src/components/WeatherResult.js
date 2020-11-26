import React from 'react';
import './content.css';
const WeatherResult = (props) => {
    const { city, humidity, temp, name, latitude, longitude, sunrise, sunset, describe } = props.passWeatherDetails
    return (
        <div className="load-data">
            <div className="details">
                <h1>{temp} <sup>o</sup>F, {describe}</h1>
                <h3>{city, name}</h3>
            </div>
            <div className="information">
                <p>{humidity}</p>
            </div>
            <div className="coordinates">
                <p>({latitude},{longitude})</p>
            </div>
        </div>
    )
}
export default WeatherResult