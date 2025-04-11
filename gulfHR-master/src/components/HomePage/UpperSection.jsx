// homepage image section
import React from "react";
import ScrollReveal from "./StickySlider1";
import "./upperSection.css";

window.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal(".image-content", {
    duration: 2000,
    origin: "right",
    distance: "100px",
    easing: "ease-in-out",
  });
});

const UpperSection = () => {
  return (
    <div class="flex flex-col-reverse md:flex-row h-screen">
      <div class="w-full md:w-1/2 flex flex-col items-center justify-center bg-blue-500 text-white">
        <div class="text-start">
          <h1 class="mx-10 text-4xl font-bold mb-10">Powerful human resource and </h1>
          <h1 class="mx-10 text-4xl font-bold">payroll management system</h1>
        </div>
        <div class="mt-8 md:mt-0 md:absolute md:bottom-0 md:left-0 md:w-full md:h-full md:flex md:items-center md:justify-center md:hidden">
          <img src="/images/Home/home-banner-01.png" alt="Right Side Image" class="rounded-xl h-full max-h-200 md:max-h-full" />
        </div>
      </div>
      <div class="w-full md:w-1/2 flex items-center justify-end bg-gray-300 ">
        <img src="/images/Home/home-banner-01.png" alt="Right Side Image" class="rounded-xl h-full max-h-200 md:max-h-full" />
      </div>
    </div>
  );
};

export default UpperSection;
