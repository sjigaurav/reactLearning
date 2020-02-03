import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName : '',
             topicName : ''
        }
    }

    handleChange = event =>{
        this.setState({
            userName : event.target.value
        })
    }

    topicChange = event =>{
        this.setState({
            topicName : event.target.value
        })
    }

    submitChange = event =>{
        alert(`${this.state.userName} and ${this.state.topicName    }`)
        event.prevantDefault() // it's not working
    }
    
    render() {
        const{userName, topicName} = this.state
        return (
            <form onSubmit={this.submitChange}>
                <div>
                    <label>User Name : </label>
                    <input type = 'text' value = {userName} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>Topic Name : </label>
                    <input type = 'textarea' value = {topicName} onChange={this.topicChange}></input>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
