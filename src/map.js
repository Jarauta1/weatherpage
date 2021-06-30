import {Component} from "react";
import GoogleMapReact from "google-map-react";

import "./labelMap.css";

const Map = ({ text }) => <div><label className="label-map">{text}</label></div>;

class CityMap extends Component {
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
              //bootstrapURLKeys={{key: ""}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <Map
                lat={this.props.lat}
                lng={this.props.long}
                text={"Temp:"+this.props.temp+"ºC"}
              />
            </GoogleMapReact>
          </div>
        );
      }
}

export default CityMap;