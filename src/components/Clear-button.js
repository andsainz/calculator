import React from 'react';
import '../style-sheet/Clear-button.css';

const ClearButton = (props) => (
<div className='clear-button' onClick={props.manageClear}>
    {props.children}
</div>
);



export default ClearButton;