import React, { Component } from 'react';
import Header from"../page/Header";
import Main from"../page/Main";
import Footer from"../page/Footer";

class Admin extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      searchString: '',  
    }
    this.setSearchString = this.setSearchString.bind(this);
   }

    setSearchString(str){
       console.log(str);
       this.setState({searchString: str});
   }

	render(){
		return(
        <div>
          <Header setSearchString = {this.setSearchString} selectLanguage = {this.props.selectlanguage}/>
          <Main chooseCountry = {this.props.chooseCountry} searchString = {this.state.searchString}
              lang = {this.props.lang}/>
          <Footer/>
        </div>
			
		);
	}
}

export default Admin;