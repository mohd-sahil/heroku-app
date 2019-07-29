import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <section className="main-banner" id="home">
        <div className="header-top-w3layouts text-right">
          <ul id="menu">
            <li>
              <input id="check02" type="checkbox" name="menu" />
              <label for="check02">
                <span className="fa fa-bars" aria-hidden="true" />
              </label>
              <ul className="submenu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#about" className="scroll">
                    About
                  </a>
                </li>
                <li>
                  <a href="#team" className="scroll">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#service" className="scroll">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="scroll">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="scroll">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="baner-info-w3ls text-left">
            <h1>
              <a href="index.html">Exert Design</a>
            </h1>
            <h6 className="mx-auto mt-4">
              Porttitor mollisar lorem, at molestie arcu pulvinar ut. Proin ac
              fermentum est
            </h6>
            <a
              className="btn btn-primary mt-lg-5 mt-3 agile-link-bnr scroll"
              href="#about"
              role="button"
            >
              Learn More
            </a>
            <div className="banner-high-lights text-left">
              <div className="rotate">
                <a href="#about" className="scroll">
                  <span className="fa fa-long-arrow-down" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
