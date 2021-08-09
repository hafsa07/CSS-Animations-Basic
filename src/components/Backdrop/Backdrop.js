import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClasses = ['BackDrop' , props.show ? 'BackDropOpen' : 'BackDropClosed']
    return (
    <div className={cssClasses.join(' ')}></div>
    );
}

export default backdrop;