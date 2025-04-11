import Accordion from "../Accoridan/accordian";
import {useTranslation} from "react-i18next";

const CPS = () => {
    const {t} = useTranslation();
  return (
      <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
          <h1 className="font-bold sm:text-4xl text-[28px]">{t("cps1")}</h1>
          <p className="mt-3 italic font-light mb-[1.5rem]">
              {t("cps2")}
          </p>
          <p className="font-semibold text-lg mb-[2rem]">
              {t("cps3")}
          </p>
          <Accordion
              title={t("cps4")}
              content={t("cps4_content")}
          />
          <Accordion
              title={t("cps5")}
              content={t("cps5_content")}
          />
          <Accordion
              title={t("cps6")}
              content={t("cps6_content")}
          />
          <Accordion
              title={t("cps7")}
              content={t("cps7_content")}
          />
          <Accordion
              title={t("cps8")}
              content={t("cps8_content")}
          />
          <Accordion
              title={t("cps9")}
              content=""
          />
          <Accordion
              title={t("cps10")}
              content={t("cps10_content")}
          />
          <Accordion
              title={t("cps11")}
              content=""
          />
          <Accordion
              title={t("cps12")}
              content={t("cps12_content")}
          />
          <Accordion
              title={t("cps13")}
              content={t("cps13_content")}
          />
          <Accordion
              title={t("cps14")}
              content={t("cps14_content")}
          />
          <Accordion
              title={t("cps15")}
              content={t("cps15_content")}
          />
          <Accordion
              title={t("cps16")}
              content={t("cps16_content")}
          />
          <Accordion
              title={t("cps17")}
              content={t("cps17_content")}
          />
          <div className="flex items-center justify-start h-[100px]">
              <div className="border-l-2 border-dashed border-[#e53527] h-full"></div>
          </div>
      </div>
  );
};
export default CPS;
