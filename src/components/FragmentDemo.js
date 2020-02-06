import React from 'react'

function FragmentDemo() {
    return (
        <React.Fragment>
           <h3> This is fragment component and we are going to show you that how can we remove this extra generated div from DOM.</h3>
            <p>This is another para under div but we will change this div to fragment so that it will not show in DOM</p>
        </React.Fragment>
    )
}

export default FragmentDemo
