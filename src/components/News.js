import React, { Component } from "react";

class News extends Component {
  render() {
    return (
      <section className="banner-bottom" id="news">
        <div className="banner-top row middle-grids">
          <div className="col-lg-4 advantage-grid-info1">
            <div className="advantage_left2 text-center" />
          </div>
          <div className="col-lg-8 advantage-grid-info">
            <div className="advantage_left">
              <h3>Integer porttitor mollisar lorem, at molestie</h3>
              <p className="mt-4">
                Nulla pellentesque mi non laoreet eleifend. Integer porttitor
                mollisar lorem, at molestie arcu pulvinar ut. Proin ac fermentum
                est.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
