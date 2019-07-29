import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className="wedo py-lg-5 py-5" id="about">
        <div className="container py-lg-5">
          <div className="text-center">
            <h3 className="tittle_head">Integer porttitor mollisar </h3>
            <p className="main_p mt-4 mb-4 pt-2 text-center mx-auto">
              Nulla pellentesque mi non laoreet eleifend. Integer porttitor
              mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum
              est. Cras mi ipsum, consectetur ac ipsum{" "}
            </p>
          </div>
          <div className="wedo_top text-center py-5">
            <ul>
              <li>
                <span className="fa fa-cog" />
              </li>
              <li>
                <span className="fa fa-code" />
              </li>
              <li>
                <span className="fa fa-copy" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
