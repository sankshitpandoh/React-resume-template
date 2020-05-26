import React from 'react';
import SingleExperience from './singleExperience'
import './stylesheets/reset.css';
import './stylesheets/experience.css';

export default function Experience(){
    return(
        <div className="container">
            <div className="exp-cont d-flex">

                <SingleExperience 
                 loadingDelay = {"0s"} 
                 additionalClass = {"first"}
                 jobRole = {"FrontEnd Developer"} 
                 companyName = {"Uplers - Global MarTech Agency"} 
                 duration ={"Jan,2020 - Present"} 
                 jobDescription1 = {"More details later ..."}
                 />

                <SingleExperience 
                 loadingDelay = {"0.5s"}
                 additionalClass = {"second"}
                 jobRole = {"React Developer"} 
                 companyName = {"SportVot - Digital Streaming Service"} 
                 duration ={"June,2019 - Nov,2019"} 
                 jobDescription1 = {" Played a major role in developing the working POC for the streaming platform "}
                 jobDescription2 = {" Integrated the *HLS streaming* in the main framework "}
                 jobDescription3 = {" Developed the Front End layout for the Web version of the streaming website "}
                 />

                <SingleExperience 
                 loadingDelay = {"1s"} 
                 additionalClass = {"third"}
                 jobRole = {"Trainee"} 
                 companyName = {"Netcamp Solutions Pvt. Ltd."} 
                 duration ={"June,2018 - July,2018"} 
                 jobDescription1 = {"Industrial Training on Network Management and Web Development with Android"}
                 jobDescription2 = {"Stint with Technologies like Red Hat Linux, MySQl, JavaScript, Advanced CSS and Android"}
                 jobDescription3 = {"Appeared amongst the *Top 10 participants* by the end of the Camp."}
                 />

                <SingleExperience 
                 loadingDelay = {"1.5s"} 
                 additionalClass = {"fourth"}
                 jobRole = {"Graphics Head"} 
                 companyName = {"Position of Responsibilities"} 
                 duration ={"Aug,2017 - May,2019"} 
                 jobDescription1 = {"Held the position of Design and Graphics head for *'Flare' , PDPU's annual culture fest* and  *'Jharoka' , the literature club of PDPU* for two consecutive years"}
                 jobDescription2 = {"Designed and Published the annual college magazine, 'Flare it up'"}
                 jobDescription3 = {"Managed a team of 15 people to release our monthly newsletter for the literature club, 'Jharokha'"}
                 />

            </div>

        </div>
    )
}