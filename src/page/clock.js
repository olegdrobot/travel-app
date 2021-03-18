import React, { Component } from "react";
import './clock.css';

const dataTime = {
    ru: "Дата и время",
    en: "Date and Time",
    uk: "Дата та час"
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.toOffsetDate(this.props.offset),
            date: '',
            currentLang: this.props.lang
        };
        this.date =  this.date.bind(this);
        this.changeLang = this.changeLang.bind(this);
        this.props.carryClockFunc(this.changeLang, this.date);
    }

    changeLang(lng){
        this.setState({currentLang: lng});
        console.log('clock ', lng);
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
        this.date(this.props.lang);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    toOffsetDate(offset) {
            let d = new Date(new Date().getTime() + (3600 * 1000));
        let hrs = d.getUTCHours();
        let mins = d.getUTCMinutes();
        let secs = d.getUTCSeconds();
        if (hrs<10){ hrs = '0'+ hrs;}
        if (mins<10){ mins = '0' + mins;}
        if (secs<10) {secs = '0' +secs;}

        return `${hrs}:${mins}:${secs}`;  
    }

    tick() {
        this.setState({
            time: this.toOffsetDate(this.props.offset)
        });
    }

    date(lang) {
        const currDate = new Date();
        const options = {
            day: 'numeric',
            month: 'long',
            weekday: 'long',

        }
        
        this.setState({date: currDate.toLocaleString(lang, options)});
        console.log(currDate.toLocaleString("ru", options) );
        console.log( currDate.toLocaleString("en", options) );
        console.log( currDate.toLocaleString("uk", options) );
    }

    render() {
        return (
            <div className="App-clock">
                <div className = "clock-text">{dataTime[this.state.currentLang]} </div>
                <div className = "clock-time">{this.state.time}</div>
                <div className = "clock-date">{this.state.date}</div>
            </div>
        );
    }
}

export default Clock;