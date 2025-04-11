import Accordion from "../Accoridan/accordian";
import {useTranslation} from "react-i18next";

const ELC = () => {
    const {t} = useTranslation();
  return (
      <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
          <h1 className="font-bold sm:text-4xl text-[28px]">{t("elc1")} </h1>
          <p className="mt-3 italic font-light mb-[1.5rem]">
              {t("elc2")}
          </p>
          <p className="font-semibold text-lg mb-[2rem]">
              {t("elc3")}
          </p>
          <Accordion
              title={t("elc4")}
              content={t("elc4_content")}
          />
          <Accordion
              title={t("elc5")}
              content={t("elc5_content")}
          />
          <Accordion
              title={t("elc6")}
              content={t("elc6_content")}
          />
          <Accordion
              title={t("elc7")}
              content={t("elc7_content")}
          />
          <div className="flex items-center justify-start h-[100px]">
              <div className="border-l-2 border-dashed border-[#e53527] h-full"></div>
          </div>
      </div>
  );
};
export default ELC;
