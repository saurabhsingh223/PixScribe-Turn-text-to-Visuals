import React from "react";
import { assets } from "../assets/assets";

const Desccription = () => {
  return (
    <div
      className="flex flex-col items-center
    justify-center my-16 p-4 md:px-20"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-1 text-white">
        Create AI Images
      </h1>
      <p className="text-gray-400 mb-6">Turn your imagination into visuals</p>

      <div
        className="flex flex-col gap-4 md:gap-10 md:flex-row 
      items-center"
      >
        {/* Image */}
        <img
          src={assets.sample_img_3}
          alt=""
          className="w-80 xl:w-96 rounded-lg"
        />

        {/* Text Section */}
        <div>
          <h2
            className="text-3xl font-medium
          max-w-lg mb-3 text-white"
          >
            Introducing <span className="text-teal-400">PixScribe</span>, the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-300 mb-3">
            Bring your ideas to life with our free AI image generator. Whether
            you need stunning visuals or unique designs, our tool transforms
            text into eye-catching images in seconds. Imagine it, describe it,
            and watch it appear instantly.
          </p>
          <p className="text-gray-300">
            Simply type a prompt, and our advanced AI will create high-quality
            results in moments. From product shots to character art and
            portraits, even concepts that don’t exist yet can be visualized
            effortlessly. Powered by cutting-edge technology, the creative
            possibilities are limitless!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Desccription;
