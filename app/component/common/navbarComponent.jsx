import React from "react";

const NavbarComponent = () => {
  return (
    <div className="bg-white sticky top-9">
      <nav className="flex items-center justify-between p-4">
        <div className="text-orange-500 text-lg font-bold pl-48">
          TalentConnect
        </div>
        <div className="flex items-center space-x-4 pr-36">
          <a href="/job-search" class="text-blue-900  ">
            Jobs
          </a>
          <a href="/signup" class="bg-blue-500 text-white px-4 py-2  rounded ">
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
};
export default NavbarComponent;
