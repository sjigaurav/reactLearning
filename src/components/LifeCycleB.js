import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : "Gaurav Kumar"
        }
        console.log(" LifeCycleB const");
    }

    static getDerivedStateFormProps(props, state){
        console.log(" LifeCycleB getDerivedStateFormProps")
        return null
    }

    componentDidMount(){
        console.log(" LifeCycleB componentDidMount")
    }

    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate")
    }
    
    render() {
        console.log(" LifeCycleB render")
        return (
                <h1>LifeCycleB</h1> 
        )
    }
}

export default LifeCycleB
