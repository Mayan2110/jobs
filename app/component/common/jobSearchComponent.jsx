import React from "react";
import Rectangle from "../../component/images/Rectangle.png";
import Image from "next/image";

export const JobSearchComponent = () => {
  return (
    <div className="w-3/4 p-4">
      <div className="bg-white p-4 rounded-lg shadow-md w-[925px] h-[344px]">
        <div className="flex items-center mb-4 gap-4">
          <Image src={Rectangle}></Image>
          <div>
            <h3 className="text-lg font-semibold h-[28px] w-[184px] text-[25px]">
              Linearloop
            </h3>
            <p className="text-gray-500 mb-4">Location</p>
          </div>
          <div className="ml-auto text-gray-500 h-[28px] w-[215px] text-[20px] ">
            <p>Salary: 25000,40,000</p>
          </div>
        </div>
        <h4 className=" font-semibold  text-[#002160] mb-2 w-[215px] h-[28px] text-[24px]">
          Node Developer
        </h4>
        <p className="text-[#002160] mb-6 h-[45px] w-[832px] text-[16px] ">
          NovoTech Solutions, BrightWorks Innovations, StellarEdge Enterprises,
          QuantumLeap Technologies, and EliteSphere Solutions.
        </p>
        <div className="flex justify-end  h-[28px] text-[25px]   ">
          <a className="text-blue-600 " href="#">
            See more
          </a>
        </div>
      </div>
    </div>
  );
};
export default JobSearchComponent;
