import './Contact.css';
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Contact extends Component {
    render() {
        return (
            <div>
                <HeroContact></HeroContact>
            </div>
        )
    }
}

function HeroContact() {
    return (
        <Fade bottom>
        <div className="Hero-contact" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 cl-lg-6">
                        <div className="Image-hero-contact">
                            <img className="img-fluid" src="images/Herocontact.png"></img>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 cl-lg-6">
                        <div className="Form-contact">
                            <h1 className="Contact-title">Contact Us</h1>
                            <h3 className="Contact-subtitle">Questions, bug reports, feedback.</h3>
                        <form action="#">
                        <div class="mb-4">
                        <label for="exampleFormControlInput1" class="form-label">Your Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                        </div>
                        <div class="mb-4">
                        <label for="exampleFormControlTextarea1" class="form-label">Tell us what you need help with:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter a topic"></textarea>
                        </div>
                        <button name="" id="" class="btn btn-primary" type="submit">Send Now</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    )
}
export default Contact;