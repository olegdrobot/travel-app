import React, { Component } from 'react';
import './HeaderCountry.css';

class HeaderCountry extends React.Component {
    constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
   }

  componentDidMount() {
      //----------------установить выбранный язык
      const key = {
                    en: 0,
                    ru: 1,
                    uk: 2
            };
      const selectedLang = localStorage.getItem('selectedLang'); 
      const select = document.getElementById('select');
      if(selectedLang != null){
          select.options[key[selectedLang]].selected = true;
      }
    }

  handleSelect(e){
    let str = e.target.value;
    localStorage.setItem('CountryHead Lang: ', str);
    this.props.selectlanguage(str);
    this.props.changeWeatherLang(str);
    this.props.changeClockLang(str);
    this.props.changeDateLang(str);
    this.props.changeCur(str);
  }

	render(){
		return(
			<section className = "header">
				<div className ="container">
          			<div className = "row">
          				<div className = "nav">
          					<div className = "logo"><a href = "/">Travel</a></div>
          					  <div className ="select">
                      		   	<select id="select" onChange = {this.handleSelect}>
                        			<option value="en">EN</option>
                        			<option value="ru">RU</option>
                        			<option value="uk">UK</option>
                      			</select>
                    		</div>	
					  	</div>
          			</div>
        		</div>
			</section>
		);
	}
}

export default HeaderCountry;