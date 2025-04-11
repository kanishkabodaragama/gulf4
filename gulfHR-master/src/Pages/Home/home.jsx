import React from "react";
import HomeBanner from "../../components/HomePage/Banner/homebanner";
import ScrollableStickySlider from "../../components/HomePage/Sticky/StickySlider";
import AnimatedVideo from "../../components/HomePage/VideoSection/AnimatedVideo";
import HomeFeature from "../../components/HomePage/HomeFeature/home-feature";
import ThreeDivFeature from "../../components/HomePage/ThreeDivFeature/three-div";
import BottomSection from "../../components/HomePage/BottomSection/bottomsection";
import TimeToImplement from "../../components/HomePage/TimeToImplement/time-to-impl";
import BottomStickySlider from "../../components/HomePage/BottomSticky/bottom-sticky";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <ScrollableStickySlider />
      <AnimatedVideo />
      <ThreeDivFeature />
      <HomeFeature />
      <BottomStickySlider />
      <TimeToImplement />
      <BottomSection />   
    </div>
  );
};

export default Home;
