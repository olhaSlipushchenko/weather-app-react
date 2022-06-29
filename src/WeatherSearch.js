import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTempConversion from "./WeatherTempConversion";


export default function WeatherSearch(props){
  return (
    <div className="WeatherSearch">
    <h1>{props.data.city}</h1>
    <ul>
      <li> <FormattedDate date={props.data.currentDate} /></li>
      <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-1">
      <div className="col-6">
        <div className="clearfix">
          <WeatherIcon code={props.data.icon} size={55} />

           <WeatherTempConversion celsius={props.data.temperature} />


        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
        </ul>
      </div>
    </div>

    </div>


   ) ;
}