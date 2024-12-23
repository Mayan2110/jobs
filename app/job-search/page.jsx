"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import datacontext from "../context/datacontext";
import FilterComponent from "../component/common/filterComponent";
import JobSearchComponent from "../component/common/jobSearchComponent";

export default function Jobsearch() {
  const [jobs, setjobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    jobType: "",
    location: "",
    salary: "",
  });

  const { deepClone, adminEmail, isLogin } = useContext(datacontext);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/signin");
    }

    if (adminEmail === "mayanprajapati18@gmail.com") {
      router.push("/admin/jobs");
    }
  }, [isLogin, adminEmail, router]);

  const handleChange = ({ field, value }) => {
    setSelectedFilters((d) => {
      const temp = deepClone(d);
      temp[field] = value;
      return temp;
    });
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://670d0d07073307b4ee421ac5.mockapi.io/jobsearch"
        );
        const data = await response.json();
        setjobs(data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredData = jobs.filter((j) => {
    let salaryCondition = true;
    if (selectedFilters.salary) {
      salaryCondition = j.salary === selectedFilters.salary;
    }

    let locationCondition = true;
    if (selectedFilters.location) {
      locationCondition = j.location === selectedFilters.location;
    }

    let jobTypeCondition = true;
    if (selectedFilters.jobType) {
      jobTypeCondition = j.job_type === selectedFilters.jobType;
    }

    return salaryCondition && locationCondition && jobTypeCondition;
  });

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex">
          <FilterComponent handleChange={handleChange} />
          <div
            className={`${jobs.length > 0 ? "" : "flex items-center ml-[35%]"}`}
          >
            {jobs.length > 0 ? (
              filteredData.map((job) => (
                <JobSearchComponent key={job.id} job={job} />
              ))
            ) : (
              <p className="font-medium text-2xl text-center">
                Loading jobs...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
