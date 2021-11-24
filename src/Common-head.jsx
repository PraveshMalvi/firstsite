import React from "react";
import { NavLink } from "react-router-dom";

const CommonHead = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-10 mx-auto">
                    <div className="row">
                      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>
                            {props.name} <span className="brand-name"> pravesh.dev</span>
                        </h1>
                        <p className="my-3 head-description">
                            We are a team of talented developers making elegant and functional websites.
                        </p>
                      <div>
                          <NavLink to={props.sendTo} className="btn-get-started">
                              {props.btnName}
                          </NavLink>
                      </div>
                  </div>

                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={props.imgSrc} className="img-fluid" alt="home-banner"/>
                  </div>
                  </div>
                </div>
              </div>
          </div>
      </section>
    </>
  );
}

export default CommonHead;
