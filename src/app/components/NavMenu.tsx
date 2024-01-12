import Link from "next/link";
import React from "react";
import { Offcanvas } from "react-bootstrap";
import NavLink from "./NavLink";

interface IProps {
  links: { href: string; title: string }[];
}

function NavMenu({ links }: IProps) {
  return (
    <div className="flex flex-row-reverse pr-10 py-10">
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <NavLink href={link.href} title={link.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavMenu;
