import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Clicked handler")
    }
    return (
        <div>
            {/* Never used peranthesis after clickHandler because using that it will be function call now it is function */}
           <p>This button will click and trigger a event hadler in function component</p>
            <button onClick={clickHandler}> Click </button> 
        </div>
    )
}

export default FunctionClick

