import React, { Component } from 'react';
import HeaderCountry from "../page/HeaderCountry";
import Country from "../page/Country";
import Footer from "../page/Footer";

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

class Genre extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
       changeWeatherLang: function(){},
       changeClockLang: function(){},
       changeDateLang: function(){}, 
       changeCur: function(){}
    }
    this.carryWeatherFunc = this.carryWeatherFunc.bind(this);
    this.carryClockFunc = this.carryClockFunc.bind(this);
    this.carryCurFunc = this.carryCurFunc.bind(this);
   }

   carryCurFunc(func){
    this.setState({changeCur: func});
   }

  carryWeatherFunc(func){
    this.setState({changeWeatherLang: func});
  }

  carryClockFunc(func, funcDate){
    this.setState({changeClockLang: func, changeDateLang: funcDate});
  }
  
	render(){
		return(
        <div>
        <ScrollToTopOnMount />
          <HeaderCountry selectlanguage = {this.props.selectlanguage}
                         changeWeatherLang = {this.state.changeWeatherLang}
                         changeClockLang = {this.state.changeClockLang}
                         changeDateLang = {this.state.changeDateLang}
                         changeCur = {this.state.changeCur}

          />
          <Country name = {this.props.name} 
                   lang = {this.props.lang} 
                   carryWeatherFunc = {this.carryWeatherFunc}
                   carryClockFunc = {this.carryClockFunc}
                   carryCurFunc = {this.carryCurFunc}
          />
          <Footer/>
        </div>
			
		);
	}
}

export default Genre;