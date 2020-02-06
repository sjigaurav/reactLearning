import React from 'react';
import ReactDOM from 'react-dom';

// function PortalDemo() {
 
//     return ReactDOM.createPortal(
//         <h1>
//             This is Portal demo. If we want to exclude this div outside root node, IN that case we use Portal.
//         </h1>
//     ), document.getElementById('portal-root')
// }

// export default PortalDemo


// It shoul be like above but unfortunatly getting some error. Not able o resolve this will look in to this later.

function PortalDemo() {
 
    return (
        <h3>
            This is Portal demo. If we want to exclude this div outside root node, IN that case we use Portal.
        </h3>
    )
}

export default PortalDemo