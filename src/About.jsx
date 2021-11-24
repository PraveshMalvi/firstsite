import React from "react";
import AboutBg from './images/about-bg.gif';
import CommonHead from './Common-head';

const About = () => {
  return (
    <>
      <CommonHead name="Welcome! Here you will get to know about" imgSrc={AboutBg} sendTo="/" btnName="Back To Home" />
    </>
  );
}

export default About;
