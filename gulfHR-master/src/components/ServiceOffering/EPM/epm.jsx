// import Accordion from "../Accoridan/accordian";
// import { useTranslation } from "react-i18next";

// const EPM = () => {
//     const { t } = useTranslation();

//     // Define the list of translation keys
//     const listItems = [
//         "epm5_1",
//         "epm5_2",
//         "epm5_3",
//         "epm5_4",
//         "epm5_5",
//         "epm5_6",
//         "epm5_7",
//         "epm5_8",
//         "epm5_9",
//         "epm5_10",
//         "epm5_11",
//         "epm5_12",
//     ];

//     return (
//         <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
//             <h1 className="font-bold sm:text-4xl text-[28px]">{t("epm1")}</h1>
//             <p className="mt-3 italic font-light mb-[1.5rem]">{t("epm2")}</p>
//             <p className="font-semibold text-lg mb-[1rem]">{t("epm3")}</p>
//             <p className="font-thin text-lg mb-[1.5rem]">{t("epm4")}</p>
//             <Accordion
//                 title={
//                     <>
//             {/* <span className="text-[#e53527] border-b-2 border-[#e53527]">
//               {t("epm5")}
//             </span> */}
//             <div class="text-[#e53527] relative pb-2">
//                 <span class="border-b-2 border-[#e53527] block absolute left-0 bottom-[6px] w-full"></span>
//                 {t("epm5")}
//             </div>
//                     </>
//                 }
//                 content={
//                     <>
//                         {listItems.map((key) => (
//                             <div key={key}>
//                                 <span style={{ color: "red" }}>&#10004;</span>
//                                 <span style={{ marginLeft: "8px" }}>{t(key)}</span>
//                             </div>
//                         ))}
//                     </>
//                 }
//             />
//         </div>
//     );
// };

// export default EPM;

import Accordion from "../Accoridan/accordian";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const EPM = () => {
    const { t } = useTranslation();
    const [clicked, setClicked] = useState(false); // State to track the click state

    // Define the list of translation keys
    const listItems = [
        "epm5_1",
        "epm5_2",
        "epm5_3",
        "epm5_4",
        "epm5_5",
        "epm5_6",
        "epm5_7",
        "epm5_8",
        "epm5_9",
        "epm5_10",
        "epm5_11",
        "epm5_12",
    ];

    const handleClick = () => {
        setClicked((prev) => !prev); // Toggle the click state
    };

    return (
        <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
            <h1 className="font-bold sm:text-4xl text-[28px]">{t("epm1")}</h1>
            <p className="mt-3 italic font-light mb-[1.5rem]">{t("epm2")}</p>
            <p className="font-semibold text-lg mb-[1rem]">{t("epm3")}</p>
            <p className="font-thin text-lg mb-[1.5rem]">{t("epm4")}</p>
            <Accordion
                title={
                    <>
                        <div
                            onClick={handleClick}
                            className={`relative pb-2 group ${clicked ? "text-[#e53527]" : ""}`}
                        >
                        <span
                            className="relative transition-colors duration-500 ease-in-out group-hover:text-[#e53527]">
                            {t("epm5")}
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
                        {listItems.map((key) => (
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

export default EPM;
