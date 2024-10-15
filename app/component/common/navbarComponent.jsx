import React from "react";

const NavbarComponent = () => {
  return (
    <div class="bg-white sticky top-9">
      <nav class="flex items-center justify-between p-4">
        <div class="text-orange-500 text-lg font-bold pl-48">TalentConnect</div>
        <div class="flex items-center space-x-4 pr-36">
          <a href="#" class="text-blue-900  ">
            Jobs
          </a>
          <a href="#" class="bg-blue-500 text-white px-4 py-2  rounded ">
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
};
export default NavbarComponent;
