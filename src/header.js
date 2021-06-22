import { useState, useEffect } from "react";
import { BrowswerRoute, Router, Link } from "react-router-dom";
import "./header.css"
import logo from "../Imagenes/logo_header_blanco.png"

function Header(props) {

    let [usuario, setUsuario] = useState(props.usuario)
    let [datos,setDatos] = useState([])
    let [cesta,setCesta] = useState(0)
    let [ciudad, setCiudad] = useState("almeria")

    function almeria() {
        setCiudad("almeria")
    }

    useEffect(function(){
  
        if (usuario !== "") {
        fetch("http://localhost:3000/usuarios/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({usuario: usuario}),
            }).then((res)=>res.json()).then((res)=>{
                setDatos(res.datos[0].cesta)
                setCesta(datos.length)
            })
          }
      },[usuario])


   
        return(<BrowswerRoute>
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
                        <div className="header-comics" to="/comics"><a>Cadiz</a></div>
                    </li>
                    <li>
                        <div className="header-libros" to="/libros"><a>Cordoba</a></div>
                    </li>
                    <li>
                        <div className="header-peliculas" to="/peliculas"><a>Granada</a></div>
                    </li>
                    <li>
                        <div className="header-zapatillas" to="/zapatillas"><a>Huelva</a></div>
                    </li>
                    <li>
                        <div className="header-zapatillas" to="/zapatillas"><a>Jaen</a></div>
                    </li>
                    <li>
                        <div className="header-zapatillas" to="/zapatillas"><a>Malaga</a></div>
                    </li>
                    <li>
                        <div className="header-zapatillas" to="/zapatillas"><a>Sevilla</a></div>
                    </li>
                   
                </ul>
            </section>
        </BrowswerRoute>)
  
}

export default Header;