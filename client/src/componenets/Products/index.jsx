import React, { useState, useEffect } from "react";
import Cards from "../Cards";
import { ShoppingCart } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/slices/productSlice";

const index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const { products, loading } = useSelector((state) => state.product);
  const { darkmode } = useSelector((state) => state.darkMode);
  const headStyle = {
    background: "linear-gradient(90deg, #7e22ce, #ff0c3e)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };

  return (
    <div
      style={{
        background: darkmode
          ? "linear-gradient(90deg, #0f172a, #334155)"
          : "linear-gradient(90deg, #94a3b8, #f1f5f9)",
      }}
    >
      <div className="lg:w-[70rem] lg:mx-auto mx-[2rem] py-[2rem] flex flex-col min-h-screen justify-center place-items-center">
        <h1
          style={headStyle}
          className="lg:text-7xl text-5xl text-start font-bold py-[2rem]"
        >
          Products.
        </h1>

        {!loading ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-[2rem] lg:gap-4 mt-[2rem]">
            {products.data?.map((obj, index) => {
              return (
                <Cards
                  key={index}
                  name={obj.name}
                  category={obj.category}
                  img={obj.img}
                  price={obj.price}
                  desc={obj.description}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center place-items-center min-h-screen">
            <CircularProgress color="secondary" />
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
