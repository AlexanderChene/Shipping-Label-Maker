import React from "react";
import SLMButton from '../../core/common/SLMButton'
import SLMfield from '../../core/common/SLMfield'
import "./step.css";
const getReceiverAddress = (props) =>{
    return <div className="stepBox">
        <p>Enter the Receiver's Address</p>
        <SLMfield fieldLabel={"Name*"} fieldType={"text"} value={props.wizardContext.to.name} onChange={props.changeReceiverName} /><br/>
        <SLMfield fieldLabel={"Street"} fieldType={"text"} value={props.wizardContext.to.street} onChange={props.changeReceiverStreet}/><br/>
        <SLMfield fieldLabel={"City"} fieldType={"text"} value={props.wizardContext.to.city} onChange={props.changeReceiverCity}/><br/>
        <SLMfield fieldLabel={"State"} fieldType={"state"} value={props.wizardContext.to.state} onChange={props.changeReceiverState}/><br/>
        <SLMfield fieldLabel={"Zip"} fieldType={"zip"} value={props.wizardContext.to.zip} onChange={props.changeReceiverZip} rule={"Zip number is 5 digit integer"}/><br/>
        <div className="bottom-section">
        <SLMButton buttonLabel={"prev"} onClick={props.goToPrev}/>
        <SLMButton buttonLabel={"next"} onClick={props.goToNext}/>
        </div>
    </div>
}

export default getReceiverAddress;