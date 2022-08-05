import React from "react";
import { Link } from "react-router-dom"
import icon from "../images/favicon.png"
import { useLocation } from "react-router-dom";
import AllWork from "./AllWork";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="fixed w-full z-10 border-b-[1px] border-b-gray-400">
      <nav className={`w-full flex flex-wrap items-center justify-between py-2 bg-white text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-md navbar navbar-expand-lg navbar-light`} >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between">
          <Link
            className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 ml-3 lg:ml-[5rem]" to="/">
            <img src={icon} style={{ "width": "40px" }} alt="comIcon" loading="lazy" /> <span className="lg:text-xl text-l font-bold ml-2"> MMI CONSULTANTS</span>
          </Link>
          <button
            className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </button>
          <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
            {/* <!-- Left links --> */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none ml-auto mr-40  font-sans text-[1.4rem]" >
              <li className="nav-item px-3 lg:border-x-2" style={{ "color": `${location.pathname === "/" ? "navy" : "black"}` }}>
                <Link
                  className={`nav-link p-0`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-3 lg:border-r-2" style={{ "color": `${location.pathname === "/about" ? "navy" : "black"}` }}>
                <Link
                  className="nav-link p-0"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item px-3 lg:border-r-2" id="dropdown" style={{ "color": `${location.pathname.slice(0,10) === "/services/" ? "navy" : "black"}` }}>
                <p>
                  Services  <i className="fa-solid fa-caret-down"></i>
                </p>
                <div className="absolute bg-gray-100 hidden w-auto text-[1rem] rounded border-[1px] border-gray-500" id="dropdownContent">
                  {AllWork.map(e => {
                    return (
                      <Link className={`hover:bg-slate-300 px-5 py-1 border-b-[1px]  border-gray-500 text-${location.pathname === "/services/"+e.key ?"indigo-800":"black"}`} to={`/services/${e.key}`}>{e.title.slice(2)}</Link>
                    )
                  })}
                </div>
              </li>
             
              {/* <li className="nav-item px-3 lg:border-r-2" style={{ "color": `${location.pathname === "/projects" ? "navy" : "black"}` }}>
                <Link
                  className="nav-link p-0"
                  to="/projects"
                >
                  Projects
                </Link>
              </li> */}
              <li className="nav-item px-3 lg:border-r-2" style={{ "color": `${location.pathname === "/contact" ? "navy" : "black"}` }}>
                <Link
                  className="nav-link p-0"
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
