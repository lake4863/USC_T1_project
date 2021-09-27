import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home Page",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    // short for className
  },
  {
    title: "Movies List",
    path: "/moviesList",
    icon: <MdIcons.MdMovie />,
    cName: "nav-text",
  },
  {
    // title: "Movies List Of Liked",
    title: "Liked List",
    path: "/likedList",
    icon: <AiIcons.AiFillLike />,
    cName: "nav-text",
  },
  {
    // title: "Movies List Of Blocked",
    title: "Blocked List",
    path: "/blockedList",
    icon: <MdIcons.MdBlock />,
    cName: "nav-text",
  },
];
