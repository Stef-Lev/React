
import React, { Component } from 'react';
const weather = require('./city-weather.json');

export class City extends Component {
    constructor(props) {
        super(props);
        this.state = { weather: {} }
    }

    getCities = () => {
        return weather.map((city, index) => {
            let { name, sys: { country }, weather: [{ main, description }], main: { temp_max, temp_min }, coord: { lon, lat } } = weather[index];
            return (
                <div className="Card">
                    <h1>{name}, {country}</h1>
                    <h2>{main}</h2>
                    <h3>{description.charAt(0).toUpperCase() + description.slice(1)}</h3>
                    <p>Min Temp: <strong>{Math.round(temp_min - 273.15)} °C</strong></p>
                    <p>Max Temp: <strong>{Math.round(temp_max - 273.15)} °C </strong></p>
                    <p>Location: <strong>{lat}, {lon}</strong></p>
                </div>
            )
        })
    }
    render() {
        return this.getCities();
    }

}

export default City;
