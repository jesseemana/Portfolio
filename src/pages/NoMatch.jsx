import { useEffect } from "react";
import ErrorSVG from "../assets/404Page.svg";

export const NoMatch = () => {
  useEffect(() => {
    document.title = "Page Not Found";
  });

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <img
        src={ErrorSVG}
        alt="error 404 SVG"
        className="h-[300px] md:h-[500px] text-gray-500"
      />
      {/*  SVG downloaded from "https://storyset.com/web" */}
    </div>
  );
};
