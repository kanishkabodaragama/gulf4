import Accordion from "../Accoridan/accordian";
import { useTranslation} from "react-i18next";



const HRM = () => {
    const { t } = useTranslation();
    return (
        <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
          <h1 className="font-bold sm:text-4xl text-[28px] xl:text-[48px]">{t("hrm1")} </h1>
          <p className="mt-3 italic font-light mb-[3rem] xl:text-[18px]">
            {t("hrm2")}
          </p>
          <Accordion
              title={t("hrm3")}
              content={t("hrm3_content")}
          />
          <Accordion
              title={t("hrm4")}
              content={t("hrm4_content")}
          />
          <Accordion
              title={t("hrm5")}
              content={t("hrm5_content")}
          />
          <Accordion
              title={t("hrm6")}
              content={t("hrm6_content")}
          />
          <Accordion
              title={t("hrm7")}
              content={t("hrm7_content")}
          />
          <Accordion
              title={t("hrm8")}
              content={t("hrm8_content")}
          />
          <Accordion
              title={t("hrm9")}
              content={t("hrm9_content")}
          />
          <Accordion
              title={t("hrm10")}
              content=""
          />
          <Accordion
              title={t("hrm11")}
              content=""
          />
          <Accordion
              title={t("hrm12")}
              content=""
          />
          <Accordion
              title={t("hrm13")}
              content=""
          />
          <Accordion
              title={t("hrm14")}
              content=""
          />
          <div className="flex items-center justify-start h-[100px]">
            <div className="border-l-2 border-dashed border-[#e53527] h-full"></div>
          </div>
        </div>
    );
};
export default HRM;
