import Accordion from "../Accoridan/accordian";
import {useTranslation} from "react-i18next";

const APM = () => {
    const {t} = useTranslation();
  return (
      <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
          <h1 className="font-bold sm:text-4xl text-[28px]">{t("apm1")}</h1>
          <p className="mt-3 italic font-light mb-[1.5rem]">
              {t("apm2")}
          </p>
          <p className="font-semibold text-lg mb-[2rem]">
              {t("apm3")}
          </p>
          <Accordion
              title={t("apm4")}
              content={t("apm4_content")}
          />
          <Accordion
              title={t("apm5")}
              content={t("apm5_content")}
          />
          <Accordion
              title={t("apm6")}
              content={t("apm6_content")}
          />
          <Accordion
              title={t("apm7")}
              content={t("apm7_content")}
          />
          <div className="flex items-center justify-start h-[100px]">
              <div className="border-l-2 border-dashed border-[#e53527] h-full"></div>
          </div>
      </div>
  );
};
export default APM;
