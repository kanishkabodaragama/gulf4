import { useTranslation } from "react-i18next";


const ThreeDivFeature = () => {

  // Translation Function
  const {t} = useTranslation();

  return (
    <div className="three-div-feature mx-[4rem] lg:mx-[8rem] my-[4rem]">
      <div className="main-div lg:flex">
        <div className="left_div bg-[#e53527] lg:w-[90%] w-[120%] sm:ml-0 -ml-7 rounded-xl sm:px-10 px-5 py-10">
          <div className="">
            <h1 className="mb-5 text-[28px] font-semibold">
              {t("tdf1")} <br />
              {t("tdf1.5")}
            </h1>
            <div className="font-light text-[17px] leading-7">
              <p className="mb-4">
              {t("tdf2")}
              </p>
              <p className="mb-4">
              {t("tdf3")}
              </p>
              <p className="mb-4">
              {t("tdf4")}
              </p>
              <p>
              {t("tdf5")}
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="mt-5 lg:w-[22rem]"
                src="/images/Home/ThreeDiv/image1.png"
                alt="featureimage"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 lg:ml-10 right_div lg:mt-0 w-[120%] sm:ml-0 -ml-7">
          <div className="bg-[#707173] rounded-xl px-10 py-10 lg:flex">
            <div>
            <h1 className="text-[28px] font-semibold mb-5 text-[#fff]">
            {t("tdf6")}
            </h1>
            <div className="font-thin leading-7 w-[90%] text-[#fff] lg:text-[15px]">
              <p className="mb-4">
              {t("tdf7")}
              </p>
              <p>
              {t("tdf8")}
              </p>
            </div>
            </div>
            <div className="flex justify-center">
              <img
                className="object-cover -mr-2 -mb-8 lg:w-[46rem]"
                src="/images/Home/ThreeDiv/image2.png"
                alt="featureimage"
              />
            </div>
          </div>
          <div className="bg-[#fff] rounded-xl sm:px-10 px-4 py-10 mt-10">
            <h1 className="sm:text-[28px] text-[22px] font-semibold mb-5">
            {t("tdf9")}
            </h1>
            <div className="font-light text-[17px] leading-7">
              <p className="mb-4">
              {t("tdf10")}
              </p>
              <p className="italic">
              {t("tdf11")}
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="mt-5 object-cover w-[9rem] object-center"
                src="/images/Home/ThreeDiv/icons.gif"
                alt="featureimage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDivFeature;
