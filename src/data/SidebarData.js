import * as FaIcons from "react-icons/fa";
import Angular from "../pages/Angular";
import Css from "../pages/Css";
import Figma from "../pages/Figma";
import Git from "../pages/Git";
import Home from "../pages/Home";
import Java from "../pages/Java";
import Node from "../pages/Node";
import PageReact from "../pages/PageReact";
import Php from "../pages/Php";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    element: <Home />,
  },
  {
    title: "Git",
    path: "/git",
    element: <Git />,
    // icon: <FaIcons.FaGit />,
  },
  {
    title: "CSS",
    path: "/css",
    element: <Css />,
  },
  {
    title: "Php",
    path: "/php",
    element: <Php />,
  },
  {
    title: "Java",
    path: "/java",
    element: <Java />,
  },

  {
    title: "Node",
    path: "/node",
    element: <Node />,
  },
  {
    title: "Figma",
    path: "/figma",
    element: <Figma />,
  },
  {
    title: "Angular",
    path: "/angular",
    element: <Angular />,
  },
  {
    title: "React",
    path: "/react",
    element: <PageReact />,
  },
];
