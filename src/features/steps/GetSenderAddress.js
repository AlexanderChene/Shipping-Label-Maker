import React from "react";
import SLMButton from '../../core/common/SLMButton'
import SLMfield from '../../core/common/SLMfield'
import "./step.css";
const getSenderAddress = (props) =>{
    return <div className="stepBox">
        <p>Enter the Sender's Address</p>
        <SLMfield fieldLabel={"Name*"} fieldType={"text"} value={props.wizardContext.from.name} onChange={props.changeSenderName} /><br/>
        <SLMfield fieldLabel={"Street"} fieldType={"text"} value={props.wizardContext.from.street} onChange={props.changeSenderStreet}/><br/>
        <SLMfield fieldLabel={"City"} fieldType={"text"} value={props.wizardContext.from.city} onChange={props.changeSenderCity}/><br/>
        <SLMfield fieldLabel={"State"} fieldType={"state"} value={props.wizardContext.from.state} onChange={props.changeSenderState}/><br/>
        <SLMfield fieldLabel={"Zip"} fieldType={"zip"} value={props.wizardContext.from.zip} onChange={props.changeSenderZip} rule={"Zip number is 5 digit integer"}/><br/>
        <div className="bottom-section">
        <SLMButton buttonLabel={"prev"} onClick={props.goToPrev}/>
        <SLMButton buttonLabel={"next"} onClick={props.goToNext}/>
        </div>
    </div>
}

export default getSenderAddress;