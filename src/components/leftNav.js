import React from 'react';
import ReactWOW from 'react-wow'
import display_image from '../images/dp.png';

function LeftNav(props){
    return(
        <div className="left-section col-lg-2 col-12 px-0">

        <ReactWOW animation ='bounceInUp'>
          <div className="intro d-flex flex-column align-items-center pt-3">
            <figure className="mb-3">
              <img src={display_image} alt="display image" ></img>
            </figure>
            <h2 className="mb-0">Sankshit Pandoh</h2>
            <p className="mb-2">"If you can't blow them away with your brilliance, Baffle them with your bullshit."</p>
          </div>
        </ReactWOW>

        <div className="nav-list my-3">
          <ReactWOW animation="bounceInUp" delay='0.5s'>
            <div onClick={props.handleClick} style={{backgroundColor: props.l0, color: props.c0}} className="single-nav mb-2 pl-3 d-flex align-items-center">About Me</div>
          </ReactWOW>
          <ReactWOW animation="bounceInUp" delay='0.7s'>
            <div onClick={props.handleClick1} style={{backgroundColor: props.l1, color: props.c1}} className="single-nav mb-2 pl-3 d-flex align-items-center">Experience</div>  
          </ReactWOW>
          <ReactWOW animation="bounceInUp" delay='0.9s'>
            <div onClick={props.handleClick2} style={{backgroundColor: props.l2, color: props.c2}} className="single-nav mb-2 pl-3 d-flex align-items-center">Education</div>
          </ReactWOW>
          <ReactWOW animation="bounceInUp" delay='1.1s'>
            <div onClick={props.handleClick3} style={{backgroundColor: props.l3, color: props.c3}} className="single-nav mb-2 pl-3 d-flex align-items-center">Skills</div>
          </ReactWOW>
          <ReactWOW animation="bounceInUp" delay='1.3s'>
            <div onClick={props.handleClick4} style={{backgroundColor: props.l4, color: props.c4}} className="single-nav mb-2 pl-3 d-flex align-items-center">Projects</div> 
          </ReactWOW>
          <ReactWOW animation="bounceInUp" delay='1.5s'>
            <div onClick={props.handleClick5} style={{backgroundColor: props.l5, color: props.c5}} className="single-nav mb-2 pl-3 d-flex align-items-center">Contact Me</div>
          </ReactWOW>  
        </div>

      </div>
    )
}

export default LeftNav