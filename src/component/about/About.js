import React, { Component } from "react";
import './About.css';
import Fade from 'react-reveal/Fade';

class About extends Component{
    render() {
        return(
            <div>
                <HeroAbout></HeroAbout>
                <ContentAbout></ContentAbout>
            </div>
        )
    }
}
function HeroAbout(){
    const Herotext = [ 
        <div>
          <h1 className="Hero-title mt-3">About Hugi</h1>
            <p className="Hero-subtitle">We free and empower consumers and families to confidently enjoy life online.</p>
            <a href="#" className="btn btn-primary py-3 px-5">Corporate Fact Sheet</a> 
        </div>
      ];
      const Heroimg = [
        <div className="images-hero position-relative">
          <img className="img-fluid rounded float-lg-end rounded mx-auto d-block" src="images/imageabouthero.png">     
          </img>
        </div>
      ];
    
      return (
        <Fade bottom>
        <div className="Hero-about" data-aos="fade-up">
            <div className="Bg-hero">
                <img className="images-bg-hero" src="images/bgabout.png"></img>
            </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 align-self-center">
               {Herotext}
              </div>
              <div className="col-12 col-md-6 col-lg-6 position-relative">
                    <div className="Bg-hero-image position-absolute top-100 start-50 translate-middle">
                        <img className="images-bg-hero " src="images/imageherobg.png"></img>
                    </div>
                {Heroimg}
                </div>
            </div>
          </div>
        </div>
        </Fade>
      );
}
function ContentAbout() {
    const title = [ 
        <div>
          <h1>What’s going on at Hugi ?</h1>
        </div>
      ];
     const Abouthugi = [{
       "title" : "Awards",
       "subtitle" : "See product evaluations from third-party analysts.",
       "date" : "8 September, 2019",
       "image" : "images/Aboutimage1.png"
     },
     {
      "title" : "Company",
      "subtitle" : "Access the latest press releases and other resources for the media.",
      "date" : "8 September, 2019",
      "image" : "images/Aboutimage2.png"
     },
     {
      "title" : "Works",
      "subtitle" : "Inclusion at McAfee is about the power of working together and creating a culture where all voices are valued.",
      "date" : "8 September, 2019",
      "image" : "images/Aboutimage3.png"
     }
    ];
    const Abouttask = Abouthugi.map((About) =>
    <div className="col-12 col-md-4 col-lg-4">
      <div className="card">
        <img className="img-fluid" src={About.image} />
        <div className="card-body">
          <h2 className="card-title">{About.title}</h2>
          <h5 className="card-subtitle">{About.subtitle}</h5>
          <h4 className="card-text">{About.date}</h4>
        </div>
      </div>   
    </div>
    );
    return (
      <Fade bottom>
        <div className="Content-About">
          <div className="container">
            {title}
            <div className="row">        
                {Abouttask}      
            </div>
          </div>
        </div>
        </Fade>
      )
}
export default About;