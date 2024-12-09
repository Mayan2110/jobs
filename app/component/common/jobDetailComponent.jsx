import { addJobsApplicationApi } from "@/app/Api";
import React, { useState } from "react";
import { toast } from "react-toastify";

const JobDetailComponent = ({ jobDetails }) => {
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    phone: " ",
  });

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    validateField(id, value);
  };

  const validateField = (id, value) => {
    switch (id) {
      case "name":
        setErrors({
          ...errors,
          name: value.trim() === "" ? "Name is required" : "",
        });
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors({
          ...errors,
          email: !emailRegex.test(value) ? "Invalid email format" : "",
        });
        break;
      case "phone":
        const phoneRegex = /^[0-9]{10}$/;
        setErrors({
          ...errors,
          phone: !phoneRegex.test(value)
            ? "Phone number must be 10 digits"
            : "",
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.name || errors.email || errors.phone) {
      alert("Please correct the errors in the form.");
      return;
    }

    const combinedData = {
      ...formData,
      job_id: jobDetails?.id || "1",
      job_title: jobDetails?.job_title || "Java script",
    };

    const res = await addJobsApplicationApi({ combinedData });

    if (res) {
      setJob(res);
      setLoading(false);
      toast.success("Application submitted successfully!");
    } else {
      console.error("Error fetching job details:", error);
      setLoading(false);
    }

  };
  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex items-start justify-start min-h-screen ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 mt-7">
        <h2 className="text-2xl font-semibold mb-4">
          Apply for {jobDetails?.job_title || "Java script"}
        </h2>{" "}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDetailComponent;

