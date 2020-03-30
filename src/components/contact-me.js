import React,{Component} from 'react'

export default function Contact_me(){
    return(
        <div class="container">
            <div class="col-12">
                <h3>Please be nice to me. Thanks</h3>
                <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
            </div>
        </div>
    )
}