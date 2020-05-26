import React from 'react';
import ReactWOW from 'react-wow';

function SingleExperience(props){
    return(
        <ReactWOW animation ='bounceInUp' delay = {props.loadingDelay} >
        <div className="col-lg-3 col-12">
            <div className={props.additionalClass}>
                <div className="single-experience d-flex flex-column">
                    <h2 className="mb-2">{props.jobRole}</h2>
                    <h2 className="mb-2"><span>{props.companyName}</span></h2>
                    <h4 className="mb-1">{props.duration}</h4>
                    <p className="mb-1"> - {props.jobDescription1}</p>
                    <p className="mb-1"> - {props.jobDescription2}</p>
                    <p className="mb-1"> - {props.jobDescription3}</p>
                </div>
            </div>
        </div>
    </ReactWOW>
    )
}

export default SingleExperience;