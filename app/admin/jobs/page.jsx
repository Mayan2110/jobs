"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Adminlayout from "../../component/common/adminLayout";
import { fetchJobsApi, JobsDeleteApiByid } from "@/app/Api";

export default function JobManagementPage() {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const adminEmail = Cookies.get("adminEmail");

    if (adminEmail === "mayanprajapati18@gmail.com") {
      setHasAccess(true);
      fetchJobs();
    } else {
      toast.error("Access denied. Please log in as an admin.");
      router.push("/job-search");
    }

    setLoading(false);
  }, [router]);

  const fetchJobs = async () => {
    try {
      const data = await fetchJobsApi();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("Failed to load job data.");
    }
  };

  const deleteJob = async (id) => {
    try {
      const res = await JobsDeleteApiByid({ id: id });

      if (res) {
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
    <Adminlayout>
      <div className="container mx-auto p-4">
        {loading ? (
          <p>Loading...</p>
        ) : hasAccess ? (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold mb-4">Admin Job Management</h1>
              <button
                onClick={() => router.push("/admin/jobs/add")}
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
                    onClick={() => router.push(`/admin/jobs/view?id=${job.id}`)}
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
                          router.push(`/admin/jobs/${job.id}`);
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
    </Adminlayout>
  );
}
