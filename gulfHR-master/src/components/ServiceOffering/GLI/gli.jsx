import Accordion from "../Accoridan/accordian";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const GLI = () => {
    const { t } = useTranslation();

    // State to manage whether the accordion title is clicked
    const [clicked, setClicked] = useState(false);

    // Toggle function to handle accordion title color change
    const handleClick = () => {
        setClicked((prev) => !prev);
    };

    return (
        <div className="lg:ml-[7rem] mt-[4rem] px-[3rem] mb-32">
            <h1 className="font-bold sm:text-4xl text-[28px]">{t("gli1")}</h1>
            <p className="mt-3 italic font-light mb-[1.5rem]">{t("gli2")}</p>
            <Accordion
                title={
                    <>
                        <div
                            onClick={handleClick}
                            className={`relative pb-2 group ${clicked ? "text-[#e53527]" : ""}`}
                        >
                        <span
                            className="relative transition-colors duration-500 ease-in-out group-hover:text-[#e53527]">
                            {t("gli3")}
                        </span>
                            <span
                                className={`absolute left-0 bottom-[4px] h-[2px] w-full transition-transform duration-500 ease-in-out origin-left ${
                                    clicked ? "bg-[#e53527] scale-x-100" : "bg-[#e53527] scale-x-0 group-hover:scale-x-100"
                                }`}
                            ></span>
                        </div>
                    </>
                }
                content={
                    <>
                        <p>{t("gli3_1")}</p>
                        <br/>
                        <p>{t("gli3_2")}</p>
                    </>
                }
                customClass="no-black-underline" // Disable black underline
            />
        </div>
    );
};

export default GLI;
