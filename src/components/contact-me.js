import React,{Component} from 'react';
import '../fonts/fontface.css'
import './stylesheets/reset.css';
import './stylesheets/contact-me.css';

export default function Contact_me(){
    return(
        <div class="container">
            <div class="row">
                <div class="col-7 lead">
                    <p class="text-justify mb-4">
                        Have a project for me? Think I'd be a good fit for your team ?
                         <span> I'd love to hear from you, </span> give me a shout by using
                        the form below.
                    </p>
                    <form name="contact" method="post">
                        <input type="hidden" name="form-name" value="contact" required/>


                        <input class="col-12 mb-3" placeholder="Name" type="text" name="name"/>

                        <input class="col-12 mb-3" placeholder="Email" type="email" name="email"/>
                        <input class="col-12 mb-3" placeholder="Subject" type="text" name="subject"/>

                        <textarea class="col-12 mb-3" placeholder="Message" name="message"/>
                        
                        <button class="submit-btn" type="submit">Send</button>
                        
                     </form>
                </div>
            </div>
        </div>
    )
}