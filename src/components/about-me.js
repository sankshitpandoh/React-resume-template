import React,{Component} from 'react';
import ReactWOW from 'react-wow'
import '../fonts/fontface.css'
import './stylesheets/reset.css';
import './stylesheets/about-me.css';

export default function About_me(){
    return(
        <div class="container">
            <div class="about-me">

                <div class="col-12 about-me-intro">

                    <ReactWOW animation ='rotateInUpRight'>
                    <h2>
                        Hey! I'm <span>Sankshit Pandoh</span>
                    </h2>
                    </ReactWOW>

                    <p class="text-justify">
                    Web Developer from Jammu, India.
                    Currently employed by Uplers where I work as a <span>Front-end developer</span>.
                    I have rich experience in developing <span> Front-end systems and writing apllication code</span>. 
                    Working with command lines and writing modules interest me. I aspire to become a full
                    stack developer in near future. I am a big <span>Sci-Fi</span> junkie and a firm believer of <span> Quantum immortality
                    and Simulation theory</span>.  
                    </p>

                </div>

                    {/* <div class="col-5 d-flex">
                        <ul class="d-flex flex-column">
                            <li class="mb-4"><strong>Age:</strong><span class="ml-3">21</span></li>
                            <li class="mb-4"><strong>Freelance:</strong><span class="ml-3">Available</span></li>  
                            <li class="mb-4"><strong>Home Town:</strong><span class="ml-3">Jammu, India</span></li>
                            <li class="mb-4"><strong>Current Address:</strong><span class="ml-3">Ahmedabad, Gujarat</span></li>
                        </ul>
                    </div> */}

            </div>
        </div>
    )
}