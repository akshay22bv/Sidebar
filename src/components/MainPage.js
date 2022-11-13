import React from "react";
// import Navbar from "./Navbar";
import NavPage from "./NavPage";
import Sidebar from "./Sidebar";

const MainPage = () => {
  return (
    <React.Fragment>
      <div>{/* <Navbar /> */}</div>

      <div className="flex justify-around mt-10">
        <div className="w-1/5 h-screen bg-blue-200 border-gray-700 border-2">
          <Sidebar />
        </div>

        <div className="borderbg-cyan-500 shadow-lg w-1/2">
          <NavPage />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
