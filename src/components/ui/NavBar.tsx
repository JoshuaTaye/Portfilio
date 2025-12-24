"use client"
import React from "react"
import {Dark, Light} from "../../../public/svgs";
type ChildProps = {
  toggleClass: () => void;
  dark : boolean;
};

const NavBar = ({toggleClass, dark} : ChildProps) => {

    return (
      <div className="absolute top-0 bottom-0 left-0 right-0">
      <div className="bg-transparent text-white m-10 flex justify-end">
        <button className="" onClick={() => {
          toggleClass();
        }}>
          {dark ? <Dark/> : <Light/>
          }
        </button>
      </div>
      </div>
        )
}

export default NavBar;