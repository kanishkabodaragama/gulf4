import React from 'react';
import './home-feature.css';
import { useTranslation } from 'react-i18next';

const HomeFeature = () => {

  // Translation function
  const {t} = useTranslation();

  return (
    <div className="feature-container lg:mx-[5rem]">
      <div className="feature-item">
        <div className="feature-content w-[65%] xl:p-6">
          <h2 className='font-semibold sm:text-[28px] text-[22px] w-[300px] sm:w-full'>{t("hfs-1")}</h2>
          <p className='font-light text-[17px] w-[300px] sm:w-full mt-4'>{t("hfs-2")}</p>
        </div>
        <div className="feature-image">
          <img src="/images/Home/FeatureSection/image01.png" className='w-[22rem]' alt="Feature 1" />
        </div>
      </div>
      <div className="feature-item image2-bg">
        <div className="feature-content w-[40%]">
          <h2 className='text-[#fff] font-semibold text-[18px] lg:text-[28px] w-[200px] sm:w-full'>{t("hfs-3")}</h2>
          <p className='text-[#fff] font-light text-[14px] sm:text-[17px] mt-4 w-[220px] sm:w-full'>{t("hfs-4")}</p>
        </div>
        
      </div>
    </div>
  );
};

export default HomeFeature;
