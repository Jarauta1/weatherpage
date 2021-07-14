import './cityCard.css';

import CityMap from "../cityMap/cityMap";
import GeneralMap from "../generalMap/generalMap";


function CityCard(props) {
  
  let showWeather = props.list.weather.map(weather=>{
    return(<>
      <div className="icon_details">
        <div className="icon">
          <div className="weather-icon">
            <img src={`https://openweathermap.org/img/w/${weather.icon}.png`} alt=""/>
          </div>
        </div>
        <h3>{weather.main}</h3>
        <p>{weather.description}</p>
      </div>
    </>)  
  })
 
  if (props.code === "200") {
    return (<>
      <div className="card__top">
        <div className="card__intro">
          <h1 className="card__title">{props.list.name}</h1>
          <div className="card__meta">
            <p>{props.list.sys.country}</p>
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
              <h2>{(props.list.main.temp-273.15).toFixed(1)}<span>&deg;</span></h2>
            </div>
            {showWeather}
          </div>
          <div className="weather-panel__cell">
            <p className="round">Wind speed <span className="weather-icon material-icons">air</span></p>
            <p>{props.list.wind.speed} km/h</p>
          </div>
          <div className="weather-panel__cell">
            <p className="round">Wind deg <span className="weather-icon material-icons">explore</span></p>
            <p>{props.list.wind.deg} &deg;</p>
          </div>
          <div className="weather-panel__cell">
            <p className="round">Pressure <span className="weather-icon material-icons">expand</span></p>
            <p>{(props.list.main.pressure/1000).toFixed(2)} bar</p>
          </div>
          <div className="weather-panel__cell">
            <p className="round">Humidity  <span className="weather-icon material-icons">invert_colors</span></p>
            <p>{props.list.main.humidity} %</p>
          </div>
          <div className="weather-panel__cell">
            <p className="round">Min ºC  <span className="weather-icon material-icons">ac_unit</span></p>
            <p>{(props.list.main.temp_min-273.15).toFixed(1)} &deg;</p>
          </div>
          <div className="weather-panel__cell">
            <p className="round">Max ºC <span className="weather-icon material-icons">local_fire_department</span></p>
            <p>{(props.list.main.temp_max-273.15).toFixed(1)} &deg;</p>
          </div>
        </div>       
      </div>
      <div className="card__options">
        <div className="card__options-cell" >
          <h3>Average Community<span className="material-icons">thermostat</span></h3>
        </div>
      </div>
      <div className="card__bottom">
        <div className="panel weather-panel">
          <div className="weather-panel__cell weather-panel__cell--main">
            <div className="temp_date">
              <h2>{props.average}<span>&deg;</span></h2>
            </div>
          </div>
        </div>       
      </div>
      <div className="card__options-map">
        <div className="card__options-mapCity">
          <div className="card__map">
            <div className="card__options-cell ubication" >
              <h3>UBICATION</h3>
            </div>
            <CityMap lat={props.list.coord.lat} long={props.list.coord.lon} temp={(props.list.main.temp-273.15).toFixed(1)} />
          </div>
        </div>
        <div className="card__options-mapSpain">
          <div className="card__map">
            <div className="card__options-cell allCities" >
              <h3>ALL CITIES</h3>
            </div> 
            <GeneralMap cityInfo={props.andalucia} />
          </div>
        </div> 
      </div> 
    </>);
  } else {
    return(<>
      <h1>{props.message}</h1>
      <p>Error: {props.code}</p>
    </>)
  }
}

export default CityCard;
