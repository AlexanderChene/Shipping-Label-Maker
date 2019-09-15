import React from "react";
import SLMButton from '../../core/common/SLMButton';
import SLMfield from "../../core/common/SLMfield";
import "./step.css";
const getShippingOption = (props) =>{
    return <div className="stepBox">
        <div>Enter Shipping Option</div>
        <SLMfield fieldLabel={"Shipping Option*"} fieldType={"radio"} onChange={props.changeShippingOption} value={props.wizardContext.shippingOption}/>
        <div className="bottom-section">
        <SLMButton buttonLabel={"prev"} onClick={props.goToPrev}/>
        <SLMButton buttonLabel={"next"} onClick={props.goToNext}/>
        </div>
    </div>
}

export default getShippingOption;