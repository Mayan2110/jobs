import React, { useContext } from "react";
import datacontext from "../../context/datacontext";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button, Popover } from "antd";
import User from "../icons/user";

const NavbarComponent = () => {
  const pathname = usePathname();
  const { isLogin, setIsLogin } = useContext(datacontext);
  const adminEmail = Cookies.get("adminEmail");

  const content = (
    <div>
      {isLogin ? (
        <>
          <Link href="/admin/change-password" className="block mb-2">
            Change Password
          </Link>
          <Link
            href="/signin"
            onClick={() => {
              Cookies.set("is_login", false);
              Cookies.remove("adminEmail");
              setIsLogin(false);
            }}
            className="block"
          >
            Log out
          </Link>
        </>
      ) : (
        <Link href={pathname === "/signin" ? "/signup" : "/signin"}>
          {pathname === "/signin" ? "Sign up" : "Sign in"}
        </Link>
      )}
    </div>
  );

  return (
    <div className={`bg-white sticky ${adminEmail ? "top-0" : "top-9"}`}>
      <nav className="flex items-center justify-between p-4">
        <Link href="/">
          <div className="text-orange-500 text-lg font-bold pl-48">
            TalentConnect
          </div>
        </Link>
        <div className="flex items-center space-x-4 pr-36 gap-2 ">
          {adminEmail ? (
            <>
              <>Admin</>
              <Popover content={content} trigger="click">
                <Button>
                  <User />
                </Button>
              </Popover>
            </>
          ) : (
            <>
              {isLogin ? (
                <>
                  <Link
                    href="/signin"
                    onClick={() => {
                      Cookies.set("is_login", false);
                      Cookies.remove("adminEmail");
                      setIsLogin(false);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Sign Out
                  </Link>
                </>
              ) : (
                <Link
                  href={pathname === "/signin" ? "/signup" : "/signin"}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {pathname === "/signin" ? "Sign up" : "Sign in"}
                </Link>
              )}
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
