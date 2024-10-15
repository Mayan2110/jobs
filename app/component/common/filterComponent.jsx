import React from "react";

const FilterComponent = () => {
  return (
    <>
      <div className="w-1/4 p-4 bg-white rounded-lg shadow-md h-[600px]">
        <h2 className="text-xl font-semibold mb-4">Filter</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Job Type
          </label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Full Time</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Location
          </label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Location</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Salary
          </label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Select Range</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default FilterComponent;
