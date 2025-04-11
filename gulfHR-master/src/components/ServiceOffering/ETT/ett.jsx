import Accordion from "../Accoridan/accordian";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const ETT = () => {
    const { t } = useTranslation();
    const [clickedAccordion1, setClickedAccordion1] = useState(false); // State to track the clicked status for the first accordion
    const [clickedAccordion2, setClickedAccordion2] = useState(false); // State to track the clicked status for the second accordion

    // Translation keys for the first accordion
    const timeAndAttendanceItems = [
        "ett5_1",
        "ett5_2",
        "ett5_3",
        "ett5_4",
        "ett5_5",
        "ett5_6",
        "ett5_7",
        "ett5_8",
    ];

    // Translation keys for the second accordion
    const timesheetItems = [
        "eet6_1",
        "eet6_2",
        "eet6_3",
        "eet6_4",
        "eet6_5",
        "eet6_6",
        "eet6_7",
        "eet6_8",
    ];

    // Toggle function for the first accordion
    const handleAccordion1Click = () => {
        setClickedAccordion1((prev) => !prev);
    };

    // Toggle function for the second accordion
    const handleAccordion2Click = () => {
        setClickedAccordion2((prev) => !prev);
    };

    return (
        <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
            <h1 className="font-bold sm:text-4xl text-[28px]">{t("ett1")}</h1>
            <p className="mt-3 italic font-light mb-[1.5rem]">{t("ett2")}</p>
            <p className="font-semibold text-lg mb-[1rem]">{t("ett3")}</p>

            {/* First Accordion */}
            <Accordion
                title={
                    <div
                        onClick={handleAccordion1Click}
                        className={`relative pb-2 group ${clickedAccordion1 ? "text-[#e53527]" : ""}`}
                    >
                        <span className="relative transition-colors duration-500 ease-in-out group-hover:text-[#e53527]">
                            {t("ett4")}
                        </span>
                        <span
                            className={`absolute left-0 bottom-[4px] h-[2px] w-full transition-transform duration-500 ease-in-out origin-left ${
                                clickedAccordion1 ? "bg-[#e53527] scale-x-100" : "bg-[#e53527] scale-x-0 group-hover:scale-x-100"
                            }`}
                        ></span>
                    </div>
                }
                content={
                    <>
                        <p>{t("ett4_content")}</p>
                        <p className="mt-3 font-semibold">{t("ett5")}</p>
                        {timeAndAttendanceItems.map((key) => (
                            <div key={key}>
                                <span style={{ color: "red", fontSize: "12px" }}>&#10004;</span>
                                <span style={{ marginLeft: "8px" }}>{t(key)}</span>
                            </div>
                        ))}
                    </>
                }
                customClass="no-black-underline" // Disable black underline
            />

            {/* Second Accordion */}
            <Accordion
                title={
                    <div
                        onClick={handleAccordion2Click}
                        className={`relative pb-2 group ${clickedAccordion2 ? "text-[#e53527]" : ""}`}
                    >
                        <span className="relative transition-colors duration-500 ease-in-out group-hover:text-[#e53527]">
                            {t("ett6")}
                        </span>
                        <span
                            className={`absolute left-0 bottom-[4px] h-[2px] w-full transition-transform duration-500 ease-in-out origin-left ${
                                clickedAccordion2 ? "bg-[#e53527] scale-x-100" : "bg-[#e53527] scale-x-0 group-hover:scale-x-100"
                            }`}
                        ></span>
                    </div>
                }
                content={
                    <>
                        <p>{t("ett6_content")}</p>
                        <p className="mt-3 font-semibold">{t("eet6_sub")}</p>
                        {timesheetItems.map((key) => (
                            <div key={key}>
                                <span style={{ color: "red", fontSize: "12px" }}>&#10004;</span>
                                <span style={{ marginLeft: "8px" }}>{t(key)}</span>
                            </div>
                        ))}
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

export default ETT;
