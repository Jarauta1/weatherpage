import CityCard from '../../components/cityCard/cityCard';

function Weather(props) {
    return (<>
        <div className="card">
            <CityCard list={props.list} code={props.code} message={props.message} andalucia={props.andalucia} average={props.average} />
        </div>  
    </>);
}

export default Weather;
