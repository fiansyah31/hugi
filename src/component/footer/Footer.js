import './Footer.css';
import React, { Component } from 'react';

class Footer extends Component{
    render() {
        return (
                <div className="Footer">
                  <div class="container">
                   <div class="row">
                     <div className="col-12 col-md-6 col-lg-6">
                       <div className="row">
                         <div className="col-12 col-md-6 col-lg-6">
                           <div className="text-footer">
                             <h3>
                               Company
                             </h3>
                              <ul class="nav flex-column">
                              <li className="nav-item">
                                <a href="#" className="nav-link">About Us</a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link"> Partners</a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">Blog</a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">Careers</a>
                              </li>
                              </ul>
                           </div>
                         </div>
                         <div className="col-12 col-md-6 col-lg-6">
                           <div className="text-footer">
                             <h3>
                               Contact
                             </h3>
                              <ul class="nav flex-column">
                              <li className="nav-item">
                                <a href="#" className="nav-link">Terms of Use</a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">Privacy Policy</a>
                              </li>
                              <li className="nav-item">
                                <a href="#" className="nav-link">F.A.Q</a>
                              </li>
                              </ul>
                           </div>
                         </div>
                       </div>
                       </div>
                       <div className="col-12 col-md-6 col-lg-6">
              
                       </div>
                     </div>
                     <hr/>
                     <footer>
                      <div class="row">
                        <div className="col-6 col-md-6 col-lg-6 align-self-center">
                          <h2 className="flex-start">
                            C 2021 hugi.com
                          </h2>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6 align-self-center">
                          <ul className="nav float-end">
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                <img src="images/youtubeicon.png"></img>               
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                              <img src="images/instagramicon.png"></img> 
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                              <img src="images/facebookicon.png"></img> 
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                              <img src="images/twittericon.png"></img> 
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                     </footer>
                   </div>
                  </div>
                )
              }
      
    }

export default Footer;