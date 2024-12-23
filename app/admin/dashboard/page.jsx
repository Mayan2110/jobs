"use client";
import Adminlayout from "@/app/component/common/adminLayout";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchJobsApi, fetchJobsApplicationApi } from "@/app/Api";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [Jobapplications, setJobapplications] = useState([]);
  const router = useRouter();

  const fetchJobapplication = async () => {
    const res = await fetchJobsApplicationApi();
    if (res) {
      setJobapplications(res);
    }
  };
  const fetchJobsData = async () => {
    const res = await fetchJobsApi();
    setJobs(res);
  };

  useEffect(() => {
    fetchJobsData();
    fetchJobapplication();
  }, []);

  return (
    <Adminlayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {!Jobapplications?.length && !jobs?.length && (
            <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
          )}
          {Jobapplications?.length > 0 && jobs?.length > 0 && (
            <>
              <div
                onClick={() => router.push("/admin/jobs")}
                className="cursor-pointer flex items-center bg-white border-l-4 border-green-500 shadow-lg h-28 p-6 rounded-lg"
              >
                <div className="flex-grow">
                  <div className="text-lg font-semibold text-green-500 uppercase mb-2">
                    Jobs
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    {jobs?.length ? jobs?.length : 0}
                  </div>
                </div>
              </div>
              <div
                onClick={() => router.push("/admin/job-application")}
                className="cursor-pointer flex items-center bg-white border-l-4 border-yellow-500 shadow-lg h-28 p-6 rounded-lg"
              >
                <div className="flex-grow">
                  <div className="text-lg font-semibold text-yellow-500 uppercase mb-2">
                    Job-Application
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    {Jobapplications?.length ? Jobapplications?.length : 0}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Adminlayout>
  );
};

export default Dashboard;
