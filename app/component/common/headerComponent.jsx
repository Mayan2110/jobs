import React from "react";
import SearchIcon from "../icons/searchIcon";
import NavbarComponent from "./navbarComponent";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <nav className="bg-blue-900 text-white ">
          <div className="container mx-auto px-4 py-2 flex justify-end items-center space-x-6 pr-52">
            <div className="relative group">
              <button className="focus:outline-none leading-4">
                Resource Library <i className="fas fa-chevron-down"></i>
              </button>
              <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Option 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Option 2
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Option 3
                </a>
              </div>
            </div>

            <a href="/signin" className="hover:underline">
              Sign In
            </a>
            <a href="#" className="hover:underline">
              Support
            </a>
            <a href="#" className="hover:underline">
              Contact Sales
            </a>

            <a href="#" className="">
              <SearchIcon />
            </a>
          </div>
        </nav>
      </div>
      <NavbarComponent />
    </>
  );
};

export default HeaderComponent;
