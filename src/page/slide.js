import React, { Component } from 'react';
import {useState, useEffect} from "react"
import "../page/slide.css"
import FullScreenComponent from '../page/reactFullscreen';

const style = {
  buttonImage: {
    border: 'none',
    outline: 'none',
    width: '100%',
    height: '100%',
    background: 'transparent',
    transition: 'all 1.2s ease-in-out',
  },
};

export function Slide(props) {
    
const img = props.country.showplaces
    .map((item, key) => {
        return(
            <FullScreenComponent>
                {({ ref, onToggle }) => (
                   <button style={style.buttonImage} onClick={() => onToggle()}>
                     <img
                      alt="Fullscreen"
                      ref={ref}
                      src={item.src}
                    />
                    <div className ="sight">{item.name[props.lang]}</div>
                   </button>
                )}
            </FullScreenComponent>
        )

    });

//console.log(fImg);
const [activeIndex, setActiveIndex] = useState(0);

const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1

const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

function next(){
    console.log('next');
        setActiveIndex((current) => {
           
            const res = current === img.length - 1 ? 0 : current + 1
           
            return res
        });
}

function prev(){
    console.log('prev');
    setActiveIndex((current) => {
            
            const res = current === 0 ? img.length - 1 : current - 1
           
            return res
    });
}

return (
    <div className = "gallery">

        <div className  = "button_left" onClick={prev}>
            <img src={require('../images/left-arrow.png')}/>
        </div>

        <div className="slider">
            <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
                {img[prevImgIndex]}
            </div>

            <div className = "wrapper__img" >
                <div className="zmdi_left" onClick={prev}></div>
                <div className="slider-img-img"
                    key={activeIndex}>
                    {img[activeIndex]}
                </div>
                <div className="zmdi_right" onClick={next}></div>
            </div>
      
            <div className="slider-img slider-img-next"
                key={nextImgIndex}>
                {img[nextImgIndex]}
            </div>
        </div>

        <div className  = "button_left" onClick={next}>
         <img src={require('../images/right-arrow.png')}/>
        </div>

    </div>
)
}

