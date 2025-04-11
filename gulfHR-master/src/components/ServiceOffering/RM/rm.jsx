import Accordion from "../Accoridan/accordian";
import {useTranslation} from "react-i18next";

const RM = () => {
    const { t } = useTranslation();
  return (
      <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
          <h1 className="font-bold sm:text-4xl text-[28px]">{t("rm1")} </h1>
          <p className="mt-3 italic font-light mb-[1.5rem]">
              {t("rm2")} </p>
          <p className="font-semibold text-lg mb-[2rem]">
              {t("rm3")}
          </p>
          <Accordion
              title={t("rm4")}
              content={t("rm4_content")}
          />
          <Accordion
              title={t("rm5")}
              content={t("rm5_content")}
          />
          <Accordion
              title={t("rm6")}
              content={t("rm6_content")}
          />
          <Accordion
              title={t("rm7")}
              content={t("rm7_content")}
          />
          <Accordion
              title={t("rm8")}
              content={t("rm8_content")}
          />
          <Accordion
              title={t("rm9")}
              content={t("rm9_content")}
          />
          <Accordion
              title={t("rm10")}
              content={t("rm10_content")}
          />
          <div className="flex items-center justify-start h-[100px]">
              <div className="border-l-2 border-dashed border-[#e53527] h-full"></div>
          </div>
      </div>
  );
};
export default RM;
