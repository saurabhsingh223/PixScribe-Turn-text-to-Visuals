import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div
      className="flex flex-col justify-center items-center
    text-center my-20"
    >
      {/* Top badge */}
      <div
        className="text-teal-400 inline-flex text-center
      gap-2 bg-gray-800 px-6 py-1 rounded-full border border-gray-600"
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl mx-auto mt-10 text-center">
        Turn text to <br />
        <span className="text-teal-400">images</span>, in seconds.
      </h1>

      {/* Subtext */}
      <p className="text-center max-w-xl mx-auto mt-5 text-gray-300">
        Transform words into stunning works of art with{" "}
        <span className="text-teal-400">PixScribe</span>. Describe your
        vision, and our AI instantly brings it to life.
      </p>

      {/* CTA button */}
      <button
        className="sm:text-lg text-white bg-teal-500 
      w-auto mt-8 px-12 py-2.5 flex items-center
       gap-2 rounded-full hover:bg-teal-600 hover:scale-105 transition-all duration-500"
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </button>

      {/* Sample images */}
      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              className="rounded hover:scale-105 transition-all 
              duration-300 cursor-pointer 
              max-sm:w-10"
              src={
                index === 0
                  ? assets.sample_img_0
                  : assets[`sample_img_${index}`]
              }
              alt=""
              key={index}
              width={70}
            />
          ))}
      </div>

      {/* Footer note */}
      <p className="mt-2 text-gray-200">Generated images from <span className="text-teal-400">PixScribe</span></p>
    </div>
  );
};

export default Header;
