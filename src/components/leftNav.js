import React from 'react';
import ReactWOW from 'react-wow';
import display_image from '../images/dp.png';
import LeftSingleNav from './leftSingleNav';

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
            <LeftSingleNav handleClick = {props.handleClick} active = {props.active} activeValue = {0} innerText = {"About Me"} />
          </ReactWOW>

          <ReactWOW animation="bounceInUp" delay='0.5s'>
            <LeftSingleNav handleClick = {props.handleClick1} active = {props.active} activeValue = {1} innerText = {"Experience"} />
          </ReactWOW>

          <ReactWOW animation="bounceInUp" delay='0.5s'>
            <LeftSingleNav handleClick = {props.handleClick2} active = {props.active} activeValue = {2} innerText = {"Education"} />
          </ReactWOW>

          <ReactWOW animation="bounceInUp" delay='0.5s'>
            <LeftSingleNav handleClick = {props.handleClick3} active = {props.active} activeValue = {3} innerText = {"Skills"} />
          </ReactWOW>

          <ReactWOW animation="bounceInUp" delay='0.5s'>
            <LeftSingleNav handleClick = {props.handleClick4} active = {props.active} activeValue = {4} innerText = {"Projects"} />
          </ReactWOW>

          <ReactWOW animation="bounceInUp" delay='0.5s'>
            <LeftSingleNav handleClick = {props.handleClick5} active = {props.active} activeValue = {5} innerText = {"Contact Me"} />
          </ReactWOW>

        </div>

      </div>
    )
}

export default LeftNav