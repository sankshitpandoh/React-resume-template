import React,{Component} from 'react';
import './stylesheets/education.css';
import ReactWOW from 'react-wow';

export default function Education(){
    return(
        <ReactWOW animation ='bounceInLeft'>
        <div class="container">

            <div class="col-12 single-ed p-3 mb-5">
                <div class="top d-flex justify-content-between">
                    <div class="top-left d-flex flex-column">
                        <h2>Pandit DeenDayal Petroleum University</h2>
                        <p>Bachelor of Technology in Industrial Engineering</p>
                    </div>
                    <div class="time-span">
                        <h2>
                            2016 - 2020
                        </h2>
                    </div>
                </div>
                <div class="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur 
                    in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla 
                    commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. 
                    Morbi dapibus porta quam laoreet placerat. 
                    </p>
                </div>
            </div>

            <div class="col-12 single-ed p-3 mb-5">
                <div class="top d-flex justify-content-between">
                    <div class="top-left d-flex flex-column">
                        <h2>Ranbir Higher Secondary School</h2>
                        <p>Junior College</p>
                    </div>
                    <div class="time-span">
                        <h2>
                            2014 - 2016
                        </h2>
                    </div>
                </div>
                <div class="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur 
                    in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla 
                    commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. 
                    Morbi dapibus porta quam laoreet placerat. 
                    </p>
                </div>
            </div>
            
            <div class="col-12 single-ed p-3 mb-5">
                <div class="top d-flex justify-content-between">
                    <div class="top-left d-flex flex-column">
                        <h2>St. Peter's High School</h2>
                        <p>High School</p>
                    </div>
                    <div class="time-span">
                        <h2>
                            2004 - 2014
                        </h2>
                    </div>
                </div>
                <div class="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur 
                    in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla 
                    commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. 
                    Morbi dapibus porta quam laoreet placerat. 
                    </p>
                </div>
            </div>

        </div>
        </ReactWOW> 
    )
}