import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : "Gaurav Kumar"
        }
        console.log("LifeCycleA const");
    }

    static getDerivedStateFormProps(props, state){
        console.log("LifeCycleA getDerivedStateFormProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name : 'GKDon'
        })
    }
    
    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <h1>LifeCycleA</h1> 
                <button onClick ={this.changeState} >Update</button>
                <LifeCycleB/>
            </div>
                
        )
    }
}

export default LifeCycleA
