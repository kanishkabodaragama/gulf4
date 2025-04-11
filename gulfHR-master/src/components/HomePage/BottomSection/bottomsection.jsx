import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import "./bottomsection.css";

const BottomSection = () => {
  //translation
  const { t } = useTranslation();

  const [scrollY, setScrollY] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const [hovered, setHovered] = useState(false);

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
    setIsAnimated(true);
  }, []);

  return (
    <div className="bottom-section px-[4rem] lg:px-[7rem] xl:pt-[3rem] xl:py-[0rem] py-[3rem]">
      <div className="">
        <div
          className={`animated-container ${isAnimated ? "animated-in" : ""}`}
        >
          <h1 className="text-[#000] tracking-tight sm:text-[70px] text-[40px] xl:text-[70px] lg:text-6xl font-bold lg:w-[80%] xl:px-12">
            {t("hbs-1")}
          </h1>
        </div>
        <div className="lg:flex mt-[3rem]">
          <Link to="/contact-us">
            <button className="bs-contact">{t("hbs-2")}</button>
          </Link>
          <Link to="/service-offering">
            <button
              className="mt-5 bs-service lg:ml-10 lg:mt-0"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {hovered ? <IoMdArrowForward /> : <MdOutlineHorizontalRule />}
              {t("hbs-3")}
            </button>
          </Link>
        </div>
        <div className="mt-10 bottom-image-section">
          <img
            className="xl:w-[90%] xl:ml-20 w-[100%]"
            src="/images/Home/BottomSection/Bottom.jpg"
            alt="bottom section"
          />
          <div
            className="xl:mb-[400px] mb-[600px] bottom-inside-image"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <img
              src="/images/Home/BottomSection/phone.png"
              alt="gulfHR banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
