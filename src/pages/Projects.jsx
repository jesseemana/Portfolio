import React from "react";
import { useEffect } from "react";
import img from "../assets/maintanance.svg";

export const Projects = () => {
  useEffect(() => {
    document.title = "Projects";
  });

  return (
    <div className="max-w-full px-[8%] h-[100vh]">
      <h2 className="text-2xl py-5 uppercase text-gray-500 text-center border:b-gray-500">
        projects
      </h2>
      <p className="text-center text-[20px] md:text-xl capitalize text-gray-500  py-1 mb-5">
        below is some of my work
      </p>
      <div className="flex flex-col items-center justify-center gap-y-5 mt-[100px] md:mt-[200px] lg:mt-0">
        <img
          src={img}
          alt="page still under maintenance svg"
          className="h-[300px] md:h-[500px] text-gray-500"
        />
        <h2 className="text-[15px] md:text-2xl text-center uppercase text-gray-500">
          page under maintenance
        </h2>
      </div>
    </div>
  );
};
