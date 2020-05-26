import React from 'react';
import ReactWOW from 'react-wow';

function SingleEducation(props){
    return(
        <ReactWOW animation ="bounceInRight">
        <div className="col-12" className = {props.additionalClass}>
            <div className = "single-ed p-3 mb-3">
                <div className="top d-flex align-items-center">
                    <h2>{props.instituteName}</h2>
                    <span className="time ml-auto">{props.duration}</span>
                </div>
                <div className="content">
                    <p className="mb-1">
                        {props.education}
                    </p>
                    <p className="mb-1">
                        {props.courseName}
                    </p>
                    <p className="mb-1">
                    CPI:<span> {props.cPI}</span> 
                     </p>
                </div>
            </div>
        </div>
    </ReactWOW>
    )
}

export default SingleEducation;