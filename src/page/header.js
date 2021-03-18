import React, { Component } from 'react';
import './header.css';

const placeHold = {
     en: "Search here...",
     ru: "Поиск...",
     uk: "Пошук..."
};

const button = {
     en: "Search",
     ru: "Поиск",
     uk: "Пошук"
};

class Header extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        user:'',
        lang: 'en'
      };
    this.search = this.search.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

   }

    componentDidMount() {
      let inputSearch = document.getElementById('search');
      this.nameInput.focus();
      inputSearch.value = localStorage.getItem('user');
      inputSearch.addEventListener('input', ()=>{
        this.props.setSearchString(inputSearch.value)}); 
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
          this.setState({lang: selectedLang});
      }
    }

   search(){
    let str = document.getElementById('search').value;
    this.props.setSearchString(str);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.setSearchString(e.target.value);
    if(e.value != '') localStorage.setItem('user', e.target.value);
      console.log(localStorage.getItem('user'));
    }
  }

  handleSelect(e){
    let str = e.target.value;
    localStorage.setItem('selectedLang', str);
    this.props.selectLanguage(str);
    this.setState({lang: str});
  }

	render(){
		
    return(
      <section className = "header">
        <div className ="container">
          <div className = "row">
            <div className = "nav">
                <div className = "logo">Travel</div>
                <div className = "search-box">
                    <div className ="select">
                      <select id="select" onChange = {this.handleSelect}>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        <option value="uk">UK</option>
                      </select>
                    </div>
                    <div className = "search">
                      <input  id="search" name="user" placeholder={placeHold[this.state.lang]} 
                      type="search" ref={input => {this.nameInput = input;}} autocomplete="off" 
                      onKeyPress={this.handleKeyPress}  value={this.state.value} />
                      <button type="button" onClick={this.search}>{button[this.state.lang]}</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
		);
	}
}

export default Header;