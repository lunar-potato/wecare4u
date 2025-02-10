"use client";
import Link from "next/link";
import NavLink from "./navlink";
import MenuOverlay from "./overlaymenu";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/wecare4u.png";
import { ArrowDownLeft } from "lucide-react"; 
import { ArrowUpRight } from "lucide-react";

const NavLinks = [
  {
    title: "Gallery",
    path: "#gallery",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10">
      <div className="container flex flex-wrap items-center justify-between px-4 py-2 lg:py-4">
        <Link href={"/"} className="">
          <Image src={Logo} alt="logo" width={70} height={70} />
        </Link>
        <div className="block mobile-menu md:hidden">
            {!navbarOpen ? (
                <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 rounded"
                >
                <ArrowDownLeft
                className="w-5 h-5"
                ></ArrowDownLeft>
                </button>
            ) : (
                <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 rounded"
                >
                <ArrowUpRight
                className="w-5 h-5"
                ></ArrowUpRight>
                </button>
            )}
        </div>
        <div className="hidden menu md:block md:w-auto" id="navbar">
            <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
                {NavLinks.map((link,index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title}/>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={NavLinks}/> :null}
    </nav>
  );
};

export default Navbar;
