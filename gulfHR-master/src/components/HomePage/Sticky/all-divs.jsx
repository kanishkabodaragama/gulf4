import { useTranslation } from "react-i18next";
import "./stickySlider.css";

const   StickDivs = () => {

    //translation
    const { t } = useTranslation();
    
  return (
    <div className="">
      <div className="lg:flex">
        {/* ======= 1 ======= */}
        <div className="stickydivs divone hover:text-[#fff] rounded">
          <img
            className="w-[3.5rem]"
            src="/images/Home/StickyBar/image1.png"
            alt=""
          />
          <h1 className="font-semibold text-[24px] mt-5 ">{t("hsb-3")}</h1>
          <p className="font-light mt-2 text-[18px] w-72 leading-loose">
          {t("hsb-4")}
          </p>
        </div>
        <div className="stickydivs divtwo hover:text-[#fff] rounded">
          <img
            className="w-[3.5rem]"
            src="/images/Home/StickyBar/image2.png"
            alt=""
          />
          <h1 className="font-semibold text-[24px] mt-5">
          {t("hsb-5")}
          </h1>
          <p className="font-thin mt-2 text-[18px] w-72 leading-loose">
          {t("hsb-6")}
          </p>
        </div>
      </div>

      {/* ======= 2 ====== */}
      <div className="lg:flex">
        <div className="stickydivs divone hover:text-[#fff] rounded">
          <img
            className="w-[3.5rem]"
            src="/images/Home/StickyBar/image3.png"
            alt=""
          />
          <h1 className="font-semibold text-[24px] mt-5">{t("hsb-7")}</h1>
          <p className="font-thin mt-2 text-[18px] leading-loose">
          {t("hsb-8")}
          </p>
        </div>
        <div className="stickydivs divtwo hover:text-[#fff] rounded">
          <img
            className="w-[3.5rem]"
            src="/images/Home/StickyBar/image4.png"
            alt=""
          />
          <h1 className="font-semibold text-[24px] mt-5">{t("hsb-9")}</h1>
          <p className="font-thin mt-2 text-[18px] leading-loose">
            {t("hsb-10")}
          </p>
        </div>
      </div>

      {/* ======= 3 ====== */}
      <div className="lg:flex">
        <div className="stickydivs divone hover:text-[#fff] rounded">
          <img
            className="w-[3.5rem]"
            src="/images/Home/StickyBar/image5.png"
            alt=""
          />
          <h1 className="font-semibold text-[24px] mt-5">
          {t("hsb-11")}
          </h1>
          <p className="font-thin mt-2 text-[18px] leading-loose">
          {t("hsb-12")}
          </p>
        </div>
        <div className="stickydivs divtwo hover:text-[#fff] rounded">
          <img
            className="w-[3.5rem]"
            src="/images/Home/StickyBar/image6.png"
            alt=""
          />
          <h1 className="font-semibold text-[24px] mt-5">{t("hsb-13")}</h1>
          <p className="font-thin mt-2 text-[18px] leading-loose">
          {t("hsb-14")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default StickDivs;
