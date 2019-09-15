import React from "react";
import SLMButton from '../../core/common/SLMButton'
import "./step.css";
const confirm = (props) =>{
    return <div className="stepBox">
        <h3>Confirm</h3>
        <p>Are you sure you want to print the shipping label?</p>
        <div className="bottom-section">
        <SLMButton buttonLabel={"prev"} onClick={props.goToPrev}/>
        <SLMButton buttonLabel={"Print"} onClick={props.onComplete} variant={"success"}/>
        </div>
    </div>
}

export default confirm;