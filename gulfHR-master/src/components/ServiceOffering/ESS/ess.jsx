import Accordion from "../Accoridan/accordian";
import {useTranslation} from "react-i18next";

const ESS = () => {
    const {t} = useTranslation();
  return (
      <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
          <h1 className="font-bold sm:text-4xl text-[28px]">{t("ess2")} </h1>
          <p className="mt-3 italic font-light mb-[1.5rem]">
              {t("ess3")}
          </p>
          <p className="font-semibold text-lg mb-[2rem]">
              {t("ess4")}
          </p>
          <Accordion
              title={t("ess5")}
              content={t("ess5_content")}
          />
          <Accordion
              title={t("ess6")}
              content={t("ess6_content")}
          />
          <Accordion
              title={t("ess7")}
              content={t("ess7_content")}
          />
          <Accordion
              title={t("ess8")}
              content={t("ess8_content")}
          />
          <Accordion
              title={t("ess9")}
              content={t("ess9_content")}
          />
          <Accordion
              title={t("ess10")}
              content={t("ess10_content")}

          />
          <Accordion
              title={t("ess11")}
              content={t("ess11_content")}
          />
          <Accordion
              title={t("ess12")}
              content={t("ess12_content")}
          />
          <div className="flex items-center justify-start h-[100px]">
              <div className="border-l-2 border-dashed border-[#e53527] h-full"></div>
          </div>
      </div>
  );
};
export default ESS;
