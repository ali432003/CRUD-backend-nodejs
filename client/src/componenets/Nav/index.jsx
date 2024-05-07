import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import {
  AccountCircle,
  ChevronRight,
  Menu,
  Person,
  VerifiedUser,
  WidthFull,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import { Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  enableDarkMode,
  enableLightMode,
} from "../../store/slices/DarkModeSlice.js";
import { useNavigate } from "react-router-dom";

const Index = ({ product }) => {
  const categories = Array.from(
    new Set(product.data?.map((obj) => obj.category))
  );

  const nav = useNavigate();

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
  const [show, setShow] = useState(window.innerWidth > 1152 ? true : false);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    const handleResize = () => {
      setShow(window.innerWidth > 1152 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [drop, setDrop] = useState(false);
  const [order, setDropOrder] = useState(false);

  const handleSignout = () => {
    localStorage.clear();
    setOpen(false);
    nav("/login");
  };

  return (
    <div
      className={`border ${darkmode ? "bg-[#0b0d11]" : "bg-white"} shadow-md`}
    >
      {show ? (
        <div className="lg:w-[70rem] lg:mx-auto flex justify-between">
          <div className="flex py-[1rem] gap-x-[3rem] ">
            <div
              className="flex gap-x-5 cursor-pointer"
              onClick={() => nav("/")}
            >
              <img
                src={`/img/${darkmode ? "wlogo.svg" : "logo.svg"}`}
                width={50}
                alt=""
              />
              {darkmode ? (
                <img
                  src="/img/logotxt.svg"
                  width={100}
                  className="filter invert brightness-0"
                  alt=""
                />
              ) : (
                <img src="/img/wlogotxt.svg" width={100} alt="" />
              )}
            </div>
            <ul className="flex text-xl gap-x-[2rem] justify-center place-items-center">
              <li
                className={`${
                  darkmode ? "hover:bg-slate-500" : "hover:bg-slate-200"
                } p-2 rounded-lg cursor-pointer ${
                  darkmode ? "text-slate-50" : "text-slate-700"
                }`}
                onMouseEnter={toggleProductDropdown}
                onClick={() => nav("/product")}
              >
                Product
                {showProductDropdown ? (
                  <KeyboardArrowUpIcon fontSize="medium" />
                ) : (
                  <KeyboardArrowDownIcon fontSize="medium" />
                )}
                {showProductDropdown && (
                  <div
                    className={`absolute grid grid-cols-2 p-[1rem]  ${
                      darkmode ? "bg-slate-500" : "bg-slate-200"
                    } shadow-md mt-3 rounded-lg z-10`}
                  >
                    <ul className="border pe-3  border-slate-500 border-t-0 border-l-0 border-b-0">
                      {categories.slice(0, 6).map((cat, index) => {
                        return (
                          <li
                            key={index}
                            className={`p-2 ${
                              darkmode
                                ? "hover:bg-slate-700"
                                : "hover:bg-slate-300"
                            } rounded-lg`}
                          >
                            {cat}
                          </li>
                        );
                      })}
                    </ul>

                    <ul className="ps-2">
                      {categories.slice(6, 11).map((cat, index) => {
                        return (
                          <li
                            key={index}
                            className={`p-2 ${
                              darkmode
                                ? "hover:bg-slate-700"
                                : "hover:bg-slate-300"
                            } rounded-lg`}
                          >
                            {cat}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
              {localStorage.getItem("uid") && (
                <li
                  className={`${
                    darkmode ? "hover:bg-slate-500" : "hover:bg-slate-200"
                  } p-2 rounded-lg cursor-pointer ${
                    darkmode ? "text-slate-50" : "text-slate-700"
                  }`}
                  onMouseEnter={toggleOrdersDropdown}
                  onClick={() => nav("/orders")}
                >
                  Orders{" "}
                  {showOrdersDropdown ? (
                    <KeyboardArrowUpIcon fontSize="medium" />
                  ) : (
                    <KeyboardArrowDownIcon fontSize="medium" />
                  )}
                  {showOrdersDropdown && (
                    <div
                      className={`absolute grid grid-cols-1 p-[1rem]  ${
                        darkmode ? "bg-slate-500" : "bg-slate-200"
                      } shadow-md mt-3 rounded-lg z-10`}
                    >
                      <ul>
                        <li
                          className={`p-2 ${
                            darkmode
                              ? "hover:bg-slate-700"
                              : "hover:bg-slate-300"
                          } rounded-lg`}
                        >
                          Order 1
                        </li>
                        <li
                          className={`p-2 ${
                            darkmode
                              ? "hover:bg-slate-700"
                              : "hover:bg-slate-300"
                          } rounded-lg`}
                        >
                          Order 2
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              )}
              {localStorage.getItem("uid") && (
                <li
                  className={`${
                    darkmode ? "hover:bg-slate-500" : "hover:bg-slate-200"
                  } p-2 rounded-lg cursor-pointer ${
                    darkmode ? "text-slate-50" : "text-slate-700"
                  }`}
                  onClick={() => nav("/profile")}
                >
                  Profile
                </li>
              )}
              {!localStorage.getItem("uid") ? (
                <li
                  className={`${
                    darkmode ? "hover:bg-slate-500" : "hover:bg-slate-200"
                  } p-2 rounded-lg cursor-pointer ${
                    darkmode ? "text-slate-50" : "text-slate-700"
                  }`}
                  onClick={() => nav("/signup")}
                >
                  Signup
                </li>
              ) : (
                <li
                  className={`${
                    darkmode ? "hover:bg-slate-500" : "hover:bg-slate-200"
                  } p-2 rounded-lg cursor-pointer ${
                    darkmode ? "text-slate-50" : "text-slate-700"
                  }`}
                  onClick={handleSignout}
                >
                  Signout
                </li>
              )}
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
      ) : (
        <div
          className={`border ${
            darkmode ? "bg-[#0b0d11]" : "bg-white"
          } shadow-md`}
        >
          <div className="mx-[2rem] flex justify-between">
            <div className="flex gap-x-2">
              <img
                src={`/img/${darkmode ? "wlogo.svg" : "logo.svg"}`}
                width={50}
                alt=""
              />
              {darkmode ? (
                <img
                  src="/img/logotxt.svg"
                  width={100}
                  className="filter invert brightness-0"
                  alt=""
                />
              ) : (
                <img src="/img/wlogotxt.svg" width={100} alt="" />
              )}
            </div>
            <div className="flex pt-3 gap-2">
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

              <div
                className="flex justify-center place-items-center bg-slate-200 p-2 my-[2rem] rounded-lg cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <Menu />
              </div>
              <Drawer
                anchor="right"
                size="lg"
                color={darkmode ? "neutral" : "primary"}
                variant="solid"
                open={open}
                onClose={() => setOpen(false)}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 0.5,
                    marginX: 2,
                    marginY: 2,
                  }}
                >
                  <div
                    onClick={() => {
                      nav("/");
                      setOpen(false);
                    }}
                  >
                    <img
                      src={`/img/${darkmode ? "wlogo.svg" : "logo.svg"}`}
                      width={50}
                      alt=""
                    />
                  </div>
                  <Typography
                    component="label"
                    color={`${darkmode ? "#fff" : "#0b0d11"}`}
                    htmlFor="close-icon"
                    fontSize={15}
                    sx={{ cursor: "pointer", display: "flex" }}
                  >
                    <p className="pt-2 font-bold">Close</p>
                    <ModalClose id="close-icon" sx={{ position: "inherit" }} />
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 4,
                    mx: 4,
                  }}
                >
                  <div className="flex justify-between w-full my-4">
                    <div
                      className="flex gap-2 pt-2 text-3xl font-bold"
                      onClick={() => {
                        nav("/product");
                        setOpen(false);
                      }}
                    >
                      <p>Products</p>
                    </div>
                    <div onClick={() => setDrop(!drop)}>
                      {drop ? (
                        <KeyboardArrowDownIcon />
                      ) : (
                        <ChevronRight fontSize="small" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`w-full shadow-inner ${drop ? "" : "hidden"}`}
                  >
                    <Divider />
                    <ul
                      className={`p-3 gap-y-3 flex flex-col text-slate-300 font-extrabold text-2xl`}
                    >
                      {categories.map((cat, index) => {
                        return (
                          <li key={index} className="hover:underline">
                            {cat}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="h-[0.2px] bg-slate-400 w-full"></div>
                  {localStorage.getItem("uid") && (
                    <div className="flex justify-between w-full my-4">
                      <div
                        className="flex gap-2 pt-2 text-3xl font-bold"
                        onClick={() => {
                          nav("/orders");
                          setOpen(false);
                        }}
                      >
                        <p>Orders</p>
                      </div>
                      <div onClick={() => setDropOrder(!order)}>
                        {order ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          <ChevronRight fontSize="small" />
                        )}
                      </div>
                    </div>
                  )}
                  <div
                    className={`w-full shadow-inner ${order ? "" : "hidden"}`}
                  >
                    <Divider />
                    <ul
                      className={`p-3 gap-y-3 flex flex-col text-slate-300 font-extrabold text-2xl`}
                    >
                      <li>Order 1</li>
                      <li>Order 2</li>
                      <li>Order 3</li>
                    </ul>
                  </div>

                  <div className="h-[0.2px] bg-slate-400 w-full"></div>
                  {localStorage.getItem("uid") && (
                    <div className="flex justify-between w-full my-4">
                      <div
                        className="flex gap-2 pt-2 text-3xl font-bold"
                        onClick={() => {
                          nav("/profile");
                          setOpen(false);
                        }}
                      >
                        <p>Profile</p>
                      </div>
                    </div>
                  )}

                  <div className="h-[0.2px] bg-slate-400 w-full"></div>
                  {!localStorage.getItem("uid") ? (
                    <div className="flex justify-between w-full my-4">
                      <div
                        className="flex gap-2 pt-2 text-3xl font-bold"
                        onClick={() => {
                          nav("/signup");
                          setOpen(false);
                        }}
                      >
                        <p>Signup</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between w-full my-4">
                      <div
                        className="flex gap-2 pt-2 text-3xl font-bold"
                        onClick={handleSignout}
                      >
                        <p>Signout</p>
                      </div>
                    </div>
                  )}
                </Box>
              </Drawer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
