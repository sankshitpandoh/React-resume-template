import React,{Component} from 'react';
import display_img from '../images/pp.png';
import './stylesheets/reset.css';
import './stylesheets/about-me.css';

export default function About_me(){
    return(
        <div class="container d-flex">

            <div class="d-flex flex-column col-7">
                <div class="intro mb-5">
                    <h1>Sankshit Pandoh</h1>
                    <p>Web Developer</p>
                </div>
                <div class="description">
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>
            <div class="d-flex col-5 pt-2">
                <img src={display_img} ></img>
            </div>
        </div>
    )
}