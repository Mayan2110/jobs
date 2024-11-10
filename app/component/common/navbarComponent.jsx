import React, { useContext } from "react";
import datacontext from "../../context/datacontext";
import Cookies from "js-cookie";

const NavbarComponent = () => {
  const { isLogin } = useContext(datacontext);

  return (
    <div className="bg-white sticky top-9">
      <nav className="flex items-center justify-between p-4">
        <div className="text-orange-500 text-lg font-bold pl-48">
          TalentConnect
        </div>
        <div className="flex items-center space-x-4 pr-36">
          <a href="/job-search" className="text-blue-900  ">
            Jobs
          </a>
          {isLogin === "true" ? (
            <a
              href="/signin"
              onClick={() => {
                Cookies.set("is_login", false);
                Cookies.remove("adminEmail");
                setIsLogin(false);
              }}
              className="bg-blue-500 text-white px-4 py-2  rounded "
            >
              Sign Out
            </a>
          ) : (
            <a
              href="/signin"
              className="bg-blue-500 text-white px-4 py-2  rounded "
            >
              Sign in
            </a>
          )}
        </div>
      </nav>
    </div>
  );
};
export default NavbarComponent;
