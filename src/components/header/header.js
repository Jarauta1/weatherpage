import "./header.css"
import logo from "./assets/logo_influencity.png"

function Header(props) {

  return (<>
    <section className="header-section"> 
        
            <img src={logo} height="30" alt="Influencity"/>
        
        <input className="menu-header-btn" type="checkbox" id="menu-header-btn"/>
        <label className="menu-header-icon" htmlFor="menu-header-btn">
            <span className="navicon"></span>
        </label>
        <ul className="menu-header">
            <li>
                <div onClick={()=>props.handleOnClick("almeria")}><a>Almeria</a></div>
            </li>
            <li>
                <div onClick={()=>props.handleOnClick("granada")}><a>Granada</a></div>
            </li>
            <li>
                <div onClick={()=>props.handleOnClick("malaga")}><a>Málaga</a></div>
            </li>
            <li>
                <div onClick={()=>props.handleOnClick("jaen")}><a>Jaen</a></div>
            </li>
            <li>
                <div onClick={()=>props.handleOnClick("cordoba")}><a>Córdoba</a></div>
            </li>
            <li>
                <div onClick={()=>props.handleOnClick("sevilla")}><a>Sevilla</a></div>
            </li>
            <li>
                <div onClick={()=>props.handleOnClick("huelva")}><a>Huelva</a></div>
            </li>
            <li>
                <div onClick={()=>props.handleOnClick("cadiz")}><a>Cádiz</a></div>
            </li>           
        </ul>
    </section>
  </>);
}

export default Header;
