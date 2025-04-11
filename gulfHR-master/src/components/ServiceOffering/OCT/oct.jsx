import Accordion from "../Accoridan/accordian";
import {useTranslation} from "react-i18next";

const OCT = () => {
    const {t } = useTranslation();
  return (
      <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
          <h1 className="font-bold sm:text-4xl text-[28px]">{t("oct1")}</h1>
          <p className="mt-3 italic font-light mb-[1.5rem]">
              {t("oct2")}
          </p>
          <p className="mt-3 font-thin text-lg mb-[1.5rem]">
              {t("oct3")}
          </p>
          <p className="font-semibold text-lg mb-[2rem]">
              {t("oct4")}
          </p>
          <Accordion
              title={t("oct5")}
              content={t("oct5_content")}
          />
          <Accordion
              title={t("oct6")}
              content={t("oct6_content")}
          />
          <Accordion
              title={t("oct7")}
              content={t("oct7_content")}
          />
          <Accordion
              title={t("oct8")}
              content={t("oct8_content")}
          />
          <div className="flex items-center justify-start h-[100px]">
              <div className="border-l-2 border-dashed border-[#e53527] h-full"></div>
          </div>
      </div>
  );
};
export default OCT;
