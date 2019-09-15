import React from "react";
import '../../core/components/wizard/wizard.css';
import Card from 'react-bootstrap/Card'
const shippingRate = 0.4;
const shippingOption = {
    ground: 1,
    priority: 2
}
const shippingLabel = (props) =>(
    <Card className="wizardBox">
    <Card.Header as="h5" >Final Shipping Label</Card.Header>
    <div className="finalLabel">
    <p>From:</p>
    <p style={{marginLeft: '40px'}}>Name: {props.wizardContext.from.name}</p>
    <p style={{marginLeft: '40px'}}>Street: {props.wizardContext.from.street}</p>
    <p style={{marginLeft: '40px'}}>City: {props.wizardContext.from.city}</p>
    <p style={{marginLeft: '40px'}}>State: {props.wizardContext.from.state}</p>
    <p style={{marginLeft: '40px'}}>Zip: {props.wizardContext.from.zip}</p>
    <p>To:</p>
    <p style={{marginLeft: '40px'}}>Name: {props.wizardContext.to.name}</p>
    <p style={{marginLeft: '40px'}}>Street: {props.wizardContext.to.street}</p>
    <p style={{marginLeft: '40px'}}>City: {props.wizardContext.to.city}</p>
    <p style={{marginLeft: '40px'}}>State: {props.wizardContext.to.state}</p>
    <p style={{marginLeft: '40px'}}>Zip: {props.wizardContext.to.zip}</p>
    <p>Weight: {props.wizardContext.weight}</p>
    <p>Price: {(props.wizardContext.weight*shippingRate*(parseInt(props.wizardContext.shippingOption)===shippingOption.ground?1:1.5)).toFixed(2)}</p>
    </div>
    </Card>
);

export default shippingLabel;