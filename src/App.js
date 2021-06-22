import './App.css';
import {useState,useEffect} from "react"

function App() {

  let [list, setList] = useState([])
  let [code, setCode] = useState([])
  let [message, setMessage] = useState([])
  
  useEffect(function(){
    fetch("https://weather-page-server.herokuapp.com/weather").then((res)=>res.json()).then((server)=>{
   
      setList(server.data.list)
      setCode(server.data.cod)
      setMessage(server.data.message)    
     
    })
 
},[])

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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                      <path d="M365.707 134.34c12.375 0 22.39-10.03 22.39-22.39V67.17c0-12.358-10.015-22.39-22.39-22.39-12.374 0-22.39 10.03-22.39 22.39v44.78c0 12.36 10.016 22.39 22.39 22.39zm87.01 248.787c24.478-23.122 39.868-55.736 39.868-92.054 0-70.052-56.812-126.878-126.878-126.878-42.108 0-79.336 20.6-102.413 52.184-14.822-4.658-30.48-7.405-46.855-7.405-83.308 0-151.24 65.036-156.255 147.09C24.435 374.752 0 412.114 0 455.268c0 61.84 50.11 111.95 111.95 111.95H410.49c53.587 0 97.023-43.438 97.023-97.024.002-38.408-22.433-71.35-54.794-87.07zm-87.01-174.15c45.273 0 82.098 36.824 82.098 82.097 0 14.94-4.21 28.854-11.24 40.914-17.613-36.347-54.243-61.737-97.023-63.125-9.853-12.494-21.66-23.33-34.795-32.347 15.016-16.808 36.69-27.54 60.96-27.54zm44.78 313.462H111.952c-37.032 0-67.17-30.14-67.17-67.172 0-25.062 13.853-47.87 36.153-59.514l22.405-11.718 1.538-25.24c3.612-58.902 52.617-105.04 111.563-105.04 34.435 0 66.468 15.612 87.918 42.824l12.897 16.375 20.838.672c36.406 1.18 64.932 30.614 64.932 67.006v29.84l27.555 11.493c19.524 8.15 32.152 27.077 32.152 48.23 0 28.808-23.435 52.243-52.244 52.243zm74.635-328.39c6.18 0 11.777-2.51 15.822-6.554l29.854-29.854c4.06-4.06 6.568-9.658 6.568-15.837 0-12.36-10.017-22.39-22.39-22.39-6.18 0-11.778 2.508-15.823 6.568L469.3 155.836c-4.06 4.045-6.568 9.643-6.568 15.823 0 12.358 10.016 22.39 22.39 22.39zm-254.667-6.554c4.06 4.045 9.658 6.553 15.837 6.553 12.36 0 22.39-10.032 22.39-22.39 0-6.18-2.507-11.778-6.567-15.838l-29.854-29.854c-4.044-4.045-9.642-6.553-15.82-6.553-12.36 0-22.39 10.03-22.39 22.39 0 6.18 2.507 11.777 6.567 15.823l29.838 29.868zm359.154 81.187h-44.78c-12.36 0-22.39 10.03-22.39 22.39s10.03 22.39 22.39 22.39h44.78c12.358 0 22.39-10.03 22.39-22.39s-10.03-22.39-22.39-22.39z"/>
                    </svg>
                  </div>
                  <p>{weather.description}</p>
                </div>
              </>)
            })}
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
      
      <div className="card__bottom">
          <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18063.645919365044!2d${city.coord.lon}!3d${city.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUwJzI5LjAiTiAywrAyNyc0Ni40Ilc!5e0!3m2!1ses!2ses!4v1624316625877!5m2!1ses!2ses`} className="map" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </>)
})
 
if (code === "200") {
  return (<>
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
