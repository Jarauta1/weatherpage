import {Component} from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ text }) => <div>{text}</div>;

class CityMap extends Component {
    static defaultProps = {
        center: {
          lat: 36.8414,
          lng: -2.4629
        },
        zoom: 11
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
                text={this.props.temp}
              />
            </GoogleMapReact>
          </div>
        );
      }
}

export default CityMap;