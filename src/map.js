import {Component} from "react";
import GoogleMapReact from "google-map-react";

import "./labelMap.css";

const Map = ({ text }) => <div><label className="label-map">{text}</label></div>;

class CityMap extends Component {
    static defaultProps = {
        center: {
          lat: this.props.lat,
          lng: this.props.long
        },
        zoom: 10
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