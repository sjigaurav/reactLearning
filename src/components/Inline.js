import React from 'react'
import stylee from '.././appStyle.module.css'
function Inline() {

    const heading = {
        color: 'Green',
        fontSize: '72px'
    } 
    return (
        <div>
            <h1 className='error'>Error</h1>
            <h1 className={stylee.success}>Success</h1>
            <p style={heading}>Inline Css in component.</p>
        </div>                    
    )
}

export default Inline
