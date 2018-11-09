import React, { Component } from "react";

class HeroHomePage extends Component {
  render() {
    return (
      <section className="info-section bg-primary py-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-6 content-half mt-md-0 pl-5 pt-4">
              <div className="head-box mb-5 pl-5 mt-2">
                <h2 className="text-white">Our Story</h2>
                <h6 className="text-white text-underline-rb-white">
                  This is information panel
                </h6>
              </div>
              <ul className="pl-5">
                <li>
                  <i
                    className="fa fa-laptop box-round-outline"
                    aria-hidden="true"
                  />
                  <span className="list-content">
                    <strong>Responsive Design</strong>
                    <br />
                    Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </li>
                <li>
                  <i
                    className="fa fa-cloud-upload box-round-outline"
                    aria-hidden="true"
                  />
                  <span className="list-content">
                    <strong>Cloud Storage</strong>
                    <br />
                    Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </li>
                <li>
                  <i
                    className="fa fa-diamond box-round-outline"
                    aria-hidden="true"
                  />
                  <span className="list-content">
                    <strong>Premium Features</strong>
                    <br />
                    Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </li>
              </ul>
              <div className="col-md-6 p-0 m-0">
                <img
                  src="https://grafreez.com/wp-content/temp_demos/suffi/img/intro-bg.jpg"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroHomePage;
