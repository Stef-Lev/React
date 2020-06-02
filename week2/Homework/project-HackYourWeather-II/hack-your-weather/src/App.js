import React, { useState } from 'react';
import './App.css';
import Loader from 'react-loader-spinner'

const key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY


function App() {

  const [weather, setWeather] = useState({})
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  function handleChange(e) {
    setCity(e.target.value)
  }

  function handleClick(e) {
    setLoading(true)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      .then(res => res.json())
      .then(data => {
        setWeather(data)
        setCity('')
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError(true)
      })
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return !error ? (
    <div className="App" >
      <CitySearch handleChange={handleChange} handleClick={handleClick} handleSubmit={handleSubmit} city={city} />
      {loading ? <Loader
        type="BallTriangle"
        color="#000000"
        height={200}
        width={200}
        timeout={3000} /> : <WeatherCard weather={weather} />}
    </div>
  ) : <h1>Something went wrong with your query!</h1>
}


function CitySearch({ handleChange, handleClick, handleSubmit, city }) {

  return (<form className='Form' onSubmit={handleSubmit}>
    <input onChange={handleChange} type='text' placeholder='Search City' value={city} name='city' />
    <button onClick={handleClick} id='search-btn'>Search</button>
  </form>)
}


function WeatherCard({ weather }) {

  return Object.keys(weather).length === 0 ? null : (<div className="Card">
    <h1>{weather.name}</h1>
    <h2>{weather.weather[0].main}</h2>
    <h3><em>{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</em></h3>
    <p>Min Temp: <strong>{Math.round(weather.main.temp_min - 273.15)} °C</strong></p>
    <p>Max Temp: <strong>{Math.round(weather.main.temp_max - 273.15)} °C </strong></p>
    <p>Location: <strong>{weather.coord.lat}, {weather.coord.lon}</strong></p>
  </div>)
}

export default App;
