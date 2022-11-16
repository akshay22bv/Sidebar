import React from "react";
import { Routes, Route } from "react-router-dom";

import { SidebarData } from "../data/SidebarData";

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          {SidebarData.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
