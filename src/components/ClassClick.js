import React, { Component } from 'react'

class ClassClick extends Component {
    
    clickHandler(){
        console.log("Clicked class event handler")
    }
    render() {
        return (
            <div>
                <p>This button will click and trigger a event hadler in Class component</p>
                <button onClick = {this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
