import React, { Component} from "react";
//import Header from '../Header'
import GetSenderAddress from '../../../features/steps/GetSenderAddress'
import GetReceiverAddress from '../../../features/steps/GetReceiverAddress'
import GetWeight from '../../../features/steps/GetWeight'
import Confirm from '../../../features/steps/Confirm'
import getShippingOption from "../../../features/steps/GetShippingOption";
import ProgressBar from '../ProgressBar';
import './wizard.css';
import Card from 'react-bootstrap/Card'


class Wizard extends Component {
    render() {
        let Step;
        switch (this.props.step) {
            case 1:
                Step = GetSenderAddress;
                break;
            case 2:
                Step = GetReceiverAddress;
                break;
            case 3:
                Step = GetWeight;
                break;
            case 4:
                Step = getShippingOption;
                break;
            case 5:
                Step = Confirm;
                break;
            default:
                Step = null;
                break;
        }
        return (<Card className="wizardBox" >
            <Card.Header as="h5" >Shipping Label Maker</Card.Header>
            <Card.Body>
            <ProgressBar step={this.props.step}/>
            <Step
                goToPrev={this.props.goToPrev} goToNext={this.props.goToNext}
                wizardContext={this.props.wizardContext}
                changeSenderName={this.props.changeSenderName} changeSenderStreet={this.props.changeSenderStreet} changeSenderCity={this.props.changeSenderCity}
                changeSenderState={this.props.changeSenderState} changeSenderZip={this.props.changeSenderZip}
                changeReceiverName={this.props.changeReceiverName} changeReceiverStreet={this.props.changeReceiverStreet} changeReceiverCity={this.props.changeReceiverCity}
                changeReceiverState={this.props.changeReceiverState} changeReceiverZip={this.props.changeReceiverZip}
                changeWeight={this.props.changeWeight}
                changeShippingOption={this.props.changeShippingOption}
                onComplete={this.props.onComplete}
            />
        </Card.Body>
        </Card>)
    }
}

export default Wizard;