import React, { Component } from 'react';
import './currency.css';

const pairCurrency = {
	en: ["EUR/EUR", "EUR/USD", "EUR/RUB"],
	ru: ["Евро/Евро", "Евро/Доллар", "Евро/Рубль"],
	uk: ["Євро/Євро", "Євро/Долар", "Євро/Рубль"]
}

const exchangeInfo = {
	en: "Currency exchange rates",
	ru: "Курсы валют",
	uk: "Курси валют"
}

class Currency extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			EUR_EUR: "",
			EUR_USD: "",
			EUR_RUB: "",
			currentLang: this.props.lang
		}
		this.changeLang = this.changeLang.bind(this);
		this.props.carryCurFunc(this.changeLang);
	}

	changeLang(lng){
        this.setState({currentLang: lng});
        
    }
	componentDidMount(){
		console.log("exch ", pairCurrency[this.props.lang][0]);
		const URL = 'https://v6.exchangerate-api.com/v6/764f83f91bc89361061e2535/latest/EUR';

		fetch(URL).then(res => res.json()).then(json => {
			console.log(json.conversion_rates['EUR'], json.conversion_rates['USD']);
            this.setState({
      			EUR_EUR: json.conversion_rates['EUR'], 
      			EUR_USD: json.conversion_rates['USD'],
      			EUR_RUB: json.conversion_rates['RUB']
      		});
    	});
	}

	render(){
		return(
			<div className = "App-currency">
				<div className = "currency-text">{exchangeInfo[this.state.currentLang]}</div>
				<div className = "currency">{pairCurrency[this.state.currentLang][0]}: {this.state.EUR_EUR}</div>
				<div className = "currency">{pairCurrency[this.state.currentLang][1]}: {this.state.EUR_USD}</div>
				<div className = "currency">{pairCurrency[this.state.currentLang][2]}: {this.state.EUR_RUB}</div>
			</div>

		);
	}
}

export default Currency;