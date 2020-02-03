import React from 'react'
import './myStyle.css'

function Stylesheet(props) {

    let className = props.primary ? 'primary' : 'primary-red'
    return (
        <div className={`${className} font-xl`}>
            My Name is Gaurav.
        </div>
    )
}

export default Stylesheet
