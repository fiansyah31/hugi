import './Home.css';
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

   
   function Home(){
            return(
                <div>
                    <Heropage></Heropage>
                    <Contentsponsor></Contentsponsor>
                    <Prices></Prices>
                    <Testimoni></Testimoni>
                    <ContentInfo></ContentInfo>
                    <Try></Try>
                </div>

            )
    }

function Heropage() {
    const Herotext = [ 
      <div>
        <h1 className="Hero-title">Keeping It All Together</h1>
          <p className="Hero-subtitle">Enjoy special advertising offers from Google, Microsoft Advertising/Yahoo, and other leading sites to help grow your business, - Start Today.</p>
          <div className="d-flex">
  
          <a href="#" className="btn btn-primary py-3 px-5">Try for free</a> 
          <a href="#" className="link-hero">* No credit card required</a>
          </div>
      </div>
    ];
    const Heroimg = [
      <div className="images-hero">
        <img className="img-fluid rounded float-lg-end rounded mx-auto d-block" src="images/Picture.png">     
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
   function Contentsponsor() {
     const Sponsor = [{
       "logo" : "images/microsoft.png"
     },
     {
      "logo" : "images/yahoo.png"
    },
     {
      "logo" : "images/Huawei.png"
    },
    {
      "logo" : "images/googlesponsor.png"
    }
     ];
    const Listsponsor = Sponsor.map((contentsponsor) =>
    <li className="nav-item">
      <img className="img-sponsor nav-link" src={contentsponsor.logo}></img>
    </li>     
    );
    return (
      <Fade bottom>
      <div className="Content-sponsor">
        <div className="container">
          <h2>Thousands of teams worldwide are using Hugi</h2>
      <ul class="nav justify-content-center">
          {Listsponsor}
      </ul>
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
      <div>    
     </div>
          <h1>
          Get complete peace of mind online
          </h1>
          <h2>
          Shop, stream, bank and browse the web securely with industry-leading protection for all your devices.
          </h2>
          <div className="Box-price">
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
  
  
  function Testimoni() {
    const title = [ 
      <div>
        <h1>Happy User</h1>
      </div>
    ];
   const Comment = [{
     "title" : "Very Good Protection",
     "subtitle" : "Used for many years. Never have any problem in my computer"
   },
   {
    "title" : "The reason I initially first went with Kaspersky a few years ago was that I heard it was not very heavy on my resources",
    "subtitle" : "Kami memberikan pembelajaran yang mudah untuk di pahami dan sesuai dengan kriteria"
   },
   {
    "title" : "Protection for all the family",
    "subtitle" : "A great product for all, easy to use and gives you all round protection. I like the easy way it carries out updates and the fixing of errors"
   }
  ];
  const Commentcontent = Comment.map((comment) =>
  <div className="col-12 col-md-4 col-lg-4">
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{comment.title}</h2>
        <h5 className="card-subtitle">{comment.subtitle}</h5>
        <div className="Rating">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </div>
        <h4 className="card-text">by Ugur D.</h4>
      </div>
    </div>   
  </div>
  );
  return (
    <Fade bottom>
      <div className="Content-comment">
        <div className="container text-center">
          {title}
          <div className="row">        
              {Commentcontent}      
          </div>
        </div>
      </div>
      </Fade>
    )
  }
   
  function ContentInfo(){
    const ContentinfoText = [ 
      <div>
        <h1 className="Info-title">Global leader in cybersecurity</h1>
          <p className="Info-subtitle">The company’s comprehensive security portfolio includes leading endpoint protection and a number of specialized security solutions and services to fight sophisticated and evolving digital threats. Over 400 million users are protected by Hugi technologies and we help 250,000 corporate clients protect what matters most to them.</p>
          <a href="#" className="btn btn-primary py-3 px-5">Learn More</a> 
      </div>
    ];
    const ContentinfoImg = [
      <div className="images-info">
        <img className="img-fluid rounded float-end rounded mx-auto d-block" src="images/content.png">     
        </img>
      </div>
    ]
  
    return (
      <Fade bottom>
      <div className="Content-info">
      <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 align-self-center">
             {ContentinfoText}
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              {ContentinfoImg}
            </div>
          </div>
        </div>
      </div>
      </Fade>
    )
  }
  
  function Try() {
    return (
      <Fade Bottom>
      <div className="Content-try">
        <div className="container">
          <div class="card text-center">
            <div class="card-body">
              <h4 class="card-title">Online Security For You & Your Family</h4>
              <p class="card-subtitle">With our advanced technology, you can enjoy a safe and private Internet experience without compromising the performance of your computer and mobile devices.</p>
              <a href="#" className="btn btn-secondary py-3 px-5">Try for free</a> 
            </div>
          </div>
        </div>
      </div>
      </Fade>
    );
  }
  export default Home;