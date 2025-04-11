import React, { useState, useEffect, useRef, useMemo } from "react";
import "./bottom-sticky.css";
import { useTranslation } from "react-i18next";


const getContent = (section, t) => {
  const contentMap = {
    onCloud: {
      title: t("bs10"),
      subTitle: t("bs3"),
      content: t("bs11"),
      title2: t("bs12"),
      additionalContent: t("bs13"),
    },
    hosted: {
      title: t("bs14"),
      subTitle: t("bs5"),
      content: t("bs15"),
    },
    onPremise: {
      title: t("bs18"),
      subTitle: t("bs7"),
      content: t("bs19"),
    },
    outsourced: {
      title: t("bs20"),
      subTitle: t("bs9"),
      content: t("bs21"),
    },
  };
  return contentMap[section];
};

const BottomStickySlider = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("onCloud");
  const sections = useMemo(() => ["onCloud", "hosted", "onPremise", "outsourced"], []);
  const sectionRefs = useRef({});
  const [clickedSections, setClickedSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section) => {
        const sectionElement = sectionRefs.current[section];
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const handleClick = (section) => {
    setClickedSections((prev) =>
      prev.includes(section) ? prev : [...prev, section]
    );
    sectionRefs.current[section].scrollIntoView({ behavior: "smooth" });
  };
  

  const renderDesktopView = () => (
      <div className="flex justify-center mx-20 mt-20 desktop-view ml-[15%]">
        <p className="text-lg font-bold -ml-[5%]">
          {t("bs1")} <br/>
          {t("bs1a")}
        </p>
        <div className="my-4 border w-[25%] opacity-10 -ml-[5%]"></div>
        <div className="flex w-full max-w-6xl">
          <div className="sticky top-0 h-screen p-6 -ml-16">
            <ul className="mr-8 space-y-10 ml-14">
              {sections.map((section) => (
                  // <li
                  //     key={section}
                  //     // className={`md:text-[24px] font-semibold opacity-50 cursor-pointer hover:text-[#000000]  ${activeSection === section ? "font-bold text-red-500" : "text-gray-500"}`}
                  //     className={`md:text-[24px] font-semibold text-[#828181] cursor-pointer hover:text-[#000000] ${
                  //       activeSection === section ? "font-bold text-red-500" : "text-gray-500"
                  //     }`}
                      
                  //     onClick={() => {
                  //       sectionRefs.current[section].scrollIntoView({behavior: "smooth"});
                  //     }}
                  // >
                  //   {t(`bs${section === "onCloud" ? "2" : section === "hosted" ? "4" : section === "onPremise" ? "6" : "8"}`)}
                  //   <div className="text-sm font-light opacity-50 md:text-lg">{getContent(section, t).subTitle}</div>
                  // </li>
                  <li
                  key={section}
                  className={`md:text-[24px] font-semibold cursor-pointer ${
                    // Active section
                      clickedSections === section
                      ? "text-[#000000]" // Clicked section stays black
                      : "text-[#828181] hover:text-[#000000]" // Default gray with hover effect
                  }`}
                  onClick={() => {
                    // Scroll to the clicked section smoothly
                    sectionRefs.current[section].scrollIntoView({ behavior: "smooth" });

                    // Set the clicked section, removing black text effect from previously clicked one
                    setClickedSections(section);
                  }}
                >
                  {t(
                    `bs${
                      section === "onCloud"
                        ? "2"
                        : section === "hosted"
                        ? "4"
                        : section === "onPremise"
                        ? "6"
                        : "8"
                    }`
                  )}
                  <div className="text-sm font-light opacity-50 md:text-lg">
                    {getContent(section, t).subTitle}
                  </div>
                </li>

              ))}
            </ul>
          </div>
          <div className="flex-1 p-4 ml-24">
            {sections.map((section) => (
                <div key={section} ref={(el) => (sectionRefs.current[section] = el)} className="mb-16">
                  <h2 className="mb-4 text-2xl font-bold">{getContent(section, t).title}</h2>
                  <p className="mb-4 text-lg">{getContent(section, t).content}</p>
                  {getContent(section, t).title2 && (
                      <>
                        <h2 className="mb-4 text-2xl font-bold">{getContent(section, t).title2}</h2>
                        <p className="text-lg">{getContent(section, t).additionalContent}</p>
                      </>
                  )}
                </div>
            ))}
          </div>
        </div>
      </div>
  );

  const renderMobileView = () => (
      <div className="mobile-view">
        <div>
          <p className="text-[41px] font-bold px-16 text-start leading-[54px]">
            {t("bs1")} <br/>
            {t("bs1a")}
          </p>
        </div>
        <div className="p-4 mobile-content">
          {sections.map((section) => (
              <div key={section} className="mb-16">
                <h3 className="mb-4 text-xl font-semibold text-gray-700">
                  {t(`bs${section === "onCloud" ? "2" : section === "hosted" ? "4" : section === "onPremise" ? "6" : "8"}`)}
                </h3>
                <h2 className="mb-4 text-2xl font-bold">{getContent(section, t).title}</h2>
                <p className="mb-4 text-lg">{getContent(section, t).content}</p>
                {getContent(section, t).title2 && (
                    <>
                      <h2 className="mb-4 text-2xl font-bold">{getContent(section, t).title2}</h2>
                      <p className="text-lg">{getContent(section, t).additionalContent}</p>
                    </>
                )}
              </div>
          ))}
        </div>
      </div>
  );

  return (
      <div>
        {renderDesktopView()}
        {renderMobileView()}
      </div>
  );
};

export default BottomStickySlider;