import React, { useEffect, useState } from "react";
import "./SObanner.css";
import {useTranslation} from "react-i18next";

const SOBanner = () => {
  const { t } = useTranslation();
  const [animateService, setAnimateService] = useState(false);
  const [animateOffering, setAnimateOffering] = useState(false);
  const [animateDesc, setAnimateDesc] = useState(false);

  useEffect(() => {
    // Animate the "Service" word first
    setTimeout(() => {
      setAnimateService(true);
    }, 300); // Start animation after 500ms

    // Animate the "Offering" word second
    setTimeout(() => {
      setAnimateOffering(true);
    }, 900); // Start animation after 1500ms
  }, []);

      // Animate the description text third
      setTimeout(() => {
        setAnimateDesc(true);
      }, 300); // Start animation after 2500ms

  return (
    <div className="so-banner">
      <div className="-mt-1 banner-text bg-[#595959] z-50 bg-opacity-60 xl:h-[70vh] h-[45vh] ">
        <h1 className="font-bold sm:text-7xl text-[40px] w-[300px] sm:w-full lg:mt-32">
          <span className={`animated-text ${animateService ? "animate" : ""}`}>
            {t("so1_1")} &nbsp;
          </span>
          <span className={`animated-text ${animateOffering ? "animate" : ""}`}>
            {t("so1_2")}
          </span>
        </h1>
        <p className={`w-[67%] mt-4 text-lg font-semibold desc ${animateDesc ? "animate" : ""}`}>
          {t("so2")}
        </p>
      </div>
    </div>
  );
};

export default SOBanner;
