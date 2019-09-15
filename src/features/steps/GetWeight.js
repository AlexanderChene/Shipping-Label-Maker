import React from "react";
import SLMButton from '../../core/common/SLMButton'
import SLMfield from "../../core/common/SLMfield";
import "./step.css";
const getWeight = (props) =>{
    return <div className="stepBox">
        <p>Enter Weight</p>
        <SLMfield fieldLabel={"Weight*"} fieldType={"double"} onChange={props.changeWeight} value={props.wizardContext.weight} rule={"Weight should be a number"}/>
        <div className="bottom-section">
        <SLMButton buttonLabel={"prev"} onClick={props.goToPrev}/>
        <SLMButton buttonLabel={"next"} onClick={props.goToNext}/>
        </div>
    </div>
}

export default getWeight;