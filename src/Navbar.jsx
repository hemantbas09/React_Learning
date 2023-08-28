import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/custom-hook"
              style={({ isActive }) => {
                return {
                  color: isActive ? "green" : "",
                };
              }}
            >
              Custom Hook
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/button"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              Button
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/checkout"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              Checkout
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/context"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              Context
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/memo"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              Memo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reducer"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              Reducer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/use-callback"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              UseCallback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/use-effect"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              UseEffect
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/use-state"
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
            >
              UseState
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
