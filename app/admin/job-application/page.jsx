"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Adminlayout from "../../component/common/adminLayout";
import { toast } from "react-toastify";
import { Pagination } from "antd";
import { fetchJobsApplicationApi } from "@/app/Api";

export default function Page() {
  const [hasAccess, setHasAccess] = useState(false);
  const [Jobapplications, setJobapplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
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
    const res = await fetchJobsApplicationApi();
    if (res) {
      setJobapplications(res);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = Jobapplications.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Adminlayout>
      <div
        className="container mx-auto p-4 overflow-auto"
        style={{ maxHeight: "calc(100vh - 120px)" }}
      >
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
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3">Email</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Job Title</th>
                  <th className="p-3">Phone</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((job) => (
                    <tr key={job.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{job.email}</td>
                      <td className="p-3">{job.name}</td>
                      <td className="p-3">{job.job_title}</td>
                      <td className="p-3">{job.phone}</td>
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
            <div className="mt-4 flex justify-between items-center"></div>
            <div className="mt-2 flex justify-center">
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={Jobapplications.length}
                onChange={handlePageChange}
                showSizeChanger={false}
                className="ant-pagination"
              />
            </div>
          </>
        ) : (
          <p className="text-red-600">Access denied. Admin login required.</p>
        )}
      </div>
    </Adminlayout>
  );
}
