import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import { Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  enableDarkMode,
  enableLightMode,
} from "../../store/slices/DarkModeSlice.js";

const Index = () => {
  // State to manage dropdown visibility
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showOrdersDropdown, setShowOrdersDropdown] = useState(false);

  const { darkmode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  // Handlers to toggle the dropdowns
  const toggleProductDropdown = () => {
    setShowProductDropdown((prev) => !prev);
    setShowOrdersDropdown(false);
  };

  const toggleOrdersDropdown = () => {
    setShowOrdersDropdown((prev) => !prev);
    setShowProductDropdown(false);
  };

  return (
    <div className={`border ${darkmode?'bg-[#0b0d11]':'bg-white' } shadow-md`}>
      <div className="lg:w-[70rem] lg:mx-auto flex justify-between">
        <div className="flex py-[1rem] gap-x-[3rem]">
          <div className="flex gap-x-5">
            <img src={`/img/${darkmode?'wlogo.svg':'logo.svg'}`} width={50} alt="" />
            <img src={`/img/${darkmode?'wlogotxt.svg':'logotxt.svg'}`} width={130} alt="" />
          </div>
          <ul className="flex text-xl gap-x-[2rem] justify-center place-items-center">
            <li
              className="hover:bg-slate-200 p-2 rounded-lg cursor-pointer"
              onClick={toggleProductDropdown}
            >
              Product{" "}
              {showProductDropdown ? (
                <KeyboardArrowUpIcon fontSize="medium" />
              ) : (
                <KeyboardArrowDownIcon fontSize="medium" />
              )}
              {showProductDropdown && (
                <div className="absolute grid grid-cols-2 p-[1rem]  bg-slate-200 shadow-md mt-3 rounded-lg">
                  <ul className="border pe-3  border-slate-500 border-t-0 border-l-0 border-b-0">
                    <li className="p-2 hover:bg-slate-300 rounded-lg">
                      Subitem 1
                    </li>
                    <li className="p-2 hover:bg-slate-300 rounded-lg">
                      Subitem 2
                    </li>
                    <li className="p-2 hover:bg-slate-300 rounded-lg">
                      Subitem 2
                    </li>
                    <li className="p-2 hover:bg-slate-300 rounded-lg">
                      Subitem 2
                    </li>
                  </ul>

                  <ul className="ps-2">
                    <li className="p-2 hover:bg-slate-300 rounded-lg">
                      Subitem 1
                    </li>
                    <li className="p-2 hover:bg-slate-300 rounded-lg">
                      Subitem 2
                    </li>
                    <li className="p-2 hover:bg-slate-300 rounded-lg">
                      Subitem 2
                    </li>
                    <li className="p-2 hover:bg-slate-300 rounded-lg">
                      Subitem 2
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="hover:bg-slate-200 p-2 rounded-lg cursor-pointer"
              onClick={toggleOrdersDropdown}
            >
              Orders{" "}
              {showOrdersDropdown ? (
                <KeyboardArrowUpIcon fontSize="medium" />
              ) : (
                <KeyboardArrowDownIcon fontSize="medium" />
              )}
              {showOrdersDropdown && (
                <div className="absolute bg-slate-200 shadow-md mt-3 rounded-lg">
                  <ul>
                    <li className="p-2 hover:bg-slate-300">Order 1</li>
                    <li className="p-2 hover:bg-slate-300">Order 2</li>
                  </ul>
                </div>
              )}
            </li>
            <li className="hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
              Profile
            </li>
            <li className="hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
              Signup
            </li>
          </ul>
        </div>
        <div className="relative text-gray-700 flex justify-center place-items-center">
          <SearchIcon
            fontSize="large"
            className="absolute inset-y-9 left-0 flex items-center p-2"
          />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 p-3 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 focus:outline-none focus:ring focus:ring-slate-300"
          />
        </div>
        <div className="flex justify-center place-items-center bg-slate-200 p-2 my-[2rem] rounded-lg cursor-pointer">
          {darkmode ? (
            <div onClick={() => dispatch(enableLightMode())}>
              <LightModeIcon />
            </div>
          ) : (
            <div onClick={() => dispatch(enableDarkMode())}>
              <DarkModeIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
