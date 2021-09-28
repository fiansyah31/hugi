import React, { Component }  from "react";
import './Pricing.css';
import Fade from 'react-reveal/Fade';

class Pricing extends Component {
    render() {
        return (
             <div>
                 <HeroPricing></HeroPricing>
                 <Prices></Prices>
                 <ContentPricing></ContentPricing>
             </div>
        );
    }
}
function HeroPricing() {
    const Herotext = [ 
        <div>
            <a href="#" className="btn btn-primary py-3 px-5">Back to school - up to %40 off</a> 
          <h1 className="Hero-title mt-3">Online Security For You</h1>
            <p className="Hero-subtitle">With our advanced technology, you can enjoy a safe and private Internet experience without compromising the performance of your computer and mobile devices.</p>
        </div>
      ];
      const Heroimg = [
        <div className="images-hero">
          <img className="img-fluid rounded float-lg-end rounded mx-auto d-block" src="images/imagepricinghero.png">     
          </img>
        </div>
      ];
    
      return (
        <Fade bottom>
        <div className="Heropage">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 align-self-center">
               {Herotext}
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                {Heroimg}
                </div>
            </div>
          </div>
        </div>
        </Fade>
      );
}
class Prices extends Component{
  
    constructor() {
      super();
      this.state = {isChecked: false};
      this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
     }
     handleChecked () {
       this.setState({isChecked: !this.state.isChecked});
   }
   
   render(){
     const PaketPremium = 53;
     const Premium = [
       "Real-Time Antivirus",
        "Anti- Phishing",
         "Smart & fast VPN",
          "WebCam Protection",
           "Privete Browsing",
            "Payment Protection",
             "Adult Content Blocker",
              "File Protection"] ; 
     const ListPremium = Premium.map((Price) => 
       <li class="nav-item">
         <p class="nav-link"><img className="img-fill" src="images/Fillyes.png"></img>{Price}</p>
       </li>
    );
    const PaketPopular = 40;
     const Popular = ["Windows PCs & Mac", "Three PC protection", "Smart & fast VPN", "WebCam Protection", "Privete Browsing"]; 
     const ListPopular = Popular.map((Price) => 
       <li class="nav-item">
         <p class="nav-link"><img className="img-fill" src="images/Fillyes.png"></img>{Price}</p>
       </li>
    );
    const PaketStandart = 25;
    const Standart = ["Only Windows PCs", "Two PC protection"]; 
    const ListStandart = Standart.map((Price) => 
     <li class="nav-item">
       <p class="nav-link"><span><img className="img-fill" src="images/Fillyes.png"></img></span>{Price}</p>
     </li>
    );
 
   
     var Pricepremium;
     var Pricepopular;
     var Pricestandart;
     if (this.state.isChecked) {
       Pricepremium = PaketPremium * 12;
       Pricepopular = PaketPopular * 12;
       Pricestandart = PaketStandart * 12;
       Date = "Years"
     } else {
       Pricepremium = PaketPremium;
       Pricepopular = PaketPopular;
       Pricestandart = PaketStandart;
       Date = "Month"
     }
     
     // remove () after handleChecked because you need pass 
     // reference to function
     // also add return before <div>
   
   return (
    <Fade bottom>
     <div className="Page-price">
     <div className="container">
         <h1>
         Get complete peace of mind online
         </h1>
         <h2>
         Shop, stream, bank and browse the web securely with industry-leading protection for all your devices.
         </h2>
         <div className="Box-price" >
           <div class="form-check form-switch">
             <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" onChange={ this.handleChecked }></input>
             <label class="form-check-label" for="flexSwitchCheckDisabled">{Date}</label>
           </div>
           <div className="row">
           <div className="col-12 col-md-4 col-lg-4">
             <div class="card">
               <div class="card-body">
                 <h4 class="card-title"><span className="Money-price">$</span>{Pricestandart}<span className="Badge-price">{Date}</span></h4>
                 <p class="card-text">Standart</p>
                 <p class="card-subtitle">Essential antivirus protection for Windows PCs</p>
                 <hr></hr>
                   <ul class="nav flex-column">
                     {ListStandart}    
                 </ul>
                 <a className="btn btn-primary py-3 px-5" href="#">Buy Now</a>
               </div>
             </div>
           </div>
           <div className="col-12 col-md-4 col-lg-4">
             <div class="card">
               <div class="card-body">
                 <h4 class="card-title"><span className="Money-price">$</span>{Pricepopular}<span className="Badge-price">{Date}</span></h4>
                 <p class="card-text">Popular</p>
                 <p class="card-subtitle">Advanced antivirus & privacy protection for PC, Mac & Mobile</p>
                 <hr></hr>
                   <ul class="nav flex-column">
                     {ListPopular}    
                 </ul>
                 <a className="btn btn-primary py-3 px-5" href="#">Buy Now</a>
               </div>
             </div>
           </div>
           <div className="col-12 col-md-4 col-lg-4">
             <div class="card">
               <div class="card-body">
                 <h4 class="card-title"><span className="Money-price">$</span>{Pricepremium}<span className="Badge-price">{Date}</span></h4>
                 <p class="card-text">Premium</p>
                 <p class="card-subtitle">Access to all our security apps for PC, Mac, iOS & Android</p>
                 <hr></hr>
                   <ul class="nav flex-column">
                     {ListPremium}    
                 </ul>
                 <a className="btn btn-primary py-3 px-5" href="#">Buy Now</a>
               </div>
             </div>
           </div>
           </div>
           </div>
         </div>
       </div>
       </Fade>
   )
 }
  }

function ContentPricing(){
    const Contenttext = [ 
        <div>
        <hr className="d-none d-md-block"></hr>
            <p className="Content-subtitle">Don’t worry, we can help match you to your perfect security solution in just 30 seconds.</p>
            <a href="#" className="btn btn-primary py-3 px-5">Help Me Choose</a> 
        </div>
      ];
      const Contentimg = [
        <div className="Images-content-pricing">
          <img className="img-fluid rounded float-lg-end rounded mx-auto d-block" src="images/imagepricingcontent.png">     
          </img>
        </div>
      ];
    
      return (
        <Fade bottom>
        <div className="Content-pricing">
          <div className="container">
            <div className="row">
                <h1 className="Content-title">
                Not sure which solution is best for you?
                </h1>
              <div className="col-12 col-md-6 col-lg-6 align-self-center">
               {Contenttext}
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                {Contentimg}
                </div>
            </div>
          </div>
        </div>
        </Fade>
      );
}

export default Pricing;