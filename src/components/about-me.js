import React from 'react';
import ReactWOW from 'react-wow'
import '../fonts/fontface.css'
import './stylesheets/reset.css';
import './stylesheets/about-me.css';

export default function AboutMe(){
    return(
        <div className="container">
            <div className="about-me">

                <div className="col-12 about-me-intro">

                    <ReactWOW animation ='rotateInUpRight'>
                    <h2>
                        Hey! I'm <span>Sankshit Pandoh</span>
                    </h2>
                    </ReactWOW>

                    <p className="text-justify">
                    Web Developer from Jammu, India.
                    Currently employed by Uplers where I work as a <span>Front-end developer</span>.
                    I have rich experience in developing <span> Front-end systems and writing application code</span>. 
                    Working with command lines and writing modules interest me. I aspire to become a full
                    stack developer in near future. I am a big <span>Sci-Fi</span> junkie and a firm believer of <span> Quantum immortality
                    and Simulation theory</span>.  
                    </p>

                </div>
            </div>
        </div>
    )
}