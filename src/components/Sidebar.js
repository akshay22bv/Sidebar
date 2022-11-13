import React from "react";
import { SidebarData } from "../data/SidebarData";
import { NavLink } from "react-router-dom";
import "./sideBar.css";

const Sidebar = () => {
  // const activeLink =
  //   "hover:pl-7 w-full h-8 flex justify-start text-black space-x-1 font-bold";
  // const normalLink =
  //   "hover:pl-7 w-full h-8 flex justify-start text-gray space-x-1 font-bold";

  console.log("SidebarData", SidebarData);
  return (
    <React.Fragment>
      <div className="font-mono ">
        {SidebarData.map((item, index) => {
          return (
            <div key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "activeLink" : "normalLink"
                }
              >
                <span className="text-gray-700 hover:text-black subpixel-antialiased text-xl">
                  {item.title}
                </span>
              </NavLink>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
