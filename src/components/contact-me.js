import React from 'react';
import './stylesheets/font-awesome.min.css';
import '../fonts/fontface.css'
import './stylesheets/reset.css';
import './stylesheets/contact-me.css';

export default function ContactMe(){
    return(
        <div className="container">
            <div className="row">

                <div className="col-lg-7 order-lg-1 order-2 col-12 lead">
                    <p className="text-justify mb-4">
                        Have a project for me? Think I'd be a good fit for your team ?
                         <span> I'd love to hear from you, </span> give me a shout by using
                        the form below.
                    </p>
                    <form name="contact" method="post">
                        <input type="hidden" name="form-name" value="contact" required/>


                        <input className="col-lg-12 mb-3" placeholder="Name" type="text" name="name"/>

                        <input className="col-lg-12 mb-3" placeholder="Email" type="email" name="email"/>
                        <input className="col-lg-12 mb-3" placeholder="Subject" type="text" name="subject"/>

                        <textarea className="col-lg-12 mb-3" placeholder="Message" name="message"/>
                        
                        <button className="submit-btn" type="submit">Send</button>
                        
                     </form>
                </div>
                <div className="col-lg-5 order-lg-2 order-1 col-12 d-flex flex-column justify-content-center">
                    <div className="contact-info d-flex flex-column justify-content-center">
                        <h3>Is it me you are looking for ?</h3>
                        <div className="d-flex social-links mb-3">
                            <a className="mr-4" href="https://github.com/sankshitpandoh" target="_blank" rel="noopener noreferrer" >
                                <i className="fa fa-github"></i>
                            </a>
                            <a className="mr-4" href="https://www.linkedin.com/in/sankshit-pandoh/" target="_blank" rel="noopener noreferrer" >
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a className="mr-4" href="https://www.instagram.com/sankshitpandoh/" target="_blank" rel="noopener noreferrer" >
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a className="mr-4" href="https://www.facebook.com/sankshit.pandoh.5" target="_blank" rel="noopener noreferrer" >
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a className="mr-4" href="https://music.apple.com/profile/sankshit" target="_blank" rel="noopener noreferrer" >
                            <i class="fa fa-music"></i>
                            </a>
                            <a className="mr-4" href="https://open.spotify.com/user/sankshit02pandoh.sp?si=vXo07NjQQuyNetOkCMIUtw" target="_blank" rel="noopener noreferrer" >
                            <i class="fa fa-spotify"></i>
                            </a>
                        
                        </div>
                        <h3>Email: <a className="mail" href="mailto:sankshit02pandoh.sp@gmail.com"><span>sankshit02pandoh.sp@gmail.com</span></a></h3>
                        <h3>Phone: <span>+91 7780866902</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}