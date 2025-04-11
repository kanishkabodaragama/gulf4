import React, { useEffect, useState } from "react";
import { TbSettingsCog } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import "./homebanner.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document
        .getElementById("getStartedButton")
        .addEventListener("click", function () {
          document
              .getElementById("scrollableStickySlider")
              .scrollIntoView({ behavior: "smooth" });
        });
  }, []);

  return (
      <div className="home-banner lg:flex mb-[2rem]">
          {/* Left Div */}
          <div
              className="hidden inside-image md:block"
              style={{transform: `translateY(${scrollY * 0.1}px)`}}
          >
              <img
                  src="/images/Home/home-banner-02.png"
                  alt="gulfHR banner"
                  className="rounded-xl"
              />
          </div>
          <div className="leftdiv lg:px-[5rem]  px-[2rem] lg:py-[8rem] py-[1.5rem] lg:w-1/2 relativ">
              <h1 className="text-[29px] md:text-[46px] text-start font-bold  md:pt-[15%]">{t("hb-1")}</h1>
              <p className="mt-[2rem] font-semibold text-lg pr-8">{t("hb-2")}</p>
              <div className="flex mt-[2rem] lg:mt-[4rem] ">
                  <button id="getStartedButton">
                      <a href="#div" className="banner-button font-medium  md:text-[17px] h-12 -mt-[1rem]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {t("hb-3")}
                      </a>
                  </button>
                  <Link to="/service-offering" className="hover:text-gray-200">
                      <div className="flex justify-between ml-[1.5rem] -mt-[0.4rem] ">
                          <TbSettingsCog className="mt-1 mr-2 md:text-[21px]"/>
                          <div className="animated_container">
                              <p className="animated-underline font-medium text-[17px] md:text-[17px] " style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                  {t("hb-4")}
                              </p>
                          </div>
                      </div>
                  </Link>
              </div>
          </div>

          {/* Right Div */}
          <div className="p-8 rightdiv lg:w-1/2 md:p-0">
              <div className="outside-image">
                  <img
                      className="object-cover rounded-xl"
                      src="/images/Home/home-banner-01.png"
                      alt="gulfHR banner"
                  />
                  <div
                      className="block inside-image md:hidden"
                      style={{transform: `translateY(${scrollY * 0.1}px)`}}
                  >
                      <img
                          src="/images/Home/home-banner-02.png"
                          alt="gulfHR banner"
                          className="rounded-xl"
                      />
                  </div>
              </div>

          </div>
      </div>
  );
};

export default HomeBanner;
