import React, { useState, useEffect } from "react";

const JobDetailComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // resume: null,
  });

  const [job, setJob] = useState(null); // To store the job details
  const [loading, setLoading] = useState(true); // To handle loading state

  // Validation error messages
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Fetch a single job from API (assuming a specific job ID or endpoint)
    fetch("https://670d0d07073307b4ee421ac5.mockapi.io/jobsearch/1") // Assuming job ID is 1
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Job Data:", data); // Log the job data structure
        setJob(data); // Store the fetched job data
        setLoading(false); // Loading is complete
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
        setLoading(false); // Loading is complete, even if failed
      });
  }, []);

  // Input change handlers
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    validateField(id, value); // Validate each field on change
  };

  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, resume: e.target.files[0] });
  // };

  // Validation logic for fields

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
        const phoneRegex = /^[0-9]{10}$/; // Only digits, exactly 10 digits long
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

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before proceeding
    if (errors.name || errors.email || errors.phone) {
      alert("Please correct the errors in the form.");
      return;
    }

    // Create a single object that combines formData and job details
    const combinedData = {
      ...formData,
      job_id: job?.id,
      job_title: job?.job_title || job?.title, // Adjust based on the actual field
    };

    // Log the combined object to console
    console.log(" Data Submitted:", combinedData);

    // Process the combined data here, or send it to the backend
  };

  if (loading) return <p>Loading...</p>; // Display loading message while fetching job data

  return (
    <div className="flex items-start justify-start min-h-screen ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 mt-7">
        <h2 className="text-2xl font-semibold mb-4">
          Apply for {job?.job_title || job?.title}
        </h2>{" "}
        {/* Display job title */}
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

          {/* <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="resume">
              Upload Resume (optional)
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="file"
                id="resume"
                onChange={handleFileChange}
              />
            </div>
          </div> */}
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
