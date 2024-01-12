"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavMenu from "./NavMenu";

const navLinks = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#experience",
    title: "Experience",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10  bg-[rgb(129,145,170)] bg-opacity-85 ">
      <div className="flex justify-between items-center p-5 ">
        <Link href={"/"} className="text-3xl">
          Caio
        </Link>
        <div className="mobile-menu block md:hidden">
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <Bars4Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu md:block hidden md:w-auto" id="navbar">
          <ul className="flex flex-row">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.href} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {isOpen ? <NavMenu links={navLinks} /> : null}
    </nav>
  );
};

export default Header;
