import React from "react";
import Image from "next/image";
import Logo from "../public/assets/gol-logo.png";
import { BsFacebook } from "react-icons/bs";
import playStore from "../public/assets/play-store.png";
import Mobile from "../public/assets/mobile.png";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

export default function Footer() {
  return (
    <section
      className="mt-60"
      style={{ backgroundImage: `url('/assets/footer-image.png')` }}
    >
      <div className="max-w-screen-xl relative px-5  mx-auto pt-16 md:pt-52 pb-14">
        {/* Black box */}
        <div className="bg-black text-white flex justify-between items-center absolute -top-28 right-0 left-0 rounded-lg px-8 py-4 mx-5">
          <div>
            <h1 className="font-bold text-lg md:text-4xl">Download Our App</h1>
            <p className="my-4">The best travel in the world</p>
            <div className="w-28 md:w-48">
              <Image src={playStore} alt="playstore Image" sizes="100%"></Image>
            </div>
          </div>
          <div className="w-16 md:w-48">
            <Image src={Mobile} alt="mobile image" sizes="100%"></Image>
          </div>
        </div>
        {/* Footer content */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-white text-sm">
            <div>
              <Image src={Logo} alt="logo"></Image>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
                consequuntur.
              </p>
              <div className="flex space-x-1 mt-8">
                <span>
                  <a href="https://www.facebook.com/asumal.kushwah.5">
                    <BsFacebook size={28} />
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/asumal-kushwah/">
                    <AiFillTwitterCircle size={30} />
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/asumal-kushwah/">
                    <AiFillLinkedin size={30} />
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/asumal_singh/">
                    <AiFillInstagram size={30} />
                  </a>
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-md mb-3">Company</p>
              <p>Events</p>
              <p>Blogs</p>
              <p>FAQ</p>
              <p>Join Us</p>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-md mb-3">About</p>
              <p>Project</p>
              <p>Lorem</p>
              <p>Services</p>
              <p>Our Story</p>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-md mb-3">Contact Us</p>
              <p>ask@gmail.com</p>
              <p>India</p>
            </div>
          </div>

          <hr className="mt-8 border-white" />
          <div className="text-center text-white my-4">
            <p>
              Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
