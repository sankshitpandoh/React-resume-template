import React from 'react';
import ReactWOW from 'react-wow';
import display_image from '../../images/dp.png';

function NameContainer(props){
    return(
        <ReactWOW animation ='bounceInUp'>

        <div className="intro d-flex flex-column align-items-center pt-3">
            <figure className="mb-3">
                <img src={display_image} alt="dp" ></img>
            </figure>
            <h2 className="mb-0">{props.name}</h2>
            <p className="mb-2">"{props.quote}"</p>
      </div>
      
      </ReactWOW>

    )
}

export default NameContainer;