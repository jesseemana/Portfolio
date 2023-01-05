import React, { useEffect, useState } from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

export const Footer = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  });

  return (
    <footer className="text-gray-500 ">
      <div className="flex flex-col gap-y-2 text-sm md:text-[17px] text-center py-2">
        <p>Copyright &copy; all rights reserverd, {year}.</p>

        <div className="flex gap-x-5 justify-center">
          <div className="text-gray-500 flex gap-x-4 text-sm">
            <a
              href="https://twitter.com/jesseemana"
              target="_blank"
              className="icons"
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/jesse-emana-91604a236/"
              target="_blank"
              className="icons"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://www.instagram.com/jesse.emana"
              target="_blank"
              className="icons"
            >
              <BsInstagram />
            </a>
            <a
              href="https://github.com/jesseemana"
              target="_blank"
              className="icons"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <p>created with ❤️ by Jesse Emana.</p>
      </div>
    </footer>
  );
};
