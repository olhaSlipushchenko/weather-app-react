import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherSearch from "./WeatherSearch";




export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    
    setWeatherData({
      ready: true,
      city: response.data.name,
      currentDate: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
      icon: response.data.weather[0].icon,
    })

   ;
  }

  function search(){
    const apiKey = "4671b096c6152bed04ecae09023416fd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event){
    event.preventDefault();
    //search for a city--make the API call
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value); //update the city
    
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
          <input 
          type="search" 
          placeholder="Enter a city..." 
          className="form-control" 
          autoFocus="on"
          onChange={handleCityChange}
          />
          </div>
          <div className="col-3">
          <input 
          type="submit" 
          value="Search" 
          className="btn btn-primary w-100"
          />
    </div></div>
        </form>
        <WeatherSearch data={weatherData} />
       

    
      </div>
      );

  } else {
    search();

    return "Loading..."
  }


}