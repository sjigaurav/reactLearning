import React from 'react'

const WithAndWitoutJsx = () => {
    // return (
    // <div className="withJsx">
    //     <h2> This is JSX component</h2>
    // </div>
    // )
    return React.createElement(
        'div',
        {id: "withoutJsxId", className: "withoutJsxClass"}, //This paramenter will be null if we dont want to set any attribute and in earlier version class attribute was className
        React.createElement('h1', null, 'Without JSX component'))
}

export default WithAndWitoutJsx