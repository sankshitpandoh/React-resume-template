import React from 'react';

function LeftSingleNav(props){
    return(
        <div onClick={props.handleClick} 
        style={{backgroundColor: `${props.active === props.activeValue ? "black" : "white" }` , color: `${props.active === props.activeValue ? "white" : "black" }`  }} 
        className="single-nav mb-2 pl-3 d-flex align-items-center">
           {props.innerText}
        </div>
    )
}

export default LeftSingleNav