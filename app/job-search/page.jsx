//

"use client";

import { useContext, useEffect, useState } from "react";
import FilterComponent from "../component/common/filterComponent";
import JobSearchComponent from "../component/common/jobSearchComponent";
import datacontext from "../context/datacontext";

export default function Jobsearch() {
  const [jobs, setjobs] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    jobType: "",
    location: "",
    salary: "",
  });
  const { deepClone } = useContext(datacontext);

  const handleChange = ({ field, value }) => {
    setSelectedFilters((d) => {
      const temp = deepClone(d);
      temp[field] = value;
      return temp;
    });
  };

  useEffect(() => {
    fetch("https://670d0d07073307b4ee421ac5.mockapi.io/jobsearch")
      .then((response) => response.json())
      .then((data) => setjobs(data))

      .catch((error) => console.error("Error fetching jobs", error));
  }, []);

  console.log("jobs", jobs);

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
      // console.log(
      //   `Checking job_type: ${j.job_type}, Selected: ${selectedFilters.jobType}, Condition: ${jobTypeCondition}`
      // );
    }

    return salaryCondition && locationCondition && jobTypeCondition;
  });

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex">
          <FilterComponent handleChange={handleChange} />

          <div>
            {jobs.length > 0 ? (
              filteredData.map((job) => (
                <JobSearchComponent key={job.id} job={job} />
              ))
            ) : (
              <p>Loading jobs...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
