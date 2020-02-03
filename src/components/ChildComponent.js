import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick = {props.greetHandler}>Click Child Component</button> */}
            {/* when need to pass param from child to parent use arroe method */}
            <button onClick = {() =>props.greetHandler("Child")}>Click Child Component</button>
        </div>
    )
}

export default ChildComponent
