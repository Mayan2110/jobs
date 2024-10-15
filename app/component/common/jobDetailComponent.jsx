import React from "react";

const JobDetailComponent = () => {
  return (
    <div className="flex items-start justify-start min-h-screen ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 mt-7">
        <h2 className="text-2xl font-semibold mb-4">Apply</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              placeholder="Name"
            />
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
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-500"></span>
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
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="resume">
              Upload Resume
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="file"
                id="resume"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500">
                <i className="fas fa-upload"></i>
              </span>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDetailComponent;
