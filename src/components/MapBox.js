import React from 'react'
import mapboxgl from 'mapbox-gl';
import './mapbox.css';

class MapBox extends React.Component {
  constructor(props){
    super(props);
    this.state={
      lon: 0,
      lat: 0
    }
    this.makeMap = this.makeMap.bind(this); 
  }

  componentDidMount(){
    let city = this.props.country.capital['en'];
    const URL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=83e81c607678e6ad27933345869edf2b&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      console.log("map: ", json.coord.lon);
      this.setState({
                lon: json.coord.lon,
                lat: json.coord.lat
              }, ()=>{
                    console.log("state ", this.state.lon, ' ', this.state.lat);
                    this.makeMap();
                  });
      
      });
    
  }

  makeMap() {
    let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
    mapboxgl.accessToken = 'pk.eyJ1Ijoib2xlZy1qIiwiYSI6ImNrbTlnYXdjODFob2wybm10enliNnpyc3gifQ.jIxl3w04j2yqWN1o_G22hA';
    let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.state.lon, this.state.lat],
    zoom: 9
    
    });

  }


  render() {
    return (
      <div id="map" className="map">
      </div>

    );
  }
}

export default MapBox;