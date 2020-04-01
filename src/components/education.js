import React,{Component} from 'react';
import ReactWOW from 'react-wow';
import './stylesheets/reset.css';
import './stylesheets/education.css';

export default function Education(){
    return(
        <div className="container row">

            <ReactWOW animation ="bounceInRight">
                <div className="col-lg-10 col-12">
                    <div className = "single-ed p-3 mb-3">
                        <div className="top d-flex align-items-center">
                            <h2>Pandit DeenDayal Petroleum University</h2>
                            <span className="time ml-auto">2016 - 2020</span>
                        </div>
                        <div className="content">
                            <p className="mb-1">
                                Bachelor of Technology
                            </p>
                            <p className="mb-1">
                                Department of Industrial Engineering.
                            </p>
                            <p className="mb-1">
                            CPI:<span> 7.2</span> 
                             </p>
                        </div>
                    </div>
                </div>
            </ReactWOW>

            <ReactWOW animation="bounceInRight" delay='0.5s'>
                <div className="col-lg-8 col-12">
                    <div className = "single-ed p-3 mb-3">
                        <div className="top d-flex align-items-center">
                            <h2>Ranbir Higher Secondary School</h2>
                            <span className="time ml-auto">2014 - 2016</span>
                        </div>
                        <div className="content">
                            <p className="mb-1">
                                Junior College
                            </p>
                            <p className="mb-1">
                                PCM with Computer Science.
                            </p>
                            <p className="mb-1">
                                CPI:<span> 8.64</span>
                            </p>
                        </div>
                    </div>
                </div>
            </ReactWOW>

            <ReactWOW animation="bounceInRight" delay='1s'>
                <div className="col-lg-6 col-12">
                    <div className = "single-ed p-3 mb-3">
                        <div className="top d-flex align-items-center">
                            <h2>St. Peter's High School</h2>
                            <span className="time ml-auto">2004 - 2014</span>
                        </div>
                        <div className="content">
                            <p className="mb-1">
                                High School
                            </p>
                            <p className="mb-1">
                                English, Social Studies, PCM with Computer Science.
                            </p>
                            <p className="mb-1">
                                CPI:<span> 9.36</span>
                            </p>
                        </div>
                    </div>
                </div>
            </ReactWOW>

        </div>
    )
}