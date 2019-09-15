import Button from 'react-bootstrap/Button'
import React,{Component} from 'react';
class SLMButton extends Component{
    render(){
        return <Button onClick={this.props.onClick} variant={this.props.variant}>{this.props.buttonLabel}</Button>
    }
} 

export default SLMButton;