import React, { Component } from "react";

class News extends Component {
  render() {
    return (
      <div>
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
                  mollisar lorem, at molestie arcu pulvinar ut. Proin ac
                  fermentum est.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="banner-bottom temp-btm">
          <div className="banner-top row middle-grids">
            <div className="col-lg-8 advantage-grid-info">
              <div className="advantage_left">
                <h3>Integer porttitor mollisar loremr, at molestie</h3>
                <p className="mt-4">
                  Nulla pellentesque mi non laoreet eleifend. Integer porttitor
                  mollisar lorem, at molestie arcu pulvinar ut. Proin ac
                  fermentum est.
                </p>
              </div>
            </div>
            <div className="col-lg-4 advantage-grid-info1 second">
              <div className="advantage_left2 text-center" />
            </div>
          </div>
        </section>

        <section className="banner-bottom">
          <div className="banner-top row middle-grids">
            <div className="col-lg-4 advantage-grid-info1 third">
              <div className="advantage_left2 text-center" />
            </div>
            <div className="col-lg-8 advantage-grid-info">
              <div className="advantage_left">
                <h3>Integer porttitor mollisar lorem, at molestie</h3>
                <p className="mt-4">
                  Nulla pellentesque mi non laoreet eleifend. Integer porttitor
                  mollisar lorem, at molestie arcu pulvinar ut. Proin ac
                  fermentum est.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default News;
