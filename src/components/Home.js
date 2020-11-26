import React, { useEffect, useState } from 'react';
import './content.css';
import axios from 'axios';
import WeatherResult from './WeatherResult';

const Home = () => {
    const [allData, saveAllData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const fetchData = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const API_KEY = '86072c75cfff5ba93f0b5e5edc4c247f';
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`; //template strings
        const response = await axios({ method: 'GET', url: api });
        const weather = {
            city: response.data.name,
            temp: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            tempMax: response.data.main.temp_max,
            tempMin: response.data.main.temp_min,
            pressure: response.data.main.pressure,
            name: response.data.name,
            latitude: response.data.coord.lat,
            longitude: response.data.coord.lon,
            sunrise: response.data.sys.sunrise,
            sunset: response.data.sys.sunset,
            describe: response.data.weather[0].main,
            windSpeed: response.data.wind.speed,
            humidity: response.data.main.humidity,
        }
        saveAllData(weather);
        setIsLoading(true);
        console.log(response.data, allData);
    }

    return (
        <>
            <div className="main-container">
                <div className="search-container">
                    <form onSubmit={event => fetchData(event)}>
                        <label className="search-label">
                            <input className="search-bar" type="text" name="city" placeholder="Enter city..." />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                    <div>
                        {isLoading && <WeatherResult passWeatherDetails={allData} />}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home