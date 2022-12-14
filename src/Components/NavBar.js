import { useState } from "react";
import ContactUs from "./ContactUs";
import About from "./about";

const NavBar = (props) => {
  console.log(props);
  const changePage = (page) => {
    props.setPage(page);
  };
  return (
    <>
      - <span onClick={() => changePage("about")}>{props.links[0].name}</span> -
      -{" "}
      <span onClick={() => changePage("contact us")}>
        {" "}
        {props.links[1].name}{" "}
      </span>
    </>
  );
};

export default NavBar;
