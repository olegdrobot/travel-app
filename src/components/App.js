import React, { Component } from "react";
import Admin from '../containers/Admin';
import Genre from '../containers/Genre';


class App extends Component {
	constructor(){
		super();
		this.state = {
			nameCountry: '',
			countryWasChoosen: false,
			lang: 'en'
		}
		this.chooseCountry = this.chooseCountry.bind(this);
		this.goBack = this.goBack.bind(this);
		this.selectLanguage = this.selectLanguage.bind(this);
	}

	chooseCountry(country){
		this.setState({countryWasChoosen: true, nameCountry: country});
	}

	componentDidMount(){
		const selectedLang = localStorage.getItem('selectedLang'); 
		console.log('selectedLang ', selectedLang);
		if(selectedLang != null){
			this.setState({lang: selectedLang});
		}
	} 

	selectLanguage(selectedlang){
    	
    	this.setState({lang: selectedlang});
    	console.log("app ", this.state.lang);
    }

	goBack() {
		this.setState({countryWasChoosen: false, nameCountry: ''});
	}

    render() {
        return(
          <div>
            	{ this.state.countryWasChoosen ? <Genre name = {this.state.nameCountry} lang = {this.state.lang} selectlanguage = {this.selectLanguage} goBack={this.goBack}/> :
                		<Admin chooseCountry = {this.chooseCountry} selectlanguage = {this.selectLanguage} 
                		lang = {this.state.lang}/>
            	}
            </div>

        );
    }
}



export default App;