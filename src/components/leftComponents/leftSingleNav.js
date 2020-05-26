import React from 'react';
import ReactWOW from 'react-wow';

function LeftSingleNav(props){
    return(
        <ReactWOW animation="bounceInUp" delay = {props.loadingDelay}>
        <div onClick={props.handleClick} 
        style={{backgroundColor: `${props.active === props.activeValue ? "black" : "white" }` , color: `${props.active === props.activeValue ? "white" : "black" }`  }} 
        className="single-nav mb-2 pl-3 d-flex align-items-center">
           {props.innerText}
        </div>
        </ReactWOW>    
    )
}

export default LeftSingleNav