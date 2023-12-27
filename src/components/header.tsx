import { useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/merkle-logo.png";

import { Link } from "react-scroll";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-lg">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="flex items-centere ">
            <img src={image} className=" h-12" alt="" />
          </NavLink>
          <div className="flex items-center lg:order-2">
            <NavLink
              to="/login"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Login
            </NavLink>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="true"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  activeClass="activeHome"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b cursor-pointer  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
                  to="trending"
                  spy={true}
                  smooth={true}
                  offset={-90} // Sesuaikan dengan tinggi header Anda
                  duration={500}
                >
                  Service
                </Link>
              </li>

              <li>
                <Link
                  activeClass="activeHome"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b cursor-pointer   lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
                  to="movies"
                  spy={true}
                  smooth={true}
                  offset={-90} // Sesuaikan dengan tinggi header Anda
                  duration={500}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  activeClass="activeHome"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b cursor-pointer   lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
                  to="series"
                  spy={true}
                  smooth={true}
                  offset={-90} // Sesuaikan dengan tinggi header Anda
                  duration={500}
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
