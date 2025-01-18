import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed z-10 w-full bg-black bg-opacity-50">
      <div className="navbar flex items-center justify-between container m-auto">
        <div className="lg:navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="p-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="border rounded-sm mx-1 whitespace-nowrap">
                <NavLink>HOME</NavLink>
              </li>
              <li className="border rounded-sm mx-1 whitespace-nowrap">
                <NavLink>CONTACT US</NavLink>
              </li>
              <li className="border rounded-sm mx-1 whitespace-nowrap">
                <NavLink>DASHBOARD</NavLink>
              </li>
              <li className="border rounded-sm mx-1 whitespace-nowrap">
                <NavLink>OUR MENU</NavLink>
              </li>
              <li className="border rounded-sm mx-1 whitespace-nowrap">
                <NavLink>OUR SHOP</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="font-bold lg:text-xl text-white">
            BISTRO BOSS
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">
            <li className="text-white rounded-sm mx-1 whitespace-nowrap">
              <NavLink>HOME</NavLink>
            </li>
            <li className="text-white rounded-sm mx-1 whitespace-nowrap">
              <NavLink>CONTACT US</NavLink>
            </li>
            <li className="text-white rounded-sm mx-1 whitespace-nowrap">
              <NavLink>DASHBOARD</NavLink>
            </li>
            <li className="text-white rounded-sm mx-1 whitespace-nowrap">
              <NavLink>OUR MENU</NavLink>
            </li>
            <li className="text-white rounded-sm mx-1 whitespace-nowrap">
              <NavLink>OUR SHOP</NavLink>
            </li>
          </ul>
        </div>

        <div className="lg:navbar-end flex items-center space-x-3 justify-end">
          <p className="text-white">Login</p>

          <p className="text-white">
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
