import React, { useContext, useEffect } from "react";
import datacontext from "../../context/datacontext";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavbarComponent = () => {
  const pathname = usePathname();
  const { isLogin, setIsLogin } = useContext(datacontext);

  return (
    <div className="bg-white sticky top-9">
      <nav className="flex items-center justify-between p-4">
        <div className="text-orange-500 text-lg font-bold pl-48">
          TalentConnect
        </div>
        <div className="flex items-center space-x-4 pr-36">
          {isLogin ? (
            <Link
              href="/signin"
              onClick={() => {
                Cookies.set("is_login", false);
                Cookies.remove("adminEmail");
                setIsLogin(false);
              }}
              className="bg-blue-500 text-white px-4 py-2  rounded "
            >
              Sign Out
            </Link>
          ) : (
            <Link
              href={pathname === "/signin" ? "/signup" : "/signin"}
              className="bg-blue-500 text-white px-4 py-2  rounded "
            >
              {pathname === "/signin" ? "Sign up" : "Signin"}
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};
export default NavbarComponent;
