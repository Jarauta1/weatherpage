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
                    <div onClick={()=>props.handleOnClick("almeria")}><p>Almeria</p></div>
                </li>
                <li>
                    <div onClick={()=>props.handleOnClick("granada")}><p>Granada</p></div>
                </li>
                <li>
                    <div onClick={()=>props.handleOnClick("malaga")}><p>Málaga</p></div>
                </li>
                <li>
                    <div onClick={()=>props.handleOnClick("jaen")}><p>Jaen</p></div>
                </li>
                <li>
                    <div onClick={()=>props.handleOnClick("cordoba")}><p>Córdoba</p></div>
                </li>
                <li>
                    <div onClick={()=>props.handleOnClick("sevilla")}><p>Sevilla</p></div>
                </li>
                <li>
                    <div onClick={()=>props.handleOnClick("huelva")}><p>Huelva</p></div>
                </li>
                <li>
                    <div onClick={()=>props.handleOnClick("cadiz")}><p>Cádiz</p></div>
                </li>           
            </ul>
        </section>
    </>);
}

export default Header;