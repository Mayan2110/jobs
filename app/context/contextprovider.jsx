"use client";
import { useMemo } from "react";
import Datacontext from "./datacontext";

export const ContextProvider = ({ children }) => {
  const test = "test";

  const deepClone = (obj) => {
    return JSON.parse(JSON?.stringify(obj));
  };

  const contextValue = useMemo(
    () => ({
      test,
      deepClone,
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
