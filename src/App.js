import './App.css';
import {useState,useEffect} from "react"
import "./header.css"
import { Link } from "react-router-dom";

function App() {

  /* Variables */

  let [list, setList] = useState([])
  let [code, setCode] = useState([])
  let [message, setMessage] = useState([])
  let [ciudad, setCiudad] = useState("almeria")
  let [average, setAverage] = useState(0)

  /* Get data from api */
  
  useEffect(function(){
    fetch(`http://localhost:3001/weather/${ciudad}`).then((res)=>res.json()).then((server)=>{
   
      setList(server.data.list)
      setCode(server.data.cod)
      setMessage(server.data.message)    

    })

    fetch(`http://localhost:3001/weather/average`).then((res)=>res.json()).then((server)=>{
   
         setAverage(server.average)

    })


},[ciudad])

function almeria() {
  setCiudad("almeria")
}
function cadiz() {
  setCiudad("cadiz")
}
function cordoba() {
  setCiudad("cordoba")
}
function granada() {
  setCiudad("granada")
}
function huelva() {
  setCiudad("huelva")
}
function jaen() {
  setCiudad("jaen")
}
function malaga() {
  setCiudad("malaga")
}
function sevilla() {
  setCiudad("sevilla")
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
          <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18063.645919365044!2d${city.coord.lon}!3d${city.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUwJzI5LjAiTiAywrAyNyc0Ni40Ilc!5e0!3m2!1ses!2ses!4v1624316625877!5m2!1ses!2ses`} className="map" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  </>)
})
 
if (code === "200") {
  return (<>
  <section className="header-section">
               
                <input className="menu-header-btn" type="checkbox" id="menu-header-btn"/>
                <label className="menu-header-icon" htmlFor="menu-header-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu-header">
                    <li>
                        <div onClick={almeria} className="header-camisetas" to="/camisetas"><a>Almeria</a></div>
                    </li>
                    <li>
                        <div onClick={cadiz} className="header-comics" to="/comics"><a>Cadiz</a></div>
                    </li>
                    <li>
                        <div onClick={cordoba} className="header-libros" to="/libros"><a>Cordoba</a></div>
                    </li>
                    <li>
                        <div onClick={granada} className="header-peliculas" to="/peliculas"><a>Granada</a></div>
                    </li>
                    <li>
                        <div onClick={huelva} className="header-zapatillas" to="/zapatillas"><a>Huelva</a></div>
                    </li>
                    <li>
                        <div onClick={jaen} className="header-zapatillas" to="/zapatillas"><a>Jaen</a></div>
                    </li>
                    <li>
                        <div onClick={malaga} className="header-zapatillas" to="/zapatillas"><a>Malaga</a></div>
                    </li>
                    <li>
                        <div onClick={sevilla} className="header-zapatillas" to="/zapatillas"><a>Sevilla</a></div>
                    </li>
                   
                </ul>
            </section>
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
