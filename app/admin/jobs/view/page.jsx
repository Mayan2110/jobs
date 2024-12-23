"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import RectangleImageComponent from "../../../component/common/rectangleImageComponent";
import Adminlayout from "../../../component/common/adminLayout";
import { fetchJobsApiByid } from "@/app/Api";

const JobViewData = () => {
  const params = useSearchParams();
  const router = useRouter();
  const id = params.get("id") ?? "";
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetchJobsApiByid({ id: id });

      if (response) {
        setLoading(false);
        setJob(response);
      } else {
        throw new Error("Failed to fetch job data.");
      }
    } catch (error) {
      console.error("Error fetching job data:", error);
      toast.error("Failed to fetch job data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return (
      <Adminlayout>
        <div className="flex justify-center items-center h-screen">
          <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
          <span className="ml-2 text-blue-500 font-semibold"></span>
        </div>
      </Adminlayout>
    );
  }

  return (
    <Adminlayout>
      <div className="mx-auto">
        <button
          onClick={() => router.back()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back
        </button>
        <div className="flex mx-auto justify-center">
          <div className="p-6">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4 gap-2">
                <RectangleImageComponent />
                <div>
                  <h1 className="text-xl text-[#002160] font-bold">
                    {job?.company_name}
                  </h1>
                  <p className="text-gray-600">{job?.location}</p>
                </div>
              </div>
              <hr className="my-4" />
              <h2 className="text-2xl text-[#002160] font-bold mb-2">
                {job?.job_title}
              </h2>
              <div className="flex justify-between text-[#002160] mb-4">
                <p>
                  <span className="font-bold">Location:</span> {job?.location}
                </p>
                <p>
                  <span className="font-bold">Type:</span> {job?.job_type}
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl text-[#002160] font-bold mb-2">
                  Job Overview:
                </h3>
                <p>{job?.job_Overview}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl text-[#002160] font-bold mb-2">
                  Key Responsibilities:
                </h3>
                <p>{job?.key_Responsibilities}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl text-[#002160] font-bold mb-2">
                  Qualifications:
                </h3>
                <p>{job?.qualifications}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#002160] mb-2">
                  Skills and Competencies:
                </h3>
                <ul className="list-disc list-inside">
                  {job?.skills_and_Competencies?.length > 0 ? (
                    job.skills_and_Competencies.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))
                  ) : (
                    <li>No key skill available.</li>
                  )}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#002160] mb-2">
                  Benefits and Perks:
                </h3>
                <ul className="list-disc list-inside">
                  {job?.benefits_and_Perks?.length > 0 ? (
                    job.benefits_and_Perks.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))
                  ) : (
                    <li>No benefits available.</li>
                  )}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#002160] mb-2">
                  Education and Experience:
                </h3>
                <ul className="list-disc list-inside">
                  {job?.education_and_Experience?.length > 0 ? (
                    job.education_and_Experience.map((education, index) => (
                      <li key={index}>{education}</li>
                    ))
                  ) : (
                    <li>No education details available.</li>
                  )}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold text-[#002160] mb-2">
                  Salary:
                </h2>
                <p>
                  Rs. {job?.salary_min} - {job?.salary_max} per month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Adminlayout>
  );
};

const JobView = () => {
  return (
    <Suspense>
      <JobViewData />
    </Suspense>
  );
};

export default JobView;
