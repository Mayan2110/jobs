import React from "react";

const FilterComponent = ({ handleChange }) => {
  return (
    <>
      <div className="w-1/4 p-4 bg-white rounded-lg shadow-md h-[600px]">
        <h2 className="text-xl font-semibold mb-4">Filter</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Job Type
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            name="JobType"
            onChange={(e) =>
              handleChange({ field: "jobType", value: e.target.value })
            }
          >
            <option value="">Select Job type</option>
            <option value="Full-time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Fresher">Fresher</option>
            <option value="Internships">Internships</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Location
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            name="Location"
            onChange={(e) =>
              handleChange({ field: "location", value: e.target.value })
            }
          >
            <option value="">Select Location</option>
            <option value="Ahmedabad">Aemadabad</option>
            <option value="Baroda">Baroda</option>
            <option value="Surat">Surat</option>
            <option value="Visnagar">Visnagar</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Salary
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            name="Salary"
            onChange={(e) =>
              handleChange({ field: "salary", value: e.target.value })
            }
          >
            <option value="">Select Range</option>
            <option value="10k-20k">10k - 20k</option>
            <option value="10k-40k">10k - 40k</option>
            <option value="12k-25k">12k - 25k</option>
            <option value="20k-40k">20k - 40k</option>
            <option value="30k-50k">30k - 50k</option>
            <option value="25k-50k">25k - 50k</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default FilterComponent;

