import React from 'react'
import ControlledCarousel from './ControlledCarousel';
import image from '../carausalimage.png'
function Home() {
    return (
        <React.Fragment>
        <ControlledCarousel imagePath = {image}/>
        <h2>Home...</h2>
    </React.Fragment>
    )
}

export default Home
