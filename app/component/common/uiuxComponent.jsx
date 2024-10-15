import Image from "next/image";
import React from "react";
import Rectangle from "../images/Rectangle.png";
import Profile from "../icons/profile";
import Location from "../icons/location";
/* <Image src={Rectangle} alt="no image " /> */

const UiuxComponent = () => {
  return (
    <>
      {" "}
      <div class="p-4 flex items-center space-x-8">
        <Image src={Rectangle} alt="no image " />

        <div>
          <h2 class="text-xl font-semibold text-blue-900 w-[195px] h-[16px] text-[25px] mt-3 :">
            UI/UX Design
          </h2>
          <p class="text-gray-400 h-[195px]h-[16px] text-[20px] mt-5">
            Company
          </p>
        </div>
      </div>
      <div className="text-center ms-5">
        <div class="flex items-center text-gray-400  h-4 gap-4 ">
          <Profile />

          <span>5 people Required</span>
        </div>
        <div class="flex items-center text-gray-400 mt-3 h-4 gap-4 ">
          <Location/>

          <span>Location of the company</span>
        </div>
      </div>
    </>
  );
};

export default UiuxComponent;
