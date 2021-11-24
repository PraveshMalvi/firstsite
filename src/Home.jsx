import React from "react";
import BannerBg from './images/banner-bg.gif';
import CommonHead from './Common-head';

const Home = () => {
  return (
    <>
      <CommonHead name="Grow your business with" imgSrc={BannerBg} sendTo="/service" btnName="Get Started" />
    </>
  );
}

export default Home;
