"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Adminlayout from "../../component/common/adminLayout";
import { toast } from "react-toastify";

export default function Page() {
  const [hasAccess, setHasAccess] = useState(false);
  const [Jobapplications, setJobapplications] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const adminEmail = Cookies.get("adminEmail");
    if (adminEmail === "mayanprajapati18@gmail.com") {
      setHasAccess(true);
      fetchJobapplication();
    } else {
      toast.error("Access denied. Please log in as an admin.");

      router.push("/job-search");
    }
  }, [router]);
  const fetchJobapplication = async () => {
    try {
      const response = await fetch(
        "https://671a2686acf9aa94f6a95bd1.mockapi.io/Applyform"
      );
      const data = await response.json();
      setJobapplications(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("Failed to load job data.");
    }
  };

  return (
    <Adminlayout>
      <div className="container mx-auto p-4">
        {hasAccess ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Job Application Data</h1>
              <button
                onClick={() => router.push("/admin/jobs")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Jobs
              </button>
            </div>
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="sticky top-0 bg-gray-100">
                  <tr className="text-left">
                    <th className="p-3">Email</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Job Title</th>
                    <th className="p-3">Phone</th>
                  </tr>
                </thead>
                <tbody
                  className="overflow-y-auto"
                  style={{
                    maxHeight: "calc(100vh - 200px)",
                    display: "block",
                  }}
                >
                  {Jobapplications.length > 0 ? (
                    Jobapplications.map((job) => (
                      <tr
                        key={job.id}
                        className="border-b hover:bg-gray-50 flex w-full"
                      >
                        <td className="p-3 flex-1">{job.email}</td>
                        <td className="p-3 flex-1">{job.name}</td>
                        <td className="p-3 flex-1">{job.job_title}</td>
                        <td className="p-3 flex-1">{job.phone}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="p-3 text-center text-gray-500">
                        No job applications found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="text-red-600">Access denied. Admin login required.</p>
        )}
      </div>
    </Adminlayout>
  );
}
