import React from 'react';
import SingleEducation from './singleEducation';
import './stylesheets/reset.css';
import './stylesheets/education.css';

export default function Education(){
    return(
        <div className="container row">

            <SingleEducation 
                additionalClass = {"col-lg-10 col-12"}
                instituteName = {"Pandit DeenDayal Petroleum University"} 
                duration = {"2016 - 2020"} 
                education = {"Bachelor of Technology"} 
                courseName = {"Department of Industrial Engineering."} 
                cPI ={"7.2"} />

            <SingleEducation 
                additionalClass = {"col-lg-8 col-12"}
                instituteName = {"Ranbir Higher Secondary School"} 
                duration = {"2014 - 2016"} 
                education = {"Junior College"} 
                courseName = {"PCM with Computer Science."} 
                cPI ={"8.64"} />

            <SingleEducation 
                additionalClass = {"col-lg-6 col-12"}
                instituteName = {"St. Peter's High School"} 
                duration = {"2004 - 2014"} 
                education = {"High School"} 
                courseName = {"English, Social Studies, PCM with Computer Science."} 
                cPI ={"9.36"} />

        </div>
    )
}