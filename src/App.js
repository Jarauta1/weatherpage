import './App.css';
import {useState,useEffect} from "react"

import { Link } from "react-router-dom";

import Header from './components/header/header';
import CityMap from './map';
import GeneralMap from './generalMap';

function App() {

  /* Variables */

  let [list, setList] = useState([])
  let [code, setCode] = useState([])
  let [message, setMessage] = useState([])
  let [cityName, setCityName] = useState("")
  let [ciudad, setCiudad] = useState("almeria")
  let [average, setAverage] = useState(0)
  let [andalucia, setAndalucia] = useState([])

  /* Get data from api */
  
  useEffect(function(){
    fetch(`https://weather-page-server.herokuapp.com/weather/${ciudad}`).then((res)=>res.json()).then((server)=>{
   
      setList(server.data.list)
      setCode(server.data.cod)
      setMessage(server.data.message)    

    })
    
  },[ciudad])
  
useEffect(function(){

  fetch(`https://weather-page-server.herokuapp.com/weather/average`).then((res)=>res.json()).then((server)=>{
 
       setAverage(server.average)
       setAndalucia(server.cityInfo)

  })

},[])

const handleOnClick = (cityName) => {
  console.log(cityName)
  /* setCiudad(cityName) */
}

let showData = list.map(city=>{
  return(<>
    <div className="card">
      <div className="card__top">
        <div className="card__intro">
          <h1 className="card__title">{city.name}</h1>
          <div className="card__meta">
            <p>{city.sys.country}</p>
          </div>
        </div>
        <div className="card__options">
          <div className="card__options-cell" >
            <h3>Weather</h3>
          </div>
        </div>
      </div>
      <div className="card__bottom">
        <div className="panel weather-panel">
          <div className="weather-panel__cell weather-panel__cell--main">
            <div className="temp_date">
              <h2>{(city.main.temp-273.15).toFixed(1)}<span>&deg;</span></h2>
            </div>
            {city.weather.map(weather=>{
              return(<>
                <div className="icon_details">
                  <div className="icon">
                    <div className="weather-icon"><img src={`https://openweathermap.org/img/w/${weather.icon}.png`}/></div>
                  </div>
                  <h3>{weather.main}</h3>
                  <p>{weather.description}</p>
                </div>
              </>)
            })}
          </div>
          <div className="weather-panel__cell">
            <p className="round">Average <span className="weather-icon material-icons">thermostat</span></p>
            <p>{average} &deg;</p>
          </div>
          <div className="weather-panel__cell">
            <p className="round">Wind speed <span className="weather-icon material-icons">air</span></p>
            <p>{city.wind.speed} km/h</p>
          </div>
          <div className="weather-panel__cell">
            <p className="round">Wind deg <span className="weather-icon material-icons">explore</span></p>
            <p>{city.wind.deg} &deg;</p>
          </div>
          <div className="weather-panel__cell">
            <p className="round">Pressure <span className="weather-icon material-icons">expand</span></p>
            <p>{(city.main.pressure/1000).toFixed(2)} bar</p>
          </div>
          <div className="weather-panel__cell">
            <p className="round">Humidity  <span className="weather-icon material-icons">invert_colors</span></p>
            <p>{city.main.humidity} %</p>
          </div>
          <div className="weather-panel__cell">
            <p className="round">Min ºC  <span className="weather-icon material-icons">ac_unit</span></p>
            <p>{(city.main.temp_min-273.15).toFixed(1)} &deg;</p>
          </div>
          <div className="weather-panel__cell">
            <p className="round">Max ºC <span className="weather-icon material-icons">local_fire_department</span></p>
            <p>{(city.main.temp_max-273.15).toFixed(1)} &deg;</p>
          </div>
        </div>       
      </div>
      <div className="card__options">
          <div className="card__options-cell" >
            <h3>UBICATION</h3>
          </div>
      </div>
      {/* Google Map with coordinates given by the API */}
      <div className="card__bottom">
            <CityMap lat={city.coord.lat} long={city.coord.lon} temp={(city.main.temp-273.15).toFixed(1)} />
      </div>
      <div className="card__options">
          <div className="card__options-cell" >
            <h3>ALL CITIES</h3>
          </div>
      </div>
      <div className="card__bottom">
            <GeneralMap cityInfo= {andalucia} />
      </div>
      
    </div>
  </>)
})
 
if (code === "200") {
  return (<>
    <Header handleOnClick={handleOnClick}/>
    {showData}
  </>);
} else {
  return(<>
  <h1>{message}</h1>
  <p>Error: {code}</p>
  </>)
}

}

export default App;
