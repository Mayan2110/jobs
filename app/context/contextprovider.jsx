"use client";
import { useEffect, useMemo, useState } from "react";
import Datacontext from "./datacontext";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";

export const ContextProvider = ({ children }) => {
  const test = "test";
  const [isLogin, setIsLogin] = useState(false);
  const [adminEmail, setAdminEmail] = useState(null);
  const [cookies, , removeCookie] = useCookies(["is_login"]);

  const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };

  useEffect(() => {
    const email = Cookies.get("adminEmail");

    setIsLogin(cookies?.is_login);
    if (email) {
      setAdminEmail(email);
    }
  }, [cookies?.is_login]);

  const contextValue = useMemo(
    () => ({
      test,
      deepClone,
      isLogin,
      adminEmail,
    }),
    [test, deepClone, isLogin, adminEmail]
  );

  return (
    <Datacontext.Provider value={contextValue}>{children}</Datacontext.Provider>
  );
};
