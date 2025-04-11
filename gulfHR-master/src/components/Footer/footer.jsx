import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "./footer.css";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {

    //translation
    const { t } = useTranslation();

  return (
    <div id="footer" className="footer">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 pt-[4rem]">
        {/* right side */}
        <div className="flex-1 mb-10 bg-gray-200">
          <div class="text-sm text-gray-500 sm:text-start flex-1 justify-center items-center sm:px-20 px-7">
            <img src="/images/Logo-Footer.png" alt="gulfHR logo" className="mb-5 sm:w-[450px] w-[200px]" />
            <p className="mb-5 text-xl font-bold">{t("f1")}</p>
            <p className="leading-7 text-[1rem] font-thin">{t("f2")} </p>
            <p className="leading-7 text-[1rem] font-thin">{t("f3")}</p>
            <p className="leading-7 text-[1rem] font-thin">{t("f4")}</p>
            <p className="leading-7 text-[1rem] font-thin">{t("f5")}</p>
            <div className="mt-[3rem] font-thin">
              <p>{t("f12")}</p>
              <p>
                {t("f13")}
                <span className="underline">ContraMedia</span>
              </p>
            </div>
          </div>
        </div>
        {/* left side */}
        <div className="flex-1 mb-10 bg-gray-200 ">
          <div class="text-sm text-gray-500 sm:text-start flex-1 justify-center items-center sm:px-44 px-7">
            <p className="mb-5 text-xl font-bold">{t("f6")}</p>
            <ul class="text-gray-500 font-semibold">
              <li class="mb-[2rem] ">
                <a href="mailto:sales@gulfsolution.com" className="lg:flex text-[1.1rem]">
                  {t("f7")}{" "}
                  <span className="relative flex cursor-pointer group">
                    <TfiEmail className="text-2xl font-thin mr-4 lg:ml-[6.5rem]" />
                    <span className="relative">    
                      sales@gulfsolution.com
                      <span className="absolute bottom-0  right-0 w-full h-[1px] bg-[#fff] transition-all duration-300 group-hover:w-0"></span>
                    </span>
                  </span>
                </a>
              </li>
              <li class="mb-[2rem] flex">
                <a href="tel:+966561188331" className="lg:flex text-[1.1rem]">
                  {t("f8")}{" "}
                  <span className="relative flex cursor-pointer group">
                    <FiPhone className="text-2xl font-thin mr-4 lg:ml-[3.5rem] rotate-45" />
                    <span className="relative">  
                      +966(0)115902718
                      <span className="absolute bottom-0  right-0 w-full h-[1px] bg-[#fff] transition-all duration-300 group-hover:w-0"></span>
                    </span> 
                  </span>
                </a>
              </li>
              <li class="mb-[2rem] flex">
                <a href="tel:+97317123456" className="lg:flex text-[1.1rem]">
                  {t("f9")}{" "}
                  <span className="relative flex cursor-pointer group">
                    <FiPhone className="text-2xl font-thin mr-4 lg:ml-[1.7rem] rotate-45" />
                    <span className="relative">  
                      +973 175 40015
                      <span className="absolute bottom-0  right-0 w-full h-[1px] bg-[#fff] transition-all duration-300 group-hover:w-0"></span>
                    </span>                  
                  </span>
                </a>
              </li>
              <li class="mb-[2rem] flex">
                <a href="tel:+97141234567" className="lg:flex text-[1.1rem]">
                  {t("f10")}{" "}
                  <span className="relative flex cursor-pointer group">
                    <FiPhone className="text-2xl font-thin mr-4 lg:ml-[4.6rem] rotate-45" />
                    <span className="relative">
                      +966(0)115902718
                      <span className="absolute bottom-0  right-0 w-full h-[1px] bg-[#fff] transition-all duration-300 group-hover:w-0"></span>
                    </span>
                  </span>
                </a>
              </li>
              <li class="mb-[2rem] flex">
                <a href="tel:+966111234567" className="lg:flex text-[1.1rem]">
                  {t("f11")}{" "}
                  {/* <span className="flex underline cursor-pointer underline-offset-8 decoration-0 hover:no-underline">
                    <FiPhone className="text-2xl font-thin mr-4 lg:ml-[7.3rem] rotate-45" />
                    +973 175 40015
                  </span> */}
                  <span className="relative flex cursor-pointer group">
                    <FiPhone className="text-2xl font-thin mr-4 lg:ml-[7.3rem] rotate-45" />
                    <span className="relative">
                      +973 175 40015
                      <span className="absolute bottom-0  right-0 w-full h-[1px] bg-[#fff] transition-all duration-300 group-hover:w-0"></span>
                    </span>
                  </span>

                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
