import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { TfiEmail } from "react-icons/tfi";

const ContactDetails = () => {
      //translation
      const { t } = useTranslation()
  return (
    <div className="sm:px-20 mt-[4rem] px-5">
      <div className="mb-5 text-lg">
        <p className="mb-2">{t("c3")}</p>
        {/* <p>Email:</p> */}
        {/* <div className="flex">
          <TfiEmail className="h-10 mr-4 -mt-1 text-2xl font-thin w-7" />
          <a className="underline cursor-pointer underline-offset-8 decoration-0 hover:no-underline" href="mailto:sales@gulfsolution.com">sales@gulfsolution.com</a>
        </div> */}
        <span className="relative flex cursor-pointer group">
          <TfiEmail className="mr-4 text-2xl font-thin " />
          <span className="relative">    
            sales@gulfsolution.com
            <span className="absolute bottom-0  right-0 w-full h-[1px] bg-[#fff] transition-all duration-300 group-hover:w-0"></span>
          </span>
        </span>
      </div>
      <div className="mb-5 text-lg">
        <p className="mb-2">{t("c4")}</p>
        {/* <p>Saudi Arabia:</p> */}
        <span className="relative flex cursor-pointer group">
          <FiPhone className="mr-4 text-2xl font-thin rotate-45" />
          <span className="relative">  
            +966(0)115902718
            <span className="absolute bottom-0  right-0 w-full h-[1px] bg-[#fff] transition-all duration-300 group-hover:w-0"></span>
          </span> 
        </span>
      </div>
      <div className="mb-5 text-lg">
        <p className="mb-2">{t("c5")}</p>
        {/* <p>Bahrain, Quatar:</p> */}
        <span className="relative flex cursor-pointer group">
          <FiPhone className="mr-4 text-2xl font-thin rotate-45" />
          <span className="relative">  
            +973 175 40015
            <span className="absolute bottom-0  right-0 w-full h-[1px] bg-[#fff] transition-all duration-300 group-hover:w-0"></span>
          </span>                  
        </span>
      </div>
      <div className="mb-5 text-lg">
        <p className="mb-2">{t("c6")}</p>
        {/* <p>UAE, Oman:</p> */}
        <span className="relative flex cursor-pointer group">
          <FiPhone className="mr-4 text-2xl font-thin rotate-45" />
          <span className="relative">
            +966(0)115902718
            <span className="absolute bottom-0  right-0 w-full h-[1px] bg-[#fff] transition-all duration-300 group-hover:w-0"></span>
          </span>
        </span>
      </div>
      <div className="mb-5 text-lg">
        <p className="mb-2">{t("c7")}</p>
        {/* <p>Other:</p> */}
        <span className="relative flex cursor-pointer group">
          <FiPhone className="mr-4 text-2xl font-thin rotate-45" />
          <span className="relative">
            +973 175 40015
            <span className="absolute bottom-0  right-0 w-full h-[1px] bg-[#fff] transition-all duration-300 group-hover:w-0"></span>
          </span>
        </span>
      </div>
    </div>
  );
};
export default ContactDetails;
