import React, { Component } from "react";
import Wizard from '../../core/components/wizard/Wizard'
import ShippingLabel from './ShippingLabel'

class ShippingLabelMaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShippingInfo: {
                from: {
                    name: "",
                    street: "",
                    city: "",
                    state: '',
                    zip: ""
                },
                to: {
                    name: "",
                    street: "",
                    city: "",
                    state: "",
                    zip: ""
                },
                weight: "",
                shippingOption: ""
            },
            step: 1,
            isComplete: false
        }
    }
    goToPrev = () => {
        let step;
        if (this.state.step > 1) {
            step = this.state.step - 1;
            this.setState({
                step: step
            })
        }
    }

    goToNext = () => {
        if(this.checkRequiredField(this.state.step)!==true){
            return;
        }
        let step;
        if (this.state.step < 5) {
            step = this.state.step + 1;
            this.setState({
                step: step
            })
        }
    }

    checkRequiredField = (step) =>{
        let check=true;
        switch(step){
            case 1:
                if(this.state.ShippingInfo.from.name===""){
                    alert("Sender Name is required");
                    check = false;
                }
                break;
            case 2:
                if(this.state.ShippingInfo.to.name===""){
                    alert("Receiver Name is required");
                    check = false;
                }
                break;
            case 3:
                if(this.state.ShippingInfo.weight===""){
                    alert("Weight is required");
                    check = false;
                }
                break;
            case 4:
                if(this.state.ShippingInfo.shippingOption===""){
                    alert("Shipping Option is required");
                    check = false;
                }
                break;
            default:
                check=true;
                break;
        }
        return check;
    }

    changeSenderName = (value) => {
        let ShippingInfo = { ...this.state.ShippingInfo };
        ShippingInfo.from.name = value;
        this.setState({ ShippingInfo });
    }

    changeSenderStreet = (value) => {
        let ShippingInfo = { ...this.state.ShippingInfo };
        ShippingInfo.from.street = value;
        this.setState({ ShippingInfo });
    }

    changeSenderCity = (value) => {
        let ShippingInfo = { ...this.state.ShippingInfo };
        ShippingInfo.from.city = value;
        this.setState({ ShippingInfo });
    }

    changeSenderState = (value) => {
        console.log(value);
        let ShippingInfo = { ...this.state.ShippingInfo };
        ShippingInfo.from.state = value;
        this.setState({ ShippingInfo });
    }

    changeSenderZip = (value) => {
        let ShippingInfo = { ...this.state.ShippingInfo };
        ShippingInfo.from.zip = value;
        this.setState({ ShippingInfo });
    }

    changeReceiverName = (value) => {
        let ShippingInfo = { ...this.state.ShippingInfo };
        ShippingInfo.to.name = value;
        this.setState({ ShippingInfo });
    }

    changeReceiverStreet = (value) => {
        let ShippingInfo = { ...this.state.ShippingInfo };
        ShippingInfo.to.street = value;
        this.setState({ ShippingInfo });
    }

    changeReceiverCity = (value) => {
        let ShippingInfo = { ...this.state.ShippingInfo };
        ShippingInfo.to.city = value;
        this.setState({ ShippingInfo });
    }

    changeReceiverState = (value) => {
        let ShippingInfo = { ...this.state.ShippingInfo };
        ShippingInfo.to.state = value;
        this.setState({ ShippingInfo });
    }

    changeReceiverZip = (value) => {
        let ShippingInfo = { ...this.state.ShippingInfo };
        ShippingInfo.to.zip = value;
        this.setState({ ShippingInfo });
    }

    changeWeight = (value) => {
        let ShippingInfo = { ...this.state.ShippingInfo };
        ShippingInfo.weight = value;
        this.setState({ ShippingInfo });
    }

    changeShippingOption = (value) => {
        let ShippingInfo = { ...this.state.ShippingInfo };
        ShippingInfo.shippingOption = value;
        this.setState({ ShippingInfo });
    }

    onComplete = () => {
        let complete = !this.state.isComplete;
        this.setState({
            isComplete: complete
        })
    }
    render() {
        return (!this.state.isComplete ?
            (<Wizard
                wizardContext={this.state.ShippingInfo} step={this.state.step} goToPrev={this.goToPrev} goToNext={this.goToNext}
                changeSenderName={this.changeSenderName} changeSenderStreet={this.changeSenderStreet} changeSenderCity={this.changeSenderCity}
                changeSenderState={this.changeSenderState} changeSenderZip={this.changeSenderZip}
                changeReceiverName={this.changeReceiverName} changeReceiverStreet={this.changeReceiverStreet} changeReceiverCity={this.changeReceiverCity}
                changeReceiverState={this.changeReceiverState} changeReceiverZip={this.changeReceiverZip}
                changeWeight={this.changeWeight}
                changeShippingOption={this.changeShippingOption}
                onComplete={this.onComplete}
            />) :
            (<ShippingLabel wizardContext={this.state.ShippingInfo} />))
    }
}

export default ShippingLabelMaker;