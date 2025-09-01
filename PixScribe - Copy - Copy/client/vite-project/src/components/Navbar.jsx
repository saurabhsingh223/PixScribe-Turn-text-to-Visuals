import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo4_1} alt="" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? ( // if user logged in
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Buy credits button */}
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-teal-500 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:bg-teal-600 hover:scale-105 transition-all duration-700"
            >
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium text-white">
                Coins : 50
              </p>
            </button>

            {/* Greeting */}
            <p className="text-gray-300 max-sm:hidden pl-4"> Hi, Saurabh</p>

            {/* Profile dropdown */}
            <div className="relatiive group">
              <img
                src={assets.profile_icon}
                className="w-10 drop-shadow cursor-pointer"
                alt=""
              />
              <div
                className="absolute hidden group-hover:block 
            top-0 right-0 z-10 text-gray-100 rounded pt-12"
              >
                <ul
                  className="list-none m-0 p-2 bg-gray-800
                rounded-md border border-gray-700 text-sm"
                >
                  <li className="py-1 px-2 cursor-pointer pr-10 hover:text-teal-400">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // else (if no user)
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buy")}
              className="cursor-pointer text-gray-300 hover:text-teal-400"
            >
              Pricing
            </p>

            <button
              className="bg-teal-500 text-white px-7
          py-2 sm:px-10 text-sm rounded-full hover:bg-teal-600"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
