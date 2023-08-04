import React from "react";
import './components/Btn.css'

function Btn(props){
    const isOperator = value => {
    return isNaN(value) && (value != '.') && (value != '=');
}

    return (
    <div
    className={`btn-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
        {props.children}
    </div>
    )
    
}

export default Btn;