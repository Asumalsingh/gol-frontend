import React, { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Logo from "../public/assets/gol-logo.png";
import Image from "next/image";
import userContext from "../context/userContext";

import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const links = ["packages", "about", "support"];

  const { user } = useContext(userContext);

  return (
    <nav className="flex max-w-screen-xl z-30 mx-auto bg-transparent justify-between items-center w-full h-24 ">
      <Link href="/" className="z-30 w-40" onClick={() => setNav(false)}>
        <Image src={Logo} alt="logo" sizes="100%"></Image>
      </Link>
      <div className="hidden lg:flex z-30">
        <ul className="lg:flex items-center ">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className={`mx-4 capitalize cursor-pointer  hover:text-primary-color duration-100`}
              >
                <Link href={`/${link}`}>{link}</Link>
              </li>
            );
          })}

          {user && user.isAdmin && (
            <li className="cursor-pointer hover:text-primary-color duration-100 mx-4">
              <Link href="admin">Admin</Link>
            </li>
          )}
        </ul>

        {user ? (
          <Link href="/profile">
            <FaUserCircle
              size={40}
              className="cursor-pointer text-primary-color"
            />
          </Link>
        ) : (
          <ul className="lg:flex items-center">
            <li className="capitalize mr-5 cursor-pointer text-primary-color">
              <Link href="/login">Login</Link>
            </li>

            <li className="capitalize cursor-pointer bg-primary-color text-white px-4 py-2 rounded-full">
              <Link href="/signUp">Sign Up</Link>
            </li>
          </ul>
        )}
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-30 text-gray-500 lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile navigarion */}
      {nav && (
        <div className="z-10 w-full absolute top-0 left-0 bg-slate-50 h-screen py-24">
          {user && (
            <div className="flex justify-center">
              <Link href="/profile" onClick={() => setNav(false)}>
                <FaUserCircle
                  size={40}
                  className="cursor-pointer text-primary-color"
                />
              </Link>
            </div>
          )}

          <ul className="z-10 flex lg:hidden flex-col items-center">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="py-3 px-4 capitalize cursor-pointer hover:text-primary-color hover:scale-105 duration-100 "
                >
                  <Link href={link} onClick={() => setNav(false)}>
                    {link}
                  </Link>
                </li>
              );
            })}
            {user && user.isAdmin && (
              <li className="cursor-pointer hover:text-primary-color duration-100 mx-4">
                <Link href="admin" onClick={() => setNav(false)}>
                  Admin
                </Link>
              </li>
            )}
          </ul>
          {user ? (
            <span></span>
          ) : (
            <div className="flex  justify-center text-center">
              <ul className="lg:flex items-center">
                <li className="capitalize cursor-pointer text-primary-color">
                  <Link href="/login" onClick={() => setNav(false)}>Login</Link>
                </li>
                <li className="capitalize cursor-pointer bg-primary-color text-white mt-3 px-4 py-2 rounded-full">
                  <Link href="/signUp" onClick={() => setNav(false)}>Sign Up</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
