import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from './images/image1.jpg'
import imageTwo from './images/image2.jpg'
import imageThree from './images/image3.jpg'
import imageFour from './images/image4.jpg'
import imageFive from './images/image5.jpg'
import imageSix from './images/image6.jpg'
import imageSeven from './images/image7.jpg'
import imageEight from './images/image8.jpg'
import imageNine from './images/image9.jpg'

const styleWhite = {color : 'white'};
const largeFont = {fontSize : 50};
//onst fonts = {font : 'Calibri'}

 class Photography extends Component {
  render() {


    return (
      
      <section id="photography"> 

      

<p></p>

<div className="legend" align="center" style={styleWhite, largeFont}>
  Check out my Photography!
    </div>
    <p></p>
    <p align="center"> Click on the image for the instagram link!</p>
    <p align="center"> Swipe left for more!</p>
   

      <Carousel>
        <a href="https://www.instagram.com/p/B6vH8SGgKOR/" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageOne)} />
        </a>
        <a href="https://www.instagram.com/p/B6rm2xBg0Pg/" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageTwo)} />
        </a>
        <a href="https://www.instagram.com/p/B3E2Lf1AEWq/" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageThree)} />
        </a>
        <a href="https://www.instagram.com/p/B3m3gfjgb5t/" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageFour)} />
        </a>
        <a href="https://www.instagram.com/p/B4sF-OyAWd4/" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageFive)} />
        </a>
        <a href="https://www.instagram.com/p/B4uIpJzAMmP/" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageSix)} />
        </a>
        <a href="https://www.instagram.com/p/B476Z0jA4aY/" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageSeven)} />
        </a>
        <a href="https://www.instagram.com/p/B-tlxu7AfdU/" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageEight)} />
        </a>
        <a href="https://www.instagram.com/p/B6TgFgsALtX/" title='Swipe sideways to scroll!'>
        <img alt="test" className="legend" src={(imageNine)} />
        </a>
        
        </Carousel>
        </section>
    );
  }
}

export default Photography;