import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

const progressBar = (props) =>{
    let now;
    let variant;
    switch(props.step){
        case 1:
            now=20;
            variant="info";
            break;
        case 2:
            now=40;
            variant="info";
            break;
        case 3:
            now=60;
            variant="info";
            break;
        case 4:
            now=80;
            variant="info";
            break;
        case 5:
            now=100;
            variant="success";
            break;
        default:
            now=0;
            break;

    }
    return <ProgressBar now={now} variant={variant}/>
}

export default progressBar;