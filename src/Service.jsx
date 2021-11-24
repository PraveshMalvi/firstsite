import React from "react";
import CardData from "./CardData";
import Cards from "./Cards";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid pb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                CardData.map((val, indx) => {
                  return<Cards 
                    key={indx}
                    imgSrc={val.imgSrc}
                    title={val.title}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
