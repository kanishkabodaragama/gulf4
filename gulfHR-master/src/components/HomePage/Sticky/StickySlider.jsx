import React from "react";
import "./stickySlider.css";
import { useTranslation } from "react-i18next";
import StickDivs from "./all-divs";

const ScrollableStickySlider = () => {

  //translation
  const { t } = useTranslation();

  return (
    <div id="scrollableStickySlider" className="mx-[3rem] lg:mx-[3rem] mt-28" >
      <div className="lg:flex justify-between lg:px-[4rem] ">
        <div className="sticky-container rounded mt-[2rem] lg:mb-[3rem]">
          <h1 className="mt-5 text-2xl font-bold tracking-tight lg:text-5xl">{t("hsb-1")}</h1>
          <p className="font-light mt-[3rem] text-[18px] leading-loose">{t("hsb-2")}</p>
        </div>
        <StickDivs />
      </div>
    </div>
  );
};

export default ScrollableStickySlider;
