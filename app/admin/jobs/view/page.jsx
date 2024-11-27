"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation"; // Import useRouter
import RectangleImageComponent from "../../../component/common/rectangleImageComponent";
import Adminlayout from "../../../component/common/adminLayout";
import { Suspense } from "react";

const JobViewData = () => {
  const params = useSearchParams();
  const router = useRouter(); // Initialize useRouter

  const id = params.get("id") ?? "";

  const [job, setJob] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`https://670d0d07073307b4ee421ac5.mockapi.io/login/jobsearch/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setJob(data);
          fetchRelatedJobs(data.location, data.job_type);
        })
        .catch((error) => console.error("Error fetching job details", error));
    }
  }, [id]);

  const fetchRelatedJobs = (location, jobType) => {
    fetch(`https://670d0d07073307b4ee421ac5.mockapi.io/jobsearch`)
      .then((response) => response.json())
      .then((data) => {
        const filteredJobs = data.filter(
          (j) =>
            (j.location === location || j.job_type === jobType) && j.id !== id
        );

        setRelatedJobs(filteredJobs);
      })
      .catch((error) => console.error("Error fetching related jobs", error));
  };

  if (!job) return <span>Loading...</span>;

  return (
    <Adminlayout>
      <div className="mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.back()} // Use router.back() for navigation
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
  <Suspense>
    return <JobViewData />;
  </Suspense>;
};

export default JobView;
