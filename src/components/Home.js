import React from 'react'
import ControlledCarousel from './ControlledCarousel';
import image from '../carausalimage.png'
import imagePathSecond from '../HomePage.jpg'
function Home() {
    return (
        <React.Fragment>
        <ControlledCarousel imagePath = {image} imagePathSecond = {imagePathSecond}/>
        <h2>Home...</h2>
    </React.Fragment>
    )
}

export default Home
