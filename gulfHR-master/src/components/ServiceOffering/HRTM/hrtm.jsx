// import Accordion from "../Accoridan/accordian";
// import { useTranslation } from "react-i18next";

// const HRTM = () => {
//     const { t } = useTranslation();

//     // Define the list of translation keys
//     const listItems = [
//         "hrt4_1",
//         "hrt4_2",
//         "hrt4_3",
//         "hrt4_4",
//         "hrt4_5",
//         "hrt4_6",
//         "hrt4_7",
//         "hrt4_8",
//     ];

//     return (
//         <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
//             <h1 className="font-bold sm:text-4xl text-[28px]">{t("hrt1")}</h1>
//             <p className="mt-3 italic font-light mb-[1.5rem]">{t("hrt2")}</p>
//             <p className="font-semibold text-lg mb-[1rem]">{t("hrt3")}</p>
//             <Accordion
//                 title={
//                     <>
//             {/* <span className="text-[#e53527] border-b-2 border-[#e53527]">
//               {t("hrt4")}
//             </span> */}
//             <div class="text-[#e53527] relative pb-2">
//                 <span class="border-b-2 border-[#e53527] block absolute left-0 bottom-[6px] w-full"></span>
//                 {t("hrt4")}
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

// export default HRTM;


import Accordion from "../Accoridan/accordian";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const HRTM = () => {
    const { t } = useTranslation();
    const [clicked, setClicked] = useState(false); // State to track if clicked

    // Define the list of translation keys
    const listItems = [
        "hrt4_1",
        "hrt4_2",
        "hrt4_3",
        "hrt4_4",
        "hrt4_5",
        "hrt4_6",
        "hrt4_7",
        "hrt4_8",
    ];

    const handleClick = () => {
        setClicked((prev) => !prev); // Toggle the clicked state on each click
    };

    return (
        <div className="lg:ml-[7rem] mt-[4rem] px-[3rem]">
            <h1 className="font-bold sm:text-4xl text-[28px]">{t("hrt1")}</h1>
            <p className="mt-3 italic font-light mb-[1.5rem]">{t("hrt2")}</p>
            <p className="font-semibold text-lg mb-[1rem]">{t("hrt3")}</p>
            <Accordion
                title={
                    <>
                        <div
                            onClick={handleClick}
                            className={`relative pb-2 group ${clicked ? "text-[#e53527]" : ""}`}
                        >
                        <span
                            className="relative transition-colors duration-500 ease-in-out group-hover:text-[#e53527]">
                            {t("hrt4")}
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

export default HRTM;
