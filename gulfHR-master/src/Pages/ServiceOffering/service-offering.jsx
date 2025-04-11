import React, { useState, useEffect } from "react";
import SOBanner from "../../components/ServiceOffering/SObanner";
import { FaArrowRight } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu"; // Importing the hamburger menu icon
import HRM from "../../components/ServiceOffering/HRM/hrm";
import CPS from "../../components/ServiceOffering/CPS/cps";
import ELC from "../../components/ServiceOffering/ELC/elc";
import ERT from "../../components/ServiceOffering/ERT/ert";
import OCT from "../../components/ServiceOffering/OCT/oct";
import APM from "../../components/ServiceOffering/APM/apm";
import ESS from "../../components/ServiceOffering/ESS/ess";
import RM from "../../components/ServiceOffering/RM/rm";
import WP from "../../components/ServiceOffering/WP/wp";
import EPM from "../../components/ServiceOffering/EPM/epm";
import HRTM from "../../components/ServiceOffering/HRTM/hrtm";
import MM from "../../components/ServiceOffering/MM/mm";
import ETT from "../../components/ServiceOffering/ETT/ett";
import SITWS from "../../components/ServiceOffering/SITWS/sitws";
import SITES from "../../components/ServiceOffering/SITES/sites";
import GLI from "../../components/ServiceOffering/GLI/gli";
import {useTranslation} from "react-i18next";

import "./service-offering.css";


const ServiceOffering = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const { t} = useTranslation();

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMenuOpen(false); // Close the menu after clicking on a link
    }
  };

  useEffect(() => {
    // Add event listener to all anchor tags
    const anchorTags = document.querySelectorAll("a[href^='#']");
    anchorTags.forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      anchorTags.forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div>
      <SOBanner />
      <div className="flex w-full bg-[#000] text-[#fff] py-5 text-lg sm:pl-[3rem] p-7">
        <FaArrowRight className="mr-3 text-3xl text-[#e53527] w-[80px]" style={{
          transform: 'scale(1.2)', // Make the arrow slightly larger
        }}/> {t("so3")}
      </div>
      <div className="sticky-navbar bg-[#e53527]  text-[#fff] font-thin py-[1.3rem] px-[5rem]">
        <div className="hamburger-menu text-[18px]  items-center mx-auto" onClick={() => setMenuOpen(!menuOpen)}>
          <LuMenu className="mr-2 menu-icon" /> {t("so0")}
        </div>
        <nav className={`navbar-links ${menuOpen ? "expanded" : ""}`}>
          <a className="nav-link" href="#hrm">
              {t("sot1")}
          </a>
          <a className="nav-link" href="#cps">
              {t("sot2")}
          </a>
          <a className="nav-link" href="#elc">
              {t("sot3")}
          </a>
          <a className="nav-link" href="#ert">
              {t("sot4")}
          </a>
          <a className="nav-link" href="#oct">
              {t("sot5")}
          </a>
          <a className="nav-link" href="#apm">
              {t("sot6")}
          </a>
          <a className="nav-link" href="#ess">
              {t("sot7")}
          </a>
          <a className="nav-link" href="#rm">
              {t("sot8")}
          </a>
          <a className="nav-link" href="#wp">
              {t("sot9")}
          </a>
          <a className="nav-link" href="#epm">
              {t("sot10")}
          </a>
          <a className="nav-link" href="#hrtm">
              {t("sot11")}
          </a>
          <a className="nav-link" href="#mm">
              {t("sot12")}
          </a>
          <a className="nav-link" href="#ett">
              {t("sot13")}
          </a>
          <a className="nav-link" href="#sitws">
              {t("sot14")}
          </a>
          <a className="nav-link" href="#sites">
              {t("sot15")}
          </a>
          <a className="nav-link" href="#gli">
              {t("sot16")}
          </a>
        </nav>
      </div>
      <div id="hrm">
        <HRM />
      </div>
      <div id="cps">
        <CPS />
      </div>
      <div id="elc">
        <ELC />
      </div>
      <div id="ert">
        <ERT />
      </div>
      <div id="oct">
        <OCT />
      </div>
      <div id="apm">
        <APM />
      </div>
      <div id="ess">
        <ESS />
      </div>
      <div id="rm">
        <RM />
      </div>
      <div id="wp">
        <WP />
      </div>
      <div id="epm">
        <EPM />
      </div>
      <div id="hrtm">
        <HRTM />
      </div>
      <div id="mm">
        <MM />
      </div>
      <div id="ett">
        <ETT />
      </div>
      <div id="sitws">
        <SITWS />
      </div>
      <div id="sites">
        <SITES />
      </div>
      <div id="gli">
        <GLI />
      </div>
    </div>
  );
};

export default ServiceOffering;
