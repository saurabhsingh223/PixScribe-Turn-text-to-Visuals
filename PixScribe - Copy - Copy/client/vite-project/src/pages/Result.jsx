import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_5)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  // Backend part
  const onSubmitHandler = async (e) => {}

  return (
    <form 
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >

      {/* Image + Loading Bar */}
      <div>
        <div className="relative">
          <img
            src={image}
            alt=""
            className="max-w-[280px] sm:max-w-[360px] rounded"
          />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 
              ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}
            `}
          />
        </div>
        <p className={!loading ? 'hidden' : ''}>Loading.....</p>
      </div>

      {/* Input Section (before image load) */}
      {!isImageLoaded && 
        <div
          className="flex w-full max-w-lg bg-neutral-600 text-white
          text-sm p-0.5 mt-8 rounded-full"
        >
          <input
            onChange={e => setInput(e.target.value)} 
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-6 placeholder-color text-sm"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-6 sm:px-10 py-2 rounded-full text-sm"
          >
            Generate
          </button>
        </div>
      }

      {/* Buttons (after image load) */}
      {isImageLoaded && 
        <div 
          className="flex gap-2 flex-wrap justify-center text-white 
          text-sm p-0.5 mt-8 rounded-full"
        >
          <p 
            onClick={() => setIsImageLoaded(false)} 
            className="bg-transparent border border-zinc-900 text-black 
            px-6 py-2 rounded-full cursor-pointer text-sm"
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-6 py-2 rounded-full cursor-pointer text-sm"
          >
            Download
          </a>
        </div>
      }

    </form>
  )
}

export default Result
