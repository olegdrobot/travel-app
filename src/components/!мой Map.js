import React, { Component } from 'react';
import '../page/country.css';




class Map extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		let m = document.querySelector('.dock-map');
		let mapOptions = {
   			center: [17.385044, 78.486671],
   			zoom: 1
		}
		console.log("m: ", m);
		
		let map = L.map(m, mapOptions);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
		
	}

	render(){
		return (
			<div className = "map">
				<div class="dock-map" id="map"></div>
			</div>
		);

	}
}

export default Map;