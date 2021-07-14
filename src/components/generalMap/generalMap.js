import {Component} from "react";
import GoogleMapReact from "google-map-react";

import "../cityMap/cityMap.css";

const Map = ({ text }) => 
  <div class="main-wrapper">
    <div class="signboard-wrapper">
      <div class="signboard">{text}</div>
      <div class="string"></div>
      <div class="pin pin1"></div>
      <div class="pin pin2"></div>
      <div class="pin pin3"></div>
    </div>
  </div>;

class GeneralMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.8833,
      lng: -4.4629
    },
    zoom: 7
  };

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <Map lat={this.props.cityInfo.almLat} lng={this.props.cityInfo.almLon} text={`${(this.props.cityInfo.almTemp-273.15).toFixed(1)}ºC`}/>
          <Map lat={this.props.cityInfo.cadLat} lng={this.props.cityInfo.cadLon} text={`${(this.props.cityInfo.cadTemp-273.15).toFixed(1)}ºC`}/>
          <Map lat={this.props.cityInfo.corLat} lng={this.props.cityInfo.corLon} text={`${(this.props.cityInfo.corTemp-273.15).toFixed(1)}ºC`}/>
          <Map lat={this.props.cityInfo.graLat} lng={this.props.cityInfo.graLon} text={`${(this.props.cityInfo.graTemp-273.15).toFixed(1)}ºC`}/>
          <Map lat={this.props.cityInfo.hueLat} lng={this.props.cityInfo.hueLon} text={`${(this.props.cityInfo.hueTemp-273.15).toFixed(1)}ºC`}/>
          <Map lat={this.props.cityInfo.jaeLat} lng={this.props.cityInfo.jaeLon} text={`${(this.props.cityInfo.jaeTemp-273.15).toFixed(1)}ºC`}/>
          <Map lat={this.props.cityInfo.malLat} lng={this.props.cityInfo.malLon} text={`${(this.props.cityInfo.malTemp-273.15).toFixed(1)}ºC`}/>
          <Map lat={this.props.cityInfo.sevLat} lng={this.props.cityInfo.sevLon} text={`${(this.props.cityInfo.sevTemp-273.15).toFixed(1)}ºC`}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default GeneralMap;