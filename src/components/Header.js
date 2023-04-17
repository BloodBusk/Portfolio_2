import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import Logo from "../imgs/logo_01.png";
import Github from "../imgs/github_icon.png";
import LinkedIn from "../imgs/linkedin_icon.png";
import Hamburger from "../imgs/hamburger.png";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((show) => !show);
  };

  return (
    <header className=" py-8 shadow-md sticky top-0 bg-white z-50">
      <div className="flex justify-center items-center w-[1200px] m-auto max-lg:w-4/5 max-lg:justify-evenly">
        <div className="w-1/3 text-center max-lg:flex max-lg:flex-col">
          <div className="hidden w-full max-lg:block" onClick={handleShow}>
            <img src={Hamburger} alt="menuIcon" className="w-1/3" />
          </div>
          <HashLink
            smooth
            to="#hero"
            className="p-4 hover:underline decoration-gray-900 decoration-4 max-lg:hidden Inter-Med"
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="#mywork"
            className="p-4 hover:underline decoration-gray-900 decoration-4 max-lg:hidden Inter-Med"
          >
            Work
          </HashLink>
          <HashLink
            smooth
            to="#about"
            className="p-4 hover:underline decoration-gray-900 decoration-4 max-lg:hidden Inter-Med"
          >
            About
          </HashLink>
        </div>
        <div className="flex justify-center w-1/3">
          <img src={Logo} alt="logo" className="w-1/6 max-lg:w-1/3" />
        </div>
        <div className="flex w-1/3 justify-center">
          <Link
            to="https://github.com/BloodBusk"
            target="_blanc"
            rel="norefferer"
            className="w-12 mx-4 max-lg:w-1/3 max-lg:mx-2"
          >
            <img src={Github} alt="github" className="" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/thomas-hyllegaard-busk-683a651ba/?originalSubdomain=dk"
            target="_blanc"
            rel="norefferer"
            className="w-12 mx-4 max-lg:w-1/3 max-lg:mx-2"
          >
            <img src={LinkedIn} alt="linkedin" className="" />
          </Link>
        </div>
      </div>
      {show ? (
        <div className="w-full flex flex-col items-center mt-4 border-t">
          <HashLink
            smooth
            to="#hero"
            className="p-4 hover:underline decoration-gray-900 decoration-4 Inter-Med"
            onClick={() => setShow(false)}
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="#mywork"
            className="p-4 hover:underline decoration-gray-900 decoration-4 Inter-Med"
            onClick={() => setShow(false)}
          >
            Work
          </HashLink>
          <HashLink
            smooth
            to="#about"
            className="p-4 hover:underline decoration-gray-900 decoration-4 Inter-Med"
            onClick={() => setShow(false)}
          >
            About
          </HashLink>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
