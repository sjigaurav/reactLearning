import React, { Component } from 'react'


class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    

    render() {

        // Fourth Approach = Short circuit operator

        return this.state.isLoggedIn && <div> Welcome Gaurav</div>

        // Third Aprroach = turnery operators

        // return(
        //     this.state.isLoggedIn ? (
        //         <div>Welcome Gaurav</div>
        //     ):(
        //         <div>Welcome Guest</div>
        //     )
        // )


        // Second Approach = element variables

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div> Welcome Gaurav</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )


        // First Approach = If else 

        // if(this.state.isLoggedIn == true) {
        //     return(
        //         <div> Welcome Gaurav</div>
        //     )
        // }else{
        //     return(
        //         <div> Welcome Guest </div>
        //     )
        // }
    }
}

export default UserGreeting
