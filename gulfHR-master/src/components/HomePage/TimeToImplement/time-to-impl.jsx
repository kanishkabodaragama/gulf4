import React from "react";
import { useTranslation } from "react-i18next";
import { TiTick } from "react-icons/ti";
import {Link} from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";

const TimeToImplement = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col flex-wrap items-center px-6 mx-4 mb-10 bg-gray-100 lg:flex-row md:mx-8 lg:mx-30">
      <div className="flex-1 min-w-[300px] p-6 xl:py-6 xl:ml-36 order-2 lg:order-1 mx-3 ">
        <h2 className="mb-8 xl:text-[46px] text-[28px] font-bold ">{t("tt-1")}</h2>
        <p className="mb-8 text-xl font-semibold xl:w-[450px]">{t("tt-2")}</p>
        <ul className="p-0 mb-6 list-none xl:w-[400px] text-[17px] text-[#000000] font-light">
          <li className="flex items-center mb-2">
            <TiTick color="red" className="mr-2 -mt-6 xl:-mt-0" /> {t("tt-3")}
          </li>
          <li className="flex items-center mb-2 ">
            <TiTick color="red" className="w-8 h-8 mr-2 -mt-20 xl:-mt-6" /> {t("tt-4")}
          </li>
          <li className="flex items-center mb-2 ">
            <TiTick color="red" className="mr-2" /> {t("tt-5")}
          </li>
          <li className="flex items-center mb-2 ">
            <TiTick color="red" className="w-6 h-6 mr-2 -mt-12 xl:-mt-6" /> {t("tt-6")}
          </li>
        </ul>
        {/* <Link to="/contact-us" className="book-demo-link">
          <button className="text-white bg-red-500 rounded w-60 hover:bg-red-600 text-[17px]">
            <a href="#div" className="banner-button">
              {t("tt-7")}
            </a>
          </button>
        </Link> */}
        <Link to="/contact-us" className="book-demo-link">
            <button className="mr-16 w-60 h-14 book-demo-button">
                <CiCalendarDate className="mb-1 mr-3 w-7 h-7 book-demo-icon"/>
                <span className="book-demo-text" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {Array.from(t("Book a Free Demo")).map((char, index) => (
                        <span
                            key={index}
                            style={{animationDelay: `${index * 0.05}s`}}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </span>
            </button>
        </Link>
      </div>
      <div className="flex-1 min-w-[300px] text-center order-1 lg:order-2 mr-8 shadow rounded">
        <img src="/images/Home/Payroll-upload1.png" alt="Implementation" className="h-auto xl:w-[750px] xl:h-[400px] max-w-full bg-[#b0b5bc] rounded-3xl" />
      </div>
    </div>
  );
};

export default TimeToImplement;
