"use client";
import { useMemo } from "react";
import Datacontext from "./datacontext";
import Cookies from "js-cookie";

export const ContextProvider = ({ children }) => {
  const test = "test";
  const isLogin = Cookies.get("is_login");
  const adminEmail = Cookies.get("adminEmail");

  const deepClone = (obj) => {
    return JSON.parse(JSON?.stringify(obj));
  };

  const contextValue = useMemo(
    () => ({
      test,
      deepClone,
      isLogin,
      adminEmail,
    }),
    [test, deepClone]
  );

  return (
    <div>
      <Datacontext.Provider value={contextValue}>
        {children}
      </Datacontext.Provider>
    </div>
  );
};
