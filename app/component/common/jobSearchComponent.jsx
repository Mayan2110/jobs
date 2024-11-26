import React from "react";
import Rectangle from "../../component/images/Rectangle.png";
import Image from "next/image";
import Link from "next/link";
 

const JobSearchComponent = (props) => {
  const { job } = props;

  return (
    <div className="w-3/4 p-4">
      <div className="bg-white p-4 rounded-lg shadow-md w-[925px] h-[344px]">
        <div className="flex items-center mb-4 gap-4">
          <Image src={Rectangle}></Image>
          <div>
            <h3 className="text-lg font-semibold h-[28px] w-[184px] text-[25px]">
              {job?.company_name}
            </h3>
            <p className="text-gray-500 mb-4">{job?.location}</p>
          </div>
          <div className="ml-auto text-gray-500 h-[28px] w-[215px] text-[20px]">
            <p>
              Salary: {job?.salary_min} - {job?.salary_max}
            </p>
          </div>
        </div>
        <h4 className=" font-semibold text-[#002160] mb-4 w-[215px] h-[28px] text-[24px]">
          {job?.job_title}
        </h4>
        <p className="text-[#002160] mb-6  w-[832px] text-[16px]">
          {job?.job_Overview}
        </p>
        <div className="flex justify-between ">
          <p className="text-[#002160] mb-4 text-[25px]  ">
            <strong>Job Type:</strong> {job?.job_type}
          </p>
          <div className="flex justify-end h-[28px] text-[25px]">
            <Link className="text-blue-600" href={`/job-detail/${job?.id}`}>
              see more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchComponent;
