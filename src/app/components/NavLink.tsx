import Link from "next/link";
import React, { HTMLProps, ReactNode } from "react";

interface IProps {
  href: string;
  title: string;
}

function NavLink({ href, title }: IProps): ReactNode {
  return (
    <Link href={href} className="mx-2">
      {title}
    </Link>
  );
}

export default NavLink;
