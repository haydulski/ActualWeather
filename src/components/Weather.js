import React from 'react';
import './Weather.css'
const Weather = props => {

    return (
        <div className="weather">
            <h1>Weather in {props.data.id}:</h1>
            <div>Temperature: {props.data.temp} &#176;C</div>
            <div>Pressure: {props.data.press} hPa</div>
            <div>Wind speed: {props.data.wind} m/s</div>
        </div>
    );
}

export default Weather