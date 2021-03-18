import React, { Component } from 'react';
import './weather.css';

const currentTemp = {
    ru: "текущая темп.",
    en: "current temp.",
    uk: "поточна темп."
};

const highTemp = {
    ru: "максимальная темп.",
    en: "high temp.",
    uk: "максимальна темп."
};

const lowTemp = {
    ru: "мин. темп.",
    en: "low temp.",
    uk: "мін. темп."
};

const windSpeed = {
    ru: "скорость ветра",
    en: "wind speed",
    uk: "швидкість вітру"
};

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
     		weatherData: {},
     		weather: {},
     		iconUrl: '',
     		temp: '',
     		temp_max: '',
     		temp_min: '',
     		speed: '',
        currentlang: ''
   		};
    this.dataWeather = this.dataWeather.bind(this);
    this.props.carryWeatherFunc(this.dataWeather);
	}

	componentDidMount() {
    
    this.dataWeather(this.props.lang);
    /* работает
    const zip = "94303";
    const URL = "http://api.openweathermap.org/data/2.5/weather?q="+this.props.country.name['en']+"&lang="+this.props.lang+"&appid=83e81c607678e6ad27933345869edf2b&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      console.log('Weather: ', json.weather[0].description);
      this.setState({
      	weatherData: json, 
      	weather: json.weather[0],
      	iconUrl: "http://openweathermap.org/img/w/"+json.weather[0].icon+ ".png",
      	temp: json.main.temp,
      	temp_max: json.main.temp_max,
      	temp_min: json.main.temp_min,
      	speed: json.wind.speed
      });
    });
    */
  }

   dataWeather (lang) {
    this.setState({currentlang:lang});
    console.log('Weather lang: ', this.props.lang);
    const zip = "94303";
    const URL = "http://api.openweathermap.org/data/2.5/weather?q="+this.props.country.name['en']+"&lang="+lang+"&appid=83e81c607678e6ad27933345869edf2b&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      console.log('Weather: ', json.weather[0].description);
      this.setState({
        weatherData: json, 
        weather: json.weather[0],
        iconUrl: "http://openweathermap.org/img/w/"+json.weather[0].icon+ ".png",
        temp: json.main.temp,
        temp_max: json.main.temp_max,
        temp_min: json.main.temp_min,
        speed: json.wind.speed
      });
    });
    
  }

	render(){
		const weatherData = this.state.weatherData;

		return (
			<div className = "weather">
      			<div className = "weather-text"> {this.state.weather.description}</div>
      			<div className = "icons-img"><img src={this.state.iconUrl} /></div>
     				<div className = "icons-current"><img src={require('../images/icons-temperature.png')}/>{currentTemp[this.state.currentlang]}: {this.state.temp}°</div>
     				<div className = "temperature-high"><img src={require('../images/temperature-high.png')}/>{highTemp[this.state.currentlang]}: {this.state.temp_max}°</div>
     				<div className = "temperature-low"><img src={require('../images/temperature-low.png')}/>{lowTemp[this.state.currentlang]}: {this.state.temp_min}°</div>
     				<div className = "icons-wind"><img src={require('../images/icons-wind.png')}/> {windSpeed[this.state.currentlang]}: {this.state.speed} mi/hr </div>
			</div>
		);
	}
}

export default Weather;