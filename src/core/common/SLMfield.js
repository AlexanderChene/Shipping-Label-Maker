import React, { Component } from 'react';
import Select from 'react-select';
import stateOptions from './DropdownOptions/stateOptions';
import './style/SLMfield.css';
class SLMfield extends Component {
    constructor(props) {
        super(props);
        let currStateOption = stateOptions.filter((elem) => {
            return elem.value === this.props.value;
        })

        let currentRadioOption = this.props.value;
        this.state = {
            selectedOption: currStateOption,
            radioOption: currentRadioOption
        };
    }

    handleStateChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        this.props.onChange(selectedOption.value);
    };

    handleRadioChange = (e) =>{
        this.setState({
            radioOption: e.target.value
        })
        this.props.onChange(e.target.value);
    }
    isInteger = (value) => {
        const regexp = new RegExp(`^-?[0-9]*$`);
        if (regexp.test(value)) {
            return true;
        } else {
            return false;
        }

    }

    inputOnChange = (e) => {
        let value = e.target.value;
        if (this.props.fieldType === 'zip') {
            if (value.length > 5) {
                return;
            }
            if (!this.isInteger(value)) {
                return;
            }
        }

        if (this.props.fieldType === 'Integer') {
            if (isNaN(value)) {
                return;
            }
            if (!this.isInteger(value)) {
                return;
            }
            value = value.replace(/^0+/, '');
        }

        if (this.props.fieldType === 'double') {
            if (isNaN(value)) {
                return;
            }
            value = value.replace(/^0+/, '');
        }

        this.props.onChange(value);
    }
    render() {

        if (this.props.fieldType === 'text' || this.props.fieldType === 'zip' || this.props.fieldType === 'Integer' || this.props.fieldType === 'double') {
            return (<div className="SLMInput">
                <span>{this.props.fieldLabel}</span> <input value={this.props.value} onChange={this.inputOnChange} />
                <div className="rule">{this.props.rule}</div>
            </div>)
        } else if (this.props.fieldType === 'state') {
            return <div className="SLMInput">
                <span>State:</span> <Select className="dropdown" options={stateOptions} onChange={this.handleStateChange} value={this.state.selectedOption} />
            </div>
        }else if(this.props.fieldType === 'radio'){
            
            return <div className="SLMRadio">
                <input type="radio" value={1} checked={parseInt(this.state.radioOption)===1} onChange={this.handleRadioChange}/>
                <span>Ground</span>
                <input type="radio" value={2} checked={parseInt(this.state.radioOption)===2} onChange={this.handleRadioChange}/>
                <span>Priority</span>
            </div>
        }
        return <div>Field</div>
    }
}

export default SLMfield;