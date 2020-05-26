import React from 'react';
import NameContainer from './name';
import LeftSingleNav from './leftSingleNav';

function LeftNav(props){
    return(
        <div className="left-section col-lg-2 col-12 px-0">

          <NameContainer name = {"Sankshit Pandoh"} quote = {"If you can't blow them away with your brilliance, Baffle them with your bullshit."} />

        <div className="nav-list my-3">

            <LeftSingleNav loadingDelay = {'0.5s'} handleClick = {props.handleClick} active = {props.active} activeValue = {0} innerText = {"About Me"} />
            <LeftSingleNav loadingDelay = {'0.7s'} handleClick = {props.handleClick1} active = {props.active} activeValue = {1} innerText = {"Experience"} />
            <LeftSingleNav loadingDelay = {'0.9s'} handleClick = {props.handleClick2} active = {props.active} activeValue = {2} innerText = {"Education"} />
            <LeftSingleNav loadingDelay = {'1.1s'} handleClick = {props.handleClick3} active = {props.active} activeValue = {3} innerText = {"Skills"} />
            <LeftSingleNav loadingDelay = {'1.3s'} handleClick = {props.handleClick4} active = {props.active} activeValue = {4} innerText = {"Projects"} />
            <LeftSingleNav loadingDelay = {'1.5s'} handleClick = {props.handleClick5} active = {props.active} activeValue = {5} innerText = {"Contact Me"} />
        </div>

      </div>
    )
}

export default LeftNav;