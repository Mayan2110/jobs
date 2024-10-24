"use client";
import React from "react";
import RectangleImageComponent from "../../component/common/rectangleImageComponent";
import JobDetailComponent from "../../component/common/jobDetailComponent";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function Detail() {
  const router = useRouter();
  const params = useParams();
  console.log(params, "params");
  const id = params.id;
  console.log("id: ", id);
  // const { id } = router.query;
  // const id = 1;
  const [job, setJob] = useState(null);
  console.log("job: ", job);

  useEffect(() => {
    if (id) {
      fetch(`https://670d0d07073307b4ee421ac5.mockapi.io/login/jobsearch/${id}`)
        .then((response) => response.json())
        .then((data) => setJob(data))

        .catch((error) => console.error("Error fetching job details", error));
    }
  }, [id]);

  return (
    <div className="flex bg-gray-100 ">
      <div className="flex mx-auto">
        <div className=" p-6">
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
                <span className="font-bold">Location:</span>
                {job?.location}
              </p>
              <p>
                <span className="font-bold">Type:</span>
                {job?.job_type}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl text-[#002160] font-bold mb-2">
                Job Overview:
              </h3>
              <p>{job?.job_Overview}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#002160] mb-2">
                Key Responsibilities:
              </h3>
              <ul className="list-disc list-inside">
                {job?.key_Responsibilities?.length > 0 ? (
                  job.key_Responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))
                ) : (
                  <li>No key responsibilities available.</li>
                )}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#002160] mb-2">
                Qualifications:
              </h3>
              <ul className="list-disc list-inside">
                {/* {job?.qualificatios.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))} */}

                {job?.qualificatios?.length > 0 ? (
                  job.qualificatios.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))
                ) : (
                  <li>No key qualification available.</li>
                )}
              </ul>
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

                {/* {job?.skills_and_Competencies.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))} */}
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-[#002160] mb-3">
                Education and Experience:
              </h2>
              <p>{job?.education_and_Experience}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-[#002160] mb-2">Salary:</h2>
              <p>
                Rs. {job?.salary_min} - {job?.salary_max} per month
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#002160] mb-2">
                Benefits and Perks:
              </h2>

              {job?.benefits_and_Perks?.length > 0 ? (
                job.benefits_and_Perks.map((perk, index) => (
                  <li key={index}>{perk}</li>
                ))
              ) : (
                <li>No key perk available.</li>
              )}

              {/* {job?.benefits_and_Perks.map((perk, index) => (
                <li key={index}>{perk}</li>
              ))} */}
            </div>
          </div>
        </div>
        <JobDetailComponent />
      </div>
      {/* <div className="w-[30%]"></div> */}
    </div>
  );
}
