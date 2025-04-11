import Accordion from "../Accoridan/accordian";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const SITWS = () => {
    const { t } = useTranslation();

    // Define the list of translation keys for the accordion content
    const integrationItems = [
        "sit4_1",
        "sit4_2",
        "sit4_3",
        "sit4_4",
        "sit4_5",
        "sit4_6",
    ];

    // State to manage whether the accordion title is clicked
    const [clicked, setClicked] = useState(false);

    // Toggle function to handle accordion title color change
    const handleClick = () => {
        setClicked((prev) => !prev);
    };

    return (
        <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
            <h1 className="font-bold sm:text-4xl text-[28px]">{t("sit1")}</h1>
            <p className="mt-3 italic font-light mb-[1.5rem]">{t("sit")}</p>
            <p className="font-semibold text-lg mb-[1rem]">{t("sit3")}</p>
            <Accordion
                title={
                    <>
                        <div
                            onClick={handleClick}
                            className={`relative pb-2 group ${clicked ? "text-[#e53527]" : ""}`}
                        >
                        <span
                            className="relative transition-colors duration-500 ease-in-out group-hover:text-[#e53527]">
                            {t("sit4")}
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
                        {integrationItems.map((key) => (
                            <div key={key}>
                                <span style={{color: "red", fontSize: "12px"}}>&#10004;</span>
                                <span style={{marginLeft: "8px"}}>{t(key)}</span>
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

export default SITWS;
