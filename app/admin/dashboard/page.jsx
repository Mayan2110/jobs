"use client";
import Adminlayout from "@/app/component/common/adminLayout";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [Jobapplications, setJobapplications] = useState([]);
  const router = useRouter();

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        "https://670d0d07073307b4ee421ac5.mockapi.io/login/jobsearch"
      );
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("Failed to load job data.");
    }
  };

  const fetchJobapplication = async () => {
    try {
      const response = await fetch(
        "https://671a2686acf9aa94f6a95bd1.mockapi.io/Applyform"
      );
      const data = await response.json();
      setJobapplications(data);
    } catch (error) {
      console.error("Error fetching job applications:", error);
      toast.error("Failed to load job data.");
    }
  };

  useEffect(() => {
    fetchJobs();
    fetchJobapplication();
  }, []);

  return (
    <Adminlayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            onClick={() => router.push("/admin/jobs")}
            className="cursor-pointer flex items-center bg-white border-l-4 border-green-500 shadow-lg h-24 p-4 rounded-lg"
          >
            <div className="flex-grow">
              <div className="text-xs font-semibold text-green-500 uppercase mb-1">
                Jobs
              </div>
              <div className="text-lg font-bold text-gray-800">
                {jobs?.length ? jobs?.length : 0}
              </div>
            </div>
          </div>

          <div
            onClick={() => router.push("/admin/job-application")}
            className="cursor-pointer flex items-center bg-white border-l-4 border-yellow-500 shadow-lg h-24 p-4 rounded-lg"
          >
            <div className="flex-grow">
              <div className="text-xs font-semibold text-yellow-500 uppercase mb-1">
                Job-Applications
              </div>
              <div className="text-lg font-bold text-gray-800">
                {Jobapplications?.length ? Jobapplications?.length : 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Adminlayout>
  );
};

export default Dashboard;
