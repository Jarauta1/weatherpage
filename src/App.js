import './App.css';
import {useState,useEffect} from "react"

import Loader from './components/loader/loader'
import Header from './components/header/header';
import Weather from './pages/weather/weather';

function App() {

  /* Variables */

  let [loader, setLoader] = useState(false)
  let [list, setList] = useState([])
  let [code, setCode] = useState([])
  let [message, setMessage] = useState([])
  let [cityName, setCityName] = useState("almeria")
  let [average, setAverage] = useState(0)
  let [andalucia, setAndalucia] = useState([])

  /* Get data from api */
  
  useEffect(function(){
    fetch(`https://weather-page-server.herokuapp.com/weather/${cityName}`).then((res)=>res.json()).then((server)=>{
      setList(server.data.list)
      setCode(server.data.cod)
      setMessage(server.data.message)
      setLoader(true)  
    })
  },[cityName])
  
  useEffect(function(){
    fetch(`https://weather-page-server.herokuapp.com/weather/average`).then((res)=>res.json()).then((server)=>{
      setAverage(server.average)
      setAndalucia(server.cityInfo)
    })
  },[])

  const handleOnClick = (cityName) => {
    setCityName(cityName)
  }

  if (loader) {
    return(<>
      <Header handleOnClick={handleOnClick}/>
      <Weather list={list} code={code} message={message} andalucia={andalucia} average={average}/>
    </>);
  } else {
    return (<>
    <Loader />
    </>);
  }
}

export default App;