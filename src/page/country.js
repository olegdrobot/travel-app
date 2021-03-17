import React, { Component } from 'react';
import {Slide} from "../page/slide";
import { Player } from 'video-react';
import Weather from '../components/Weather';
import Clock from "../page/clock";
import Currency from '../components/Currency';
import countriesArr from '../images/countriesDB';
import Fullscreen from '../page/Fullscreen';
import MapBox from '../components/MapBox';
import videoArr from '../page/video';


import "../../node_modules/video-react/dist/video-react.css";
import './country.css';

const lang = 'en';
let cntr = [];
for(let key in countriesArr) {
  cntr.push(countriesArr[key]);
}

class Country extends React.Component {
  constructor(props){
    super(props);
 	    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
	
      this.clickLeft = this.clickLeft.bind(this);
      this.clickRight = this.clickRight.bind(this); 
      this.i = 0; 
      this.name = this.props.name;
  }
  clickLeft(){
  	let button_left = document.querySelector(".button_left");
  	 	this.i=this.i-1;
    if (this.i < 0) this.i = 0;
    	button_left.src = this.array[this.i];
 	}

	clickRight(){
  	let button_right = document.querySelector(".button_right");
  	  this.i=this.i+1;
    if (this.i < 0) this.i = 0;
    	button_right.src = this.array[this.i];
	}

	changeSlides(change) {
    	const length  = this.slides.length;  	
    	const prevSlide = this.state.activeSlide;
    	let activeSlide = prevSlide + change;
    	  if (activeSlide < 0) activeSlide = length - 1;
    	  if (activeSlide >= length) activeSlide = 0;
    	     this.setState({ activeSlide, prevSlide });
  }

  render(){
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };  

    return (
      <section className = "country">
      	<div className = "container">

      		<div className = "row">
            <div className = "text">
              <h4>{countriesArr[this.name].name[this.props.lang]}</h4>
              <h5>{countriesArr[this.name].capital[this.props.lang]}</h5>
            </div>

            <div className = "description">
      			  <div className = "country_img">
                <img src={countriesArr[this.name].image}/>
              </div>
      			  <div className = "country_inform">
                {countriesArr[this.name].description[this.props.lang]}
              </div>
            </div>
      		</div>

      		<div className = "row">
      		  <Slide country = {countriesArr[this.name]} lang = {this.props.lang}/>
      		</div>

      		<div className = "row">
            <div className = "video">
              <Player 
                playsInline
                poster = {countriesArr[this.name].videoImage}
                src={videoArr[this.name]}/>
            </div>
          </div>

      		<div className = "row">
      			<div className = "maps">
              <MapBox  country = {countriesArr[this.name]}/>
  
              <div className = "widget">
                <Weather lang = {this.props.lang} 
                         country = {countriesArr[this.name]}
                         carryWeatherFunc = {this.props.carryWeatherFunc}
                />
                <Clock carryClockFunc = {this.props.carryClockFunc}
                       lang = {this.props.lang} 
                />
                <Currency lang = {this.props.lang}
                          carryCurFunc = {this.props.carryCurFunc}
                />
              </div>
            </div>
      		</div>

      	</div>
      </section> 
    )
  }
}


export default Country;