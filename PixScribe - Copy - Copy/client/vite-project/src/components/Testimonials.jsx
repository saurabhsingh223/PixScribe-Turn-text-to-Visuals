import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div
      className="flex flex-col items-center justify-center my-20 py-12 
      bg-gray-600 text-gray-100"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Customer <span className="text-teal-400">Testimonials</span>
      </h1>
      <p className="text-gray-400 mb-12">What Our Users Are Saying</p>

      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800/80 p-8 rounded-2xl shadow-lg border 
            border-gray-700 w-80 m-auto cursor-pointer 
            hover:scale-[1.03] hover:border-teal-400 
            transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-16 h-16 border-2 border-teal-400"
              />
              <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
              <p className="text-teal-400 mb-4">{testimonial.role}</p>
              
              {/* Stars */}
              <div className="flex mb-4">
                {Array(testimonial.stars)
                  .fill()
                  .map((_, index) => (
                    <img
                      key={index}
                      src={assets.rating_star}
                      className="w-5 h-5"
                      alt="star"
                    />
                  ))}
              </div>

              <p className="text-center text-sm text-gray-300">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
