import React, { Component } from 'react';
import './main.css';
import countriesArr from '../images/countriesDB';

let cntr = [];
for(let key in countriesArr) {
  cntr.push(countriesArr[key]);
}

const lang = 'en';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.clickCountry = this.clickCountry.bind(this); 
  }

  clickCountry(e){
    this.props.chooseCountry(e.target.getAttribute('data'));
  };

  render(){
    const searchCountry = this.props.searchString;
    console.log("lang ", this.lang);
    return (
      <section className = "main">
        <div className ="container">
          <div className = "row">

          {
            cntr.map((item,key)=>{
                    let country = item.name[this.props.lang].toLowerCase();
                    //console.log("beforeIf ", country.indexOf(searchCountry));
                    if(searchCountry == "" || country.indexOf(searchCountry)!= -1){
                      //console.log("map ", key);
                      return(
                      <div className = "cards-country" data={item.name['en']} onClick={this.clickCountry}>
                        <div className = "card"  data={item.name['en']} >
                          <img src={item.image} data={item.name['en']}/>
                        </div>
                        <div className = "inform" data={item.name['en']}>
                          <div className = "name-country" data={item.name['en']}>{item.name[this.props.lang]}</div>
                          <div className = "capital-country" data={item.name['en']}>{item.capital[this.props.lang]}</div>
                        </div>
                      </div>
                      )
                    } 
                  })
          }

              
          </div>
        </div>

      </section> 
    )
  }
}


export default Main;