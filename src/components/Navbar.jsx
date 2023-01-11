import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";


export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
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
          className="main-nav"
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
        } mobile-nav`}
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
