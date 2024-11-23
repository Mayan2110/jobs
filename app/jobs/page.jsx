"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function JobManagementPage() {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    // Verify admin access
    const adminEmail = Cookies.get("adminEmail");
    if (adminEmail === "mayanprajapati18@gmail.com") {
      setHasAccess(true);
      fetchJobs();
    } else {
      toast.error("Access denied. Please log in as an admin.");
    }
  }, []);

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

  const deleteJob = async (id) => {
    try {
      const response = await fetch(
        `https://670d0d07073307b4ee421ac5.mockapi.io/login/jobsearch/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        toast.success("Job deleted successfully");

        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      } else {
        toast.error("Failed to delete job");
      }
    } catch (error) {
      console.error("Error deleting job:", error);
      toast.error("An error occurred while deleting the job.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      {hasAccess ? (
        <>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold mb-4">Admin Job Management</h1>

            <button
              onClick={() => router.push("/jobs/add")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add job
            </button>
          </div>
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Job Title</th>
                <th className="p-3">Company</th>
                <th className="p-3">Location</th>
                <th className="p-3">Salary</th>
                <th className="p-3">Job Type</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr
                  key={job.id}
                  className="border-b cursor-pointer"
                  onClick={() => router.push(`/jobs/view?id=${job.id}`)}
                >
                  <td className="p-3">{job.job_title}</td>
                  <td className="p-3">{job.company_name}</td>
                  <td className="p-3">{job.location}</td>
                  <td className="p-3">
                    {job.salary_min} - {job.salary_max}
                  </td>
                  <td className="p-3">{job.job_type}</td>
                  <td className="p-3 flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/jobs/${job.id}`);
                      }}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteJob(job.id);
                      }}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="text-red-600">Access denied. Admin login required.</p>
      )}
    </div>
  );
}
