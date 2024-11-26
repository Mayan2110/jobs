"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Adminlayout from "../../component/common/adminLayout";

export default function page() {
  const [hasAccess, setHasAccess] = useState(false);
  const [Jobapplications, setJobapplications] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Verify admin access
    const adminEmail = Cookies.get("adminEmail");
    if (adminEmail === "mayanprajapati18@gmail.com") {
      setHasAccess(true);
      fetchJobapplication();
    } else {
      toast.error("Access denied. Please log in as an admin.");
    }
  }, []);

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
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold mb-4">JOb Application Data</h1>
              <button
                onClick={() => router.push("/admin/jobs")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                jobs
              </button>
            </div>
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3">email</th>
                  <th className="p-3">name</th>
                  <th className="p-3">job title</th>
                  <th className="p-3">phone</th>
                </tr>
              </thead>
              <tbody>
                {Jobapplications.map((job) => (
                  <tr key={job.id} className="border-b">
                    <td className="p-3">{job.email}</td>
                    <td className="p-3">{job.name}</td>
                    <td className="p-3">{job.job_title}</td>
                    <td className="p-3">{job.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p className="text-red-600">Access denied. Admin login required.</p>
        )}
      </div>
    </Adminlayout>
  );
}
