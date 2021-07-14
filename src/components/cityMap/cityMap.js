import {Component} from "react";
import GoogleMapReact from "google-map-react";

import "./cityMap.css";

const Map = ({ text }) => <div><label className="label-map">{text}</label></div>;

class CityMap extends Component {
   
  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact center={{lat: this.props.lat, lng: this.props.long}} defaultZoom={7}>
          <Map center={{lat: this.props.lat, lng: this.props.long}} zoom={7} lat={this.props.lat} lng={this.props.long} text={"Temp:"+this.props.temp+"ºC"}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default CityMap;