import React from 'react'
import ControlledCarousel from './ControlledCarousel';
import image from '../Carausal3.jpg'

function Users() {
    return (
        <React.Fragment>
            <ControlledCarousel imagePath={image}/>
            <h2>Users...</h2>
        </React.Fragment>
    )
}

export default Users
