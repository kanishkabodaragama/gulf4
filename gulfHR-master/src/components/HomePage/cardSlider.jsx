import React from "react";

const CardForSlider = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg group hover:bg-gray-200 transition-colors duration-300">
      {/* Logo and text container */}
      <div className="flex items-start">
        {/* Logo */}
        <img className="w-1/6 h-auto mr-4" src="/images/1.png" alt="Sunset in the mountains" />
        {/* Text container */}
        <div>
          {/* Title */}
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          {/* Description */}
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
            praesentium nihil.
          </p>
        </div>
      </div>

      {/* Tags container */}
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  );
};

export default CardForSlider;
