"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import React from "react";

const NavBarLink = ({ item }: any) => {
  const pathName = usePathname();
  const searchParams = useParams();
  console.log(searchParams);
  return (
    <Link
      href={item.href}
      className={`
    my-1 text-gray-800 md:mx-4 md:my-0 px-2 py-1 rounded-md hover:text-white hover:bg-blue-500 ${
      pathName === item.href ? "text-white bg-blue-500" : ""
    }`}
    >
      {item.title}
    </Link>
  );
};

export default NavBarLink;
