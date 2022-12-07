//import {Navigate} from 'react-router-dom';
import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Launch from "./pages/Launch";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectConfirm from "./pages/projectConfirm";
import User from "./pages/User";
import ProjectJoin from "./pages/projectJoin";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Rank from "./pages/Rank";

const router = [
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/donate",
    element: <Donate></Donate>,
  },
  {
    path: "/launch",
    element: <Launch></Launch>,
  },
  {
    path: "/projectDetails",
    element: <ProjectDetails></ProjectDetails>,
  },
  {
    path: "/projectConfirm",
    element: <ProjectConfirm></ProjectConfirm>,
  },
  {
    path: "/user",
    element: <User></User>,
  },
  {
    path: "/projectJoin",
    element: <ProjectJoin></ProjectJoin>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/shop",
    element: <Shop></Shop>,
  },
  {
    path: "/rank",
    element: <Rank></Rank>,
  },
];

export default router;
