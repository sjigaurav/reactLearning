import React, { Component } from 'react'
import $ from 'jquery';


//   react code here




export class EventBind extends Component {

    componentDidMount() {
        // Jquery here $(...)...
        const h1 = $('h1')
        $(".jquerySubmit").click(function(){
            alert("The paragraph was clicked.");
          });
        console.log(h1)
      }
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Please click here to event binding"
        }

        // Third Approach

       // this.eventHandling = this.eventHandling.bind(this)
    }

    // First second and third approach

    // eventHandling(){
    //     this.setState({
    //         message: "You have clicked for event handling"
    //     })
    // }

    //Fourth Approach
eventHandling = () => (
    
    this.setState({
        message : "You have clicked for event handling"
    })
)

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* First approach */}
                {/* <button onClick={this.eventHandling.bind(this)}>Click me for event binding</button> */}
                {/* Second Approach */}
                {/* <button onClick={() => this.eventHandling()}>Click me for event binding</button> */}
                {/* Third Approach & Fourth Approach */}
                <button onClick={this.eventHandling}>Click me for event binding</button><br/>
                <button className = 'jquerySubmit'>JqueySubmit</button>
            </div>
        )
    }
}

export default EventBind
