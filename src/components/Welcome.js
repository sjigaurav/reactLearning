import React, { Component } from 'react'

class Welcome extends Component{
    // render(){
    // return <h1>This is State full class component ans {this.props.name} component</h1>
    // }

    // Destructuring of Props
    render(){
        const {status, name, heroName} = this.props
        return (
            <div>
                <h1>{name} a.k.a {heroName}</h1>
                <p>This is State full class component and {status} component</p>
            </div>
        )
    }
}

export default Welcome