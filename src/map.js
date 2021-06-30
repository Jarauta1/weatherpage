import {Component} from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class CityMap extends Component {
    static defaultProps = {
        center: {
          lat: 36.8414,
          lng: -2.4629
        },
        zoom: 11
      };

      render() {
        console.log(this.props.lat, this.props.long)
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{key: "AIzaSyCaNMzbWsUNOaq7ijNq9mhJ_LE9YosCkK0"}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={this.props.lat}
                lng={this.props.long}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        );
      }
}

export default CityMap;