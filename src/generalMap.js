import {Component} from "react";
import GoogleMapReact from "google-map-react";
import googleMapReact from "google-map-react";

const Map = ({ text }) => <div>{text}</div>;

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
          // Important! Always set the container height explicitly
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              //bootstrapURLKeys={{key: "AIzaSyCaNMzbWsUNOaq7ijNq9mhJ_LE9YosCkK0"}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <Map
                lat={this.props.cityInfo.almLat}
                lng={this.props.cityInfo.almLon}
                text={`Temp: ${(this.props.cityInfo.almTemp-273.15).toFixed(1)}ºC`}
              />
              <Map
                lat={this.props.cityInfo.cadLat}
                lng={this.props.cityInfo.cadLon}
                text={`Temp: ${(this.props.cityInfo.cadTemp-273.15).toFixed(1)}ºC`}
              />
              <Map
                lat={this.props.cityInfo.corLat}
                lng={this.props.cityInfo.corLon}
                text={`Temp: ${(this.props.cityInfo.corTemp-273.15).toFixed(1)}ºC`}
              />
              <Map
                lat={this.props.cityInfo.graLat}
                lng={this.props.cityInfo.graLon}
                text={`Temp: ${(this.props.cityInfo.graTemp-273.15).toFixed(1)}ºC`}
              />
              <Map
                lat={this.props.cityInfo.hueLat}
                lng={this.props.cityInfo.hueLon}
                text={`Temp: ${(this.props.cityInfo.hueTemp-273.15).toFixed(1)}ºC`}
              />
              <Map
                lat={this.props.cityInfo.jaeLat}
                lng={this.props.cityInfo.jaeLon}
                text={`Temp: ${(this.props.cityInfo.jaeTemp-273.15).toFixed(1)}ºC`}
              />
              <Map
                lat={this.props.cityInfo.malLat}
                lng={this.props.cityInfo.malLon}
                text={`Temp: ${(this.props.cityInfo.malTemp-273.15).toFixed(1)}ºC`}
              />
              <Map
                lat={this.props.cityInfo.sevLat}
                lng={this.props.cityInfo.sevLon}
                text={`Temp: ${(this.props.cityInfo.sevTemp-273.15).toFixed(1)}ºC`}
              />
            </GoogleMapReact>
          </div>
        );
      }
}

export default GeneralMap;