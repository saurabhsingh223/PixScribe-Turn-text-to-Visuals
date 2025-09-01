import React from "react";
import { stepsData } from "../assets/assets";

const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center my-32">

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center">
        How <span className="text-teal-400">PixScribe</span> works
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-300 mb-8 text-center">
        Transform Words Into Stunning Images
      </p>

      {/* Steps */}
      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-5 px-8 bg-gray-800 
            shadow-md border border-gray-700 cursor-pointer 
            hover:scale-[1.02] transition-all duration-300 rounded-lg"
          >
            {/* Icon */}
            <img width={40} src={item.icon} alt="" />

            {/* Text Content */}
            <div>
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Steps;
