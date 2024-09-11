import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-row justify-start bg-gray-800 z-50">
      <Sidebar />
      <div className="bg-[#0C1015] flex-1 p-4 text-white  ">
          {children}
      </div>
    </div>
  );
};

export default Layout;
