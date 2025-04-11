import Accordion from "../Accoridan/accordian";
import {useTranslation} from "react-i18next";

const ERT = () => {
    const {t} = useTranslation();
  return (
      <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
          <h1 className="font-bold sm:text-4xl text-[28px]">{t("ert1")} </h1>
          <p className="mt-3 italic font-light mb-[1.5rem]">
              {t("ert2")}
          </p>
          <p className="font-semibold text-lg mb-[2rem]">
              {t("ert3")}
          </p>
          <Accordion
              title={t("ert4")}
              content={t("ert4_content")}
          />
          <Accordion
              title={t("ert5")}
              content={t("ert5_content")}
          />
          <Accordion
              title={t("ert6")}
              content={t("ert6_content")}
          />
          <Accordion
              title={t("ert7")}
              content={t("ert7_content")}
          />
          <div className="flex items-center justify-start h-[100px]">
              <div className="border-l-2 border-dashed border-[#e53527] h-full"></div>
          </div>
      </div>
  );
};
export default ERT;
