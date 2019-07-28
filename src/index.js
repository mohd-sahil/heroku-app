import React, { Component } from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer"


class App extends Component {
  render() {
    return( 
           <div>
           <section className="main-banner" id="home">
           <div className="header-top-w3layouts text-right">
               <ul id="menu">
                   <li>
                       <input id="check02" type="checkbox" name="menu" />
                       <label for="check02"><span className="fa fa-bars" aria-hidden="true"></span></label>
                       <ul className="submenu">
                           <li><a href="index.html">Home</a></li>
                           <li><a href="#about" className="scroll">About</a></li>
                           <li><a href="#team" className="scroll">Team</a></li>
                           <li><a href="#service" className="scroll">Services</a></li>
                           <li><a href="#gallery" className="scroll">Gallery</a></li>
                           <li><a href="#testimonials" className="scroll">Testimonials</a></li>
                           <li><a href="contact.html">Contact</a></li>
                       </ul>
                   </li>
               </ul>
           </div>
           <div className="container">
               <div className="baner-info-w3ls text-left">
                   <h1><a href="index.html">Exert Design</a></h1>
                   <h6 className="mx-auto mt-4">Porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est</h6>
                   <a className="btn btn-primary mt-lg-5 mt-3 agile-link-bnr scroll" href="#about" role="button">Learn More</a>
                   <div className="banner-high-lights text-left">
                       <div className="rotate">
                           <a href="#about" className="scroll">
                                  <span className="fa fa-long-arrow-down"></span>                 
               </a>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       
       <section className="wedo py-lg-5 py-5" id="about">
           <div className="container py-lg-5">
               <div className="text-center">
                   <h3 className="tittle_head">Integer porttitor mollisar </h3>
                   <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum, consectetur ac ipsum </p>
               </div>
               <div className="wedo_top text-center py-5">
                   <ul>
                       <li><span className="fa fa-cog"></span></li>
                       <li><span className="fa fa-code"></span></li>
                       <li><span className="fa fa-copy"></span></li>
                   </ul>
               </div>
           </div>
       </section>
       <section className="banner-bottom" id="news">
           <div className="banner-top row middle-grids">
               <div className="col-lg-4 advantage-grid-info1">
                   <div className="advantage_left2 text-center">
     
                   </div>
               </div>
               <div className="col-lg-8 advantage-grid-info">
                   <div className="advantage_left">
                       <h3>Integer porttitor mollisar lorem, at molestie</h3>
                       <p className="mt-4">Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est.</p>
                   </div>
               </div>
           </div>
       </section>
       
       <section className="banner-bottom temp-btm">
           <div className="banner-top row middle-grids">
               <div className="col-lg-8 advantage-grid-info">
                   <div className="advantage_left">
                       <h3>Integer porttitor mollisar loremr, at molestie</h3>
                       <p className="mt-4">Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est.</p>
                   </div>
               </div>
               <div className="col-lg-4 advantage-grid-info1 second">
                   <div className="advantage_left2 text-center">
     
                   </div>
               </div>
           </div>
       </section>
      
       <section className="banner-bottom">
           <div className="banner-top row middle-grids">
               <div className="col-lg-4 advantage-grid-info1 third">
                   <div className="advantage_left2 text-center">
     
                   </div>
               </div>
               <div className="col-lg-8 advantage-grid-info">
                   <div className="advantage_left">
                       <h3>Integer porttitor mollisar lorem, at molestie</h3>
                       <p className="mt-4">Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est.</p>
                   </div>
               </div>
           </div>
       </section>
       <section className="slide-wrapper py-5" id="service">
           <div className="container py-lg-5">
               <div className="text-center">
                   <h3 className="tittle_head">Integer porttitor mollisar </h3>
                   <p className="main_p mt-4 mb-4 pt-2 text-white text-center mx-auto">Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum, consectetur ac ipsum </p>
               </div>
               <div className="services">
                   <div className="row service_w3layoutstop mt-5 pt-lg-5">
                       <div className="col-lg-6 ser-lt">
                           <div className="d-flex services-box">
                               <div className="icon">
                                   <span className="fa fa-line-chart"></span>
                               </div>
                               <div className="service-content">
                                   <h2>Inagittis Lacg</h2>
                                   <p className="serp">
                                       Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                                   </p>
                               </div>
                      
                           </div>
                           
     
                           <div className="d-flex services-box ser-midd">
                               <div className="icon">
                                   <span className="fa fa-bell-o"></span>
                               </div>
                            
                               <div className="service-content">
                                   <h4>Velitdipisc Inagittis</h4>
                                   <p className="serp">
                                       Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                                   </p>
                               </div>
           
                           </div>
                           
                           
     
                           <div className="d-flex services-box bx-4">
                               <div className="icon">
                                   <span className="fa fa-line-chart"></span>
                               </div>
                      
                               <div className="service-content">
                                   <h4>Sagittis Lacus</h4>
                                   <p className="serp">
                                       Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                                   </p>
                               </div>
                               
                           </div>
                           
                       </div>
                      
                       <div className="col-lg-6 ser-rgt">
                           <div className="d-flex services-box bx-1">
                               <div className="icon">
                                   <span className="fa fa-bell-o"></span>
                               </div>
                               
                               <div className="service-content">
                                   <h4>Vulputate Velitdipisc</h4>
                                   <p className="serp">
                                       Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                                   </p>
                               </div>
                      
                           </div>
     
                           <div className="d-flex services-box ser-midd bx-2">
                               <div className="icon">
                                   <span className="fa fa-line-chart"></span>
                            </div>
                               <div className="service-content">
                                   <h4>Sagittis Lacus</h4>
                                   <p className="serp">
                                       Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                                   </p>
                               </div>
                               
                           </div>
                           
                           
     
                           <div className="d-flex services-box bx-3">
                               <div className="icon">
                                   <span className="fa fa-bell-o"></span>
                               </div>

                               <div className="service-content">
                                   <h4>Sagittis Lacus</h4>
                                   <p className="serp">
                                       Quisque sagittis lacus eu lorem sodalesd vulputate velitdipisc inagittis lacg enean adipiscing.
                                   </p>
                               </div>
                      
                           </div>
                       </div>
                       
                   </div>
                  
               </div>
               
           </div>
       </section>
       
       <section className="team-main-sec py-lg-5 py-4" id="team">
           <div className="container">
               <div className="inner-sec-wthree py-lg-5 py-4 speak">
                   <div className="text-center">
                       <h3 className="tittle_head">Integer porttitor mollisar </h3>
                       <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum, consectetur ac ipsum </p>
                   </div>
                   <div className="row mt-lg-5 mt-4">
                       <div className="col-md-4 team-gd-info text-center">
                           <div className="team-gd">
                               <div className="team-img mb-4">
                                   <img src="images/team.jpg" className="img-fluid rounded-circle" alt="user-image"/>
                               </div>
                               <div className="team-info">
                                   <h3 className="mt-md-4 mt-3"><span className="sub-tittle-team">Designer</span> Jason Donoghue</h3>
                                   <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                                   <ul className="team_social_info mt-md-4 mt-3">
                                       <li className="mb-2 facebook"><a href="#"><i className="fa fa-facebook mr-1"></i>facebook</a></li>
                                       <li className="mb-2 twitter"><a href="#"><i className="fa fa-twitter mr-1"></i>twitter</a></li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-4 team-gd-info text-center">
                           <div className="team-gd">
                               <div className="team-img mb-4">
                                   <img src="images/team1.jpg" className="img-fluid rounded-circle" alt="user-image"/>
                               </div>
                               <div className="team-info">
                                   <h3 className="mt-md-4 mt-3"><span className="sub-tittle-team">Designer</span> Mariana Noe</h3>
                                   <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                                   <ul className="team_social_info mt-md-4 mt-3">
                                       <li className="mb-2 google"><a href="#"><i className="fa fa-google-plus mr-1"></i>google</a></li>
                                       <li className="mb-2 linkedin"><a href="#"><i className="fa fa-linkedin mr-1"></i>linkedin</a></li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-4 team-gd-info text-center">
                           <div className="team-gd text-center">
                               <div className="team-img mb-4">
                                   <img src="images/team2.jpg" className="img-fluid rounded-circle" alt="user-image"/>
                               </div>
                               <div className="team-info">
                                   <h3 className="mt-md-4 mt-3"><span className="sub-tittle-team">Designer</span> Daniel Doe</h3>
                                   <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                                   <ul className="team_social_info mt-md-4 mt-3">
                                       <li className="mb-2 facebook"><a href="#"><i className="fa fa-facebook mr-1"></i>facebook</a></li>
                                       <li className="mb-2 twitter"><a href="#"><i className="fa fa-twitter mr-1"></i>twitter</a></li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
     
     
               </div>
           </div>
       </section>
  
       <section className="gallery py-5" id="gallery">
           <div className="container">
               <div className="inner-sec-wthree py-lg-5 py-3">
                   <div className="text-center">
                       <h3 className="tittle_head">Integer porttitor mollisar </h3>
                       <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum, consectetur ac ipsum </p>
                   </div>
                   <div className="row news-grids mt-lg-5 mt-4 text-center">
                       <div className="col-md-4 gal-img">
                           <a href="#gal1"><img src="images/g1.jpg" alt="gallery img" className="img-fluid"/></a>
                       </div>
                       <div className="col-md-4 gal-img">
                           <a href="#gal2"><img src="images/g2.jpg" alt="gallery img" className="img-fluid"/></a>
                       </div>
                       <div className="col-md-4 gal-img">
                           <a href="#gal3"><img src="images/g3.jpg" alt="gallery img" className="img-fluid"/></a>
                       </div>
                       <div className="col-md-4 gal-img">
                           <a href="#gal4"><img src="images/g4.jpg" alt="gallery img" className="img-fluid"/></a>
                       </div>
                       <div className="col-md-4 gal-img">
                           <a href="#gal5"><img src="images/g5.jpg" alt="gallery img" className="img-fluid"/></a>
                       </div>
                       <div className="col-md-4 gal-img">
                           <a href="#gal6"><img src="images/g6.jpg" alt="gallery img" className="img-fluid"/></a>
                       </div>
                       <div className="col-md-4 gal-img">
                           <a href="#gal7"><img src="images/g7.jpg" alt="gallery img" className="img-fluid"/></a>
                       </div>
                       <div className="col-md-4 gal-img">
                           <a href="#gal8"><img src="images/g1.jpg" alt="gallery img" className="img-fluid"/></a>
                       </div>
                       <div className="col-md-4 gal-img">
                           <a href="#gal9"><img src="images/g2.jpg" alt="gallery img" className="img-fluid"/></a>
                       </div>
                   </div>
               </div>
               
               <div id="gal1" className="pop-overlay animate">
                   <div className="popup">
                       <img src="images/g1.jpg" alt="Popup Image" className="img-fluid" />
                       <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                       <a className="close" href="#gallery">&times;</a>
                   </div>
               </div>
               
               <div id="gal2" className="pop-overlay animate">
                   <div className="popup">
                       <img src="images/g2.jpg" alt="Popup Image" className="img-fluid" />
                       <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                       <a className="close" href="#gallery">&times;</a>
                   </div>
               </div>
             
               <div id="gal3" className="pop-overlay animate">
                   <div className="popup">
                       <img src="images/g3.jpg" alt="Popup Image" className="img-fluid" />
                       <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                       <a className="close" href="#gallery">&times;</a>
                   </div>
               </div>
            
               <div id="gal4" className="pop-overlay animate">
                   <div className="popup">
                       <img src="images/g4.jpg" alt="Popup Image" className="img-fluid" />
                       <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                       <a className="close" href="#gallery">&times;</a>
                   </div>
               </div>
             
               <div id="gal5" className="pop-overlay animate">
                   <div className="popup">
                       <img src="images/g5.jpg" alt="Popup Image" className="img-fluid" />
                       <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                       <a className="close" href="#gallery">&times;</a>
                   </div>
               </div>
            
               <div id="gal6" className="pop-overlay animate">
                   <div className="popup">
                       <img src="images/g6.jpg" alt="Popup Image" className="img-fluid" />
                       <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                       <a className="close" href="#gallery">&times;</a>
                   </div>
               </div>
              
               <div id="gal7" className="pop-overlay animate">
                   <div className="popup">
                       <img src="images/g7.jpg" alt="Popup Image" className="img-fluid" />
                       <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                       <a className="close" href="#">&times;</a>
                   </div>
               </div>
            
               <div id="gal8" className="pop-overlay animate">
                   <div className="popup">
                       <img src="images/g1.jpg" alt="Popup Image" className="img-fluid" />
                       <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                       <a className="close" href="#gallery">&times;</a>
                   </div>
               </div>
           
               <div id="gal9" className="pop-overlay animate">
                   <div className="popup">
                       <img src="images/g2.jpg" alt="Popup Image" className="img-fluid" />
                       <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                       <a className="close" href="#gallery">&times;</a>
                   </div>
               </div>
             
           </div>
       </section>
       
       <section className="testimonials py-5" id="testimonials">
           <div className="container">
               <div className="inner-sec-wthree py-lg-5 py-4">
                   <div className="text-center">
                       <h3 className="tittle_head">Integer porttitor mollisar </h3>
                       <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum est. Cras mi ipsum, consectetur ac ipsum </p>
                   </div>
                   <div className="row mt-lg-5 mt-4">
     
                       <div className="col-lg-6 test-grid text-left">
                           <div className="row">
     
                               <div className="col-md-4 test-img">
                                   <img src="images/team1.jpg" className="img-fluid" alt="user-image"/>
                               </div>
                               <div className="col-md-8 test-info">
                                   <h3 className="mt-md-4 mt-3"><span className="sub-tittle-team">Sub Title</span> Mariana Noe</h3>
                                   <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                   <ul className="social_section_1info team-soc mt-4">
                                       <li><a href="#"><span className="fa fa-facebook-f"></span></a></li>
                                       <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                       <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
     
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-6 test-grid text-left">
                           <div className="row">
     
                               <div className="col-md-4 test-img">
                                   <img src="images/team2.jpg" className="img-fluid" alt="user-image"/>
                               </div>
                               <div className="col-md-8 test-info">
                                   <h3 className="mt-md-4 mt-3"><span className="sub-tittle-team">Sub Title</span> Mariana Noe</h3>
                                   <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                   <ul className="social_section_1info team-soc mt-4">
                                       <li><a href="#"><span className="fa fa-facebook-f"></span></a></li>
                                       <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                       <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
     
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
     
     
               </div>
           </div>
       </section>
       
        <Footer />           
    
       </div>
    
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
