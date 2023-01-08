import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";


export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-5 sticky z-[10] bg-[#0a192f] shadow-lg top-0 containers flex-wrap w-full border border-b-slate-600 border-l-0 border-t-0 border-r-0 shadow-[#0a192f]">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-300 uppercase">
          jesse
        </Link>

        <GiHamburgerMenu
          className="font-bold md:hidden cursor-pointer text-2xl text-gray-300"
          onClick={() => setOpen(!open)}
        />

        {/* MAIN NAV */}
        <nav
          id="main-menu"
          aria-label="large"
          className="hidden font-semibold capitalize md:flex md:items-center py-0 gap-x-4 flex-col md:flex-row w-full md:w-auto gap-y-2 mt-2 md:mt-0"
        >
          <Link to="/" href="/#hero" className="links">
            home
          </Link>
          <a href="/#about" className="links">
            about
          </a>
          <a href="/#services" className="links">
            services
          </a>
          <Link to="/projects" href="/#projects" className="links">
            projects
          </Link>
          <a href="#contact" className="links">
            contact
          </a>
        </nav>
      </div>

      {/* MOBILE NAV */}
      <nav
        id="mobile-menu"
        aria-label="mobile"
        onClick={() => setOpen(!open)}
        className={`${
          open ? "flex" : "hidden"
        } absolute items-center py-6 w-full flex-col max-w-full px-[8%] justify-center text-2xl gap-y-5 md:hidden left-0 top-0 bg-black origin-top animate-open-menu `}
      >
        <AiOutlineClose
          className="font-bold md:hidden self-end cursor-pointer text-2xl text-gray-300"
          onClick={() => setOpen(!open)}
        />

        <div className="flex flex-col min-h-screen items-center py-8">
          <Link to="/" className="link" onClick={() => setOpen(!open)}>
            home
          </Link>
          <a href="/#about" className="link" onClick={() => setOpen(!open)}>
            about
          </a>
          <a href="/#services" className="link" onClick={() => setOpen(!open)}>
            services
          </a>
          <Link to="/projects" className="link" onClick={() => setOpen(!open)}>
            projects
          </Link>
          <a href="/#contact" className="link" onClick={() => setOpen(!open)}>
            contact
          </a>
        </div>
      </nav>
    </header>
  );
};
