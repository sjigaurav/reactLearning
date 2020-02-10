import React from 'react'
import ControlledCarousel from './ControlledCarousel';
import image from '../Carausal2.jpg'

function About() {
    return (
        <React.Fragment>
            <ControlledCarousel imagePath = {image} imagePathSecond={image}/>
            <h2>About...</h2>
        </React.Fragment>
        
    )
}

export default About
