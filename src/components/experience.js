import React,{Component} from 'react'
import ReactWOW from 'react-wow';
import './stylesheets/reset.css';
import './stylesheets/experience.css';

export default function Experience(){
    return(
        <div className="container">
            <div className="exp-cont d-flex">

          <ReactWOW animation ='bounceInUp' >
            <div className="col-lg-3 col-12">
                <div className="single-experience first d-flex flex-column">
                    <h2 class="mb-2">FrontEnd Developer</h2>
                    <h2 class="mb-2"><span>Uplers - Global MarTech Agency</span></h2>
                    <h4 class="mb-1">Jan,2020 - Present</h4>
                    <p>
                        More details later...
                    </p>
                </div>
            </div>
        </ReactWOW>

        <ReactWOW animation ="bounceInUp" delay='0.5s'>
            <div className="col-lg-3 col-12">
                <div className="single-experience second d-flex flex-column">
                    <h2 class="mb-2">React Developer</h2>
                    <h2 class="mb-2"><span>SportVot - Digital Streaming Service</span></h2>
                    <h4 class="mb-1">June,2019 - Nov,2019</h4>
                    <p class="mb-1"> // Played a major role in developing the working POC for the streaming platform </p>
                    <p class="mb-1"> // Integrated the <u> HLS streaming</u>  in the main framework</p>
                    <p class="mb-1"> // Developed the Front End layout for the Web version of the streaming website</p>
                </div>
            </div>
        </ReactWOW>

            <ReactWOW animation ="bounceInUp" delay='1s'>
                <div className="col-lg-3 col-12 d-flex flex-column">
                    <div className="single-experience third">
                        <h2 class="mb-2">Trainee</h2>
                        <h2 class="mb-2"><span>Netcamp Solutions Pvt. Ltd.</span></h2>
                        <h4 class="mb-1">June,2018 - July,2018</h4>
                        <p class="mb-1"> // Industrial Training on Network Management and Web Development with Android </p>
                        <p class="mb-1"> // Stint with Technologies like Red Hat Linux, MySQl, JavaScript, Advanced CSS and Android</p>
                        <p class="mb-1"> // Appeared amongst the <u>Top 10 participants</u> by the end of the Camp.</p>
                    </div>
                </div>
            </ReactWOW>

            <ReactWOW animation ="bounceInUp" delay='1.5s'>
                <div className="col-lg-3 col-12 d-flex flex-column">
                    <div className="single-experience fourth">
                        <h2 class="mb-2">Graphics Head</h2>
                        <h2 class="mb-2"><span>Position of Responsibilities</span></h2>
                        <h4 class="mb-1">Aug,2017 - May,2019</h4>
                        <p class="mb-1"> // Held the position of Design and Graphics head for <u> 'Flare' , PDPU's annual culture fest</u> and <u> 'Jharoka' , the literature club of PDPU</u> for two consecutive years</p>
                        <p class="mb-1"> // Designed and Published the annual college magazine, 'Flare it up'</p>
                        <p class="mb-1"> // Managed a team of 15 people to release our monthly newsletter for the literature club, 'Jharokha' </p>
                    </div>
                </div>
            </ReactWOW>

            </div>

        </div>
    )
}