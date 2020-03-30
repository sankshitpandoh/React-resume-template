import React,{Component} from 'react';
import './stylesheets/reset.css';
import './stylesheets/education.css';
import ReactWOW from 'react-wow';

export default function Education(){
    return(
        <ReactWOW animation ='bounceInUp'>
        <div class="container row">
            <div class="col-10">
                <div class = "single-ed p-3 mb-3">
                    <div class="top d-flex align-items-center">
                        <h2>Pandit DeenDayal Petroleum University</h2>
                        <span class="time ml-auto">2016 - 2020</span>
                    </div>
                    <div class="content">
                        <p class="mb-1">
                            Bachelor of Technology
                        </p>
                        <p class="mb-1">
                            Department of Industrial Engineering.
                        </p>
                        <p class="mb-1">
                            CPI:<span> 7.2
</span>                        </p>
                    </div>
                </div>
            </div>

            <div class="col-8">
                <div class = "single-ed p-3 mb-3">
                    <div class="top d-flex align-items-center">
                        <h2>Ranbir Higher Secondary School</h2>
                        <span class="time ml-auto">2014 - 2016</span>
                    </div>
                    <div class="content">
                        <p class="mb-1">
                            Junior College
                        </p>
                        <p class="mb-1">
                            PCM with Computer Science.
                        </p>
                        <p class="mb-1">
                            CPI:<span> 8.64</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-6">

                <div class = "single-ed p-3 mb-3">
                    <div class="top d-flex align-items-center">
                        <h2>St. Peter's High School</h2>
                        <span class="time ml-auto">2004 - 2014</span>
                    </div>
                    <div class="content">
                        <p class="mb-1">
                            High School
                        </p>
                        <p class="mb-1">
                            English, Social Studies, PCM with Computer Science.
                        </p>
                        <p class="mb-1">
                            CPI:<span> 9.36</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
        </ReactWOW>
    )
}