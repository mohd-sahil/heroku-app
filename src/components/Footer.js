import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <section className="foot-top-w3layouts pt-5">
        <div className="container py-lg-5">
          <div className="text-center">
            <h3 className="tittle_head text-white">
              Integer porttitor mollisar{" "}
            </h3>
            <p className="main_p mt-4 mb-3 pt-2 text-center mx-auto">
              Nulla pellentesque mi non laoreet eleifend. Integer porttitor
              mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum
              est. Cras mi ipsum, consectetur ac ipsum{" "}
            </p>
          </div>
          <div className="newsletter-info-wthree text-center pt-md-5 pt-3">
            <form action="#" method="post" className="d-flex">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email..."
                required=""
              />
              <button className="btn1">
                <span className="fa fa-paper-plane-o" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
        <div className="cpy-right text-center pb-5">
          <ul className="social_section_1info mb-lg-4">
            <li>
              <a href="#">
                <span className="fa fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
          <p className="copy-w3ls mb-4">
            © 2018 Exert Design. All rights reserved | Design by
            <a href="http://w3layouts.com" className="text-white">
              {" "}
              w3layouts.
            </a>
          </p>
          <a href="#home" className="move-top scroll">
            <span className="fa fa-angle-double-up" aria-hidden="true" />
          </a>
        </div>
      </section>
    );
  }
}

export default Footer;
