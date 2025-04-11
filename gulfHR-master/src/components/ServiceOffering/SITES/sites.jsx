import Accordion from "../Accoridan/accordian";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const SITES = () => {
    const { t } = useTranslation();

    // State to track if the title is clicked or not
    const [clicked, setClicked] = useState(false);

    // Toggle the clicked state
    const handleClick = () => {
        setClicked((prev) => !prev);
    };

    // Translation keys for the financial systems list
    const financialSystems = [
        "si3_1",
        "si3_2",
        "si3_3",
        "si3_4",
        "si3_5",
        "si3_6",
        "si3_7",
        "si3_8",
    ];

    return (
        <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
            <h1 className="font-bold sm:text-4xl text-[28px]">{t("si1")}</h1>
            <p className="mt-3 italic font-light mb-[1.5rem]">{t("si2")}</p>
            <Accordion
                title={
                    <>
                        <div
                            onClick={handleClick}
                            className={`relative pb-2 group ${clicked ? "text-[#e53527]" : ""}`}
                        >
                        <span
                            className="relative transition-colors duration-500 ease-in-out group-hover:text-[#e53527]">
                            {t("si3")}
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
                        {financialSystems.map((key) => (
                            <div key={key}>
                                <span style={{color: "red", fontSize: "12px"}}>&#10004;</span>
                                <span style={{marginLeft: "8px"}}>{t(key)}</span>
                            </div>
                        ))}
                        <br/>
                        <strong>{t("si4")}</strong>
                        <br/>
                        <br/>
                        {t("si5")}
                        <br/>
                        <br/>
                        {t("si6")}
                    </>
                }
                customClass="no-black-underline" // Disable black underline
            />
            <div className="flex items-center justify-start h-[100px]">
                <div className="border-l-2 border-dashed border-[#e53527] h-full"></div>
            </div>
        </div>
    );
};

export default SITES;
