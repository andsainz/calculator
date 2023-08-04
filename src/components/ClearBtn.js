import React from "react";
import '../stylesheets/ClearBtn.css'

const ClearBtn = (props) => (
<div className="btn-clear">
    {props.children}
</div>
)

export default ClearBtn;