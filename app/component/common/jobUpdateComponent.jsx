"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import UiuxComponent from "./uiuxComponent";
import Idea from "../icons/idea";
import { toast } from "react-toastify";

const JobUpdateComponent = ({ id = "" }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    job_title: "",
    company_name: "",
    job_Overview: "",
    location: "",
    country: "India",
    job_type: "",
    salary_min: "",
    salary_max: "",
    education_and_Experience: [],
    key_Responsibilities: "",
    qualifications: "",
    skills_and_Competencies: [],
    salary: "",
    benefits_and_Perks: [],
  });
  const idAvailable = id && typeof id === "string" && id !== "";
  // console.log("formData: ", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSingleSelection = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelection = (name, value) => {
    setFormData((prevData) => {
      const isSelected = prevData[name].includes(value);
      return {
        ...prevData,
        [name]: isSelected
          ? prevData[name].filter((item) => item !== value)
          : [...prevData[name], value],
      };
    });
  };

  const handleSubmit = async () => {
    if (
      (!formData.job_Overview ||
        !formData.location ||
        !formData.country ||
        !formData.salary_min ||
        !formData.salary_max ||
        !formData.key_Responsibilities ||
        !formData.qualifications ||
        !formData.salary ||
        formData.skills_and_Competencies.length === 0,
      formData.benefits_and_Perks.length === 0,
      formData.education_and_Experience === 0)
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }

    try {
      let response;
      if (idAvailable) {
        response = await fetch(
          `https://670d0d07073307b4ee421ac5.mockapi.io/login/jobsearch/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
      } else {
        response = await fetch(
          `https://670d0d07073307b4ee421ac5.mockapi.io/login/jobsearch`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
      }

      if (response) {
        const result = await response.json();
        console.log("Job Data Submitted:", result);
        if (idAvailable) {
          toast.success("Job updated successfully!");
        } else {
          toast.success("Job posted successfully!");
        }
        router.push("/jobs");
      } else {
        toast.error("Failed to post job. Please try again.");
      }
    } catch (error) {
      console.error("Error posting job data:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://670d0d07073307b4ee421ac5.mockapi.io/login/jobsearch/${id}`
      );
      if (response) {
        const result = await response.json();
        // console.log("result: ", result);
        setFormData(result);
      } else {
        throw new Error("Failed to fetch job data.");
      }
    } catch (error) {
      console.error("Error fetching job data:", error);
      toast.error("Failed to fetch job data.");
    }
  };

  useEffect(() => {
    if (idAvailable) {
      fetchData();
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto mt-8">
        <div className="flex space-x-8 pt-10">
          <div className="bg-white p-8 rounded-lg shadow-lg h-full w-[817px] px-6">
            <h2 className="text-[25px] font-bold text-[#002160] mb-4">
              Describe The Job
            </h2>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-[#002160] mb-2 text-[16px]">
                  Job Title
                </label>
                <select
                  name="job_title"
                  value={formData.job_title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="">Select Job Title</option>
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                  <option value="react js">React js</option>
                  <option value="next js">Next js</option>
                  <option value="Javascript">Javascript</option>
                  <option value="uiux">Ui Ux</option>
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-[#002160] mb-2 text-[16px]">
                  Company Name *
                </label>
                <input
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  type="text"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[#002160] mb-2 text-[16px]">
                Job Details
              </label>
              <textarea
                name="job_Overview"
                value={formData.job_Overview}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                rows="5"
              ></textarea>
            </div>

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-[#002160] mb-2 text-[16px]">
                  Job City *
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="">Select City</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Surat">Surat</option>
                  <option value="Baroda">Baroda</option>
                  <option value="Visnagar">Visnagar</option>
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-[#002160] mb-2 text-[16px]">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded z-[1]"
                  disabled
                >
                  <option value="India">India</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[#002160] mb-2 text-[16px]">
                Key Responsibilities *
              </label>
              <textarea
                name="key_Responsibilities"
                value={formData.key_Responsibilities}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                rows="5"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-[#002160] mb-2 text-[16px]">
                Qualifications *
              </label>
              <textarea
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                rows="5"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-[#002160] mb-2 text-[16px]">
                Job Type{" "}
              </label>
              <div className="flex space-x-2">
                {[
                  "Full-time",
                  "Part-Time",
                  "Fresher",
                  "Internships",
                  "Volunteer",
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleSingleSelection("job_type", type)}
                    className={`border py-1 px-3 rounded-full ${
                      formData.job_type === type
                        ? "bg-blue-600 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    + {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[#002160] mb-2 text-[16px]">
                Skills and Competencies *
              </label>
              <div className="flex space-x-2 flex-wrap">
                {[
                  "Leadership",
                  "Communication",
                  "Problem-solving",
                  "Teamwork",
                  "Technical Skills",
                  "Adaptability",
                  "Project Management",
                ].map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() =>
                      handleSelection("skills_and_Competencies", skill)
                    }
                    className={`border py-1 px-3 mb-3 rounded-full ${
                      formData.skills_and_Competencies.includes(skill)
                        ? "bg-blue-600 text-white"
                        : "border-blue-350"
                    }`}
                  >
                    + {skill}
                  </button>
                ))}
              </div>
            </div>

            <h2 className="text-xl font-bold text-[#002160] mb-4 text-[25px]">
              Add Pay And Benefits
            </h2>
            <div className="flex space-x-4 mb-4">
              <div>
                <label className="block text-[#002160] mb-2 text-[16px]">
                  From (Salary Range)
                </label>
                <input
                  name="salary_min"
                  value={formData.salary_min}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded h-[53px] w-[230px]"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-[#002160] mb-2 text-[16px]">
                  To (Salary Range)
                </label>
                <input
                  name="salary_max"
                  value={formData.salary_max}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded h-[53px] w-[230px]"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-[#002160] mb-2 text-[16px]">
                  Salary
                </label>
                <input
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded h-[53px] w-[230px]"
                  type="text"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[#002160] mb-2 text-[16px]">
                Education
              </label>
              <div className="flex space-x-2 flex-wrap">
                {[
                  "Ph.D.",
                  "Master Degree",
                  "Graduation",
                  "Higher School",
                  "Certification Course",
                  "Diploma",
                  "Bachelor's degree",
                ].map((edu) => (
                  <button
                    key={edu}
                    type="button"
                    onClick={() =>
                      handleSelection("education_and_Experience", edu)
                    }
                    className={`border py-1 px-3 mb-3 rounded-full ${
                      formData.education_and_Experience.includes(edu)
                        ? "bg-blue-600 text-white"
                        : "border-blue-350"
                    }`}
                  >
                    + {edu}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[#002160] mb-2 text-[16px]">
                Benefits
              </label>
              <div className="flex space-x-2 flex-wrap">
                {[
                  "Health insurance",
                  "Provident Fund",
                  "Cell phone reimbursement",
                  "Paid sick time",
                  "Certification Course",
                  "Work from home",
                  "Paid time off",
                  "Food provided",
                ].map((ben) => (
                  <button
                    key={ben}
                    type="button"
                    onClick={() => handleSelection("benefits_and_Perks", ben)}
                    className={`border py-1 px-3 mb-3 rounded-full ${
                      formData.benefits_and_Perks.includes(ben)
                        ? "bg-blue-600 text-white"
                        : "border-blue-350"
                    }`}
                  >
                    + {ben}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between pt-2">
              <button
                onClick={() => router.back()} // Use router.back() for Back button
                className="text-blue-600 hover:underline"
              >
                Back
              </button>

              <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                {idAvailable ? "Update" : "Post"}
              </button>
            </div>
          </div>

          <div className="w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-4">
              <UiuxComponent />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Idea />
              <div className="mb-4 py-3">
                <p>
                  Clearly outlining the role's responsibilities and objectives
                  attracts suitable candidates with cross-industry applications,
                  ensuring a better fit for both parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobUpdateComponent;
